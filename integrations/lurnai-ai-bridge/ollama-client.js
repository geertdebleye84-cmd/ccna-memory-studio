'use strict';

class OllamaClient {
  constructor(options = {}) {
    this.baseUrl = this.#normaliseBaseUrl(options.baseUrl || process.env.LURNAI_OLLAMA_BASE || process.env.OLLAMA_BASE || 'http://127.0.0.1:11434');
    this.timeoutMs = Math.max(1000, Math.min(300000, Number(options.timeoutMs) || 120000));
  }

  #normaliseBaseUrl(rawUrl) {
    let url;
    try { url = new URL(String(rawUrl)); } catch { throw new Error('Invalid Ollama base URL.'); }
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Ollama must use HTTP or HTTPS.');
    if (url.username || url.password) throw new Error('Ollama URLs may not contain credentials.');
    return url.toString().replace(/\/$/, '');
  }

  async #request(pathname, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await fetch(`${this.baseUrl}${pathname}`, {
        ...options,
        headers: { Accept: 'application/json', ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...(options.headers || {}) },
        signal: controller.signal
      });
      const text = await response.text();
      if (text.length > 8 * 1024 * 1024) throw new Error('Ollama response exceeded the 8 MB safety limit.');
      if (!response.ok) throw new Error(`Ollama returned HTTP ${response.status}.`);
      return text ? JSON.parse(text) : {};
    } finally { clearTimeout(timer); }
  }

  async status() {
    try {
      const payload = await this.#request('/api/tags');
      return { available: true, baseUrl: this.baseUrl, models: (payload.models || []).map((model) => model.name).filter(Boolean) };
    } catch (error) {
      return { available: false, baseUrl: this.baseUrl, models: [], error: error.name === 'AbortError' ? 'Ollama timed out.' : String(error.message || error) };
    }
  }

  async generate(payload = {}) {
    const prompt = String(payload.prompt || '').trim();
    const model = String(payload.model || '').trim();
    const system = String(payload.system || '').trim();
    if (!prompt) throw new Error('An AI prompt is required.');
    if (prompt.length > 500000) throw new Error('The AI prompt exceeds 500,000 characters.');
    if (!model || model.length > 200) throw new Error('Select a valid Ollama model.');
    const result = await this.#request('/api/generate', {
      method: 'POST',
      body: JSON.stringify({ model, prompt, system: system.slice(0, 20000), stream: false, options: payload.options && typeof payload.options === 'object' ? payload.options : undefined })
    });
    return { provider: 'ollama', model, text: String(result.response || ''), done: Boolean(result.done), metrics: { totalDuration: result.total_duration, evalCount: result.eval_count } };
  }
}

module.exports = { OllamaClient };
