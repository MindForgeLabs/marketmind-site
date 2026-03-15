# Site information architecture rationalization

This document records the outcome of the MarketMind site IA rationalization so the public site reflects a validation-first platform and exposes only the minimum coherent navigation.

---

## 1. Final public sitemap

**Header (primary navigation):**

- Home → `/`
- Features → `/features`
- Docs → `/docs`
- About → `/about`
- Get Started → `/docs/quickstart` (canonical onboarding)

**Footer groups:**

- **Product:** Features, Integrations (Pricing omitted from footer; page is minimal / “on request” only)
- **Docs & resources:** Documentation (`/docs`), API Reference (`/docs/api`), Guides (`/guides`), Architecture (`/docs/architecture`), Performance (`/performance`)
- **Company:** About, Contact, Security
- **Legal (bottom bar):** Privacy, Terms

---

## 2. Final docs sitemap

Docs sidebar and docs landing page use the same order and labels:

1. Quickstart → `/docs/quickstart`
2. Architecture → `/docs/architecture`
3. API → `/docs/api` (gRPC, REST, WebSocket sub-pages under API)
4. Strategies → `/docs/strategies`
5. Risk → `/docs/risk`
6. Installation → `/docs/installation`
7. Telemetry → `/docs/telemetry`
8. Caching → `/docs/caching`
9. ML Pipeline (planned) → `/docs/ml-pipeline`
10. C++ Runtime (planned) → `/docs/cpp-runtime`

---

## 3. Hidden / internal routes

These routes remain routable but are **not** linked from header, footer, docs landing, or any homepage/header/hero CTA. They have `robots: { index: false }` so they are not indexed as primary public surfaces:

- `/dashboard` — placeholder dashboard (internal)
- `/demo` — schedule-a-demo / Labs (internal)
- `/search` — Labs search (internal)

---

## 4. Pages demoted to footer / secondary

No longer in the primary header; discoverable only via footer or direct URL:

- Guides → `/guides`
- Integrations → `/integrations`
- Architecture (footer link goes to `/docs/architecture`)
- Performance → `/performance`
- Contact → `/contact`
- Security → `/security`
- Privacy → `/privacy`
- Terms → `/terms`

Pricing (`/pricing`) is not linked from the footer because the page is minimal (“pricing on request”); it remains a valid route.

---

## 5. Canonical Get Started destination

**Canonical path:** `/docs/quickstart`

- Header “Get Started” button points to `/docs/quickstart`.
- Marketing quickstart page (`/quickstart`) hands off to `/docs/quickstart` via a primary CTA and copy; the full technical onboarding lives in docs.

---

## 6. Rationale (brief)

- **Validation-first positioning:** The site presents one coherent product (validation-first R&D platform); technical depth lives in docs, not in multiple competing top-level surfaces.
- **Single source of truth for nav:** Header is driven by one component (`Navigation.tsx`); docs IA is defined by the sidebar and mirrored on the docs landing page.
- **Internal surfaces hidden:** Dashboard and Labs are not discoverable from public navigation or CTAs; they remain available for direct or internal use and are noindexed.
- **No deletion of useful routes:** Guides, Performance, Integrations, Contact, Security, Privacy, Terms, and Pricing remain as routes; only their exposure (header vs footer) and CTA targets were changed.
- **Docs as home for depth:** Architecture, API, and all technical topics live under `/docs/*`; footer “Architecture” links to `/docs/architecture` so the main architecture narrative is in docs.
- **Consistent onboarding:** One canonical “Get Started” path (`/docs/quickstart`) so users are sent to the same place from the header and from the marketing quickstart page.
