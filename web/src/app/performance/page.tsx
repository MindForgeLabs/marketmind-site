// app/performance/page.mdx
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Performance | MarketMind",
  description:
    "Latency, throughput, and stability characteristics of the MarketMind runtime, with example benchmarks.",
};

export default function PerformancePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 text-slate-200">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Performance &amp; Benchmarks
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          MarketMind is engineered as a low-latency C++/GPU runtime with predictable
          performance under real-world loads. This page summarizes key latency,
          throughput, and regime-aware performance characteristics. Numbers here may be
          example/target values until hardened.
        </p>
      </header>

      {/* Summary metrics */}
      <section className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          title="Inference latency (GPU)"
          metric="p95 ≈ 3 ms"
          body="Single-asset inference latency on a modern GPU under typical production-like load. Replace with your measured benchmarks."
        />
        <SummaryCard
          title="Backtest throughput"
          metric="1k+ orders/s"
          body="Example throughput for historical replay per node, including feature computation and inference."
        />
        <SummaryCard
          title="Meta-portfolio lift"
          metric="+N% vs baseline"
          body="Illustrative performance improvement of a meta-portfolio vs a static strategy set in a volatile regime."
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
          Performance measurements should be obtained using replayed historical feeds and
          synthetic order flows under controlled conditions. Latency is measured
          end-to-end from event arrival to order decision, with and without risk overlays
          enabled.
        </p>
        <p className="text-sm text-slate-400">
          For production deployments, validate benchmarks against your own hardware,
          networks, and venues. MarketMind exposes telemetry hooks so you can monitor
          p50/p95/p99 latencies, throughput, and strategy-level metrics over time.
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
