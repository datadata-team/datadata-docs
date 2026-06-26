# Repository Guidelines

## Runtime Requirements

- **Node.js ≥ 26** (`engines` field in `package.json`)
- **pnpm ≥ 11** (configured via `packageManager` field; `devEngines.onFail: "download"` will auto-download the correct version)

## Project Structure

```txt
├── docs/                  # Source content (guides, API reference)
│   ├── guides/            # User-facing guides (MDX)
│   │   ├── intro.mdx              # Platform overview
│   │   ├── getting-started/       # Quick start
│   │   ├── querying/              # SQL/DQL querying, charts, exports
│   │   ├── dql/                   # DQL language reference (.md, with images)
│   │   ├── dashboards/            # Dashboard creation
│   │   ├── datasources/           # DB connections, data spaces, uploads
│   │   └── ai-skills/             # MCP server, CLI, agent skills
│   └── api/
│       ├── api-key/               # Manual API key guide
│       └── openapi/               # GENERATED — do NOT edit manually
├── src/
│   ├── components/        # Shared UI components
│   ├── css/               # Global styles (custom.css, openapi.css)
│   ├── hooks/             # Custom hooks (use-inside-iframe)
│   ├── infra/             # JSON-RPC bridge for iframe embedding
│   ├── pages/             # Landing page, markdown pages
│   └── theme/             # Swizzled theme components (iframe support)
├── i18n/                  # Translation files (en, zh-Hans)
├── static/                # Static assets (images, favicon)
├── blog/                  # Blog posts (currently empty)
├── docusaurus.config.ts   # Site configuration
├── sidebars.ts            # Documentation sidebar layout
└── assets/                # Raw assets (e.g., OpenAPI specs)
```

Content lives in `docs/` as `.mdx` files. API reference pages are generated from OpenAPI specs (stored in `assets/`) using `docusaurus-plugin-openapi-docs`. Custom React components go in `src/components/`. Translation overrides for each locale reside under `i18n/<locale>/docusaurus-plugin-content-docs/`.

## Build, Test, and Development

| Command                   | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| `pnpm dev`                | Start local dev server with hot reload     |
| `pnpm build`              | Build static site into `build/`            |
| `pnpm build:dev`          | Faster dev build (for debugging)           |
| `pnpm serve`              | Serve the built site locally               |
| `pnpm typecheck`          | Run TypeScript type checking               |
| `pnpm gen-api-docs`       | Regenerate all API docs from OpenAPI specs |
| `pnpm clean-api-docs`     | Remove all generated API docs              |
| `pnpm clear`              | Clear Docusaurus cache                     |
| `pnpm write-translations` | Sync UI strings into i18n code.json        |

The default locale is `zh-Hans`; pass `--locale en` to preview English during development.

## Key Configuration

- **`onBrokenLinks: "warn"`** — broken internal links warn but don't fail the build. Stale links can accumulate.
- **`future: { v4: true }`** — Docusaurus v4 compatibility mode is active.
- **Base URL**: defaults to `/datadata-docs`, overridable via `BASE_URL` env var. Deploys to `https://datadata-team.github.io`.
- **`tsconfig.json`** is NOT used by the Docusaurus build itself — it's only for IDE type-checking and the `pnpm typecheck` script. Build can succeed even if typecheck fails.
- **Mermaid** is configured (`markdown: { mermaid: true }`, `@docusaurus/theme-mermaid` plugin) and ready to use in any `.mdx` file.
- **LaTeX math** is enabled via `remark-math` + `rehype-katex`. KaTeX CSS is loaded from CDN (`cdn.jsdelivr.net`), not bundled.
- **Blog** is configured but has no posts (blog navbar link is commented out).

## Theme Overrides (iframe embedding)

All 4 swizzled theme components serve a single purpose: hiding/adapting UI when the site is loaded inside an iframe.

| Override                                 | Behavior                                 |
| ---------------------------------------- | ---------------------------------------- |
| `src/theme/Footer/index.tsx`             | Returns `null` inside iframe             |
| `src/theme/Layout/index.tsx`             | Injects `<EmbedService />` inside iframe |
| `src/theme/Navbar/Layout/`               | Strips navbar content inside iframe      |
| `src/theme/Navbar/MobileSidebar/Header/` | Returns `null` inside iframe             |

The `EmbedService` (`src/infra/embed/`) sets up a JSON-RPC 2.0 bridge between the iframe and parent window, handling `open-external`, `color-mode-change`, and `toggle-mobile-sidebar` messages. The JSON-RPC layer (`src/infra/jsonrpc-over-post-message/`) is a general-purpose RPC implementation — reusable beyond the embed use case.

## Coding Style and Naming

- **TypeScript** with strict mode enabled. Avoid `any` — prefer explicit types.
- **MDX** for documentation pages. Use `.mdx` extension when including JSX, Mermaid diagrams, or images. Use `.md` for pure Markdown reference pages (e.g., DQL API reference).
- **Files and directories** use `kebab-case` (e.g., `returns-a-list-of-users.api.mdx`).
- **CSS** is centralized in `src/css/custom.css` and `src/css/openapi.css`; avoid inline styles.
- Formatting is enforced via VS Code `formatOnSave`. Run `pnpm typecheck` before committing.

### Documentation Frontmatter

```yaml
---
sidebar_position: <number>
title: <Chinese title>
description: <Chinese description>
---
```

### MDX Features

- **Mermaid diagrams**: use fenced code blocks with ` ```mermaid ` in any `.mdx` file
- **LaTeX math**: `$...$` for inline, `$$...$$` for blocks
- **Images**: import via `import ImageX from './path.png'` and render with `<img src={ImageX.src} />` (see `docs/guides/dql/canvas/` for examples)
- **Admonitions**: use `:::tip`, `:::note`, `:::warning` blocks
- **Cross-references**: use `/docs/guides/...` paths (absolute from site root)

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

**Current translation coverage**: guides at `i18n/en/.../guides/` only cover `intro.mdx`, `getting-started/`, `querying/`, and `dashboards/`. The following sections are **not yet translated**: `ai-skills/`, `dql/`, `datasources/`. API docs are also not translated.

## API Documentation

API reference pages are generated from OpenAPI 3.0 YAML specs placed in `assets/`. After adding or updating a spec:

1. Register it in `docusaurus.config.ts` under the `docusaurus-plugin-openapi-docs` configuration.
2. Run `pnpm gen-api-docs` to regenerate the `.api.mdx` pages under `docs/api/`.
3. Review the generated output with `pnpm dev` — **do not edit generated `.api.mdx` files by hand**. Any manual edits will be overwritten on the next generation.

## Pitfalls

- **`docs/api/openapi/` is auto-generated** — never edit files in this directory directly.
- **`i18n/en/.../current.json`** contains stale Docusaurus boilerplate labels ("Tutorial - Basics", "petstore") inherited from scaffolding. Clean these up when touching sidebar translations.
- **`build/` is gitignored** but may appear in directory listings if built locally. Always run `pnpm build` fresh before deployment.
- **`pnpm-workspace.yaml`** explicitly blocks native builds for `postman-code-generators` — do not remove this restriction without understanding the reason.
- **Node 26 is bleeding edge** — if CI or local setup fails on older Node versions, check the Node version first.
