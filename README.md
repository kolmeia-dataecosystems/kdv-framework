# KDV Framework / open knowledge

The community knowledge base for the open, bee-inspired operational data governance framework powered by KDV Ecosystems. **Markdown is the source of truth.** This repository contains original guides, diagrams and working templates, independent of the website's implementation code.

| Read | Start |
| --- | --- |
| English | [Documentation index](docs/en/README.md) · [Getting started](docs/en/start-here.md) |
| Português | [Índice da documentação](docs/pt/README.md) · [Primeiros passos](docs/pt/start-here.md) |
| Español | [Índice de documentación](docs/es/README.md) · [Primeros pasos](docs/es/start-here.md) |

- Website documentation: https://kdv-framework.lab-of-codes-6406.chatgpt.site/en/docs/
- Website implementation: https://github.com/kolmeia-dataecosystems/kdv-framework-site
- Knowledge repository: https://github.com/kolmeia-dataecosystems/kdv-framework
- Edition: 0.1 / working community model, 18 October 2026

## What's here

Twelve guides in each of three languages: getting started; principles; anatomy; roles; lifecycle; access and exceptions; data contracts; evidence; practices and reference lenses; implementation; community stewardship; glossary. Fifteen original Markdown templates and three localized SVG diagrams support practical use.

The model distinguishes Ecosystem, Hive, Cell, Comb, data product and Farm. Named responsibility, a versioned agreement, classification, policy-based access and auditability form a minimum baseline. DAMA-DMBOK 2, DCAM and Data Mesh inform an original operating interpretation; this is not an official equivalence, assessment or certification.

## Open participation, guarded publication

Anyone may read, fork, open issues and propose pull requests. **Only the designated KDV guardians can approve and merge knowledge into `main`.** Initial guardian: **[@ismael-lab](https://github.com/ismael-lab)**, explicitly designated by the project owner.

`main` is configured to require pull requests, a guardian CODEOWNER review, passing `knowledge-check`, up-to-date branches and resolved conversations. New commits invalidate stale approvals. Force pushes, branch deletion and review bypasses are disabled, including for administrators. Only the configured guardian is allowed to push/merge to that branch; a permitted actor must still satisfy the review requirements.

With a single guardian, a PR authored by that same person needs a second authorised guardian before it can be reviewed and merged. This restriction is intentional: self-approval is not independent review. Add another guardian through the normal organisation/repository administration process when needed; keep CODEOWNERS and the branch protection allowlist consistent.

The initial knowledge was bootstrapped once by the owner before applying protection. All subsequent changes follow the guarded workflow. See [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md) and the versioned [protection policy](governance/main-protection.json). GitHub administrators retain the ability to administer repository rules; changing those rules is a separate governance decision.

The built-in GitHub Wiki is disabled: the wiki-like knowledge is stored as regular Markdown files so it shares pull-request review and history.

## How the website uses this knowledge

`knowledge.json` lists the approved content paths, titles, languages and navigation. The website's `npm run knowledge:sync` reads this repository's **main branch only**, records its exact commit and imports a tracked snapshot. The site builds documentation pages from that Markdown; it does not maintain a separately edited version of the guides.

Each published guide links to its exact source revision and to an edit proposal on GitHub. Synchronization and the website release are explicit maintainer operations. A merge here does not, by itself, deploy the Sites website; no cross-repository deployment credential, webhook or scheduled automation is configured.

This keeps builds reproducible and makes it possible to review exactly which accepted knowledge revision is being published. Do not import an unreviewed contributor branch as the website's documentation source.

## Structure

```text
knowledge.json                  Navigation and public content inventory
docs/{en,pt,es}/*.md             Original, editable documentation
diagrams/                       Localized original SVG diagrams
templates/{en,pt,es}/*.md         Working artefacts
.github/CODEOWNERS               Guardian review ownership
.github/ISSUE_TEMPLATE/          Questions and anonymised examples
.github/workflows/check.yml      Read-only pull-request validation
scripts/check.mjs               Dependency-free validation
governance/main-protection.json  Expected guarded-main policy
```

Run `node scripts/check.mjs` with Node.js 22 or newer before submitting. Checks cover locale coverage, document metadata, links, SVG safety and stewardship files. The check script validates content; it does not execute Markdown or SVG scripts.

## Licensing and reference boundaries

Original knowledge text, diagrams and templates: **CC BY 4.0**; see [LICENSE](LICENSE). Validation code: MIT, see [LICENSE-CODE](LICENSE-CODE). KDV and external trademarks/material retain their own rights. Do not copy restricted DAMA or DCAM publications, diagrams, assessment matrices or forms into contributions.

The initial guides are original abstractions from the client's approved KDV model and reference implementation. Product availability and operating guidance are distinct. Synthetic scenarios are labelled; no client datasets, private operational documentation or credentials are included.
