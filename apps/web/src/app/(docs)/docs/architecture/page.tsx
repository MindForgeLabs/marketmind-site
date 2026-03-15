// app/architecture/page.mdx
import Link from "next/link";
import type { Metadata } from "next";
import { Button, Card } from "@marketmind/ui";

export const metadata: Metadata = {
  title: "Architecture | MarketMind",
  description:
    "Validation-first backtesting and orchestration; roadmap: meta-learning layer and C++/GPU execution (Phase II/III).",
};

export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-slate-200">
      {/* Current scope vs Target architecture */}
      <div className="mb-8 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90 mb-1">
          Current platform
        </p>
        <p className="text-sm text-slate-300 mb-4">
          Today: orchestration, backtest boundary, gates, run bundles, PIT-safe path, first stat_arb_pairs strategy slice. Python + JavaFX desktop; artifact registry (CAS).
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90 mb-1">
          Target architecture (roadmap)
        </p>
        <p className="text-sm text-slate-400">
          Meta-learning control plane, C++ execution engine, GPU inference, execution router, risk overlays — Phase II/III. The sections below describe the target design.
        </p>
      </div>

      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          MarketMind Architecture
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Validation-first control plane today; C++/GPU runtime and meta-learning layer are on the roadmap (Phase II/III). Target architecture is designed for regime-aware trading and future latency SLOs.
        </p>
      </header>

      {/* End-to-end flow (target architecture) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">End-to-end flow (target)</h2>
        <p className="text-sm text-slate-400">
          At a high level (roadmap), data would flow from external feeds through a feature pipeline into
          strategy models, a meta-learning layer (Phase II), and finally a C++ execution and risk
          engine (Phase III):
        </p>

        <Card className="border border-slate-800 bg-slate-900/40">
          <div className="grid gap-6 px-6 py-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-medium mb-1">1. Ingest</h3>
              <p className="text-slate-400">
                Market, reference, and internal data are normalized, timestamped, and
                validated with replay/backfill support.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">2. Feature pipeline</h3>
              <p className="text-slate-400">
                Sliding-window features, technical indicators, and regime descriptors are
                computed on CPU/GPU and cached.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">3. Strategy + meta-learner</h3>
              <p className="text-slate-400">
                Individual strategies emit scores and orders. A meta-learner selects,
                weights, and decays them per regime and objective.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">4. Execution &amp; risk</h3>
              <p className="text-slate-400">
                A C++ engine routes, throttles, and risk-checks orders with kill switches
                and portfolio limits enforced in real time.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Core components (target architecture) */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Core components (current + roadmap)</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm text-slate-400">
          <li>
            <strong>Data adapters</strong> – pluggable connectors for tick, bar, and
            derived data with backfill, replay, and clock control. (Partial today: file/Yahoo/FRED daily path.)
          </li>
          <li>
            <strong>Feature graph</strong> – declarative graph describing feature
            dependencies, execution policies, and multi-tier caching. (Phase I–II.)
          </li>
          <li>
            <strong>Model runtime</strong> (Phase III) – on-device inference (GPU/CPU) for strategy
            models, exported to ONNX and optimized via TensorRT. Not shipped.
          </li>
          <li>
            <strong>Meta-policy engine</strong> (Phase II) – selects and reweights strategies based
            on regimes, live performance, and risk budgets. Planned.
          </li>
          <li>
            <strong>Execution router</strong> (Phase III) – C++ order routing with venue selection,
            throttling, and back-pressure under strict latency budgets. Planned.
          </li>
          <li>
            <strong>Risk overlays</strong> (Phase III) – per-strategy and portfolio-level limits,
            circuit breakers, and kill switches enforced before orders leave the box. Planned.
          </li>
          <li>
            <strong>Telemetry</strong> – unified metrics, logs, and traces (roadmap). Structlog and instrumentation exist today.
          </li>
        </ul>
      </section>

      {/* How pieces map to your stack */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Language & runtime boundaries</h2>
        <p className="text-sm text-slate-400">
          MarketMind is deliberately multi-language, with clear contracts at each boundary:
        </p>
        <Card className="border border-slate-800 bg-slate-900/40">
          <div className="grid gap-4 px-6 py-6 text-sm sm:grid-cols-2">
            <div>
              <h3 className="font-medium mb-1">Research &amp; modeling (Python)</h3>
              <p className="text-slate-400">
                Feature engineering and backtests in Python today. Target (Phase III): model training, ONNX export, and deployment into the C++ runtime.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Execution core (C++/GPU) — Phase III</h3>
              <p className="text-slate-400">
                ONNX Runtime + TensorRT for inference, plus custom C++ order-routing and
                risk-checking code under hard latency SLOs. Planned; not shipped.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Control plane (meta-learning) — Phase II</h3>
              <p className="text-slate-400">
                Policy selection, regime detection, and strategy weighting, exposing a
                contract for plugging in new models and signals.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Clients &amp; UI</h3>
              <p className="text-slate-400">
                Desktop, web, and service clients that talk to the runtime over stable
                APIs with telemetry hooks and safety guarantees.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* CTAs */}
      <section className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/docs/ml-pipeline">Read the ML pipeline overview</Link>
        </Button>
        <Button asChild variant="ghost">
          <a href="https://marketmind-docs.readthedocs.io/en/latest/">
            View Python API (RTD)
          </a>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/docs/telemetry">See telemetry &amp; metrics</Link>
        </Button>
      </section>
    </main>
  );
}
