const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const projectRoot = path.resolve(__dirname, '..');
  const pdfRoot = path.join(projectRoot, 'user-data', 'diagram-library');
  const previewRoot = path.join(pdfRoot, 'previews');
  const pdfs = fs.existsSync(pdfRoot) ? fs.readdirSync(pdfRoot).filter((name) => name.toLowerCase().endsWith('.pdf')).map((name) => {
    const base = path.parse(name).name;
    const pageUrls = fs.existsSync(previewRoot) ? fs.readdirSync(previewRoot).filter((preview) => preview.startsWith(`${base}-`) && preview.endsWith('.png')).sort().map((preview) => pathToFileURL(path.join(previewRoot, preview)).href) : [];
    return { name, url: pathToFileURL(path.join(pdfRoot, name)).href, pageUrls };
  }) : [];
  const executablePath = process.env.CCNA_SMOKE_CHROME || chromium.executablePath();
  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage({ viewport: { width: 1500, height: 980 } });
  await page.addInitScript((diagramPdfs) => {
    window.studio = {
      loadCatalog: async () => [], loadJeremyVideos: async () => ({ videos: [] }), loadReferenceChapters: async () => ({ chapters: [] }),
      loadDiagramPdfs: async () => diagramPdfs, importDiagramPdfs: async () => ({ canceled: true }), load: async () => ({}), save: async () => true,
      useProvidedVolumeOne: async () => ({ canceled: true }), chooseReference: async () => ({ canceled: true }), ttsStatus: async () => ({}), synthesize: async () => '', openLink: async () => true,
      exportSession: async () => ({ canceled: true }), importSession: async () => ({ canceled: true }),
      ai: { status: async () => ({ ollama: { available: false, models: [] } }), openWebProvider: async () => ({}), closeWebProvider: async () => ({}), sendWebPrompt: async () => ({}), captureWebResponse: async () => ({}), generateWithOllama: async () => ({ text: '' }) }
    };
  }, pdfs);
  await page.goto(pathToFileURL(path.join(projectRoot, 'index.html')).href);
  await page.locator('[data-mode="diagram"]').click();
  assert.equal(await page.locator('[data-diagram-id]').count(), 15);
  assert.match(await page.locator('.diagram-header h1').innerText(), /Diagram Trainer/);
  assert.equal(await page.locator('.diagram-nav-item .mastery-lamp.is-red').count(), 15);
  assert.equal(await page.locator('.diagram-recall').count(), 1);
  if (process.env.CCNA_SMOKE_TRAINER_SCREENSHOT) { await page.waitForTimeout(800); await page.screenshot({ path: process.env.CCNA_SMOKE_TRAINER_SCREENSHOT, fullPage: true }); }
  await page.locator('[data-diagram-reveal]').click();
  assert.ok((await page.locator('.diagram-recall-answer strong').innerText()).length > 2);
  await page.locator('[data-diagram-view="tester"]').click();
  await page.locator('[data-diagram-start="current"]').click();
  assert.equal(await page.locator('[data-diagram-answer]').count(), 4);
  await page.locator('[data-diagram-answer]').first().click();
  assert.equal(await page.locator('.diagram-test-feedback').count(), 1);
  if (process.env.CCNA_SMOKE_SCREENSHOT) await page.screenshot({ path: process.env.CCNA_SMOKE_SCREENSHOT, fullPage: true });
  console.log(JSON.stringify({ diagrams: 15, localPdfs: pdfs.length, initialLamps: 'red', trainerReveal: true, testerChoices: 4 }));
  await browser.close();
})().catch((error) => { console.error(error); process.exitCode = 1; });
