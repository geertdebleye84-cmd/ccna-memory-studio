# CCNA Memory Studio — Focused v3

A reliable, offline-first Electron study workspace with two main modes only: **Learn** and **Test**.

## The two modes

- **Learn**: select one or more chapters and a bundle, see one English key statement, reveal its topic, then mark it **I know this** or **Keep practising**. No multiple-choice is shown here.
- **Test**: choose a question count and chapters, then answer multiple-choice questions. Correct answers reduce frequency; incorrect answers return to the practice queue.

## Voice

The voice control is explicit: Start, Pause/Resume and Stop. Continuous playback reads the question, waits for the chosen Question → Answer pause, reads the answer, waits for the Card → Card pause, and moves on.

The app can use a locally installed Piper neural voice. The v3 setup installs the free Dutch Belgian `nl_BE-nathalie-medium` model (MIT) and retains system TTS as a fallback if that model or engine is unavailable. Model files are local under `runtime/piper`.

## Source boundary

The local catalogue contains concept statements and topic labels. This app does not include reproduced or copied Pearson/Cisco exam-question wording and is not an official practice exam.
