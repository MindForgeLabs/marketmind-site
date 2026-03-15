"use client";

import { useLiveMetrics } from "@/lib/hooks/useLiveMetrics";

export default function DashboardPage() {
    const { metrics, loading } = useLiveMetrics(3000);

    return (
        <main className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-4">Live Dashboard</h1>
                <p className="text-slate-300 mb-8">
                    High-level view of latency, throughput, and win rate across the system.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
                        <div className="text-sm text-slate-400 mb-1">Latency (p95)</div>
                        <div className="text-2xl font-bold">
                            {loading || !metrics ? "–" : `${metrics.latencyP95Ms.toFixed(2)} ms`}
                        </div>
                    </div>

                    <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
                        <div className="text-sm text-slate-400 mb-1">Throughput</div>
                        <div className="text-2xl font-bold">
                            {loading || !metrics ? "–" : `${metrics.throughputPerSec.toLocaleString()}/s`}
                        </div>
                    </div>

                    <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
                        <div className="text-sm text-slate-400 mb-1">Win Rate</div>
                        <div className="text-2xl font-bold">
                            {loading || !metrics ? "–" : `${(metrics.winRate * 100).toFixed(1)}%`}
                        </div>
                    </div>
                </div>

                <p className="text-xs text-slate-500 mt-6">
                    Values updated every 3 seconds from /api/metrics. Replace with real observability backend when ready.
                </p>
            </div>
        </main>
    );
}
