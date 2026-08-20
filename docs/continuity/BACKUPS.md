# Backup definition and evidence

Canonical source root:
`M:\CCNA Memory Studio\CCNA-Memory-Studio-v3-Focused`

Daily compact backup destination:
`C:\Codex Backups\CCNA Memory Studio\CCNA-Memory-Studio-v3-Focused`

Allowed compact content: continuity files, manifests, Git bundle, and selected
small critical source files. Never use this location as a live project.

Full external backup destination: not yet registered. A full backup must target
a separately identified external physical disk and be timestamped,
non-overwriting, hashed, and restore-tested. No automatic retention is approved.

Recovery evidence used on 2026-08-20:
`C:\Users\User\Documents\From M 19082026\CCNA Memory Studio\CCNA-Memory-Studio-v3-Focused`

Verification: 6,982 files; 831,052,630 bytes; 17 critical hashes matched. C and
M reside on the same physical NVMe disk, so this is not an independent full
backup.
