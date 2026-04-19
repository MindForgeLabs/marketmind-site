# Site IA Rationalization

This note is superseded by `docs/site-simplification-map.md`.

The current public surface is intentionally smaller:

- Marketing: `/`, `/features`, `/about`, `/contact`, `/security`, `/privacy`, `/terms`
- Docs: `/docs` and explicit child routes backed by `content/docs`
- API: `/api/health`

Removed or merged public routes are handled by redirects in `apps/web/next.config.ts`.
