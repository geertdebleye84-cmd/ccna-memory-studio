# CCNA2 course package

Active course package for **Switching, Routing, and Wireless Essentials**.

- `data/ccna2-course.js` — 16 modules, 66 substantive lesson blocks, labs,
  diagrams, verification lists, pitfalls, and 64 original practice questions.
- `test/course-content.test.js` — structural and answer-bank validation.
- `library/modules/module-01.json` through `module-16.json` — separate,
  catalogued module files containing knowledge questions, diagnosis scenarios,
  and flashcards.
- `library/library-index.js` — generated offline runtime index used by the app.
- `library/manifest.json` — file counts and SHA-256 integrity evidence.
- `scripts/build-library.js` — deterministic library generator.

The shared browser UI remains in the project-root `index.html`, `renderer.js`,
and `styles.css`. The app loads this package directly; CCNA1/CCNA3 datasets do
not own or mutate this data.

The `x.0` introduction lessons are intentionally excluded. Course text,
diagrams, labs, and practice questions are original study material aligned to
the visible NetAcad outline; official assessment questions and Cisco/Pearson
artwork are not reproduced.

Current library: 64 multiple-choice knowledge questions, 32 diagnosis
scenarios, and 66 section flashcards. Mastery colours use only objectively
answered knowledge and diagnosis questions; opening a flashcard does not count
as proof.
