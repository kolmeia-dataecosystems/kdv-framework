# Contributing knowledge

You can read, fork, ask questions and propose improvements without joining the organisation or receiving write access. Use Markdown and plain language. Contributions may improve a principle, role, process, control, example, evidence definition, translation or diagram.

1. Open an issue explaining the situation and proposed improvement. Public discussions must exclude personal data, secrets and confidential client details.
2. Fork the repository. Create a branch such as `codex/clarify-access-review` in your fork and edit the relevant `docs/{language}/` files.
3. Keep English, Portuguese and Spanish editions aligned, or identify a translation gap explicitly for guardian review. Preserve stable slugs and update `knowledge.json` for new guides.
4. Link practices to accountable roles, decisions, evidence and limitations. Mark synthetic scenarios. Cite public original sources instead of reproducing restricted DAMA/DCAM material.
5. Run `node scripts/check.mjs`. Use relative links to local guides, diagrams and templates.
6. Open a pull request describing context, resulting change, validation and limitations. A guardian reviews it; new commits require review again.
7. Only a guardian may approve and merge into protected `main` after checks pass. Review is not certification or endorsement by the external reference publishers.

`main` is the accepted knowledge source. The website imports a pinned snapshot of it during an explicit site release. Pull requests and working branches are proposals, not published framework guidance.

Original knowledge contributions are CC BY 4.0 and validation code is MIT. Contribute only material you can license on those terms. Retain attribution and identify changes. These licences do not grant trademark rights.

Initial guardian: @ismael-lab. When a guardian authors a change, another authorised guardian must review it. Privacy/security reports: info@kolmeia.io, not public issues.
