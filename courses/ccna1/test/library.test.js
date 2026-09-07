const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
global.window = {};
require(path.join(root, 'library', 'library-index.js'));
const library = global.window.CCNA1_QA_LIBRARY;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'library', 'manifest.json'), 'utf8'));

test('CCNA1 library has a separately verified file for every module', () => {
  assert.equal(library.modules.length, 17);
  assert.deepEqual(library.modules.map((module) => module.id), Array.from({length:17}, (_, index) => index + 1));
  assert.equal(manifest.files.length, 17);
  for (const entry of manifest.files) {
    const content = fs.readFileSync(path.join(root, 'library', entry.path));
    assert.equal(crypto.createHash('sha256').update(content).digest('hex'), entry.sha256);
  }
});

test('CCNA1 library separates knowledge, diagnosis and flashcards', () => {
  const cards = library.modules.flatMap((module) => module.cards);
  assert.equal(cards.filter((card) => card.type === 'knowledge').length, 51);
  assert.equal(cards.filter((card) => card.type === 'diagnosis').length, 34);
  assert.equal(cards.filter((card) => card.type === 'flashcard').length, 92);
  assert.equal(cards.length, 177);
  assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
});

test('objective cards are answerable and flashcards contain useful explanations', () => {
  for (const module of library.modules) for (const card of module.cards) {
    assert.ok(card.sectionId && card.sectionTitle);
    assert.equal(card.courseId, 'ccna1-itn');
    if (card.type === 'flashcard') {
      assert.ok(card.front.length >= 5 && card.back.length >= 80);
    } else {
      assert.equal(card.choices.length, 4);
      assert.equal(card.answer, card.choices[card.correctIndex]);
      assert.ok(card.prompt.length >= 10 && card.explanation.length >= 20);
    }
  }
});

test('mastery rule requires repeated objective evidence and excludes flashcards', () => {
  assert.match(library.masteryRule, /twee correcte antwoorden/i);
  assert.match(library.masteryRule, /flashcards.+niet/i);
});
