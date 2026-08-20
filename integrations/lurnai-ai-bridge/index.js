'use strict';

const { OllamaClient } = require('./ollama-client');
const { WebProviderBridge } = require('./web-provider');
const { buildCoursePrompt } = require('./course-prompt');
const { extractJson } = require('./json-extractor');
const { PROVIDERS } = require('./providers');

function createAiBridge(options) {
  const ollama = new OllamaClient({ baseUrl: options.ollamaBaseUrl });
  const web = new WebProviderBridge(options);
  return {
    async status() { return { recoveredContract: 'LurnAI Chat Web Provider + Ollama proxy', ollama: await ollama.status(), web: web.state(), providers: Object.values(PROVIDERS) }; },
    generate: (payload) => ollama.generate(payload),
    buildCoursePrompt,
    extractJson: (text) => extractJson(String(text || '').slice(0, 2000000)),
    openWebProvider: (payload) => web.open(payload),
    sendWebPrompt: (payload) => web.sendPrompt(payload),
    captureWebResponse: () => web.captureResponse(),
    closeWebProvider: () => web.close(),
    dispose: () => web.close()
  };
}

function registerAiBridgeIpc({ ipcMain, ...options }) {
  const bridge = createAiBridge(options);
  const handlers = {
    'ai:status': () => bridge.status(),
    'ai:ollama-generate': (_, payload) => bridge.generate(payload),
    'ai:course-prompt': (_, payload) => bridge.buildCoursePrompt(payload),
    'ai:extract-json': (_, text) => bridge.extractJson(text),
    'ai:web-open': (_, payload) => bridge.openWebProvider(payload),
    'ai:web-send': (_, payload) => bridge.sendWebPrompt(payload),
    'ai:web-capture': () => bridge.captureWebResponse(),
    'ai:web-close': () => bridge.closeWebProvider()
  };
  for (const [channel, handler] of Object.entries(handlers)) ipcMain.handle(channel, handler);
  return bridge;
}

module.exports = { createAiBridge, registerAiBridgeIpc, buildCoursePrompt, extractJson };
