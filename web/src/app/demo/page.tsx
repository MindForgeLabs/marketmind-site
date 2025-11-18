// src/app/demo/page.tsx
import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase">
            Live Demo
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
            Schedule a deep-dive MarketMind walkthrough
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            We&apos;ll walk through the meta-learning architecture, C++/GPU runtime,
            and how to integrate MarketMind into your existing pipelines.
          </p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 space-y-6">
          <div className="text-sm text-slate-300 space-y-2">
            <p className="font-medium">What we usually cover:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>High-level architecture &amp; deployment topologies</li>
              <li>How the meta-learning layer selects strategies per regime</li>
              <li>Latency / performance characteristics and observability</li>
              <li>Integration options: desktop, web, Python, and C++</li>
            </ul>
          </div>

          <div className="text-sm text-slate-300 space-y-2">
            <p className="font-medium">How to request a demo today:</p>
            <p className="text-slate-400">
              For now, email{" "}
              <a
                href="mailto:engineering@marketmind.ai"
                className="text-emerald-400 hover:text-emerald-300"
              >
                engineering@marketmind.ai
              </a>{" "}
              with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Team name and role</li>
              <li>Rough strategy / asset class focus</li>
              <li>Latency and volume requirements</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 text-center text-xs text-slate-500">
          <p>
            Later, you can replace this page with a calendar embed or internal booking
            flow. The route and CTAs are already wired.
          </p>
          <p className="mt-2">
            In the meantime, you can also explore the{" "}
            <Link
              href="/docs/quickstart"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Quickstart
            </Link>{" "}
            or{" "}
            <Link
              href="/architecture"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Architecture
            </Link>{" "}
            docs.
          </p>
        </section>
      </div>
    </main>
  );
}
