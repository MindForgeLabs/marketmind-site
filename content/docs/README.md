# Website docs content (source of truth for MDX-backed docs)

This directory is the **source of truth** for documentation pages that are backed by MDX files. Routes under `apps/web` import from here via the `@content/docs/*` alias.

## Current content files

- `index.mdx` – docs index (served at `/docs`)
- `quickstart.mdx` – quickstart guide (`/docs/quickstart`)
- `telemetry.mdx` – telemetry & metrics (`/docs/telemetry`)
- `ml-pipeline.mdx` – ML pipeline overview (`/docs/ml-pipeline`)

## For contributors

- **MDX-backed docs** – Edit the `.mdx` files in this directory. The corresponding route lives under `apps/web/src/app/(docs)/docs/**` and imports from `@content/docs/<name>.mdx`. Do not duplicate content in the app tree.
- **TSX-only docs** – Some doc routes are implemented only as TSX (no MDX file). Those live entirely under `apps/web/src/app/(docs)/docs/**` (e.g. `docs/api`, `docs/architecture`, `docs/caching`). Edit them in place; they are not in `content/docs/`.

No catch-all routing is in use; each doc route is explicit.
