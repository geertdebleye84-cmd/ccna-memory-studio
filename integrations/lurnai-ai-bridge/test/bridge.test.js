'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { EventEmitter } = require('node:events');
const { extractJson } = require('../json-extractor');
const { buildCoursePrompt } = require('../course-prompt');
const { resolveProvider } = require('../providers');
const { OllamaClient } = require('../ollama-client');
const { WebProviderBridge } = require('../web-provider');

test('extracts fenced JSON without surrounding prose', () => {
  const result = extractJson('Here is the course:\n```json\n{"chapters":[{"title":"IP"}]}\n```');
  assert.equal(result.value.chapters[0].title, 'IP');
});

test('extracts balanced JSON containing braces inside strings', () => {
  const result = extractJson('prefix {"answer":"Use { and } literally","ok":true} suffix');
  assert.deepEqual(result.value, { answer: 'Use { and } literally', ok: true });
});

test('rejects responses without valid JSON', () => {
  assert.throws(() => extractJson('plain prose only'), /No valid JSON/);
});

test('builds a strict source-aware course prompt', () => {
  const prompt = buildCoursePrompt({ courseTitle: 'Routing', language: 'English', sourceText: 'A router selects a best path.' });
  assert.match(prompt, /Return strict JSON only/);
  assert.match(prompt, /sourceExcerpt/);
  assert.match(prompt, /A router selects a best path/);
});

test('requires HTTPS for a custom web provider', () => {
  assert.throws(() => resolveProvider('custom', 'http://example.com'), /HTTPS/);
  assert.equal(resolveProvider('custom', 'https://example.com/chat').url, 'https://example.com/chat');
});

test('discovers models and generates through an Ollama-compatible endpoint', async (context) => {
  const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    if (request.url === '/api/tags') return response.end(JSON.stringify({ models: [{ name: 'study-model:latest' }] }));
    if (request.url === '/api/generate') return response.end(JSON.stringify({ response: 'A routed path explanation.', done: true, eval_count: 12 }));
    response.statusCode = 404; return response.end('{}');
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  context.after(() => new Promise((resolve) => server.close(resolve)));
  const client = new OllamaClient({ baseUrl: `http://127.0.0.1:${server.address().port}`, timeoutMs: 3000 });
  const status = await client.status();
  assert.deepEqual(status.models, ['study-model:latest']);
  const result = await client.generate({ model: status.models[0], prompt: 'Explain routing.' });
  assert.equal(result.text, 'A routed path explanation.');
  assert.equal(result.done, true);
});

test('opens a visible persistent provider session and relays prompt/capture calls', async () => {
  class FakeWebContents {
    setWindowOpenHandler(handler) { this.openHandler = handler; }
    async executeJavaScript(script) {
      return script.includes('data-message-author-role')
        ? { text: 'Captured explanation', selector: '[assistant]' }
        : { inserted: true, submitted: true };
    }
  }
  class FakeWindow extends EventEmitter {
    constructor(options) { super(); this.options = options; this.webContents = new FakeWebContents(); this.destroyed = false; FakeWindow.last = this; }
    async loadURL(url) { this.url = url; }
    isDestroyed() { return this.destroyed; }
    show() {}
    focus() {}
    close() { this.destroyed = true; this.emit('closed'); }
  }
  const bridge = new WebProviderBridge({ BrowserWindow: FakeWindow, clipboard: { writeText() {} }, shell: { openExternal: async () => {} }, getParentWindow: () => null });
  await bridge.open({ provider: 'chatgpt' });
  assert.equal(FakeWindow.last.options.webPreferences.partition, 'persist:ccna-ai-web-provider');
  assert.equal(FakeWindow.last.url, 'https://chatgpt.com/');
  assert.equal((await bridge.sendPrompt({ prompt: 'Explain VLANs.' })).submitted, true);
  assert.equal((await bridge.captureResponse()).text, 'Captured explanation');
  assert.equal(bridge.close().open, false);
});
