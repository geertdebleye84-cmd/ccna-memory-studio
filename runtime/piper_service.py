"""Minimal persistent local Piper service for CCNA Memory Studio.

It deliberately avoids Flask and Piper's alignment work: the Electron app only
needs a WAV response, so the neural voice stays loaded and each request has the
lowest practical local overhead.
"""
import argparse
import io
import json
import wave
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from piper import PiperVoice, SynthesisConfig


def make_wav(voice, text, length_scale):
    config = SynthesisConfig(length_scale=length_scale)
    with io.BytesIO() as stream:
        with wave.open(stream, "wb") as wav:
            configured = False
            for chunk in voice.synthesize(text, config):
                if not configured:
                    wav.setframerate(chunk.sample_rate)
                    wav.setsampwidth(chunk.sample_width)
                    wav.setnchannels(chunk.sample_channels)
                    configured = True
                wav.writeframes(chunk.audio_int16_bytes)
        return stream.getvalue()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, required=True)
    parser.add_argument("--model", required=True)
    args = parser.parse_args()
    voice = PiperVoice.load(args.model)

    class Handler(BaseHTTPRequestHandler):
        def log_message(self, _format, *_args):
            return

        def do_POST(self):
            if self.path != "/synthesize":
                self.send_error(404)
                return
            try:
                size = int(self.headers.get("Content-Length", "0"))
                payload = json.loads(self.rfile.read(size).decode("utf-8"))
                text = str(payload.get("text", "")).strip()
                if not text:
                    raise ValueError("Text is required")
                scale = max(0.45, min(1.2, float(payload.get("length_scale", 0.72))))
                audio = make_wav(voice, text, scale)
                self.send_response(200)
                self.send_header("Content-Type", "audio/wav")
                self.send_header("Content-Length", str(len(audio)))
                self.end_headers()
                self.wfile.write(audio)
            except Exception as error:
                body = str(error).encode("utf-8")
                self.send_response(500)
                self.send_header("Content-Type", "text/plain")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)

    ThreadingHTTPServer((args.host, args.port), Handler).serve_forever()


if __name__ == "__main__":
    main()
