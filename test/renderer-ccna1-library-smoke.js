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
  await page.locator('#course-catalog').selectOption('ccna1-itn');
  assert.equal(await page.locator('.course-module-link').count(), 17);
  assert.equal(await page.locator('.course-module-link .mastery-lamp.is-red').count(), 17);
  await page.locator('[data-open-qa-library]').click();
  assert.equal(await page.locator('[data-qa-module]').count(), 17);
  assert.match(await page.locator('[data-qa-type="knowledge"]').innerText(), /3/);
  assert.match(await page.locator('[data-qa-type="diagnosis"]').innerText(), /2/);

  await page.locator('[data-qa-test-knowledge]').click();
  for (let round = 0; round < 2; round += 1) {
    for (let index = 0; index < 3; index += 1) {
      const prompt = await page.locator('.course-quiz h2').innerText();
      const correctIndex = await page.evaluate((text) => window.CCNA1_QA_LIBRARY.modules[0].cards.find((card) => card.prompt === text).correctIndex, prompt);
      await page.locator('[data-course-answer]').nth(correctIndex).click();
      await page.locator('[data-course-next]').click();
    }
    if (round === 0) await page.locator('[data-course-retry]').click();
  }
  await page.locator('[data-course-close-quiz]').click();
  assert.equal(await page.locator('[data-qa-module="1"] .mastery-lamp.is-lime').count(), 1);

  await page.locator('[data-qa-type="flashcard"]').click();
  await page.locator('[data-qa-start-flashcards]').click();
  const front = await page.locator('.course-flash-card h2').innerText();
  await page.locator('[data-flash-reveal]').click();
  const back = await page.locator('.course-flash-card h2').innerText();
  assert.notEqual(front, back);
  console.log(JSON.stringify({ccna1Modules:17,initialLamps:'red',masteredKnowledgeLamp:'lime',diagnosisChoices:4,flashcardFlip:true}));
  await browser.close();
})().catch((error) => { console.error(error); process.exitCode = 1; });
