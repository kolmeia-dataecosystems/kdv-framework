# Guardianship of KDV Framework knowledge

KDV Ecosystems stewards the framework and welcomes public contributions. The project owner designated **ismael-lab** as the initial guardian. This is a working community edition, not an independent standards body's certification programme.

## Decision rights

- Everyone may read, fork, open issues and propose pull requests.
- Guardians review conceptual accuracy, evidence, accessibility, translations and licence compatibility.
- Only designated guardians approve and merge accepted knowledge. CODEOWNERS covers all files, including its own ownership rules and workflows.
- Acceptance requires a passing `knowledge-check`, an up-to-date branch, resolved conversations and a current guardian approval. Administrators are subject to the same review requirements; no bypass actor is configured.
- New content must retain the distinction between an operating practice, its reference lens and a particular product implementation.
- Record significant changes in CHANGELOG.md. A decision may be revisited with new context or evidence.

## Single-guardian operation

The initial bootstrap is an owner-authorised starting edition. After protection is enabled, changes authored by the sole guardian cannot satisfy independent approval. An additional authorised guardian is required to approve those PRs. Community PRs can be reviewed by the initial guardian. Do not quietly disable protection to make an authored change mergeable.

When adding guardians, update repository/organisation permissions, CODEOWNERS and the push/review allowlists coherently. These access changes require the project owner's authorisation. Repository administrators can technically change rules; doing so must be a deliberate, documented governance decision.

## Publication boundaries

Main is accepted knowledge; a PR is a proposal. The website displays a pinned, accepted main revision. Synchronisation and website deployment are explicit release steps, with provenance visible to readers. The website repository contains code and a generated snapshot, not a second editorial source.

The built-in GitHub Wiki is disabled so there is no parallel editing path outside guarded Markdown PRs. Commercial KDV products and services remain distinct from participation in this open knowledge base.
