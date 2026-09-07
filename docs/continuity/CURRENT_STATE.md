# Current state

Last verified: 2026-08-20 Europe/Brussels

- Canonical project root is on `M:`.
- Baseline commit: `0bd96ff` on branch `main`.
- Baseline tag: `checkpoint/pre-lurnai-ai-bridge-20260820`.
- Verified bridge implementation commit: `0c2f10f`.
- Catalog contains 505 JSONL records.
- Electron source, CCNA PDF, progress data, Piper engine, and English/Dutch
  models were restored from a read-only C recovery copy.
- Restore verification: 6,982 files; 831,052,630 bytes; 17 critical SHA-256
  comparisons matched.
- The clean AI bridge is implemented and connected to Electron IPC and a
  collapsible/floatable UI panel.
- Bridge features: Ollama discovery/generation, visible persistent ChatGPT,
  Claude, or custom HTTPS session, assisted prompt insertion, clipboard
  fallback, response capture to card notes, strict course prompt generation,
  and JSON extraction.
- Verification passed: source syntax checks, 7 bridge unit tests, and an
  Electron renderer smoke test showing 509 cards, 29 book chapters, 65 videos,
  and working AI IPC. Ollama was correctly reported offline during the smoke
  test because no local service was listening on port 11434.
- A fourth `CLI LAB` mode provides side-effect-free Cisco IOS, PowerShell, and
  Windows CMD practice. Cisco topics are selectable across NetAcad 1/2/3; the
  trainer includes guided tasks, IOS modes/prompts, unique abbreviations, `?`
  help, Tab completion, command history, realistic error forms, corrective
  coaching, and short-interval repeat scheduling.
- Latest CLI verification: JavaScript syntax checks and the full 16-test suite
  passed on 2026-08-20; every selectable CLI topic has a guided exercise.
- The shared Courses mode now loads CCNA1 and CCNA2 through an in-page course
  selector. CCNA1 contains 17 modules, 92 substantive sections, 17 original
  labs/diagrams, and 51 original questions; introductions are omitted.
- Course progress keys are namespaced by course ID. Latest verification after
  the original CCNA1 integration passed the then-current 19-test suite.
- CCNA1 now also has 17 independent module-library files containing 51
  multiple-choice questions, 34 reverse diagnostic scenarios, and 92
  flashcards. They are available through the shared V&A Library.
- CCNA3 is now selectable beside CCNA1 and CCNA2. Its independent learning
  library contains 14 module JSON files, 42 multiple-choice questions, 28
  reverse diagnostic scenarios, and 53 flashcards.
- The shared V&A Library supports module/section mastery lamps from red through
  green. Only correct objective answers update `qaMastery`; flashcard review is
  deliberately non-scoring. The complete automated suite passes 35 tests; a
  headless renderer smoke verified three courses, 14 CCNA3 modules, red initial
  lamps, four-choice diagnosis, and front/back flashcard interaction.
- A separate CCNA1 renderer smoke verified 17 initially red module lamps,
  four-choice diagnosis, front/back flashcard interaction, and a module lamp
  changing to lime after every knowledge item was answered correctly twice.
- A fifth `DIAGRAMS` mode now provides an isolated trainer/tester for 15 local
  diagram PDFs (19 pages) covering flows, headers, addressing, pinouts, ports,
  and OSI. It includes 94 recall checks, source hide/reveal, per-page preview,
  current/all/full tests, local PDF import, and independent `diagramProgress`
  red-to-green mastery. Latest syntax checks, full 39-test suite, and headless
  trainer/tester renderer smoke passed on 2026-08-20.

The C recovery copy is not a live project and is not on a different physical
disk from M. It is continuity evidence, not a full independent backup.
