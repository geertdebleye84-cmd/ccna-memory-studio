# Decisions

## DEC-001 — Canonical root

Date: 2026-08-20. The canonical live project is
`M:\CCNA Memory Studio\CCNA-Memory-Studio-v3-Focused`. C copies are read-only
recovery material.

## DEC-002 — Bridge recovery boundary

Date: 2026-08-20. Reconstruct only the AI communication behavior from the
installed LurnAI application: Ollama access, visible web-provider sessions,
prompt transfer, response capture, and JSON extraction. Exclude activation,
licensing, secrets, anti-tamper code, and the native security backend.

## DEC-003 — Provider strategy

Date: 2026-08-20. AI remains optional. Ollama is the offline/default bridge;
ChatGPT, Claude, and a user-supplied HTTPS chat URL are visible manual or
assisted web providers with persistent Electron session partitions.

## DEC-004 — Restore method

Date: 2026-08-20. The vanished M project was restored from the exact C recovery
path named in `BACKUPS.md`. The source was preserved. After an initial timeout,
only missing files were copied; no existing destination file was overwritten.

## DEC-005 — CLI simulation boundary

Date: 2026-08-20. CLI training is a deterministic in-renderer simulation.
Commands may update only ephemeral virtual session state and local learning
progress; they never invoke IOS, PowerShell, CMD, a host shell, the filesystem,
or a network endpoint. Coverage is a tested curriculum-focused subset rather
than a claim of complete emulation of every platform build.

## DEC-006 — Original, isolated course layers

Date: 2026-08-20. CCNA1 and CCNA2 are separate course datasets selected through
one shared browser. Progress keys include the course ID. NetAcad outlines may
define coverage, but lesson prose, official assessment items, downloads and
Cisco/Pearson artwork are not copied; explanations, diagrams, labs and practice
questions are original equivalents.

## DEC-007 — Evidence-based course mastery

Date: 2026-08-20. Course-library mastery is stored per stable question ID.
Multiple-choice and diagnostic items provide objective evidence; a card needs
at least two correct answers and adequate accuracy before it contributes full
mastery. Flashcard viewing never increases mastery. Module and section lamps
show a red, orange, yellow, lime, or green aggregate without replacing the
underlying attempt counts.

## DEC-008 — Local diagram source and isolated mastery

Date: 2026-08-20. The supplied diagram PDFs and rendered page previews remain
under ignored `user-data/diagram-library`; they are not Git-tracked source.
Tracked `data/diagram-trainer.js` contains the original recall/test prompts and
stable IDs. Only objective tester answers update `diagramProgress`; trainer
reveals and ordinary study/course/test results do not raise diagram mastery.
