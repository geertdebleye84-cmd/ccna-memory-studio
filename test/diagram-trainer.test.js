const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const trainer = require('../data/diagram-trainer.js');

test('diagram library catalogues every supplied PDF as an isolated learning item', () => {
  assert.equal(trainer.DIAGRAMS.length, 15);
  assert.equal(new Set(trainer.DIAGRAMS.map((diagram) => diagram.id)).size, 15);
  assert.ok(trainer.questionCount >= 80, 'the tester should provide broad coverage');
  assert.deepEqual(
    trainer.DIAGRAMS.map((diagram) => diagram.title),
    ['ARP Request', 'DHCPv4 Request', 'Ethernet Cable Pinouts', 'IPv4 Header', 'IPv4 Reserved Ranges', 'IPv6 Header', 'IPv6 Reserved Ranges', 'MAC Frame Headers', 'Network Message', 'OSI Graph', 'TCP Handshakes', 'TCP Header', 'TCP/UDP Known Ports', 'UDP Header', 'xSTP BPDU']
  );
});

test('every diagram prompt has one valid answer and three distinct distractors', () => {
  const ids = new Set();
  for (const diagram of trainer.DIAGRAMS) {
    assert.ok(diagram.file.endsWith('.pdf'));
    assert.ok(diagram.pages >= 1);
    assert.ok(diagram.prompts.length >= 5);
    for (const prompt of diagram.prompts) {
      assert.ok(!ids.has(prompt.id), `duplicate prompt ${prompt.id}`); ids.add(prompt.id);
      assert.equal(prompt.options.length, 4);
      assert.equal(new Set(prompt.options).size, 4);
      assert.ok(prompt.options.includes(prompt.answer));
    }
  }
  assert.equal(ids.size, trainer.questionCount);
});

test('diagram trainer and tester are wired as a separate renderer mode', () => {
  const root = path.join(__dirname, '..');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const renderer = fs.readFileSync(path.join(root, 'renderer.js'), 'utf8');
  const preload = fs.readFileSync(path.join(root, 'preload.js'), 'utf8');
  assert.match(html, /data-mode="diagram"/);
  assert.match(html, /data\/diagram-trainer\.js/);
  assert.match(renderer, /function renderDiagramTrainer\(diagram\)/);
  assert.match(renderer, /function renderDiagramTester\(diagram\)/);
  assert.match(renderer, /store\.diagramProgress/);
  assert.match(preload, /loadDiagramPdfs/);
  assert.doesNotMatch(renderer, /store\.progress\[question\.diagramId\]/);
});

test('the installed local PDF library matches the catalog when present', () => {
  const root = path.join(__dirname, '..');
  const library = path.join(root, 'user-data', 'diagram-library');
  if (!fs.existsSync(library)) return;
  const installed = new Set(fs.readdirSync(library).filter((name) => name.toLowerCase().endsWith('.pdf')));
  for (const diagram of trainer.DIAGRAMS) assert.ok(installed.has(diagram.file), `missing local PDF ${diagram.file}`);
});
