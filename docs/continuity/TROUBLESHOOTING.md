# Troubleshooting

## TS-001 — Electron appears as an empty shell

Verify the app was started with `npm start` or the launcher, not by opening
`index.html` directly in a browser. The HTML preview cannot access Electron IPC.

## TS-002 — Piper starts slowly

The main process warms the English Piper service after the window loads. Check
the engine, model, and `runtime/piper_service.py` paths before changing timing.

## TS-003 — M reports no free space

Stop writes immediately. Inspect the volume and related writers read-only. Do
not delete, clean, or move project data automatically.

## TS-004 — Project missing from M

On 2026-08-20 the full project was found at the recovery path documented in
`BACKUPS.md`. It was restored to the canonical root with matching file/byte
counts and 17 critical SHA-256 matches.

## TS-005 — AI panel reports Ollama offline

The bridge remains healthy; this means no compatible service answered at
`http://127.0.0.1:11434`. Start Ollama or set `LURNAI_OLLAMA_BASE` before
launching Electron. Visible web providers do not depend on Ollama.

## TS-006 — Web AI prompt was not submitted automatically

Third-party DOM structures change. The bridge copies the prompt to the Windows
clipboard when it cannot locate a visible prompt field. Paste it into the
already visible provider window and submit manually; authentication remains
user-controlled.
