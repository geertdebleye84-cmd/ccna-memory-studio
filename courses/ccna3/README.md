# CCNA3 learning library

Isolated learning library for **Enterprise Networking, Security, and
Automation**.

- `library/modules/module-01.json` through `module-14.json` keep each module
  independently catalogued.
- Every module contains normal multiple-choice questions, reverse diagnostic
  scenarios, and flashcards.
- `library/library-index.js` is the local runtime catalogue consumed by the
  Electron renderer.
- `library/manifest.json` records counts, byte sizes, and SHA-256 hashes.
- `scripts/build-library.js` creates missing generated files and verifies
  identical existing files; it refuses to overwrite divergent content.

Knowledge lights use only objectively answered multiple-choice and diagnostic
items. An item is proven after at least two correct answers with at least 60%
accuracy. Flashcard review is deliberately excluded from mastery scoring.

All content is original study material. Official Pearson/Cisco assessment
questions and answer banks are not reproduced.
