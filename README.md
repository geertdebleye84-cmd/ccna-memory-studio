# SiriusBitz — CCNA Memory Studio Focused v3

Developed by **SiriusBitz**, with **Geert Marie-Rose De Bleye** as copyright
holder, and released under the GNU General Public License v3.0. This is an
independent learning tool for networking students, contributors and teachers.

A reliable, offline-first Electron study workspace with two main modes only: **Learn** and **Test**.

## The two modes

- **Learn**: select one or more chapters and a bundle, see one English key statement, reveal its topic, then mark it **I know this** or **Keep practising**. No multiple-choice is shown here.
- **Test**: choose a question count and chapters, then answer multiple-choice questions. Correct answers reduce frequency; incorrect answers return to the practice queue.

## Voice

The voice control is explicit: Start, Pause/Resume and Stop. Continuous playback reads the question, waits for the chosen Question → Answer pause, reads the answer, waits for the Card → Card pause, and moves on.

The app can use a locally installed Piper neural voice. The v3 setup installs the free Dutch Belgian `nl_BE-nathalie-medium` model (MIT) and retains system TTS as a fallback if that model or engine is unavailable. Model files are local under `runtime/piper`.

## Optional AI bridge

The collapsible **AI communication bridge** panel supports a local Ollama
installation or a visible ChatGPT, Claude, or custom HTTPS browser session.
Ollama explanations and captured web answers can be added to the current card's
local note. The main study and test workflows do not require AI.

The clean bridge implementation lives in `integrations/lurnai-ai-bridge`. It
does not contain LurnAI activation, licensing, anti-tamper, secrets, or native
security code.

## Source boundary

The local catalogue contains concept statements and topic labels. This app does not include reproduced or copied Pearson/Cisco exam-question wording and is not an official practice exam.

## Run from source

Requires Node.js and npm on Windows.

```powershell
npm install
npm run check
npm test
npm start
```

## Build Windows installers

```powershell
npm run dist
```

This creates an NSIS installer and a portable Windows executable under `dist/`.
The binaries are published as GitHub Release assets rather than committed to
the source tree.

See [CONTRIBUTING.md](CONTRIBUTING.md), [CHANGELOG.md](CHANGELOG.md), and the
[roadmap](docs/continuity/ROADMAP.md). The project is not affiliated with or
endorsed by Cisco or NetAcad.
