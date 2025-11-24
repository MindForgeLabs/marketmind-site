// app/architecture/page.mdx
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Architecture | MarketMind",
  description:
    "High-level system design of the MarketMind meta-learning quant runtime, built on an ultra-low-latency C++/GPU core.",
};

export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-slate-200">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          MarketMind Architecture
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          MarketMind is a meta-learning control plane that orchestrates strategies on top
          of an ultra-low-latency C++ execution engine and GPU inference layer. The
          architecture is designed for regime-aware trading under strict latency SLOs.
        </p>
      </header>

      {/* End-to-end flow */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">End-to-end flow</h2>
        <p className="text-sm text-slate-400">
          At a high level, data flows from external feeds through a feature pipeline into
          strategy models, a meta-learning layer, and finally a C++ execution and risk
          engine:
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

      {/* Core components */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Core components</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm text-slate-400">
          <li>
            <strong>Data adapters</strong> – pluggable connectors for tick, bar, and
            derived data with backfill, replay, and clock control.
          </li>
          <li>
            <strong>Feature graph</strong> – declarative graph describing feature
            dependencies, execution policies, and multi-tier caching.
          </li>
          <li>
            <strong>Model runtime</strong> – on-device inference (GPU/CPU) for strategy
            models, exported to ONNX and optimized via TensorRT.
          </li>
          <li>
            <strong>Meta-policy engine</strong> – selects and reweights strategies based
            on regimes, live performance, and risk budgets.
          </li>
          <li>
            <strong>Execution router</strong> – C++ order routing with venue selection,
            throttling, and back-pressure under strict latency budgets.
          </li>
          <li>
            <strong>Risk overlays</strong> – per-strategy and portfolio-level limits,
            circuit breakers, and kill switches enforced before orders leave the box.
          </li>
          <li>
            <strong>Telemetry</strong> – unified metrics, logs, and traces for debugging,
            tuning, and compliance-friendly observability.
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
                Feature engineering, model training, and backtests in Python, exporting
                models to ONNX for deployment into the C++ runtime.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Execution core (C++/GPU)</h3>
              <p className="text-slate-400">
                ONNX Runtime + TensorRT for inference, plus custom C++ order-routing and
                risk-checking code under hard latency SLOs.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Control plane (meta-learning)</h3>
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
