const assert = require('node:assert/strict');
const test = require('node:test');

global.window = {};
require('../data/ccna3-course.js');
const course = global.window.CCNA3_COURSE;

test('CCNA3 contains all 14 substantive ENSA modules in a stable schema', () => {
  assert.equal(course.id, 'ccna3-ensa');
  assert.deepEqual(
    course.modules.map((module) => module.id).sort((a, b) => a - b),
    Array.from({ length: 14 }, (_, index) => index + 1)
  );
  assert.ok(course.modules.every((module) => module.title && module.summary && module.sections.length >= 3));
  assert.ok(course.modules.every((module) => module.lab?.task && module.lab.success.length >= 3));
  assert.ok(course.modules.every((module) => module.diagram?.nodes.length >= 4 && module.diagram?.links.length >= 3));
});

test('CCNA3 excludes x.0 introductions and keeps section ids unique', () => {
  const sections = course.modules.flatMap((module) => module.sections);
  assert.equal(sections.length, 53);
  assert.equal(new Set(sections.map((section) => section.id)).size, sections.length);
  assert.ok(sections.every((section) => !/^\d+\.0(?:\.|$)/.test(section.id)));
  assert.ok(sections.every((section) => section.points.length >= 2));
});

test('CCNA3 practice questions have four options and valid explanations', () => {
  const questions = course.modules.flatMap((module) => module.questions);
  assert.equal(questions.length, 42);
  for (const question of questions) {
    assert.equal(question.o.length, 4);
    assert.ok(Number.isInteger(question.a) && question.a >= 0 && question.a < question.o.length);
    assert.ok(question.q.length >= 20);
    assert.ok(question.e.length >= 20);
  }
});
