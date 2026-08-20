'use strict';

const PROVIDERS = Object.freeze({
  chatgpt: Object.freeze({ id: 'chatgpt', label: 'ChatGPT', url: 'https://chatgpt.com/' }),
  claude: Object.freeze({ id: 'claude', label: 'Claude', url: 'https://claude.ai/new' }),
  custom: Object.freeze({ id: 'custom', label: 'Custom HTTPS chat', url: null })
});

function resolveProvider(id, customUrl) {
  const provider = PROVIDERS[String(id || '').toLowerCase()];
  if (!provider) throw new Error('Unsupported AI web provider.');
  const rawUrl = provider.id === 'custom' ? String(customUrl || '').trim() : provider.url;
  let url;
  try { url = new URL(rawUrl); } catch { throw new Error('The AI provider URL is invalid.'); }
  if (url.protocol !== 'https:') throw new Error('AI web providers must use HTTPS.');
  if (url.username || url.password) throw new Error('Provider URLs may not contain credentials.');
  return { ...provider, url: url.toString() };
}

module.exports = { PROVIDERS, resolveProvider };
