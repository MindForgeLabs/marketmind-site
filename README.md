# MarketMind Site

Modern marketing/analytics site built with Next.js App Router, TypeScript, Tailwind CSS, MDX content, Vitest testing, and Storybook for UI docs.

This README documents the stack, requirements, commands, environment variables, tests, and structure. Unknowns are marked as TODOs.

## Overview

- App router pages under `src/app` with MDX support for docs (e.g., `src/app/docs/...`).
- Tailwind CSS for styling with a custom theme and Geist fonts via `next/font`.
- Storybook for component development/documentation.
- Vitest for unit tests (with JSDOM). Optional browser/UI runners available.
- Basic API route example at `src/app/api/positions/route.ts`.

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

Environment variables are validated in `src/lib/env.ts` using `zod`.

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
- Add more env vars as features expand; update `src/lib/env.ts` schema accordingly.

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
- Setup files: `vitest.setup.tsx` (Testing Library, globals), plus optional Storybook testing config `vitest.sb.config.ts`.
- Example tests live under `src/components/__tests__` and `src/components/ui/*.test.tsx`.

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
├─ src/
│  ├─ app/                  # Next.js App Router (routes, layouts, API)
│  │  ├─ layout.tsx         # Root layout
│  │  ├─ page.tsx           # Home page
│  │  ├─ api/positions/     # Example API route
│  │  └─ docs/              # MDX/TSX docs pages
│  ├─ components/           # UI components and tests
│  ├─ lib/                  # Utilities (e.g., env validation)
│  └─ stories/              # Storybook stories and assets
├─ public/                  # Static assets
├─ next.config.ts           # Next.js config + security headers + MDX
├─ tailwind.config.ts       # TailwindCSS config
├─ postcss.config.mjs       # PostCSS config
├─ eslint.config.mjs        # ESLint config
├─ tsconfig.json            # TypeScript config
├─ vitest.config.ts         # Vitest (node/jsdom) config
├─ vitest.sb.config.ts      # Vitest config for Storybook
├─ vitest.setup.tsx         # Vitest setup
├─ components.json          # Shadcn/tailwind glue (css path)
├─ package.json             # Scripts and dependencies
└─ CHANGELOG.md             # Project change history
```

Entry points:
- App Router root: `src/app/layout.tsx`, `src/app/page.tsx`
- API routes: under `src/app/api/*/route.ts`
- Docs: `src/app/docs/*` (MDX supported)

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
