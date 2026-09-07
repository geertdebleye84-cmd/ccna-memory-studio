const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const trainer = require('../data/cli-trainer.js');

test('trainer covers Cisco NetAcad 1, 2 and 3 plus optional Windows shells', () => {
  assert.deepEqual([...new Set(trainer.TOPICS.filter(t => t.profile === 'cisco').map(t => t.course))], ['NetAcad 1', 'NetAcad 2', 'NetAcad 3']);
  assert.ok(trainer.EXERCISES.some(e => e.profile === 'powershell'));
  assert.ok(trainer.EXERCISES.some(e => e.profile === 'cmd'));
  assert.ok(trainer.TOPICS.every(topic => trainer.EXERCISES.some(exercise => exercise.topic === topic.id)), 'every selectable topic should have a guided exercise');
});

test('CLI lab is wired into the shared Electron renderer', () => {
  const root = path.join(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const renderer = fs.readFileSync(path.join(root, 'renderer.js'), 'utf8');
  assert.match(html, /data-mode="cli"/);
  assert.match(html, /data\/cli-trainer\.js/);
  assert.match(renderer, /function renderCli\(\)/);
  assert.match(renderer, /SNELLER HERHALEN/);
});

test('Cisco parser respects modes, abbreviations and prompt changes', () => {
  const session = trainer.createSession('cisco');
  assert.equal(trainer.prompt(session), 'Router>');
  assert.equal(trainer.execute(session, 'en').commandId, 'enable');
  assert.equal(trainer.prompt(session), 'Router#');
  assert.equal(trainer.execute(session, 'conf t').commandId, 'configure-terminal');
  assert.equal(trainer.execute(session, 'host R1').commandId, 'hostname');
  assert.equal(trainer.prompt(session), 'R1(config)#');
  assert.equal(trainer.execute(session, 'int g0/0/0').commandId, 'interface');
  assert.equal(trainer.prompt(session), 'R1(config-if)#');
  assert.equal(trainer.execute(session, 'no sh').commandId, 'no-shutdown');
});

test('Cisco parser returns authentic incomplete and invalid errors', () => {
  const session = trainer.createSession('cisco', 'privileged');
  const incomplete = trainer.execute(session, 'show ip interface');
  assert.equal(incomplete.error, 'incomplete');
  assert.match(incomplete.output, /Incomplete command/);
  const invalid = trainer.execute(session, 'hostname R1');
  assert.equal(invalid.error, 'invalid');
  assert.match(invalid.output, /\^\n% Invalid input detected/);
});

test('help and tab completion are context sensitive', () => {
  const session = trainer.createSession('cisco', 'privileged');
  assert.match(trainer.execute(session, 'show ip ?').output, /interface|route/);
  assert.equal(trainer.complete(session, 'conf t'), 'conf terminal');
});

test('PowerShell aliases and CMD errors are simulated without execution', () => {
  const ps = trainer.createSession('powershell');
  assert.equal(trainer.execute(ps, 'gci').commandId, 'ps-list');
  assert.match(trainer.execute(ps, 'Get-Process').output, /explorer/);
  const cmd = trainer.createSession('cmd');
  assert.equal(trainer.execute(cmd, 'ipconfig /all').commandId, 'cmd-ipconfig');
  assert.match(trainer.execute(cmd, 'definitely-not-real').output, /not recognized/);
});
