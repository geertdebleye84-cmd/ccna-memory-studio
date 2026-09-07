# CCNA1 course content plan

Date: 2026-08-20 Europe/Brussels

## Scope

- Source course: Cisco Networking Academy, CCNA: Introduction to Networks
  (the user-controlled, logged-in CCNA1 Chrome tab).
- Modules: 1 through 17.
- Introductory `x.0` lessons are intentionally omitted at the user's request.
- Coverage follows all 92 substantive NetAcad topic blocks from `1.1` through
  `17.7`, plus the module practice/quiz intent.
- Five checkpoint-exam domains and both final-exam domains are represented by
  original module and mixed practice questions; official assessment items are
  not copied.

## Deliverable shape

Each module contains:

- a Dutch answer-first summary;
- every substantive section in the current NetAcad outline;
- technical explanation in original wording;
- IOS/host commands and verification where applicable;
- an original, data-driven network diagram;
- one Packet Tracer-style lab with success criteria;
- common pitfalls;
- three original multiple-choice questions with answer and explanation.

Current dataset: `data/ccna1-course.js` (`window.CCNA1_COURSE`).

## Accuracy controls

- The 17 module titles and 92 topic titles/objectives were read from the live
  NetAcad course on 2026-08-20.
- Addressing, protocol, header, port, IOS and troubleshooting details are
  expressed independently and are intended to be checked by automated content
  tests plus the Electron course-browser smoke test.
- Cisco artwork, lesson prose, downloadable labs and official quiz/exam items
  are not embedded. Diagrams and questions are original equivalents.

## Integration boundary

CCNA2 and other concurrently authored courses currently own changes in
`index.html`, `renderer.js`, `styles.css`, `package.json`, and the shared
continuity files. CCNA1 work remains in its isolated data and test paths until
the shared multi-course selector can be integrated after those writes settle.

