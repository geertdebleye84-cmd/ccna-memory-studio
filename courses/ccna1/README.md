# CCNA1 question and answer library

This isolated course library is generated from the original Dutch CCNA1 ITN
course layer in `data/ccna1-course.js`.

## Layout

- `scripts/build-library.js` — deterministic generator
- `library/modules/module-01.json` through `module-17.json` — one catalog file
  per selectable module
- `library/library-index.js` — browser runtime index
- `library/manifest.json` — counts, sizes and SHA-256 verification
- `test/library.test.js` — schema, content, evidence-rule and hash tests

## Exercise modes

- `knowledge`: normal multiple-choice question and four answers
- `diagnosis`: an inverse scenario where the learner identifies the cause
- `flashcard`: front/back review derived from a substantive course section

Only repeated correct `knowledge` and `diagnosis` answers count as objective
mastery evidence. Flashcards support recall but do not turn a module lamp green.
All items are original study material; official NetAcad/Pearson exam items are
not included.

Regenerate with:

```powershell
node courses/ccna1/scripts/build-library.js
```
