const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
global.window = {};
require(path.join(root, 'library', 'library-index.js'));
const library = global.window.CCNA2_QA_LIBRARY;
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'library', 'manifest.json'), 'utf8'));

test('CCNA2 library has separate verified files for all modules', () => {
  assert.equal(library.modules.length, 16);
  assert.deepEqual(library.modules.map((module) => module.id), Array.from({ length:16 }, (_, index) => index + 1));
  assert.equal(manifest.files.length, 16);
  for (const entry of manifest.files) {
    const content = fs.readFileSync(path.join(root, 'library', entry.path));
    assert.equal(crypto.createHash('sha256').update(content).digest('hex'), entry.sha256);
  }
});

test('library separates knowledge, diagnosis, and flashcard modes', () => {
  const cards = library.modules.flatMap((module) => module.cards);
  assert.equal(cards.filter((card) => card.type === 'knowledge').length, 64);
  assert.equal(cards.filter((card) => card.type === 'diagnosis').length, 32);
  assert.equal(cards.filter((card) => card.type === 'flashcard').length, 66);
  assert.equal(new Set(cards.map((card) => card.id)).size, cards.length);
});

test('objective cards have valid answers and flashcards have useful backs', () => {
  for (const module of library.modules) for (const card of module.cards) {
    assert.ok(card.sectionId && card.sectionTitle);
    if (card.type === 'flashcard') assert.ok(card.front.length >= 5 && card.back.length >= 40);
    else {
      assert.equal(card.choices.length, 4);
      assert.equal(card.answer, card.choices[card.correctIndex]);
      assert.ok(card.prompt.length >= 20 && card.explanation.length >= 20);
    }
  }
});

test('shared UI wires the library and mastery evidence store', () => {
  const html = fs.readFileSync(path.join(root, '..', '..', 'index.html'), 'utf8');
  const renderer = fs.readFileSync(path.join(root, '..', '..', 'renderer.js'), 'utf8');
  assert.match(html, /courses\/ccna2\/library\/library-index\.js/);
  assert.match(renderer, /function renderQaLibrary\(/);
  assert.match(renderer, /store\.qaMastery/);
  assert.match(renderer, /mastery-lamp/);
});
