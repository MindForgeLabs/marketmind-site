export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About MarketMind</h1>

        {/* Current scope vs Where we're headed */}
        <div className="mb-12 rounded-lg border border-slate-700 bg-slate-900/50 p-6 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90 mb-2">
              What ships today
            </p>
            <p className="text-sm text-slate-300">
              A governed research substrate: auditable run bundles, fail-closed gate validation, PIT-safe backtesting, and the first trusted strategy slices on the canonical path. Phase 0 and Phase I are complete and frozen as source of truth. Research protocols, the Phase II artifact contract, the data governance charter, and the threshold governance register are all documented and enforced.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90 mb-2">
              Active research (Phase II-A)
            </p>
            <p className="text-sm text-slate-400">
              Phase II-0 is complete as the non-promotable bridge. Six bounded Phase II-C evidence lanes — task construction, encoder coherence, curriculum sampling, Reptile training, K-budget behavior, proxy–IC alignment, and EWC forgetting robustness — are closed with provisional thresholds. Phase II-A (Task Substrate &amp; Validity Closure) is the current forward phase. GATE-II remains deferred; no allocator promotion has occurred.
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why we built it this way</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Markets are non-stationary. Long-lived edge comes from maintaining many weak, diverse signals and recombining them as regimes shift — not from fitting a single model and hoping it holds. That thesis is easy to state and hard to test honestly. MarketMind is designed to make honest testing tractable.
            </p>
            <p>
              The core problem with most algorithmic trading research is that the validation infrastructure is an afterthought. Leakage creeps in through look-ahead in splits, mislabeled time boundaries, or results that can&apos;t be reproduced from canonical inputs. MarketMind treats the research substrate — point-in-time data access, artifact provenance, fail-closed statistical gates — as the primary deliverable, not a supporting detail.
            </p>
            <p>
              That posture also shapes how we approach the adaptive allocator. Rather than building it first and validating it later, the platform is designed to accumulate evidence in order: freeze the task construction story, close each evidence lane, and only promote adaptive machinery when it demonstrably beats a simpler baseline net of realistic costs. The kill criterion is explicit: if the simpler regime-conditioned baseline wins, the adaptive path stops.
            </p>
            <p>
              The result is a system whose current value is the substrate itself — trustworthy bundles, auditable provenance, and a clear separation between what is proven and what is still a governed hypothesis.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology principles</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              Python for orchestration and research today; C++ and ONNX on the roadmap for inference-serious deployment when Phase II evidence justifies the build. Java for the desktop UI. TypeScript and Next.js for the public web surface.
            </p>
            <p>
              Every externally visible claim about what the platform does is held to the same standard as the research itself: present tense only for delivered capabilities, explicit phase labels for everything else. The canonical source of truth is the MarketMind repo docs — not aspirational site copy.
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
