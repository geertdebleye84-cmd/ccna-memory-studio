'use strict';

const { resolveProvider } = require('./providers');

class WebProviderBridge {
  constructor({ BrowserWindow, clipboard, shell, getParentWindow }) {
    this.BrowserWindow = BrowserWindow;
    this.clipboard = clipboard;
    this.shell = shell;
    this.getParentWindow = getParentWindow;
    this.window = null;
    this.provider = null;
  }

  state() {
    return { open: Boolean(this.window && !this.window.isDestroyed()), provider: this.provider };
  }

  async open(payload = {}) {
    const provider = resolveProvider(payload.provider || 'chatgpt', payload.customUrl);
    if (this.window && !this.window.isDestroyed()) {
      this.provider = provider;
      await this.window.loadURL(provider.url);
      this.window.show(); this.window.focus();
      return this.state();
    }
    const parent = this.getParentWindow?.();
    this.window = new this.BrowserWindow({
      width: 1180,
      height: 820,
      minWidth: 760,
      minHeight: 560,
      parent: parent && !parent.isDestroyed?.() ? parent : undefined,
      title: `CCNA AI Bridge — ${provider.label}`,
      autoHideMenuBar: true,
      backgroundColor: '#111111',
      webPreferences: {
        partition: 'persist:ccna-ai-web-provider',
        contextIsolation: true,
        nodeIntegration: false,
        sandbox: true,
        spellcheck: true
      }
    });
    this.provider = provider;
    this.window.webContents.setWindowOpenHandler(({ url }) => {
      if (/^https:\/\//i.test(url)) this.shell?.openExternal(url).catch(() => {});
      return { action: 'deny' };
    });
    this.window.on('closed', () => { this.window = null; this.provider = null; });
    await this.window.loadURL(provider.url);
    this.window.show(); this.window.focus();
    return this.state();
  }

  async sendPrompt(payload = {}) {
    if (!this.window || this.window.isDestroyed()) throw new Error('Open an AI web provider first.');
    const prompt = String(payload.prompt || '').trim();
    if (!prompt) throw new Error('An AI prompt is required.');
    if (prompt.length > 500000) throw new Error('The AI prompt exceeds 500,000 characters.');
    const script = `(() => {
      const prompt = ${JSON.stringify(prompt)};
      const selectors = ['#prompt-textarea', 'textarea[placeholder]', 'textarea', '[contenteditable="true"][role="textbox"]', '[contenteditable="true"]'];
      const input = selectors.map((selector) => document.querySelector(selector)).find((element) => element && element.offsetParent !== null);
      if (!input) return { inserted: false, submitted: false, reason: 'No visible prompt field was found.' };
      input.focus();
      if ('value' in input) {
        const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set;
        if (setter) setter.call(input, prompt); else input.value = prompt;
      } else {
        input.textContent = prompt;
      }
      input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: prompt }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      const buttons = [...document.querySelectorAll('button')];
      const send = document.querySelector('[data-testid="send-button"]') || buttons.find((button) => /send|verstuur|submit/i.test(button.getAttribute('aria-label') || button.title || ''));
      if (send && !send.disabled) { send.click(); return { inserted: true, submitted: true }; }
      return { inserted: true, submitted: false, reason: 'Prompt inserted; press the provider Send button.' };
    })()`;
    try {
      const result = await this.window.webContents.executeJavaScript(script, true);
      if (!result?.inserted) this.clipboard?.writeText(prompt);
      this.window.show(); this.window.focus();
      return { ...result, clipboardFallback: !result?.inserted };
    } catch (error) {
      this.clipboard?.writeText(prompt);
      this.window.show(); this.window.focus();
      return { inserted: false, submitted: false, clipboardFallback: true, reason: String(error.message || error) };
    }
  }

  async captureResponse() {
    if (!this.window || this.window.isDestroyed()) throw new Error('Open an AI web provider first.');
    const result = await this.window.webContents.executeJavaScript(`(() => {
      const selectors = [
        '[data-message-author-role="assistant"]',
        '[data-testid^="conversation-turn"] .font-claude-message',
        '.font-claude-message',
        'article [class*="markdown"]',
        '[class*="assistant"] [class*="message"]'
      ];
      for (const selector of selectors) {
        const elements = [...document.querySelectorAll(selector)].filter((element) => element.innerText?.trim());
        if (elements.length) return { text: elements[elements.length - 1].innerText.trim(), selector };
      }
      return { text: '', selector: null };
    })()`, true);
    const text = String(result?.text || '').slice(0, 1000000);
    return { text, selector: result?.selector || null, captured: Boolean(text) };
  }

  close() {
    if (this.window && !this.window.isDestroyed()) this.window.close();
    this.window = null; this.provider = null;
    return this.state();
  }
}

module.exports = { WebProviderBridge };
