# Repository Guidelines

## Project Structure

```
├── docs/                  # Source content (guides, API reference)
│   ├── guides/            # User-facing guides (MDX)
│   └── api/               # OpenAPI-generated API docs
├── src/                   # React components and pages
│   ├── components/        # Shared UI components
│   ├── css/               # Global styles (custom.css)
│   └── pages/             # Landing and standalone pages
├── i18n/                  # Translation files (en, zh-Hans)
├── static/                # Static assets (images, favicon)
├── blog/                  # Blog posts
├── docusaurus.config.ts   # Site configuration
├── sidebars.ts            # Documentation sidebar layout
└── assets/                # Raw assets (e.g., OpenAPI specs)
```

Content lives in `docs/` as `.mdx` files. API reference pages are generated from OpenAPI specs (stored in `assets/`) using `docusaurus-plugin-openapi-docs`. Custom React components go in `src/components/`. Translation overrides for each locale reside under `i18n/<locale>/docusaurus-plugin-content-docs/`.

## Build, Test, and Development

| Command             | Purpose                                    |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Start local dev server with hot reload     |
| `pnpm build`        | Build static site into `build/`            |
| `pnpm serve`        | Serve the built site locally               |
| `pnpm typecheck`    | Run TypeScript type checking               |
| `pnpm gen-api-docs` | Regenerate all API docs from OpenAPI specs |
| `pnpm clear`        | Clear Docusaurus cache                     |

Node.js 26 and pnpm 11+ are required. The default locale is `zh-Hans`; pass `--locale en` to preview English during development.

## Coding Style and Naming

- **TypeScript** with strict mode enabled. Avoid `any` — prefer explicit types.
- **MDX** for documentation pages. Use `.mdx` extension when including JSX, Mermaid diagrams, or LaTeX math (`$...$` for inline, `$$...$$` for blocks).
- **Files and directories** use `kebab-case` (e.g., `returns-a-list-of-users.api.mdx`).
- **CSS** is centralized in `src/css/custom.css`; avoid inline styles.
- Formatting is enforced via VS Code `formatOnSave`. Use `pnpm typecheck` before committing.

## Testing Guidelines

Type correctness is the primary validation mechanism. Run `pnpm typecheck` to catch type errors across all source files. For OpenAPI-generated pages, verify output by running `pnpm gen-api-docs` followed by a local preview (`pnpm dev`). There is no test runner configured — add one (e.g., Vitest) before introducing unit or integration tests.

## Commit and Pull Request Guidelines

- **Commit messages** should be concise and descriptive, written in English, with a capital first letter and no trailing period. Prefix with a scope when helpful (e.g., `docs: add API key guide`, `fix: correct sidebar link`).
- **Pull requests** target the `master` branch. Include a summary of changes, reference any related issues, and add screenshots for UI or layout changes. CI automatically builds and deploys to GitHub Pages on merge.

## Internationalization

This site supports `en` and `zh-Hans`. When adding or updating a doc page:

1. Write the original in `docs/` (defaults to `zh-Hans`).
2. Create an English copy under `i18n/en/docusaurus-plugin-content-docs/current/`.
3. Run `pnpm write-translations --locale en` to sync UI strings into `i18n/en/code.json`.

## API Documentation

API reference pages are generated from OpenAPI 3.0 YAML specs placed in `assets/`. After adding or updating a spec:

1. Register it in `docusaurus.config.ts` under the `docusaurus-plugin-openapi-docs` configuration.
2. Run `pnpm gen-api-docs` to regenerate the `.api.mdx` pages under `docs/api/`.
3. Review the generated output with `pnpm dev` — do not edit generated `.api.mdx` files by hand.
