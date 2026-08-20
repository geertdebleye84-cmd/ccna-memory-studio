# Methods

## Source verification

Run `npm run check`, unit tests, and a short Electron launch smoke test. Confirm
the catalog parses and contains 505 records.

## Restore verification

Compare recursive file counts and byte totals. Hash application entry points,
data catalogs, PDF, progress, Piper executable, service, and voice models.

## AI bridge verification

Unit-test JSON extraction, provider URL validation, course-prompt construction,
and IPC payload limits. Test Ollama against a local endpoint when available.
Open web providers only in visible isolated persistent sessions.
