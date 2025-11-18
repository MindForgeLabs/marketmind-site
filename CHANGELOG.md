# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project adheres to Semantic Versioning (SemVer).

## [0.1.5] - 2025-11-18

Next.js App Router typing cleanup for docs layout and MDX-backed routes.

### Changed
- `web/src/app/docs/layout.tsx` now strictly accepts `{ children }` only; removed previously used props to align with App Router layout contracts.

### Fixed
- TS71005: Removed invalid layout props `title`, `description`, and `className` from the docs layout.
- TS71008: Ensured all `metadata` exports are typed as `Metadata` from `next` (verified in page TSX wrappers and root layout).
- Removed untyped `export const metadata = { ... }` blocks from MDX files where TSX wrappers already provide typed metadata:
  - `web/src/app/docs/page.mdx`
  - `web/src/app/docs/quickstart/page.mdx`
  - `web/src/app/docs/telemetry/page.mdx`

### Verification
- `npm run -w web type-check` — no TypeScript errors reported.

### Notes
- Page-specific titles/descriptions should be set via typed `metadata` in TSX pages or layouts; presentational headings live in the MDX/TSX content.

## [0.1.6] - 2025-11-18

Fix Vercel/Turbopack build error due to missing Lightning CSS native binding.

### Fixed
- Production build on Vercel failed with:
  - `Error: Cannot find module '../lightningcss.linux-x64-gnu.node'` when processing `web/app/globals.css` via Tailwind v4 PostCSS pipeline.
- Root cause: `@tailwindcss/postcss` (Tailwind CSS v4) expects `lightningcss` to be available, but it was not explicitly declared in the `web/` package, so Vercel's install did not include the platform-native binding.

### Changed
- Added `lightningcss@^1.27.0` as a direct dependency in `web/package.json` so CI installs the required native binding for the deployment platform.

### Verification
- `npm run build` at repo root (delegates to `web`) now succeeds locally with Turbopack: compile, TypeScript, page data, static generation, and optimization all pass.
- This should unblock Vercel builds as the dependency is now present during install.

## [0.1.4] - 2025-11-18

Documentation restructure and TypeScript hygiene fixes.

### Added
- New UI components and tests under `web/src/components` (e.g., Badge, Button, Card, Input, Skeleton, and layout components like `Footer` and `Nav`).
- Lightweight TS wrappers for MDX-backed docs pages so Next/TS can resolve routes:
  - `web/src/app/docs/ml-pipeline/page.tsx`
  - `web/src/app/docs/telemetry/page.tsx`
- MDX module typings at `web/src/types/mdx.d.ts` and `web/tsconfig.json` includes updated to pick up `*.d.ts`.

### Changed
- Moved documentation pages and layout from `app/` and `src/app/` into `web/src/app/docs/`, converting several `.tsx` pages to `.mdx` where appropriate.
- Updated README and package files to reflect the new structure and MDX-backed docs.

### Fixed
- Resolved 4 TypeScript errors in the web app:
  - TS2322: replaced unsupported `variant="outline"` with `"ghost"` on `Button` in:
    - `web/src/app/performance/page.tsx`
    - `web/src/app/docs/architecture/page.tsx`
  - TS2307: Next’s generated types could not resolve moved docs routes now authored in MDX; added TS wrappers and MDX typings as noted above.
- `npm run -w web type-check` now passes cleanly; `/docs/ml-pipeline` and `/docs/telemetry` routes resolve via their MDX-backed wrappers.

### Removed
- Obsolete documentation files from previous locations (`app/`, `src/app/`) that were superseded by the new `web/src/app/docs/` structure.

## [0.1.3] - 2025-11-18

Cleanups to achieve a warning-free Phase 1 baseline and smoother DX.

### Added
- `turbopack.root` in `web/next.config.ts` to correctly point Turbopack at the repository root when multiple lockfiles exist.

### Changed
- Hardened `web` lint script to pass explicit config and ignores so `.next/**` is never linted.
- Documentation updates in `README.md` to reflect flat ESLint config usage and current scripts.

