# GitHub release handoff — 2026-09-07

## Project

- Canonical source discovered at `H:\CCNA Memory Studio\CCNA-Memory-Studio-v3-Focused`.
- Public staging copy: `C:\Users\User\Documents\ChatGPT\CCNA Memory Studio`.
- Product: CCNA Memory Studio Focused v3.
- Organization: SiriusBitz.
- Owner and copyright holder: Geert Marie-Rose De Bleye.
- License: GPL-3.0-only.
- Existing branch: `main`; no upstream remote was configured.

## Release preparation

- Added author and license metadata to `package.json`.
- Added Electron Builder configuration for Windows NSIS and portable outputs.
- Added `LICENSE`, `CONTRIBUTING.md` and `CHANGELOG.md`.
- Extended the README with setup and packaging instructions.
- Added `dist/` to `.gitignore`; installers belong in GitHub Releases.
- The Windows installer is intentionally unsigned; no code-signing certificate
  is available for this open source release.
- `.github/workflows/windows-release.yml` builds and attaches an unsigned NSIS
  installer automatically whenever a semantic version tag is pushed.

## Required verification

- Run `npm run check` and `npm test`.
- Run `npm run dist` and inspect the generated installer and portable binary.
- Check the Git diff for secrets, local paths, personal progress and generated runtime data.
- Create the GitHub repository and push the reviewed source tree.
- Create a release matching the package version and attach the Windows installer.

## Boundaries

- The app is independent and is not endorsed by Cisco or NetAcad.
- Course explanations and practice questions must remain original.
- Do not publish browser sessions, credentials, downloaded course files, PDFs,
  generated audio or personal `user-data`.
