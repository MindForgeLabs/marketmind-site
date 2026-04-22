export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">About MarketMind</h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          A research platform built on the premise that the validation infrastructure is the hard part — and that getting it right before building anything adaptive is the only honest path forward.
        </p>

        {/* Status callout */}
        <div className="mb-14 rounded-lg border border-slate-700 bg-slate-900/50 p-6 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90 mb-2">
              What ships today
            </p>
            <p className="text-sm text-slate-300">
              A governed research substrate: auditable run bundles, fail-closed gate validation, point-in-time-safe backtesting, and the first trusted strategy slices on the canonical path. Phase 0 and Phase I are complete and frozen. The Phase II artifact contract, data governance charter, and threshold governance register are documented and enforced.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90 mb-2">
              Active research (Phase II-A)
            </p>
            <p className="text-sm text-slate-400">
              Phase II-0 is complete as the non-promotable bridge. Six bounded Phase II-C evidence lanes — task construction, encoder coherence, curriculum sampling, Reptile training, K-budget behavior, proxy–IC alignment, and EWC forgetting robustness — are closed with provisional thresholds. The W1 baseline harness is now open: a governed XGBoost incumbent stub that the meta-learning allocator must demonstrably beat before any promotion occurs. Phase II-A (Task Substrate &amp; Validity Closure) is the current forward phase. GATE-II remains deferred; no allocator promotion has occurred.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
              Conditional roadmap
            </p>
            <p className="text-sm text-slate-500">
              A promotable meta-learning allocator (Phase II), C++/GPU inference and live execution (Phase III), and signal-factory automation at scale (Phase IV) — each conditional on the previous phase producing the required evidence. None of these are shipped today.
            </p>
          </div>
        </div>

        {/* Core thesis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The core idea</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The most durable edge in quantitative trading doesn&apos;t come from a single brilliant model. It comes from combining many weak, diverse signals — and from having a system smart enough to know which combinations are working right now, as market conditions shift. That&apos;s the insight behind the Renaissance Medallion Fund: no individual signal is exceptional, but a sufficiently diverse portfolio of them, continuously recombined by a learner that understands the current regime, can produce returns that no single signal delivers on its own.
            </p>
            <p>
              That thesis is easy to state. It is extraordinarily hard to test honestly. MarketMind is an attempt to make honest testing tractable — to build the infrastructure that lets you know whether an adaptive system is actually working, or just fitting noise.
            </p>
          </div>
        </section>

        {/* Why validation first */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why the validation infrastructure comes first</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Most algorithmic trading research is easier to do than it is to trust. Leakage creeps in through look-ahead in data splits, mislabeled time boundaries, or results that can&apos;t be reproduced from canonical inputs. These aren&apos;t exotic failure modes — they&apos;re the norm in research that treats the backtest as the product and the validation infrastructure as an afterthought.
            </p>
            <p>
              MarketMind inverts that. The research substrate — point-in-time data access, artifact provenance, fail-closed statistical gates — is the primary deliverable. Every run produces a versioned, reproducible evidence bundle. Gate checks are fail-closed: they either pass with documented thresholds or they fail explicitly. Nothing graduates to the next phase by default.
            </p>
            <p>
              That architecture also makes the eventual goal more credible. An adaptive allocator that lives on top of a leaky research stack is a system you can&apos;t trust. One that lives on top of an auditable, gate-validated substrate is a system you can actually evaluate.
            </p>
          </div>
        </section>

        {/* The burden of proof */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The burden of proof is on the complex system</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The null hypothesis is simple: the added complexity of a meta-learning allocator does not deliver measurable net benefit over a well-constructed, regime-conditioned simpler baseline. The burden of proof falls on the more complex architecture — not on the skeptic.
            </p>
            <p>
              This shapes how Phase II is structured. The W1 baseline harness opens an XGBoost incumbent as a governed comparison point. Before any adaptive machinery can be promoted, it must demonstrably beat that simpler system, net of realistic transaction costs, on out-of-sample evidence that has been governed with the same rigor as everything else. The kill criterion is explicit: if the simpler system wins, we keep it. Phase II stops there.
            </p>
            <p>
              MarketMind&apos;s differentiator is not that it specifies an ambitious allocator. It is that it refuses to treat ambition as evidence.
            </p>
          </div>
        </section>

        {/* What the platform proves */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What the platform has established</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Six bounded evidence lanes are closed: that the task construction framework is stable; that the encoder produces coherent regime representations; that curriculum sampling improves sample efficiency; that the Reptile trainer converges within the sufficiency gate; that query gain behavior holds across K-budget ranges; that the proxy metric aligns with information coefficient under realistic conditions; and that the EWC continual-learning mechanism provides forgetting robustness within provisional bounds.
            </p>
            <p>
              None of these constitute allocator promotion. They are bounded, non-promotable evidence that the substrate beneath an eventual allocator is sound. Phase II-A — task substrate and validity closure — is now the active work: establishing that the full task construction story holds before building anything on top of it.
            </p>
            <p>
              The current value of the platform is the substrate itself: trustworthy bundles, auditable provenance, and a clear separation between what is proven and what is still a governed hypothesis under active evaluation.
            </p>
          </div>
        </section>

        {/* Technology */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology principles</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Python for orchestration and research today. C++ and ONNX on the roadmap for inference-serious deployment when Phase II evidence justifies the build — not before. Java for the desktop UI. TypeScript and Next.js for this public web surface.
            </p>
            <p>
              Every externally visible claim is held to the same standard as the research itself: present tense only for delivered capabilities, explicit phase labels for everything else. The canonical source of truth is the MarketMind repo docs — not this site.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-slate-300">
            Interested in collaborating or learning more?{" "}
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
