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

The C recovery copy is not a live project and is not on a different physical
disk from M. It is continuity evidence, not a full independent backup.
