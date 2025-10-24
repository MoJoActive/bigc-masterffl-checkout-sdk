### Contributing

Thanks for contributing! This project uses Conventional Commits to automate versioning, changelog generation, and GitHub releases via semantic-release.

### Commit message format

Each commit message MUST be structured as:

```
<type>(<optional scope>): <short summary>

<optional body>

<optional footer(s)>
```

- **type**: one of `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- **scope** (optional): the area of the codebase, e.g. `standalone`, `checkout`, `types`, `build`, etc.
- **summary**: imperative, lowercased, concise description
- **body** (optional): motivation, context, and contrasts. Wrap at ~72 chars.
- **footer(s)** (optional): metadata such as `BREAKING CHANGE:` or issue references like `Closes #123`.

### Examples

- `feat(checkout): add FFL dealer search component`
- `fix(standalone): handle null storeConfig response`
- `docs: clarify SDK initialization sequence`
- `refactor: split config loader into smaller functions`
- `perf(checkout): memoize store credit calculation`
- `test: add unit tests for sdk.ts`
- `build: pin vite to v5.4`
- `ci: run semantic-release on main`
- `chore: update README examples`
- `revert: feat(checkout): add FFL dealer search component`

### Breaking changes

Breaking changes must be explicitly called out so semantic-release can bump the major version.

Two supported ways:

1) In the footer (recommended):
```
feat(checkout): migrate to new selection flow

BREAKING CHANGE: remove deprecated onDealerSelected prop in favor of onSelect
```

2) With an exclamation mark after type/scope:
```
feat(checkout)!: remove deprecated onDealerSelected prop
```
You can still include a `BREAKING CHANGE:` footer to describe the migration.

### Versioning rules (semantic-release)

- **feat** → MINOR version bump (e.g., 0.1.0 → 0.2.0)
- **fix** → PATCH version bump (e.g., 0.1.0 → 0.1.1)
- **BREAKING CHANGE** (footer or `!`) → MAJOR version bump (e.g., 0.1.0 → 1.0.0)
- Other types (`docs`, `chore`, `refactor`, etc.) do not trigger a release by themselves unless combined with a `BREAKING CHANGE`.

### Referencing issues and PRs

Add references in footers when relevant:

```
fix(standalone): guard against undefined config

Closes #123
```

### PR guidelines

- Keep PRs focused and small when possible.
- Ensure `npm run build` passes locally.
- Use clear titles that mirror the primary commit.
- Include context, screenshots, or reproduction steps when helpful.

### Local workflow tips

- Start a feature branch from `main`.
- Use Conventional Commits for each logical change.
- Squash merging is fine as long as the final squash message follows the Conventional Commits format.

### Release process (automated)

Merges to `main` trigger the GitHub Action to:
- Analyze commits and determine the next version
- Update `CHANGELOG.md` and `package.json`
- Create a GitHub Release with built `dist` assets

No manual tagging is necessary; just follow the commit conventions.
