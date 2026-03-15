# Final Truth-Alignment Sweep Report

**Date:** 2026-03-15  
**Scope:** Files already modified in the overclaim refactor; audit for remaining present-tense leakage, implied current capability, or misleading UX language.

---

## 1. No issues found

The following files were reviewed and required **no further edits**. Wording already correctly separates current vs roadmap, or uses only current-state language.

- **apps/web/src/app/layout.tsx** — Metadata is current-only (validation-first, governed backtesting, run bundles, gate validation). No leakage.
- **apps/web/src/components/layout/Footer.tsx** — "Validation-first algorithmic trading research platform" and "governed backtesting, reproducible run bundles." No roadmap-as-current.
- **apps/web/src/app/(marketing)/page.tsx** — Hero sentence order correct; "delivers" used only for current capabilities (backtesting, run bundles, gate validation); roadmap explicitly labeled; performance/architecture sections use "Illustrative target" and "on the roadmap." No change.
- **apps/web/src/app/(marketing)/features/page.tsx** — Current platform vs Roadmap sections and badges clear; roadmap cards say "Not yet shipped" and "Planned (Phase II/III)." No change.
- **apps/web/src/app/(marketing)/performance/page.tsx** — Top callout and all numeric cards use "Illustrative target" and "Planned (Phase III)." No change.
- **apps/web/src/app/(marketing)/about/page.tsx** — Callout "What we ship today" / "Where we're headed"; lead is validation-first; Technology Principles frame C++/inference as roadmap. No change.
- **apps/web/src/app/(marketing)/architecture/page.tsx** — States current platform and "Full architecture (meta-learning, C++ execution) is documented as roadmap." No change.
- **apps/web/src/app/(docs)/docs/architecture/page.tsx** — After fix: Research & modeling line now says "today" vs "Target (Phase III)." Callout and Phase labels present. No further change.
- **apps/web/src/app/(docs)/docs/cpp-runtime/page.tsx** — Top warning callout present; body describes target design. No change.
- **apps/web/src/app/(docs)/docs/ml-pipeline/page.tsx** and **content/docs/ml-pipeline.mdx** — Callout and "Planned (Phase II)" in place. No change.
- **apps/web/src/app/(docs)/docs/page.tsx** — Metadata current-state. No change.
- **apps/web/src/app/(docs)/docs/desktop/page.tsx** — "No live trading yet" and "Planned (Phase III): Live PnL, real-time positions." No change.
- **apps/web/src/app/(docs)/docs/api/** (page.tsx, grpc, websocket, rest) — Planned labels and "no running inference/streaming service" stated. No change.
- **apps/web/src/app/(docs)/docs/installation/page.tsx** — CUDA/GPU optional, Phase III. No change.
- **CHANGELOG.md** — Descriptive of changes; does not overstate current product. No change.

---

## 2. Leaks fixed

| File path | Original wording | Revised wording | Why the original leaked roadmap-as-current |
|-----------|------------------|-----------------|-------------------------------------------|
| apps/web/src/app/(docs)/docs/strategies/page.tsx | "3. Paper Trading" / "Execute strategies against live market data without sending real orders." | "3. Paper Trading (Planned, Phase III)" / "Target: execute strategies against live market data... Not shipped yet." | Paper trading and live market data are not shipped; read as current capability. |
| apps/web/src/app/(docs)/docs/strategies/page.tsx | "4. Production" / "Deploy to the C++ runtime with full risk controls and observability." | "4. Production (Planned, Phase III)" / "Target: deploy to the C++ runtime... C++ runtime and live execution are not shipped yet." | C++ runtime and production deployment are Phase III; read as current. |
| apps/web/src/app/(docs)/docs/strategies/page.tsx | "Monitor live performance and risk metrics in real time." | "Today: monitor backtest and validation metrics. Live performance monitoring is planned (Phase III)." | Implied we have live performance monitoring today. |
| apps/web/src/app/(docs)/docs/strategies/page.tsx | "Run in paper mode for at least 1–2 weeks before going live." | "Paper mode and live execution are planned (Phase III); not available yet." | Implied paper mode and going live are current options. |
| apps/web/src/app/(docs)/docs/strategies/page.tsx | "Always implement position limits and stop-losses." (standalone) | "Always implement position limits and stop-losses (design target; risk controls are Phase III)." | Risk controls are not shipped; could read as current practice. |
| apps/web/src/app/(marketing)/guides/page.tsx | "Build and deploy your first trading strategy." | "Build and validate your first trading strategy (backtest and gates)." | "Deploy" implies production deployment; only validation/backtest is current. |
| apps/web/src/app/(marketing)/guides/page.tsx | "Train a Transformer model and export it to ONNX." | "Planned (Phase II): Train a Transformer model and export to ONNX. Not shipped yet." | ML training and ONNX export are not shipped. |
| apps/web/src/app/(marketing)/guides/page.tsx | "Production Deployment" / "Deploy strategies to production with confidence." | "Planned (Phase III): Deploy strategies to production. Not available yet." | Production deployment is not current. |
| apps/web/src/app/(labs)/search/page.tsx | ML Pipeline description: "Training, exporting, and deploying ML models." | "Planned (Phase II): Training, export, and deployment of ML models. Not shipped yet." | Read as current ML pipeline capability. |
| apps/web/src/app/(labs)/demo/page.tsx | Eyebrow: "Live Demo" | "Schedule a demo" | "Live" could imply live trading or live product; demos are scheduled walkthroughs. |
| apps/web/src/app/(dashboard)/dashboard/page.tsx | H1: "Live Dashboard" | "Dashboard (placeholder)" | "Live" implied live metrics from a running system; we have placeholder only. |
| apps/web/src/app/(dashboard)/dashboard/page.tsx | Throughput and Win Rate cards (no roadmap label) | Added "Placeholder — roadmap" label above each value, same as Latency card. | Consistency and clarity that no card is production telemetry. |
| apps/web/src/app/(marketing)/integrations/page.tsx | Data Providers and Execution cards with no planned label | Added "Planned (Phase II/III). Partial today: file/Yahoo/FRED daily path." under Data Providers; "Planned (Phase III). No live broker execution today." under Execution. | Cards listed integrations without stating they are planned; readers could assume available today. |
| apps/web/src/app/(docs)/docs/caching/page.tsx | "Supports configurable warmup periods for new deployments." | "Target (roadmap): configurable warmup periods for new deployments." | "Supports" + "deployments" implied we support deployments today. |
| apps/web/src/app/(docs)/docs/risk/page.tsx | "Real-Time Monitoring" / "All risk metrics are tracked in real time and surfaced through:" | "Real-Time Monitoring (Planned, Phase III)" / "Today: backtest and validation results in the desktop dashboard. Target (Phase III): risk metrics tracked in real time..." + roadmap labels on list items. | Implied we have real-time risk monitoring and surfacing today. |
| apps/web/src/app/(docs)/docs/risk/page.tsx | "Built-in Safety Controls" (no phase) | Intro line: "Risk framework (position limits, drawdown protection, kill switch) is target architecture (Phase III). Today: validation gates and backtest discipline." + "(Target, Phase III)" on section heading. | Safety controls could be read as current; they are target design. |
| apps/web/src/app/(docs)/docs/architecture/page.tsx | "Feature engineering, model training, and backtests in Python, exporting models to ONNX for deployment into the C++ runtime." | "Feature engineering and backtests in Python today. Target (Phase III): model training, ONNX export, and deployment into the C++ runtime." | Training, ONNX, and C++ deployment read as current; only backtests are current. |

---

## 3. Borderline wording left intentionally

- **features/page.tsx (Roadmap cards)** — Benefits such as "Real-time monitoring," "GPU acceleration," "ONNX export" appear under cards already labeled "Planned (Phase III)" or "Planned (Phase II)." Left as-is; the badge and "Not yet shipped" make the scope clear.
- **docs/api/websocket/page.tsx** — "Target design: real-time streaming API" and "real-time monitoring." Kept; "Target design" and "Planned (Phase II/III)" at top frame them as future.
- **docs/desktop/page.tsx** — "Redis as a real-time state cache" in Architecture. Left as target/architecture description; desktop page already states "No live trading yet" and Phase III for live features.
- **marketing/security/page.tsx** — "Comprehensive audit trails for configuration changes, deployments, and API calls." "Deployments" here is generic (config/deploy of software), not "live trading deployment." No change.
- **lib/env.ts** — "NODE_ENV: ... production" is technical environment naming, not product claim. No change.

---

## Success criteria check

- **No present-tense for unshipped capabilities:** Addressed in strategies, guides, search, risk, architecture, integrations, dashboard, demo, and caching. Remaining present-tense is only for delivered capabilities (e.g. "delivers governed backtesting").
- **No CTA, badge, metadata, or chart label misleading:** CTAs are "Request Access," "Schedule Deep-Dive Demo," "Run 3-Step Quickstart," "View Technical Docs" — none imply live trading or production deployment. Dashboard and numeric cards labeled placeholder/roadmap/Illustrative target.
- **Current pages read cleanly:** Edits are minimal and localized; no deflation of current platform (validation, backtest, gates, run bundles, stat_arb_pairs slice). Roadmap ambition preserved with explicit Phase II/III labels.
