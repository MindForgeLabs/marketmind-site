export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About MarketMind</h1>

        {/* Current scope vs Where we're headed */}
        <div className="mb-12 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90 mb-2">
            What we ship today
          </p>
          <p className="text-sm text-slate-300 mb-4">
            MarketMind is a validation-first algorithmic trading R&D platform focused on governed backtesting, reproducibility, and gate validation. We deliver auditable run bundles, fail-closed validation, PIT-safe backtesting, and the first trusted strategy slice (stat_arb_pairs) on the canonical path.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90 mb-2">
            Where we&apos;re headed
          </p>
          <p className="text-sm text-slate-400">
            The roadmap includes meta-learning allocation, ML training pipelines, C++/GPU inference, live data feeds, and broker integration (Phase II/III). These are not shipped today.
          </p>
        </div>

        <section className="mb-12">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Validation-first algorithmic trading R&D platform focused on governed backtesting, reproducibility, and gate validation.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Built by quants and engineers, for quants and engineers. The platform is designed to enable
            systematic strategy development with transparent, auditable results and measurable validation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Principles</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              MarketMind uses a multi-language architecture. Today: Python for orchestration and backtesting, Java for the desktop UI. On the roadmap: C++ for inference, expanded observability, and TypeScript for the web — each optimized for its role when those phases ship.
            </p>
            <p>
              Every feature is designed with observability and safety in mind. Canonical truth for what is delivered comes from the MarketMind repo docs (README, Implementation Plan, Technical Roadmap), not aspirational site copy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-slate-300">
            Interested in collaborating or using MarketMind?{" "}
            <a href="/contact" className="text-emerald-400 hover:underline">
              Get in touch
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
