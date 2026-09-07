const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const executablePath = process.env.CCNA_SMOKE_CHROME || chromium.executablePath();
  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage({ viewport: { width: 1500, height: 980 } });
  await page.addInitScript(() => {
    window.studio = {
      loadCatalog: async () => [], loadJeremyVideos: async () => ({ videos: [] }),
      loadReferenceChapters: async () => ({ chapters: [] }), load: async () => ({}),
      save: async () => true, useProvidedVolumeOne: async () => ({ canceled: true }),
      chooseReference: async () => ({ canceled: true }), ttsStatus: async () => ({}),
      synthesize: async () => '', openLink: async () => true,
      exportSession: async () => ({ canceled: true }), importSession: async () => ({ canceled: true }),
      ai: {
        status: async () => ({ ollama: { available: false, models: [] } }),
        openWebProvider: async () => ({}), closeWebProvider: async () => ({}),
        sendWebPrompt: async () => ({}), captureWebResponse: async () => ({}),
        generateWithOllama: async () => ({ text: '' })
      }
    };
  });
  const projectRoot = path.resolve(__dirname, '..');
  await page.goto(pathToFileURL(path.join(projectRoot, 'index.html')).href);
  await page.locator('[data-mode="course"]').click();
  await page.locator('#course-catalog').selectOption('ccna3-ensa');
  assert.equal(await page.locator('.course-module-link').count(), 14);
  assert.match(await page.locator('.course-header h1').innerText(), /CCNA3/);
  assert.equal(await page.locator('.course-module-link .mastery-lamp.is-red').count(), 14);
  await page.locator('[data-open-qa-library]').click();
  assert.match(await page.locator('.qa-library .course-header').innerText(), /GECATALOGISEERDE LEERLIBRARY/);
  assert.equal(await page.locator('[data-qa-module]').count(), 14);
  assert.match(await page.locator('[data-qa-type="knowledge"]').innerText(), /3/);
  assert.match(await page.locator('[data-qa-type="diagnosis"]').innerText(), /2/);
  await page.locator('[data-qa-test-diagnosis]').click();
  assert.equal(await page.locator('[data-course-answer]').count(), 4);
  assert.ok((await page.locator('.course-quiz h2').innerText()).length >= 40);
  await page.locator('[data-course-close-quiz]').click();
  await page.locator('[data-qa-type="flashcard"]').click();
  await page.locator('[data-qa-start-flashcards]').click();
  const front = await page.locator('.course-flash-card h2').innerText();
  await page.locator('[data-flash-reveal]').click();
  const back = await page.locator('.course-flash-card h2').innerText();
  assert.notEqual(front, back);
  assert.equal(await page.locator('.course-flash-card.is-revealed').count(), 1);
  if (process.env.CCNA_SMOKE_SCREENSHOT) await page.screenshot({ path: process.env.CCNA_SMOKE_SCREENSHOT, fullPage: true });
  console.log(JSON.stringify({ courses:3, ccna3Modules:14, initialLamps:'red', diagnosisChoices:4, flashcardFlip:true }));
  await browser.close();
})().catch((error) => { console.error(error); process.exitCode = 1; });
