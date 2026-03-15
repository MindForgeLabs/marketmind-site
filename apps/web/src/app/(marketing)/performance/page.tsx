// app/performance/page.mdx
import Link from "next/link";
import type { Metadata } from "next";
import { Button, Card } from "@marketmind/ui";

export const metadata: Metadata = {
  title: "Performance | MarketMind",
  description:
    "Current platform: validation and backtesting. Illustrative roadmap targets for latency and throughput; no production telemetry or GPU inference shipped yet.",
};

export default function PerformancePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-slate-200">
      {/* Current scope vs Target architecture */}
      <div className="mb-8 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
          Current scope
        </p>
        <p className="text-sm text-slate-300 mb-4">
          Today: validation, backtesting, gate CLI, run bundles, and artifact registry. No GPU inference or production latency SLOs shipped.
        </p>
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90 mb-1">
          Target architecture (roadmap)
        </p>
        <p className="text-sm text-slate-400">
          Latency and throughput numbers below are illustrative roadmap targets only — not measured production telemetry.
        </p>
      </div>

      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Performance &amp; Benchmarks
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          The current platform focuses on governed backtesting and validation. Any latency or throughput figures on this page are illustrative targets for future Phase II/III work, not current production metrics.
        </p>
      </header>

      {/* Summary metrics – all labeled as illustrative targets */}
      <section className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          title="Illustrative target: Inference latency (GPU)"
          metric="p95 ≈ 3 ms"
          body="Planned (Phase III). GPU inference is not yet shipped. Single-asset inference target on a modern GPU; replace with your measured benchmarks when available."
        />
        <SummaryCard
          title="Illustrative target: Backtest throughput"
          metric="1k+ orders/s"
          body="Example throughput for historical replay per node. Not production telemetry; for roadmap context only."
        />
        <SummaryCard
          title="Illustrative target: Meta-portfolio lift"
          metric="+N% vs baseline"
          body="Planned (Phase II). Illustrative improvement of a meta-portfolio vs a static strategy set. No production deployment yet."
        />
      </section>

      {/* Chart placeholder */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Example equity curve</h2>
        <p className="text-sm text-slate-400">
          The visual below is a placeholder for an example equity curve comparing a
          meta-learning portfolio to a baseline strategy set over a volatile period.
          Plug in your actual chart component when ready.
        </p>

        <Card className="border border-slate-800 bg-slate-900/40">
          <div className="flex h-64 items-center justify-center text-xs text-slate-500">
            Chart placeholder – equity curve, latency histogram, or regime performance
            breakdown.
          </div>
        </Card>
      </section>

      {/* Methodology */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold">Methodology</h2>
        <p className="text-sm text-slate-400">
          When Phase II/III components exist, performance measurements should be obtained using replayed historical feeds and
          synthetic order flows under controlled conditions. Measured production telemetry will then be used for latency and throughput reporting.
        </p>
        <p className="text-sm text-slate-400">
          For future production deployments, validate benchmarks against your own hardware,
          networks, and venues. Telemetry hooks for p50/p95/p99 and strategy-level metrics are planned as part of the roadmap.
        </p>
      </section>

      {/* CTAs */}
      <section className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/architecture">Review the architecture</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/docs/telemetry">See telemetry &amp; metrics docs</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/docs/quickstart">Run the Quickstart</Link>
        </Button>
      </section>
    </main>
  );
}

function SummaryCard(props: { title: string; metric: string; body: string }) {
  return (
    <Card className="border border-slate-800 bg-slate-900/40 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {props.title}
      </p>
      <p className="mt-2 text-2xl font-semibold text-slate-50">{props.metric}</p>
      <p className="mt-2 text-xs text-slate-400">{props.body}</p>
    </Card>
  );
}
