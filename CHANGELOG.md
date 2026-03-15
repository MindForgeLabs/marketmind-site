# Changelog

All notable changes to this website are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- New landing page sections for analytics product positioning
- New MDX case study template
- Storybook stories for pricing and testimonial components

### Changed

- Refined homepage messaging and CTA hierarchy
- Updated navigation structure for Solutions and Resources
- Improved Tailwind tokens for spacing and typography consistency

### Fixed

- Resolved hydration mismatch in interactive dashboard preview
- Fixed mobile overflow on comparison tables
- Corrected MDX heading anchor behavior

### Performance

- Reduced homepage bundle size by code-splitting chart previews
- Improved image loading for hero and case study pages

### SEO

- Updated metadata for product and blog routes
- Added canonical tags for MDX content
- Improved structured data for articles and organization pages

### Analytics

- Added event tracking for primary CTA clicks
- Refined funnel tracking for demo request flow
- Fixed attribution issue on newsletter signup events

### Content

- Published new article on marketing measurement
- Revised product copy for attribution features
- Updated customer proof points and stats

### Design System

- Added Button and StatCard variants
- Updated testimonial carousel styles
- Improved Storybook docs for layout primitives

### Developer Experience

- Added Vitest coverage for MDX utility functions
- Improved App Router route organization
- Refined content authoring workflow

---

## [0.7.1] - 2026-03-15

Docs/content cleanup. Content accuracy and project-doc updates only; no route or structural changes.

### Fixed

- **content/docs/telemetry.mdx**: Replaced incorrect content (was a copy of the ML pipeline doc) with proper Telemetry & metrics copy: observability, metrics, tracing, and logging for MarketMind runtimes. Route `/docs/telemetry` unchanged.

### Changed

- **content/docs/README.md**: Updated to current state. States that this directory is the source of truth for MDX-backed docs; lists `index.mdx`, `quickstart.mdx`, `telemetry.mdx`, `ml-pipeline.mdx`. Added contributor note: MDX-backed docs live here, TSX-only docs remain under `apps/web/src/app/(docs)/docs/**`.
- **README.md** (root): Overview and Project Structure updated to monorepo layout (`apps/web`, `packages/ui`, `packages/domain`, `packages/data-access`, `content/docs`). Entry points and paths (env, tests, API) now reference `apps/web` where applicable. Added “Contributing: docs and content” explaining where to edit MDX vs TSX-only docs.

### Notes

- No routes, catch-all, or new packages. TSX-only docs (api, architecture, caching, cpp-runtime, desktop, installation, python-services, risk, strategies) remain in the app; no migration in this pass.

---

## [0.7.0] - 2026-03-15

Bounded batch migration: all docs routes that matched the quickstart pattern (route-local `page.mdx` + thin `page.tsx` wrapper) now use `content/docs` as source of truth. No URL or routing changes.

### Added

- **content/docs/index.mdx**: Docs index content (MarketMind Documentation, information architecture, where to start). Serves `/docs`.
- **content/docs/telemetry.mdx**: Telemetry doc content (migrated as-is; note: currently mirrors ML pipeline copy; can be updated to proper telemetry copy later). Serves `/docs/telemetry`.
- **content/docs/ml-pipeline.mdx**: ML Pipeline page (component-style MDX). Serves `/docs/ml-pipeline`.

### Changed

- **app/(docs)/docs/page.tsx**: Imports from `@content/docs/index.mdx`.
- **app/(docs)/docs/telemetry/page.tsx**: Imports from `@content/docs/telemetry.mdx`.
- **app/(docs)/docs/ml-pipeline/page.tsx**: Imports from `@content/docs/ml-pipeline.mdx`.

### Removed

- **app/(docs)/docs/page.mdx**
- **app/(docs)/docs/telemetry/page.mdx**
- **app/(docs)/docs/ml-pipeline/page.mdx**

### Notes

