# Architecture blocks

## BLK-APP-ELECTRON — ACTIVE

- Purpose: window lifecycle, secure IPC, local storage, references, and TTS
- Owner paths: `main.js`, `preload.js`
- Interface: `window.studio`
- Dependencies: Electron, filesystem, Piper service
- Invariants: context isolation; no renderer Node access; app remains usable
  offline
- Tests: syntax check and Electron launch smoke test

## BLK-STUDY-RENDERER — ACTIVE

- Purpose: study/test UI, queues, progress, notes, media, and speech sequencing
- Owner paths: `index.html`, `renderer.js`, `styles.css`
- Interface: DOM plus `window.studio`
- Dependencies: BLK-APP-ELECTRON, BLK-CATALOG
- Invariants: fixed bottom decisions; study/test separation; visible text matches
  spoken text
- Tests: renderer syntax and manual interaction smoke test

## BLK-CATALOG — ACTIVE

- Purpose: CCNA cards, Jeremy mappings, and book chapter mappings
- Owner paths: `data/`
- Interface: JSONL/JSON loaded through IPC
- Invariants: 505 source records; stable card identifiers
- Tests: JSON parse and record-count check

## BLK-TTS-PIPER — ACTIVE

- Purpose: local neural English/Dutch speech
- Owner paths: `runtime/piper_service.py`, ignored `runtime/piper/`
- Interface: localhost synthesis HTTP endpoint and `tts:*` IPC
- Invariants: no remote voice dependency; generated audio stays ignored
- Tests: status, synthesis, and playback smoke checks

## BLK-AI-BRIDGE — ACTIVE

- Purpose: optional local Ollama and visible webchat communication bridge
- Owner paths: `integrations/lurnai-ai-bridge/`, AI IPC additions in
  `main.js`/`preload.js`, AI controls in the renderer
- Interface: `window.studio.ai.*`
- Dependencies: Electron BrowserWindow/session/clipboard and optional Ollama
- Invariants: no secrets in source; no LurnAI licensing/security code; strict
  IPC input limits; HTTPS custom providers; visible user-controlled sessions
- Tests: 7 unit tests plus Electron renderer/IPC smoke test

## BLK-CCNA3-COURSE — ACTIVE

- Purpose: original Dutch ENSA learning layer aligned to the visible NetAcad
  CCNA3 module outline
- Owner paths: `data/ccna3-course.js`,
  `courses/ccna3/`,
  `test/ccna3-course-content.test.js`,
  `docs/continuity/CCNA3_CONTENT_PLAN.md`; targeted shared integration in
  `index.html`, `renderer.js`, `styles.css`, and `package.json`
- Interface: `window.CCNA3_COURSE`, `window.CCNA3_QA_LIBRARY`, shared Courses
  and V&A Library renderer views
- Dependencies: BLK-STUDY-RENDERER and local `qaMastery` progress storage
- Invariants: 14 module IDs; no `x.0` introductions; no official assessment
  items or copied Cisco/Pearson artwork; existing 505-card catalog unchanged
- Tests: targeted Node syntax, schema/content, per-module manifest/hash, mode
  separation, answer validity, mastery-boundary, and shared-wiring tests
- Status note: dataset, per-module library, course selector, three learning
  modes, and evidence lights are integrated

## BLK-CLI-TRAINER — ACTIVE

- Purpose: safe guided practice for Cisco IOS, PowerShell, and Windows CMD
- Owner paths: `data/cli-trainer.js`, `test/cli-trainer.test.js`; CLI-specific
  additions in `index.html`, `renderer.js`, and `styles.css`
- Interface: `window.CLI_TRAINER` plus the `cli` renderer mode
- Dependencies: BLK-STUDY-RENDERER and local progress storage
- Invariants: no command reaches a host shell, filesystem, network device, or
  PowerShell process; Cisco parsing is context-sensitive; every selectable
  topic has guided practice; errors expose corrective guidance
- Tests: parser/profile/topic coverage, abbreviation, prompt, help, completion,
  error-shape, shell-alias, and renderer-wiring tests

## BLK-CCNA1-COURSE — ACTIVE

- Purpose: original Dutch ITN learning layer aligned to the live NetAcad CCNA1
  outline, presented alongside CCNA2 in the shared course browser
- Owner paths: `data/ccna1-course.js`,
  `courses/ccna1/`,
  `test/ccna1-course-content.test.js`,
  `test/renderer-ccna1-library-smoke.js`,
  `docs/continuity/CCNA1_CONTENT_PLAN.md`; course-selection integration in
  `index.html`, `renderer.js`, and `package.json`
- Interface: `window.CCNA1_COURSE`, `window.CCNA1_QA_LIBRARY`, and the shared
  Courses and V&A Library renderer views
- Dependencies: BLK-STUDY-RENDERER and local course-progress/`qaMastery`
  storage
- Invariants: 17 stable module IDs and 92 unique substantive section IDs; no
  `x.0` introductions; no official assessment items or copied Cisco artwork;
  17 independent module-library JSON files; 51 multiple-choice, 34 diagnosis,
  and 92 flashcard items; flashcards never raise evidence mastery; course
  progress keys remain isolated; existing 505 cards unchanged
- Tests: JavaScript syntax, module/section schema, original-question validity,
  diagram/lab/pitfall coverage, unique IDs, module manifest/hash validation,
  answer/mode validity, shared full suite, and headless renderer smoke

## BLK-DIAGRAM-TRAINER — ACTIVE

- Purpose: isolated active-recall training and objective testing for supplied
  CCNA reference diagrams
- Owner paths: `data/diagram-trainer.js`, `test/diagram-trainer.test.js`,
  `test/renderer-diagram-smoke.js`; targeted integration in `main.js`,
  `preload.js`, `index.html`, `renderer.js`, and `styles.css`
- Interface: `window.DIAGRAM_TRAINER`, `window.studio.loadDiagramPdfs()`,
  `window.studio.importDiagramPdfs()`, and the `diagram` renderer mode
- Dependencies: BLK-APP-ELECTRON, BLK-STUDY-RENDERER, ignored local
  `user-data/diagram-library`
- Invariants: supplied PDFs/previews stay out of Git; diagram scores never
  alter ordinary study/test/course mastery; only objective tester answers count
  as diagram mastery evidence; stable diagram and prompt IDs
- Tests: catalog/schema/answer validity, local-source matching, renderer wiring,
  full suite, and headless trainer/reveal/tester interaction smoke
