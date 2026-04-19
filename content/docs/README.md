# Website docs content

This directory is the source of truth for published documentation content. Routes under `apps/web/src/app/(docs)/docs/**` should be thin wrappers that import these MDX files via the `@content/docs/*` alias.

## Current content files

- `index.mdx` - docs index (`/docs`)
- `quickstart.mdx` - current onboarding (`/docs/quickstart`)
- `architecture.mdx` - current boundaries and future lanes (`/docs/architecture`)
- `api.mdx` - current and planned API surfaces (`/docs/api`)
- `strategies.mdx` - strategy research boundaries (`/docs/strategies`)
- `risk.mdx` - research gates and planned risk controls (`/docs/risk`)
- `installation.mdx` - workspace setup (`/docs/installation`)
- `telemetry.mdx` - artifact and future runtime observability (`/docs/telemetry`)
- `caching.mdx` - cache and provenance rules (`/docs/caching`)
- `ml-pipeline.mdx` - planned allocator and training lane (`/docs/ml-pipeline`)
- `cpp-runtime.mdx` - planned C++ runtime (`/docs/cpp-runtime`)

## For contributors

- Edit published docs here, not in the app route tree.
- Keep app route files small: metadata plus `return <Content />`.
- Put internal claim audits and ownership notes in `docs/`, not here.

No catch-all routing is in use; each public doc route is explicit.