- URLs unchanged: `/docs`, `/docs/telemetry`, `/docs/ml-pipeline`, `/docs/quickstart` (already migrated). No catch-all, no new loaders or packages. Remaining docs (api, architecture, caching, cpp-runtime, desktop, installation, python-services, risk, strategies) are TSX-only or custom and left for a later pass if desired.

---

## [0.6.1] - 2026-03-15

Phase 6.1: content-root import cleanup. Replaced brittle relative MDX import with a stable alias; removed the duplicate route-local quickstart MDX.

### Added

- **apps/web/tsconfig.json**: Path alias `@content/*` → `../../content/*` so docs routes can import from the root content tree without deep relative paths.

### Changed

- **app/(docs)/docs/quickstart/page.tsx**: Import updated from `../../../../../../../content/docs/quickstart.mdx` to `@content/docs/quickstart.mdx`. Same behavior and URL.

### Removed

- **app/(docs)/docs/quickstart/page.mdx**: Deleted; `/docs/quickstart` now has a single source of truth at `content/docs/quickstart.mdx`.

### Notes

- No new packages, no catch-all routing, no other docs migrated. Next rollout: apply the same pattern to 1–2 more docs (e.g. telemetry, ml-pipeline) using `@content/docs/…`.

---

## [0.6.0] - 2026-03-15

Phase 6: single-doc docs/content unification proof. `/docs/quickstart` now renders its content from `content/docs/quickstart.mdx` while keeping the existing route and URL.

### Added

- **content/docs/quickstart.mdx**: Copied MDX content for the Quickstart guide into the root `content/docs` tree as the emerging single source of truth for this doc.

### Changed

- **app/(docs)/docs/quickstart/page.tsx**: Instead of importing a local `./page.mdx`, the route now imports `content/docs/quickstart.mdx` so the `/docs/quickstart` page is backed by the shared content root. Metadata and URL remain unchanged.

### Notes

- Phase 6.1 removed the duplicate `app/(docs)/docs/quickstart/page.mdx` and introduced the `@content/*` alias.

---

## [0.5.1] - 2026-03-15

Stabilization and cleanup. No behavior or route changes.

### Fixed

- **Stale comment** in `app/(docs)/docs/api/page.tsx`: removed outdated `// src/app/docs/api/page.tsx` path comment.
- **Tailwind content globs** in `apps/web/tailwind.config.ts`: removed dead `./src/pages/`** and `./src/content/**` (no such dirs in apps/web); kept `./src/app/**` and `./src/components/**`.
- **Vitest setup path** in `vitest.config.ts`: `setupFiles` now uses `path.resolve(dirname, 'apps/web/vitest.setup.tsx')` so the setup file is found when tests run from root or apps/web.

### Deferred

- README structure/entry-point wording (broader doc update).
- CHANGELOG version reorder; Storybook package aliases; root vs apps/web components.json (intentional).

---

## [0.5.0] - 2026-03-15

Phase 5: route surface normalization. Reorganized `apps/web/src/app` into Next.js route groups so the route structure reflects product surfaces. All public URLs and behavior unchanged.

### Changed

