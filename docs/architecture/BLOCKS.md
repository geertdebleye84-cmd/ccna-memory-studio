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
