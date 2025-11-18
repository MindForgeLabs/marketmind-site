Marketmind Site

Overview
- Frontend web application built with Next.js (app router) and TypeScript.
- UI styling with Tailwind CSS and MDX support.
- Component development and docs via Storybook.
- Unit testing with Vitest, Testing Library, and jsdom.

Repository layout
- Root contains scaffolding and shared configuration files. The runnable web app lives in the web/ package.

Stack
- Language: TypeScript, JSX/TSX
- Framework: Next.js 16 (in web/)
- UI: Tailwind CSS 4, MDX via @next/mdx
- Charts: recharts
- Testing: Vitest + @testing-library/react + jsdom
- Component docs: Storybook 10
- RPC/Client libs present: @connectrpc/connect, @connectrpc/connect-web
- Package manager: npm (package-lock.json committed). Yarn/pnpm may work but are not configured here.

Requirements
- Node.js: 18+ (Next.js 16 requires Node 18 or newer; 20+ recommended)
- npm: 9+ (bundled with Node)
- Browsers for Storybook/testing UI
- Optional: Playwright for browser-based Vitest runs
- TODO: Specify exact Node version and any system dependencies if required (e.g., Image Optimization binaries)

Quick start (web app)
1. Install dependencies for the web package:
   ```bash
   cd web
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.

Scripts (web/)
- `npm run dev` — start Next.js dev server
- `npm run build` — production build
- `npm run start` — start built app
- `npm run lint` — run ESLint
- `npm run storybook` — start Storybook at http://localhost:6006
- `npm run build-storybook` — build static Storybook
- `npm run test` — run Vitest (node/jsdom environment)
- `npm run test:unit` — run unit tests in Vitest pool named "unit"
- `npm run test:ui` — launch Vitest UI
- `npm run test:ci` — run tests with coverage (V8) suitable for CI
- `npm run test:sb` — run tests with Storybook config

Entry points
- App router entry: `web/src/app/page.tsx`
- Next.js config: `web/next.config.ts` (with MDX enabled)
- Tailwind: `web/tailwind.config.ts`, styles in `web/src/app/globals.css` (per `components.json`)
- Storybook config: `web/.storybook/main.cjs` (+ `preview` files if present)
- Vitest config: `web/vitest.config.ts` and `web/vitest.sb.config.ts`

Environment variables
- Next.js reads `.env`, `.env.local`, `.env.development`, etc. in the `web/` folder.
- The project includes `@t3-oss/env-nextjs` for typed env vars, but no schema file is documented in this README.
- TODO: Document required variables, their defaults, and example `.env.local`.

Testing
- Unit tests: Vitest with jsdom and Testing Library
  - Setup file: `web/vitest.setup.tsx` (mocks Next.js modules and JSDOM gaps)
  - Run: `cd web && npm run test`
- UI mode: `npm run test:ui` (Vitest UI)
- Coverage: `npm run test:ci` (text + lcov via V8)
- Storybook testing: `npm run test:sb`
  - Note: Storybook config integrates with Vitest via `@storybook/addon-vitest`.

Storybook
- Start with `cd web && npm run storybook` then open http://localhost:6006
- Stories live under `web/src/**/*.stories.@(ts|tsx|mdx)`

Project structure (selected)
```
.
├─ README.md                # This file
├─ app/                     # Root scaffold (not wired to scripts)
├─ src/                     # Root scaffold (not wired to scripts)
├─ web/                     # Main Next.js app package
│  ├─ package.json          # Scripts and dependencies
│  ├─ next.config.ts        # Next.js config with MDX
│  ├─ src/
│  │  └─ app/               # App router pages (e.g., page.tsx)
│  ├─ .storybook/           # Storybook configuration
│  ├─ vitest.config.ts      # Vitest config
│  ├─ vitest.sb.config.ts   # Vitest config for Storybook
│  └─ vitest.setup.tsx      # Test environment setup
└─ tools/, rtd/, public/, etc.
```

Setup notes and caveats
- Install and run commands from `web/` unless you know you need the root scaffold.
- The repository contains a minimal Next.js scaffold at the root (`app/`, `next.config.ts`), but the root `package.json` does not declare Next.js dependencies, so the runnable app is under `web/`.
- Some test setup files under `.storybook/` may be for Storybook-specific runs.
- TODO: Confirm whether the root scaffold should be kept or removed.

Deployment
- Standard Next.js deployment applies for the `web/` package (e.g., Vercel).
- Build with `cd web && npm run build`; start with `npm run start`.
- TODO: Provide deployment target(s), environment variables, and secrets for each environment.

License
- TODO: Add project license (e.g., MIT) and copyright notice.

References
- Next.js docs: https://nextjs.org/docs
- Storybook docs: https://storybook.js.org/docs
- Vitest docs: https://vitest.dev
