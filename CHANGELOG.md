# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project adheres to Semantic Versioning (SemVer).

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
