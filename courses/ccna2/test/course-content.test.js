const assert = require('node:assert/strict');
const test = require('node:test');

global.window = {};
require('../data/ccna2-course.js');
const course = global.window.CCNA2_COURSE;

test('CCNA2 course contains all 16 substantive modules in a stable schema', () => {
  assert.equal(course.id, 'ccna2-srwe');
  assert.deepEqual(course.modules.map((module) => module.id).sort((a, b) => a - b), Array.from({ length: 16 }, (_, index) => index + 1));
  assert.ok(course.modules.every((module) => module.title && module.summary && module.sections.length >= 2));
  assert.ok(course.modules.every((module) => module.lab?.task && module.lab.success.length >= 3));
  assert.ok(course.modules.every((module) => module.diagram?.nodes.length >= 4 && module.diagram?.links.length >= 3));
});

test('introductory x.0 lessons are excluded and substantive section ids are unique', () => {
  const sections = course.modules.flatMap((module) => module.sections);
  assert.equal(sections.length, 66);
  assert.equal(new Set(sections.map((section) => section.id)).size, sections.length);
  assert.ok(sections.every((section) => !/^\d+\.0(?:\.|$)/.test(section.id)));
  assert.ok(sections.every((section) => section.points.length >= 2));
});

test('every module has valid original practice questions and explanations', () => {
  const questions = course.modules.flatMap((module) => module.questions);
  assert.equal(questions.length, 64);
  for (const question of questions) {
    assert.equal(question.o.length, 4);
    assert.ok(Number.isInteger(question.a) && question.a >= 0 && question.a < question.o.length);
    assert.ok(question.q.length >= 20);
    assert.ok(question.e.length >= 20);
  }
});