### Fixed
- Migrated ignore patterns to flat config (`eslint.config.mjs`) and removed deprecated `.eslintignore`, silencing ESLint v9 deprecation warnings.
- Replaced navigational `<a>` with `next/link` in `web/src/components/Navigation.tsx` to satisfy `@next/next/no-html-link-for-pages`.
- Eliminated Vitest warning "Received true for a non-boolean attribute jsx" by conditionally rendering the Storybook demo `<style jsx>` block only outside test environment.
- Resolved Turbopack workspace root warning due to multiple lockfiles via `turbopack.root`.

## [0.1.2] - 2025-11-18

Incremental documentation and configuration cleanup following Phase 1 foundation.

### Added
- Verification checklist in `README.md` for lint, type-check, test, and build.

### Changed
- Expanded `README.md` with Phase 1 summary, Quick Start update to copy `.env.example` → `.env.local`, detailed scripts (`lint:next`, `type-check`, `format`), environment variable validation via Zod, TypeScript path aliases, testing setup, project structure, deployment notes, and caveats.

### Fixed
- Security headers CSP string quotes in `web/next.config.ts` (simplified/normalized quoting inside the `Content-Security-Policy` header value).
- Lint/type-check scripts in `web/package.json`: switched to `eslint .`, added `lint:next`, and made `type-check` run `eslint . && tsc --noEmit`.

### Notes
- Deployment guidance clarified: in Vercel, set Project Root Directory to `web/` to resolve "No Next.js version detected" when the repo root lacks a `next` dependency. Also included troubleshooting tips (cache clear, lockfiles, Node version).

## [0.1.1] - 2025-11-18

Phase 1 Production Foundation for the `web/` app. Commit message: `chore: phase 1 production foundation`.

### Added
- Zod-based environment variable schema at `web/src/lib/env.ts` with typed `env` export.
- Example env file `web/.env.example` documenting required keys (no secrets).
- Prettier config `web/.prettierrc` and updated scripts for formatting and type-checking.
- Sample unit test `web/src/components/ui/Button.test.tsx` to verify Vitest wiring.

### Changed
- Tightened TypeScript in `web/tsconfig.json`: `strict`, `noUncheckedIndexedAccess`, `noImplicitReturns`, `noUnusedLocals`, `noUnusedParameters`, `forceConsistentCasingInFileNames`.
- Added module path aliases in `web/tsconfig.json` for `@/*`, `@/components/*`, `@/lib/*`.
- Next.js config `web/next.config.ts`: enabled MDX via `@next/mdx`, `reactStrictMode: true`, modern image formats, and baseline security headers (HSTS, X-Frame-Options, CSP skeleton, Referrer-Policy, Permissions-Policy).
- Tailwind theme in `web/tailwind.config.ts`: `darkMode: "class"`, expanded content globs, brand colors, fonts, radius; wired `@tailwindcss/forms` and `@tailwindcss/typography`.
- Vitest config `web/vitest.config.ts`: added `@/` aliases, jsdom env, setup file.
- `web/package.json` scripts: `lint` (eslint .), `lint:next` (next lint), `type-check` (eslint + tsc --noEmit), `format` (prettier --write .), and consolidated test scripts.

### Notes
- Build verification: `cd web && npm run lint && npm run type-check && npm run test && npm run build` — all succeeded locally.
- Next 16 may warn about multiple lockfiles when the repo root also contains a scaffold; the runnable app is under `web/`.
- CSP is a minimal starting point and will be refined in a later phase.

## [0.1.0] - 2025-11-18

Inferred version bump: minor (new features and scaffolding added; no explicit breaking changes were indicated).

### Added
- PowerShell script to scaffold a Next.js site structure for MarketMind, including documentation, API reference, features, integrations, company, and legal pages.
- Initial API route handlers and core React pages for dashboard, navigation, and live metrics, establishing a foundation for a production-ready web interface and developer documentation.
- Full documentation and marketing scaffold.

### Changed
- Clarified Next.js App Router usage.
- Expanded package manager and deployment notes.
- Added Storybook static build instructions.
- Detailed environment variable conventions and Storybook/Vitest integration.

### Removed
- Deleted several Next.js route files and documentation pages under `web/src/app`, including API endpoints and docs for architecture, caching, C++ runtime, desktop, installation, ML pipeline, Python services, and risk, to clean up the codebase.

---

Repository: https://github.com/MindForgeLabs/marketmind-site (default branch: `main`)

Note: Commit hashes/links are omitted because hashes were not provided with the commit summaries. If you share the short hashes, we will add direct links to each change.
