const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { spawn } = require('child_process');
const http = require('http');

const root = __dirname;
const legacyUserData = path.join(app.getPath('appData'), 'CCNA Memory Studio Focused v3');
// Keep the study application's caches and progress off C:. The workspace lives
// on M:, while older progress remains readable as a one-way fallback.
app.setPath('userData', path.join(root, 'user-data'));
app.setPath('temp', path.join(root, 'user-data', 'temp'));
const singleInstance = app.requestSingleInstanceLock();
if (!singleInstance) app.exit(0);
let windowRef;
const dataFile = () => path.join(app.getPath('userData'), 'progress.json');
const legacyDataFile = path.join(legacyUserData, 'progress.json');
const outputDir = path.join(root, 'runtime', 'tts-output');
const piperExe = path.join(root, 'runtime', 'piper', 'Scripts', 'piper.exe');
const nlModel = path.join(root, 'runtime', 'piper', 'voices', 'nl_BE-nathalie-medium.onnx');
const enModel = path.join(root, 'runtime', 'piper', 'voices-en', 'en_US-lessac-medium.onnx');
const pythonExe = path.join(root, 'runtime', 'piper', 'Scripts', 'python.exe');
const piperService = path.join(root, 'runtime', 'piper_service.py');
const piperServers = new Map();
const providedVolumeOneFilename = '1. CCNA 200-301 Official Cert Guide, Volume 1 .pdf';
const bundledVolumeOne = path.join(root, 'references', 'CCNA-200-301-Official-Cert-Guide-Volume-1.pdf');
const defaultStore = () => ({ notes: {}, progress: {}, history: [], settings: {}, translations: {} });
function readStore(file) { try { return { ...defaultStore(), ...JSON.parse(fs.readFileSync(file, 'utf8')) }; } catch { return null; } }
function loadStore() { return readStore(dataFile()) || readStore(legacyDataFile) || defaultStore(); }
function saveStore(store) { fs.mkdirSync(path.dirname(dataFile()), { recursive: true }); fs.writeFileSync(dataFile(), JSON.stringify(store, null, 2), 'utf8'); }
function ttsStatus() {
  return { piper: fs.existsSync(piperExe), dutch: fs.existsSync(nlModel), english: fs.existsSync(enModel) };
}
function request(url, payload) {
  return new Promise((resolve, reject) => {
    const body = Buffer.from(JSON.stringify(payload));
    const req = http.request(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': body.length } }, (res) => {
      const chunks = []; res.on('data', (chunk) => chunks.push(chunk)); res.on('end', () => res.statusCode === 200 ? resolve(Buffer.concat(chunks)) : reject(new Error(`Piper server returned ${res.statusCode}.`)));
    });
    req.on('error', reject); req.end(body);
  });
}
async function getPiperServer(language) {
  const isDutch = String(language || '').toLowerCase().startsWith('nl');
  const key = isDutch ? 'nl' : 'en', port = 54000 + ((process.pid % 800) * 2) + (isDutch ? 1 : 0), model = isDutch ? nlModel : enModel;
  if (!fs.existsSync(pythonExe) || !fs.existsSync(model) || !fs.existsSync(piperService)) throw new Error(`The local Piper ${isDutch ? 'Dutch' : 'English'} voice is not installed.`);
  const existing = piperServers.get(key); if (existing) return existing;
  const child = spawn(pythonExe, [piperService, '--host', '127.0.0.1', '--port', String(port), '--model', model], { windowsHide: true, stdio: ['ignore', 'ignore', 'ignore'] });
  const server = { child, url: `http://127.0.0.1:${port}/synthesize` }; piperServers.set(key, server);
  child.on('exit', () => { if (piperServers.get(key) === server) piperServers.delete(key); });
  const deadline = Date.now() + 25000;
  while (Date.now() < deadline) {
    try { await request(server.url, { text: 'ready' }); return server; } catch { await new Promise((resolve) => setTimeout(resolve, 200)); }
  }
  throw new Error('The Piper voice server did not start.');
}
async function synthesize({ text, language, speed }) {
  const server = await getPiperServer(language);
  const rate = Math.max(0.8, Math.min(1.6, Number(speed) || 1.15));
  const audio = await request(server.url, { text: String(text || '').slice(0, 1800), length_scale: 0.72 / rate });
  fs.mkdirSync(outputDir, { recursive: true });
  const output = path.join(outputDir, `${Date.now()}-${Math.random().toString(16).slice(2)}.wav`);
  fs.writeFileSync(output, audio); return pathToFileURL(output).toString();
}
app.whenReady().then(() => {
  if (!singleInstance) return;
  windowRef = new BrowserWindow({ width: 1540, height: 980, minWidth: 1180, minHeight: 720, backgroundColor: '#0a0a0a', title: 'CCNA Memory Studio — Focused', webPreferences: { preload: path.join(root, 'preload.js'), contextIsolation: true, sandbox: false } });
  windowRef.on('page-title-updated', (event) => { event.preventDefault(); windowRef.setTitle('CCNA Memory Studio — Electron'); });
  windowRef.loadFile('index.html');
  windowRef.webContents.once('did-finish-load', () => {
    windowRef.setTitle('CCNA Memory Studio — Electron');
    windowRef.show(); windowRef.focus();
    // Warm the default neural voice while the learner chooses a set. This keeps
    // the first Play click responsive without using any remote voice service.
    getPiperServer('en-US').catch(() => {});
  });
  ipcMain.handle('catalog:load', () => fs.readFileSync(path.join(root, 'data', 'concept-checkpoints-v2.jsonl'), 'utf8').trim().split(/\r?\n/).map(JSON.parse));
  ipcMain.handle('jeremy:load', () => JSON.parse(fs.readFileSync(path.join(root, 'data', 'jeremy-videos.json'), 'utf8')));
  ipcMain.handle('reference:chapters', () => JSON.parse(fs.readFileSync(path.join(root, 'data', 'ocg-volume1-chapters.json'), 'utf8')));
  ipcMain.handle('store:load', () => loadStore());
  ipcMain.handle('store:save', (_, store) => { saveStore(store); return true; });
  ipcMain.handle('session:export', async (_, store) => { const result = await dialog.showSaveDialog(windowRef, { defaultPath: 'ccna-memory-session.json', filters: [{ name: 'JSON session', extensions: ['json'] }] }); if (result.canceled || !result.filePath) return { canceled: true }; fs.writeFileSync(result.filePath, JSON.stringify(store, null, 2), 'utf8'); return { canceled: false, filePath: result.filePath }; });
  ipcMain.handle('session:import', async () => { const result = await dialog.showOpenDialog(windowRef, { properties: ['openFile'], filters: [{ name: 'JSON session', extensions: ['json'] }] }); if (result.canceled || !result.filePaths[0]) return { canceled: true }; return { canceled: false, store: JSON.parse(fs.readFileSync(result.filePaths[0], 'utf8')), filePath: result.filePaths[0] }; });
  ipcMain.handle('reference:choose', async () => {
    const result = await dialog.showOpenDialog(windowRef, { properties: ['openFile'], filters: [{ name: 'PDF reference', extensions: ['pdf'] }] });
    if (result.canceled || !result.filePaths[0]) return { canceled: true };
    const filePath = result.filePaths[0];
    return { canceled: false, filePath, url: pathToFileURL(filePath).toString() };
  });
  ipcMain.handle('reference:provided-volume-one', () => {
    const downloadCopy = path.join(app.getPath('downloads'), providedVolumeOneFilename);
    const filePath = fs.existsSync(bundledVolumeOne) ? bundledVolumeOne : downloadCopy;
    if (!fs.existsSync(filePath)) return { canceled: true, reason: 'The supplied Volume 1 PDF was not found in this project or Downloads.' };
    return { canceled: false, filePath, url: pathToFileURL(filePath).toString() };
  });
  ipcMain.handle('link:open', async (_, rawUrl) => {
    try {
      const url = new URL(String(rawUrl));
      if (url.protocol !== 'https:' || !/(^|\.)youtube\.com$/.test(url.hostname)) throw new Error('Unsupported link');
      await shell.openExternal(url.toString()); return true;
    } catch { return false; }
  });
  ipcMain.handle('tts:status', () => ttsStatus());
  ipcMain.handle('tts:synthesize', (_, payload) => synthesize(payload));
});
app.on('second-instance', () => {
  if (!windowRef) return;
  if (windowRef.isMinimized()) windowRef.restore();
  windowRef.show(); windowRef.focus();
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('before-quit', () => { for (const { child } of piperServers.values()) child.kill(); });
