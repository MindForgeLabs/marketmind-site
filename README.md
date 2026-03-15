# MarketMind Site

Modern marketing/analytics site built with Next.js App Router, TypeScript, Tailwind CSS, MDX content, Vitest testing, and Storybook for UI docs.

This README documents the stack, requirements, commands, environment variables, tests, and structure. Unknowns are marked as TODOs.

## Overview

- Next.js app in **apps/web** (App Router, MDX support for docs).
- Shared packages: **packages/ui**, **packages/domain**, **packages/data-access**.
- Docs content: MDX-backed docs live in **content/docs**; routes in `apps/web` import via `@content/docs/*`.
- Tailwind CSS for styling with a custom theme and Geist fonts via `next/font`.
- Storybook for component development/documentation.
- Vitest for unit tests (with JSDOM). Optional browser/UI runners available.
- Example API route: `apps/web/src/app/api/health/route.ts`.

## Tech Stack

- Language: TypeScript
- Framework: Next.js `16.x` (App Router)
- React: `19.x`
- Styling: Tailwind CSS `4.x`, `@tailwindcss/forms`, `@tailwindcss/typography`
- MDX: `@next/mdx` (App Router MDX pages)
- Testing: Vitest `4.x`, Testing Library (`@testing-library/react`, `jest-dom`), optional `@vitest/ui`
- Storybook: `^10` (Next.js + Vite builder)
- RPC/Client libs: `@connectrpc/*` (web client) [not yet wired end-to-end]
- Build tooling: Vite for tests, ESLint `^9`, Prettier `^3`

## Requirements

- Node.js >= 18.18 (LTS) or >= 20 recommended
- npm (project ships with `package-lock.json`)
  - You can use `pnpm`/`yarn`/`bun` if desired, but npm is the default in this repo

## Getting Started (Development)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables (see Environment Variables below).

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Visit http://localhost:3000

## Environment Variables

Environment variables are validated in `apps/web/src/lib/env.ts` using `zod`.

Define variables in a `.env.local` file at the project root (not committed):

```dotenv
# Public site URL used for metadata/canonicals
NEXT_PUBLIC_SITE_URL=https://localhost:3000

# Optional analytics domain (when enabling Plausible)
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=marketmind.ai

# Optional Sentry DSN for error reporting
# SENTRY_DSN=https://<key>@o<org>.ingest.sentry.io/<project>
```

Notes:
- `NODE_ENV` is handled by tooling (no need to set manually).
- Add more env vars as features expand; update `apps/web/src/lib/env.ts` schema accordingly.

## Scripts

All available scripts from `package.json`:

- `dev`: Run Next.js dev server
- `build`: Production build (`.next`)
- `start`: Start production server (after `build`)
- `lint`: Run ESLint
- `type-check`: TypeScript type check (no emit)
- `format`: Prettier write
- `storybook`: Start Storybook on port 6006
- `build-storybook`: Build static Storybook site
- `test`: Run Vitest (node) once
- `test:watch`: Run Vitest in watch mode
- `test:unit`: Run only unit tests (project `unit`)
- `test:ui`: Run Vitest with UI
- `test:ci`: Run Vitest with coverage (CI)
- `test:sb`: Run Vitest against Storybook config

Common workflows:

```bash
# Lint and type-check
npm run lint && npm run type-check

# Run unit tests and coverage
npm run test
npm run test:ci

# Storybook (components sandbox)
npm run storybook
```

## Build and Run (Production)

```bash
npm run build
npm run start
```

The default port is `3000`. Customize with `PORT=xxxx` when supported by your environment (e.g., hosting platform).

## Tests

- Test runner: Vitest (`vitest.config.ts`) with `jsdom` environment.
- Setup files: `apps/web/vitest.setup.tsx` (Testing Library, globals), plus optional Storybook testing config `vitest.sb.config.ts`.
- Example tests live under `apps/web/src/components/__tests__` and `apps/web/src/components/ui/*.test.tsx`.

Run commands:

```bash
npm run test           # one-off
npm run test:watch     # watch mode
npm run test:ui        # Vitest UI
npm run test:ci        # coverage
```

Browser/E2E testing:
- `playwright` is present in devDependencies but no test suite is configured yet. TODO: add Playwright tests and document commands.

## Storybook

Start Storybook locally:

```bash
npm run storybook
```

Build static Storybook:

```bash
npm run build-storybook
```

## Project Structure

High-level layout (selected paths):

```
.
├─ apps/
│  └─ web/                     # Next.js app (App Router, MDX, API)
│     ├─ src/app/              # Routes, layouts, API
│     ├─ src/components/       # UI components and tests
│     ├─ src/lib/              # Utilities (e.g., env validation)
│     ├─ next.config.ts
│     ├─ tailwind.config.ts
│     ├─ postcss.config.mjs
│     └─ package.json
├─ packages/
│  ├─ ui/                      # Shared UI primitives
│  ├─ domain/                  # Domain types and models
│  └─ data-access/             # Data layer (cache tags, etc.)
├─ content/
│  └─ docs/                    # MDX source of truth for docs (quickstart, telemetry, ml-pipeline, index)
├─ .storybook/                 # Storybook config (root)
├─ vitest.config.ts            # Vitest config (root)
├─ package.json                # Root scripts (delegate to apps/web)
└─ CHANGELOG.md
```

Entry points:
- App: `apps/web/src/app/layout.tsx`, `apps/web/src/app/page.tsx`
- API routes: `apps/web/src/app/api/*/route.ts` (e.g. `/api/health`)
- Docs: `apps/web/src/app/(docs)/docs/**`; MDX content in `content/docs/` imported via `@content/docs/*`

### Contributing: docs and content

- **MDX-backed docs** live in **content/docs/** (e.g. `quickstart.mdx`, `telemetry.mdx`, `ml-pipeline.mdx`, `index.mdx`). Edit those files; the route under `apps/web/src/app/(docs)/docs/**` imports from `@content/docs/<name>.mdx`.
- **TSX-only docs** (no MDX file) live only under `apps/web/src/app/(docs)/docs/**` (e.g. api, architecture, caching, installation). Edit them in place.

## Linting & Formatting

```bash
npm run lint
npm run format
npm run type-check
```

## Deployment

- Next.js production server via `npm run start` after `npm run build`.
- Suitable for hosting on Vercel, Node-based hosts, or containers. See official docs:
  - Next.js deployment: https://nextjs.org/docs/app/building-your-application/deploying

Headers & Security:
- `next.config.ts` sets common security headers (HSTS, X-Frame-Options, CSP skeleton).
- TODO: tighten CSP and `connect-src` as external services are added (analytics, RPC endpoints, etc.).

## License

TODO: Add a license file (e.g., `LICENSE`) and specify the chosen license here.

## Learn More

- Next.js Documentation: https://nextjs.org/docs
- Learn Next.js Tutorial: https://nextjs.org/learn
- Storybook: https://storybook.js.org/docs
- Vitest: https://vitest.dev/guide/
