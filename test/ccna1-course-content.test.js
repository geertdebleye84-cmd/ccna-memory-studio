const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

global.window = {};
require(path.join(__dirname, '..', 'data', 'ccna1-course.js'));

const course = global.window.CCNA1_COURSE;

test('CCNA1 exposes all 17 modules and substantive sections only', () => {
  assert.equal(course.modules.length, 17);
  assert.deepEqual(course.modules.map((module) => module.id), Array.from({ length: 17 }, (_, index) => index + 1));
  const sections = course.modules.flatMap((module) => module.sections);
  assert.equal(sections.length, 92);
  assert.ok(sections.every((section) => !/\.0(?:\.|$)/.test(section.id)));
});

test('every CCNA1 module has diagram, lab, pitfalls and original questions', () => {
  for (const module of course.modules) {
    assert.ok(module.summary.length >= 50, `module ${module.id} summary`);
    assert.ok(module.diagram.nodes.length >= 3, `module ${module.id} diagram nodes`);
    assert.ok(module.diagram.links.length >= 2, `module ${module.id} diagram links`);
    assert.ok(module.lab.task && module.lab.success.length >= 3, `module ${module.id} lab`);
    assert.ok(module.pitfalls.length >= 3, `module ${module.id} pitfalls`);
    assert.equal(module.questions.length, 3, `module ${module.id} questions`);
    for (const question of module.questions) {
      assert.equal(question.o.length, 4);
      assert.ok(Number.isInteger(question.a) && question.a >= 0 && question.a < 4);
      assert.ok(question.e.length >= 20);
    }
  }
});

test('section identifiers are unique and contain original explanatory content', () => {
  const sections = course.modules.flatMap((module) => module.sections);
  assert.equal(new Set(sections.map((section) => section.id)).size, sections.length);
  for (const section of sections) {
    assert.ok(section.points.length >= 2, section.id);
    assert.ok(section.points.every((point) => point.length >= 45), section.id);
  }
});
