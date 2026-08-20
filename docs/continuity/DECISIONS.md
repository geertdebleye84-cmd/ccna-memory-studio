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
