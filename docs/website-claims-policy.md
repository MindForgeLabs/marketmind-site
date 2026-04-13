# Website Claims Policy

This document defines editorial rules for all externally visible copy on the MarketMind site. It prevents overclaims and regression. Canonical truth for what is delivered comes from the MarketMind repo docs (README, ImplementationPlan, TechnicalRoadmap, WhitePaper, MetaLearningCore), not aspirational site copy.

## Rules

1. **Present tense only for delivered capabilities.** Use present tense only for features and behavior that exist in the current codebase and are documented as shipped in the repo docs. Everything else must be future-framed or explicitly tagged (e.g. "planned", "roadmap", "Phase II", "Phase III").

2. **All latency numbers need measured provenance or an explicit "illustrative" / "target" label.** Do not publish latency, throughput, or benchmark figures as if they were production telemetry unless they are from measured runs with documented provenance. Any roadmap or design targets must be prefixed or labeled (e.g. "Illustrative target:", "design target", "roadmap").

3. **Future execution / ML / runtime language must be roadmap-tagged.** Any claim about live execution, GPU inference, C++ runtime, ML training pipelines, ONNX export, streaming data, live broker integration, or meta-learning allocator must include at least one of: "planned", "roadmap", "Phase II", "Phase III", or equivalent. Avoid soft present-tense verbs ("supports", "powers", "delivers", "enables") for capabilities that are not shipped.

4. **Canonical truth sources are the MarketMind repo docs.** When in doubt, check README.md, ImplementationPlan.md, TechnicalRoadmap.md, WhitePaper.md, MetaLearningCore.md, and MetaLearningArchitectureVision.md for what is delivered vs. planned. Do not invent telemetry or performance evidence. Current canonical companion versions: Implementation Plan v6.5.2 · Technical Roadmap v1.4.23 · Meta-Learning Core v1.2.21 · Meta-Learning Architecture Vision v1.3.2 · Resolution Ledger v1.0.46.

5. **Claim classification.** Every externally visible statement should be classifiable as one of:
   - **CURRENT:** May use present tense; only for delivered capabilities.
   - **ROADMAP:** Must include "planned," "roadmap," "Phase II," or "Phase III."
   - **VISION:** Clearly future-framed and not sound deployable now.
   - **PLACEHOLDER/REMOVE:** Delete if it implies evidence or capability that does not exist.

6. **Phase II-0 vs Phase II distinction.** Phase II-0 is non-promotable validation scaffolding (active). Phase II is promotable adaptive-learning machinery (conditional, not yet built). Do not describe Phase II-0 scaffolding as if it were shipped Phase II machinery. The label "Phase II-0" may appear on the site with a clear explanation (e.g., "non-promotable scaffolding" or "validation harness scaffolding"). Do not imply that Phase II-0 activity means the meta-learning allocator is delivered or that promotion is imminent.

7. **Banned wording as current-state descriptors.** Unless explicitly future-labeled, avoid describing the platform as: ultra-low-latency platform, HFT runtime, production execution, live broker integration, live trading operations, real-time inference engine, GPU inference runtime, deployed meta-learning allocator, production telemetry, streaming market data platform.

8. **Visible "Current vs Roadmap" pattern on key pages.** For homepage, features, performance, about, docs architecture, docs ML pipeline, and docs C++ runtime, use at least one of: section headers ("Current platform" / "Roadmap"), badges on cards ("Available now" / "Planned"), or a top callout ("Current scope" / "Target architecture"). Do not bury caveats in paragraph three.

9. **Hero and key landing copy.** The first sentence must state what the product is today. The second sentence must state what it helps users do today. Only then add roadmap or vision. Prefer "validation-first systematic trading research platform" (or similar); avoid "ultra-low-latency trading platform" as a current-state category.

## Audit checklist

When adding or editing copy, audit:

- Page metadata titles and descriptions
- Hero eyebrow text
- Stat cards
- CTA button text
- Section subtitles
- Footer summaries
- Test expectations
- Placeholder dashboard metrics
- Docs intro blurbs

Even if body copy is fixed, a title or CTA that overclaims still violates this policy.
