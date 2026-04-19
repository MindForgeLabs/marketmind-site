# MarketMind Site

MarketMind public site and docs for a governed research substrate. The current story is validation-first research infrastructure, not a validated adaptive allocator or live execution platform.

This README documents the stack, requirements, commands, environment variables, tests, and structure. Unknowns are marked as TODOs.

## Overview

- Next.js app in **apps/web** (App Router, MDX support for docs).
- Shared packages: **packages/ui** and **packages/domain**.
- Docs content: MDX-backed docs live in **content/docs**; routes in `apps/web` import via `@content/docs/*`.
- Tailwind CSS for styling with a custom theme and Geist fonts via `next/font`.
- Storybook for shared UI primitive documentation.
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

Define variables in a `.env.local` file in `apps/web/` (Next.js loads from the app directory; not committed):

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

## Deployment (Vercel)

The repo is an npm **workspaces** monorepo (`apps/*`, `packages/*`). The Next.js app is in **apps/web** and imports shared UI primitives from **packages/ui**. **packages/domain** is retained for shared domain types as that surface grows.

1. **Root Directory:** Leave **blank** (use repo root). So the full repo is deployed and workspace packages are available.
2. **Install:** Root `vercel.json` uses `npm install` at repo root, which installs all workspaces (including `apps/web` and `packages/ui`), so shared primitives resolve.
3. **Build:** `npm run build` runs the root script, which builds the app in `apps/web`. Output is `apps/web/.next`.

Do **not** set Root Directory to `apps/web`—that can omit `packages/` and cause "Module not found" for `@marketmind/ui` dependencies (e.g. `clsx`, `tailwind-merge`, `@radix-ui/react-slot`).

## Tests

- Test runner: Vitest (`vitest.config.ts`) with `jsdom` environment.
- Setup files: `apps/web/vitest.setup.tsx` (Testing Library, globals), plus optional Storybook testing config `vitest.sb.config.ts`.
- Example tests live under `apps/web/src/components/__tests__` and `packages/ui/src/components/*.test.tsx`.

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

Storybook documents the real shared primitives from `packages/ui/src/components`. App-specific composed components stay under `apps/web/src/components`.

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
│     ├─ src/components/       # App-specific composed components and tests
│     ├─ src/lib/              # Utilities (e.g., env validation)
│     ├─ next.config.ts
│     ├─ tailwind.config.ts
│     ├─ postcss.config.mjs
│     └─ package.json
├─ packages/
│  ├─ ui/                      # Shared UI primitives
│  └─ domain/                  # Domain types and models
├─ content/
│  └─ docs/                    # Published docs source of truth
├─ docs/                       # Internal repo/site governance notes only
├─ .storybook/                 # Storybook config (root)
├─ vitest.config.ts            # Vitest config (root)
├─ package.json                # Root workspace scripts
├─ package-lock.json           # Canonical npm lockfile
└─ CHANGELOG.md
```

Entry points:
- App: `apps/web/src/app/layout.tsx`, `apps/web/src/app/page.tsx`
- API routes: `apps/web/src/app/api/*/route.ts` (e.g. `/api/health`)
- Docs routes: `apps/web/src/app/(docs)/docs/**`; published MDX content in `content/docs/`

### Contributing: docs and content

- Published docs live in **content/docs/**. Edit those files; the route under `apps/web/src/app/(docs)/docs/**` imports from `@content/docs/<name>.mdx`.
- Internal governance and claim-audit notes live in **docs/** and are not treated as a second public docs source.
- Keep public claims in one of four buckets: what exists today, why it matters, what is proposed, and what must be proven.

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
- `apps/web/next.config.ts` sets common security headers (HSTS, X-Frame-Options, CSP skeleton).
- TODO: tighten CSP and `connect-src` as external services are added (analytics, RPC endpoints, etc.).

## License

TODO: Add a license file (e.g., `LICENSE`) and specify the chosen license here.

## Learn More

- Next.js Documentation: https://nextjs.org/docs
- Learn Next.js Tutorial: https://nextjs.org/learn
- Storybook: https://storybook.js.org/docs
- Vitest: https://vitest.dev/guide/