- **app/(marketing)/**: Home `page.tsx` and segments `about`, `architecture`, `contact`, `features`, `guides`, `integrations`, `performance`, `pricing`, `privacy`, `quickstart`, `security`, `terms` moved under route group `(marketing)`. URLs unchanged: `/`, `/about`, `/architecture`, etc.
- **app/(docs)/docs/****: Entire `docs` tree moved under route group `(docs)`. URLs unchanged: `/docs`, `/docs/quickstart`, `/docs/api`, etc.
- **app/(labs)/**: `demo` and `search` moved under route group `(labs)`. URLs unchanged: `/demo`, `/search`.
- **app/(dashboard)/dashboard/****: `dashboard` moved under route group `(dashboard)`. URL unchanged: `/dashboard`.
- **app/api/****: Left at app root (no route group). `/api/health` unchanged.

### Notes

- Root `layout.tsx`, `globals.css`, and `favicon.ico` remain at `app/`. No catch-all docs routing, no dashboard or API logic changes, no new packages. Build and tests pass.

---

## [0.3.1] - 2026-03-15

Phase 3: docs/content unification scaffold. Introduced root `content/` as the future single source of truth for website docs and related content. No route-coupled docs were moved; no routing or loaders changed.

### Added

- **content/docs/** with `README.md`: States this is the future source of truth for website docs; current docs remain in `apps/web/src/app/docs/`** during transition.
- **content/research/** with `README.md`: Placeholder for research notes and long-form content.
- **content/benchmarks/** with `README.md`: Placeholder for benchmark results and performance content.
- **content/changelog/** with `README.md`: Placeholder for site-facing changelog content if needed; repo `CHANGELOG.md` stays canonical.

### Notes

- No behavior changes. All `/docs/*` routes and content under `apps/web/src/app/docs/`** are unchanged. A later phase can migrate content into `content/docs/`, add loaders, and optionally a catch-all docs route.

---

## [0.4.0] - 2026-03-15

Phase 4: domain and data-access package boundaries. Introduced `packages/domain` and `packages/data-access` with minimal scaffolding and folder structure. One low-risk type moved into domain; route handlers and app logic unchanged.

### Added

- **packages/domain**: `package.json`, `tsconfig.json`, `src/index.ts`, and folders `src/market/`, `src/signals/`, `src/strategies/`, `src/backtests/`, `src/models/` with placeholder index files. **packages/domain/src/models/metrics.ts** defines and exports `MetricsResponse` (latencyP95Ms, throughputPerSec, winRate, deltas).
- **packages/data-access**: `package.json`, `tsconfig.json`, `src/index.ts`, `src/cache-tags.ts` (exports `CACHE_TAGS`), and folders `src/queries/`, `src/repositories/`, `src/adapters/` with placeholder index files.
- **apps/web**: Dependency `@marketmind/domain` (file link to packages/domain); tsconfig path for `@marketmind/domain`. Root tsconfig and vitest.config alias for `@marketmind/domain` so TypeScript and tests resolve the package.

### Changed

- **apps/web/src/lib/hooks/useLiveMetrics.ts**: Removed local `MetricsResponse` type; now imports `MetricsResponse` from `@marketmind/domain`. Hook implementation and fetch logic remain in the app.

### Notes

- No API routes or dashboard logic rewritten. No auth or api-client packages. Domain and data-access do not import from apps/web. Build and tests should still pass; run `npm install` from repo root or apps/web to link the new package.

---

## [0.3.0] - 2026-03-15

Phase 2: shared UI primitives moved into `packages/ui`. App-shell, navigation, layout, and docs/dashboard-specific components remain in `apps/web`. No docs/content unification, route restructure, or new domain/data-access packages.

### Added

- **packages/ui** (`@marketmind/ui`): New shared primitive package with `package.json`, `tsconfig.json`, and source under `src/`.
- **packages/ui/src/utils.ts**: Minimal `cn` helper (clsx + tailwind-merge) so the package is app-agnostic and does not import from apps/web.
- **packages/ui/src/components/****: Badge, Button, Card (with CardHeader, CardContent), Input, Skeleton—moved from apps/web and updated to use local `../utils`.
- **packages/ui/src/index.ts**: Single export surface for Badge, Button, ButtonProps, Card, CardHeader, CardContent, Input, InputProps, Skeleton, and cn.
- **apps/web**: Dependency `"@marketmind/ui": "file:../../packages/ui"` and tsconfig path `"@marketmind/ui": ["../../packages/ui/src/index.ts"]` for resolution.
- **Root tsconfig.json** and **vitest.config.ts**: Path/alias for `@marketmind/ui` so TypeScript and Vitest resolve the package when editing or running tests from root.

### Changed

- **apps/web/src/app/page.tsx**, **apps/web/src/app/performance/page.tsx**, **apps/web/src/app/docs/architecture/page.tsx**: Imports for Button and Card switched from `@/components/ui/button` and `@/components/ui/card` to `@marketmind/ui`.
- **apps/web/src/components/ui/Button.test.tsx**: Import for Button switched from `@/components/ui/button` to `@marketmind/ui`; test remains in apps/web.

### Removed

- **apps/web/src/components/ui/** (primitives only): Deleted `badge.tsx`, `button.tsx`, `card.tsx`, `input.tsx`, `skeleton.tsx`. Layout (Nav, Footer), Navigation, and Button.test.tsx remain in apps/web.

### Developer Experience

- Reusable primitives live in `packages/ui`; app-local shell, layout, and route-specific components stay in `apps/web`. No Storybook move; no Phase 3 work.

### Notes

- Run `npm install` from repo root or from `apps/web` so `node_modules/@marketmind/ui` is linked to `packages/ui`. Then `npm run dev`, `npm run build`, and `npm run test` from root should pass.

---

## [0.2.0] - 2026-03-15

Monorepo migration: Next.js app moved from repository root into `apps/web`. Root becomes a thin wrapper; canonical app, config, and tests live under `apps/web`. No product or route changes; repair-only for move-related breakage.

### Added

- `apps/web/` as the single Next.js application container (package.json, tsconfig, Next/Tailwind/PostCSS config, MDX components, and app source).
- Idempotent PowerShell migration script `migrate-app-to-apps-web.ps1` at repo root to perform the physical move (src → apps/web/src, public → apps/web/public, and root app-local config/helpers into apps/web) and to remove obsolete root duplicates after successful moves.
- `apps/web/.gitignore` for `.next`, `node_modules`, and `out`.

### Changed

- **Root package.json**: Converted to a thin wrapper; all scripts delegate to `apps/web` via `npm run <script> --prefix apps/web`. Removed root dependencies; app dependencies now live only in `apps/web/package.json`.
- **Root tsconfig.json**: Paths and include updated so that `@/*`, `@/components/*`, `@/lib/*`, and `@marketmind/*` resolve to `./apps/web/src/*` and include targets `apps/web/next-env.d.ts` and `apps/web/src/**/*.ts(x|d.ts)`.
- **Next config**: Single active config is `apps/web/next.config.ts` (MDX, security headers, Turbopack root, image formats). Removed root `next.config.ts` and `next.config.mjs` after merge.
- **Content-Security-Policy**: Fixed unterminated string in `apps/web/next.config.ts` (`form-action` and `base-uri` directives) so Next loads the config without syntax error.
- **Vitest (root vitest.config.ts)**: Resolve aliases updated so `@` and `@marketmind` point at `apps/web/src` when running tests from root or from apps/web.
- **Vitest Storybook (vitest.sb.config.ts)**: Resolve aliases updated so `@marketmind` and `@marketmind/*` point at `apps/web/src` (was incorrectly `src` at root).
- **Storybook (.storybook at root)**: Stories path set to `../apps/web/src/**/*.stories.@(ts|tsx|mdx)`; Vite alias `@marketmind` set to `../apps/web/src`. Preview global CSS import fixed from non-existent `../src/styles/globals.css` to `../apps/web/src/app/globals.css`.
- **Shadcn (components.json)**: Root `components.json` tailwind config and css paths updated to `apps/web/tailwind.config.ts` and `apps/web/src/app/globals.css`. `apps/web/components.json` kept with paths relative to apps/web.
- **Vitest setup**: `vitest.setup.tsx` moved to `apps/web/vitest.setup.tsx` so Vitest (invoked with config at root but run from apps/web context) finds the setup file and tests pass.

### Fixed

- **API route layout**: Removed accidentally nested `apps/web/src/app/api/api/`** routes (equity-curve, metrics, positions, strategies, health) that would have exposed `/api/api/*` instead of `/api/*`. Canonical routes remain under `apps/web/src/app/api/*` so `/api/health`, `/api/equity-curve`, etc. behave as before.
- **next.config.ts parse error**: Corrected CSP array string quoting so `next dev` and `next build` load config successfully.
- **Vitest “Cannot find module … vitest.setup.tsx”**: Resolved by placing setup file in `apps/web/` and keeping root vitest config’s setup path valid when run from apps/web.
- **Storybook/Vitest alias**: `@marketmind` now resolves to `apps/web/src` so Storybook and test:sb resolve imports after the move.

### Removed

- Root-level app code and duplicate configs after move: `src/`, `public/`, `next.config.ts`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `mdx-components.tsx`, `next-env.d.ts` (all either moved into apps/web or deleted once canonical versions existed under apps/web).
- Duplicate API route files under `apps/web/src/app/api/api/` (five route handlers removed to restore single-level `/api/`* URLs).

### Developer Experience

- All app source, tests, and app-local config live under `apps/web`; root is script-and-tooling only.
- Verification from repo root: `npm run dev`, `npm run build`, `npm run test` delegate to apps/web and succeed; `npm run test:sb` uses updated aliases.
- Single Next config and single app package reduce ambiguity for editors and CI.

### Notes

- Duplicate-page warnings for docs (e.g. `page.mdx` and `page.tsx` resolving to the same route) are pre-existing and were not changed in this release.
- No Phase 2 work (UI extraction, docs/content unification, packages, route groups) was done; this release is move and repair only.

---

## [0.1.8] - 2025-11-18

Trigger Vercel rebuild after setting CI environment variable for Lightning CSS WASM fallback.

### Ops / CI

- No code changes; this release exists to trigger a new deployment now that
`LIGHTNINGCSS_FORCE_WASM=1` is configured in Vercel Project Settings.
- Expectation: Vercel builds proceed without native `.node` binding errors
from Tailwind/Lightning CSS, using the WASM backend instead.

## [0.1.7] - 2025-11-18

Tailwind/Lightning CSS toolchain hardening for cross‑platform development and CI builds.

### Changed

- Pinned Tailwind v4 toolchain to aligned versions to avoid oxide/loader mismatches.

### Removed

- Explicit platform‑specific native packages from `web/package.json` to prevent `EBADPLATFORM` on Windows/macOS.

## [0.1.6] - 2025-11-18

Fix Vercel/Turbopack build error due to missing Lightning CSS native binding.

### Fixed

- Production build on Vercel failed with missing `lightningcss.linux-x64-gnu.node`; added `lightningcss` as direct dependency in `web/package.json`.

## [0.1.5] - 2025-11-18

Next.js App Router typing cleanup for docs layout and MDX-backed routes.

### Changed

- `web/src/app/docs/layout.tsx` now strictly accepts `{ children }` only.

### Fixed

- Removed invalid layout props and ensured all `metadata` exports are typed as `Metadata` from `next`.

## [0.1.4] - 2025-11-18

Documentation restructure and TypeScript hygiene fixes.

### Added

- New UI components and tests; MDX typings and TS wrappers for docs pages.

### Changed

- Moved documentation pages into `web/src/app/docs/`; updated README and package files.

### Fixed

- Resolved TypeScript errors (Button variant, MDX route resolution).

## [0.1.3] - 2025-11-18

Cleanups to achieve a warning-free Phase 1 baseline.

### Added

- `turbopack.root` in `web/next.config.ts` for correct workspace root.

### Fixed

- Migrated ESLint to flat config; replaced `<a>` with `next/link` in Navigation; resolved Vitest and Turbopack warnings.

## [0.1.2] - 2025-11-18

Incremental documentation and configuration cleanup following Phase 1 foundation.

### Changed

- Expanded README with verification checklist, Quick Start, scripts, and deployment notes.

### Fixed

- Security headers CSP quoting in `web/next.config.ts`; lint/type-check scripts.

## [0.1.1] - 2025-11-18

Phase 1 Production Foundation for the `web/` app.

### Added

- Zod env schema, `.env.example`, Prettier config, sample Vitest test; tightened TS and path aliases; Next config with MDX and security headers; Tailwind theme and Vitest aliases.

## [0.1.0] - 2025-11-18

Initial scaffold: Next.js site structure, API routes, core React pages, documentation and marketing scaffold.