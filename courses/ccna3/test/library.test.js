const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'library', 'manifest.json'), 'utf8'));
global.window = {};
require(path.join(root, 'library', 'library-index.js'));
const library = global.window.CCNA3_QA_LIBRARY;

test('CCNA3 library has one independently catalogued file per module', () => {
  assert.equal(manifest.courseId, 'ccna3-ensa');
  assert.equal(manifest.files.length, 14);
  assert.deepEqual(manifest.files.map((file) => file.moduleId), Array.from({ length: 14 }, (_, index) => index + 1));
  assert.equal(library.modules.length, 14);
  for (const entry of manifest.files) {
    const content = fs.readFileSync(path.join(root, 'library', entry.path));
    assert.equal(crypto.createHash('sha256').update(content).digest('hex'), entry.sha256);
  }
});

test('every module contains the three requested study modes', () => {
  for (const entry of manifest.files) {
    const payload = JSON.parse(fs.readFileSync(path.join(root, 'library', entry.path), 'utf8'));
    assert.ok(payload.multipleChoice.length >= 3);
    assert.ok(payload.diagnostic.length >= 2);
    assert.ok(payload.flashcards.length >= 3);
    assert.equal(payload.counts.multipleChoice, payload.multipleChoice.length);
    assert.equal(payload.counts.diagnostic, payload.diagnostic.length);
    assert.equal(payload.counts.flashcards, payload.flashcards.length);
  }
});

test('assessed items have stable ids, four choices, and valid answers', () => {
  const ids = new Set();
  for (const entry of manifest.files) {
    const payload = JSON.parse(fs.readFileSync(path.join(root, 'library', entry.path), 'utf8'));
    for (const item of [...payload.multipleChoice, ...payload.diagnostic]) {
      assert.ok(!ids.has(item.id)); ids.add(item.id);
      assert.equal(item.choices.length, 4);
      assert.ok(Number.isInteger(item.correctIndex) && item.correctIndex >= 0 && item.correctIndex < 4);
      assert.equal(item.answer, item.choices[item.correctIndex]);
      assert.ok(item.explanation.length >= 20);
    }
  }
});

test('flashcards never masquerade as assessed evidence', () => {
  for (const entry of manifest.files) {
    const payload = JSON.parse(fs.readFileSync(path.join(root, 'library', entry.path), 'utf8'));
    for (const card of payload.flashcards) {
      assert.equal(card.type, 'flashcard');
      assert.ok(card.front.length >= 20 && card.back.length >= 40);
      assert.equal('correctIndex' in card, false);
    }
  }
});

test('shared UI loads CCNA3 and keeps mastery evidence objective', () => {
  const projectRoot = path.resolve(root, '..', '..');
  const html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
  const renderer = fs.readFileSync(path.join(projectRoot, 'renderer.js'), 'utf8');
  assert.match(html, /data\/ccna3-course\.js/);
  assert.match(html, /courses\/ccna3\/library\/library-index\.js/);
  assert.match(renderer, /window\.CCNA3_QA_LIBRARY/);
  assert.match(renderer, /function renderCourseFlashcards\(/);
  assert.match(renderer, /card\.type !== 'flashcard'/);
  assert.match(renderer, /qaMasteryLamp\(moduleId, sectionId/);
});
