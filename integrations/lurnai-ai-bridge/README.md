# LurnAI AI communication bridge recovery

This is a clean, readable reconstruction of the useful AI communication
contract observed in the installed LurnAI 1.0.2 Electron application.

It provides:

- local Ollama model discovery and generation;
- visible ChatGPT, Claude, or custom HTTPS chat windows with persistent login;
- assisted prompt insertion with clipboard fallback;
- capture of the latest visible assistant response;
- robust JSON extraction;
- a strict, source-aware course-generation prompt builder.

It deliberately excludes activation, licensing, anti-tamper, secrets, and the
native security backend. No credentials or cookies are copied from LurnAI. The
CCNA application uses its own Electron session partition.

The web provider DOM is controlled by third-party sites and can change. Prompt
insertion therefore always returns a status and retains a visible manual
fallback. The user remains in control of authentication and submission.
