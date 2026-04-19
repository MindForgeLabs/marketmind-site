# Site Simplification Map

Date: 2026-04-19

## 1. Keep / Merge / Delete Map

### Keep

- `apps/web` - single public app owner for marketing, docs routes, API health route, layout, and app-specific composed components.
- `apps/web/src/app/(marketing)` - high-level public pages only: home, features, about, contact, security, privacy, terms.
- `apps/web/src/app/(docs)` - explicit docs routes that render published content from `content/docs`.
- `apps/web/src/components/layout` and `apps/web/src/components/Navigation.tsx` - app-specific composed navigation and footer.
- `packages/ui` - reusable primitives only: button, card, badge, input, skeleton.
- `packages/domain` - retained for shared domain types, but not expanded.
- `content/docs` - published docs source of truth.
- `content/research`, `content/benchmarks`, `content/changelog` - reserved content roots.
- `docs` - internal repo/site governance, claim audits, and refactor records.
- Root `package.json`, `package-lock.json`, `vercel.json`, and `components.json` - canonical workspace, lockfile, deployment, and component config owners.

### Merge

- `/architecture` -> `/docs/architecture`.
- `/quickstart` and `/guides*` -> `/docs/quickstart`.
- `/integrations` -> `/docs/api`.
- `/performance` -> `/docs/telemetry`.
- `/pricing` -> `/contact`.
- `/docs/api/grpc`, `/docs/api/rest`, `/docs/api/websocket` -> `/docs/api`.
- `/docs/desktop`, `/docs/python-services` -> `/docs/architecture`.
- TSX-only docs content -> `content/docs/*.mdx`; app route files are now wrappers.
- Storybook demo components -> stories beside real `packages/ui` primitives.

### Delete

- Placeholder `/dashboard` route and dashboard layout.
- Weak labs routes: `/demo`, `/search`, and labs layout.
- Duplicate marketing pages that overlapped docs: architecture, quickstart, guides, integrations, performance, pricing.
- Separate protocol docs pages for REST, gRPC, and WebSocket.
- App-local Storybook scaffold components, CSS, and assets under `apps/web/src/stories`.
- App-local `components/ui` test folder; button test moved to `packages/ui`.
- App-local `components.json`, app-local `vercel.json`, and app-local `package-lock.json`.
- Unused `packages/data-access` placeholder package.
- Empty placeholder package directories for `packages/analytics`, `packages/config`, `packages/docs-engine`, and `packages/viz-core`.
- Unused dashboard polling hook and app-local `src/lib/utils.ts`.

## 2. Proposed Final Tree

```text
apps/web
  src/app
    (marketing)
      about
      contact
      features
      privacy
      security
      terms
      page.tsx
    (docs)
      docs
        api
        architecture
        caching
        cpp-runtime
        installation
        ml-pipeline
        quickstart
        risk
        strategies
        telemetry
        layout.tsx
        page.tsx
    api
      health
    globals.css
    layout.tsx
  src/components
    layout
    Navigation.tsx
  src/lib
    env.ts
  src/types

packages/ui
  src/components
    badge.tsx
    button.tsx
    card.tsx
    input.tsx
    skeleton.tsx
    *.stories.tsx
    button.test.tsx
  src/index.ts
  src/utils.ts

packages/domain
  src

content
  docs
  research
  changelog
  benchmarks

docs
  internal site governance and claim-audit notes only
```

## 3. Exact Moves / Renames

- `apps/web/src/app/(docs)/docs/architecture/page.tsx` content moved to `content/docs/architecture.mdx`; route replaced with wrapper.
- `apps/web/src/app/(docs)/docs/api/page.tsx` content moved to `content/docs/api.mdx`; route replaced with wrapper.
- `apps/web/src/app/(docs)/docs/strategies/page.tsx` content moved to `content/docs/strategies.mdx`; route replaced with wrapper.
- `apps/web/src/app/(docs)/docs/risk/page.tsx` content moved to `content/docs/risk.mdx`; route replaced with wrapper.
- `apps/web/src/app/(docs)/docs/installation/page.tsx` content moved to `content/docs/installation.mdx`; route replaced with wrapper.
- `apps/web/src/app/(docs)/docs/caching/page.tsx` content moved to `content/docs/caching.mdx`; route replaced with wrapper.
- `apps/web/src/app/(docs)/docs/cpp-runtime/page.tsx` content moved to `content/docs/cpp-runtime.mdx`; route replaced with wrapper.
- `apps/web/src/components/ui/Button.test.tsx` moved to `packages/ui/src/components/button.test.tsx`.
- `apps/web/src/stories/Button.stories.ts` replaced by `packages/ui/src/components/button.stories.tsx`.
- App Storybook examples for Header/Page and their assets were deleted rather than moved because they documented demo-only components.

## 4. Import / Path Updates

- Docs route files import `@content/docs/<slug>.mdx`.
- `apps/web/src/app/(marketing)/page.tsx` links now point to `/docs/architecture` and `/docs/telemetry`.
- Footer links now point to canonical docs pages and no longer link removed marketing duplicates.
- `.storybook/main.cjs` reads stories from `../packages/ui/src/**/*.stories.@(ts|tsx|mdx)`.
- Storybook and storybook-vitest aliases map `@marketmind/ui` to `packages/ui/src/index.ts`.
- `apps/web/tailwind.config.ts` scans `../../packages/ui/src/**/*.{ts,tsx}` so shared primitive classes are included.
- Root scripts use `npm run <script> --workspace web`.
- Root `vercel.json` builds with `npm run build --workspace web`.
- Root `components.json` is the only components config and points UI ownership at `@marketmind/ui`.

## 5. Route / Redirect Map

| Removed or merged route | Destination | Permanent |
| --- | --- | --- |
| `/architecture` | `/docs/architecture` | yes |
| `/quickstart` | `/docs/quickstart` | yes |
| `/guides` | `/docs/quickstart` | yes |
| `/guides/:path*` | `/docs/quickstart` | yes |
| `/integrations` | `/docs/api` | yes |
| `/performance` | `/docs/telemetry` | yes |
| `/pricing` | `/contact` | yes |
| `/dashboard` | `/docs` | no |
| `/demo` | `/contact` | no |
| `/search` | `/docs` | no |
| `/docs/api/grpc` | `/docs/api` | yes |
| `/docs/api/rest` | `/docs/api` | yes |
| `/docs/api/websocket` | `/docs/api` | yes |
| `/docs/desktop` | `/docs/architecture` | yes |
| `/docs/python-services` | `/docs/architecture` | yes |

## 6. Claim Alignment Note

The final site now has one public narrative: MarketMind is a governed research substrate with PIT-safe data handling, leakage-aware validation, deterministic artifacts, canonical provenance, and statistical/governance gates. The adaptive allocator is framed as a future candidate that must beat simpler baselines and pass governance before promotion. Live execution, broker rollout, production telemetry, C++/GPU runtime, and protocol surfaces are described as planned or proposed, not current product truth.

## 7. Intentionally Deferred

- `packages/domain` remains thin. It is kept as the intended owner for shared domain types, but no new abstractions were added.
- `content/research`, `content/benchmarks`, and `content/changelog` remain reserved content roots. They are not rendered as public docs yet.
- No generic docs engine package was introduced.
- Empty analytics, config, docs-engine, and viz-core package placeholders were removed. Recreate them only after real shared code exists.
- No dashboard or labs replacement was built. Those surfaces were removed from the public app until there is substantive functionality.
- No new data-access package was retained. It can be reintroduced only when real shared data access code exists.
