# CCNA3 content plan

Status: IMPLEMENTED — 2026-08-20

The CCNA3 learning layer follows the visible Cisco Networking Academy
**Enterprise Networking, Security, and Automation** outline for modules 1–14.
Introductory `x.0` lessons are intentionally omitted to match the CCNA2 layer.

Content rules:

- Explain every substantive `x.1` and later section in original Dutch wording.
- Preserve the existing 505-card catalogue and its progress format.
- Keep CCNA1, CCNA2, and CCNA3 as isolated course datasets.
- Use original diagrams; do not copy Cisco/Pearson artwork.
- Do not reproduce official assessment questions or answer banks.
- Supply original practice questions with answers and explanations.
- Include IOS command patterns, verification, troubleshooting, and labs where relevant.
- Keep security examples defensive and lab-scoped.

Visible NetAcad module outline verified in the user's logged-in Chrome tab:

1. Single-Area OSPFv2 Concepts
2. Single-Area OSPFv2 Configuration
3. Network Security Concepts
4. ACL Concepts
5. ACLs for IPv4 Configuration
6. NAT for IPv4
7. WAN Concepts
8. VPN and IPsec Concepts
9. QoS Concepts
10. Network Management
11. Network Design
12. Network Troubleshooting
13. Network Virtualization
14. Network Automation

Integration result:

- `data/ccna3-course.js` owns the browsable CCNA3 course dataset.
- `courses/ccna3/library/modules/` contains one catalogued JSON file per module.
- The shared renderer loads CCNA3 beside CCNA1 and CCNA2 and exposes normal
  multiple choice, reverse diagnostic scenarios, and flashcard sessions.
- Knowledge lamps are driven only by persisted objective answer evidence.
