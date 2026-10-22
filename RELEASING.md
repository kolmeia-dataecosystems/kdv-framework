# Framework releases

## Version 1 baseline

At the owner's request on 21 October 2026, `v1.0.0` records accepted commit `498c0f3fc5a52770c06a8088858baebf3b0f20cc` as the first versioned knowledge baseline. Those original files retain their historical **community edition 0.1** label. The retrospective release does not rewrite them or assert certification, completeness or product readiness.

The [v1.0.0 release notes](https://github.com/kolmeia-dataecosystems/kdv-framework/releases/tag/v1.0.0) explain the numbering transition. Tags must not be moved or reused. A correction requires a new release.

## Independent versions

- This repository versions the open operational model, guides, diagrams and templates.
- `kdv-framework-site` versions website implementation and presentation independently.
- KDV products, Kolmeia distributions and commercial services have their own release lifecycles. A framework release makes no product delivery promise.
- The website identifies the framework release and exact accepted commit it includes. Changing website code does not automatically change the framework version; accepting knowledge does not automatically deploy the website.

`knowledge.json.version` is the inventory **schema** version, not the framework release. `knowledge.json.release` and `release.json.version` identify the working release. `edition` remains the historical editorial label until the revised content is ready. A development version is a proposal, including when a PR passes validation.

## Compatibility convention

We adapt [Semantic Versioning](https://semver.org/) to a knowledge model. The public compatibility contract is the meaning of the six anatomy concepts, five-layer model, four lifecycle stages, baseline responsibilities and existing guide/template URLs. Context-specific implementation remains optional.

- **PATCH**, for example `1.0.1`: corrections and clarifications that preserve those meanings, obligations and URLs.
- **MINOR**, for example `1.1.0`: compatible practices, examples, navigation and resources. Familiar business terms can precede Hive/Cell without changing their meaning.
- **MAJOR**, for example `2.0.0`: incompatible conceptual changes, new mandatory obligations, removed meanings, or removed URLs without compatible redirects. Document migration guidance.
- `1.1.0-dev.1` means work in development. `1.1.0-rc.1` is reserved for a complete, reviewable release candidate. Neither means the final edition has been published.

The current release target is `1.2.0`, a compatible functional terminology update. See [its release notes](releases/1.2.0.md). The earlier [1.1 plan](releases/1.1.0-plan.md) remains historical.

## Publication sequence

1. Propose original knowledge through a PR, record significant changes in `CHANGELOG.md`, and resolve the plan's acceptance criteria. Keep restricted reference material, client information and private implementation details out of the public repository.
2. Run `node scripts/check.mjs`. Review conceptual consistency, examples, translations, diagrams, template formulas and licensing as applicable. The automated check alone does not establish correctness.
3. Obtain guardian approval and the required checks under [GOVERNANCE.md](GOVERNANCE.md). Only accepted `main` content may be released. A PR approval authorises acceptance, not an assertion of external certification.
4. When the scope is complete, align the version in `release.json`, `knowledge.json.release`, the editorial edition and affected guide/template labels. Use a prerelease number while review or acceptance is incomplete. Record the release date only at publication.
5. Tag the exact accepted commit with an annotated `vX.Y.Z` tag and create GitHub release notes describing changes, compatibility, limitations, validation and migration where needed. Do not tag a contributor branch as accepted knowledge. Prereleases must be marked as such; drafts must remain drafts.
6. In the website repository, explicitly synchronize the accepted knowledge, confirm its commit and release, run checks, review the generated output and publish the corresponding website release. A stable website must not identify development knowledge as a stable framework release.
7. Verify the public website's release indication, documentation provenance, languages and downloads. Record the website/framework version pair in its notes. If a deployment fails, report that state; a GitHub release is not proof of a successful deployment.

The single-guardian limitation still applies: a guardian-authored PR needs another authorised guardian for independent approval. This release policy does not grant a review bypass or alter repository permissions.
