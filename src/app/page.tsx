"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

// Simple icon components to replace lucide-react
const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Cpu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
    <rect x="9" y="9" width="6" height="6" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
);

const BarChart3 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h4v8H3v-8zm7-9h4v17h-4V4zm7 4h4v13h-4V8z" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Terminal = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3M13 15h3M3 6h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" />
  </svg>
);

const Layers = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2} />
    <path strokeWidth={2} d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path strokeWidth={2} d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const Gauge = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
  </svg>
);

const generateData = () => {
  const data: { time: number; value: number }[] = [];
  let value = 100;
  for (let i = 0; i < 50; i++) {
    value += (Math.random() - 0.48) * 2;
    data.push({ time: i, value });
  }
  return data;
};

// const chartData = generateData();

const metrics = [
  {
    label: "GPU Inference p95",
    value: "≈3 ms",
    detail: "C++ ORT + TensorRT (snapshot)",
    icon: Zap,
    color: "text-emerald-400",
  },
  {
    label: "Throughput",
    value: "1k+/s",
    detail: "Inferences per GPU (target)",
    icon: Cpu,
    color: "text-blue-400",
  },
  {
    label: "Meta-Portfolio Lift",
    value: "73.2%",
    detail: "Out-of-sample example with meta-learner vs baseline basket",
    icon: TrendingUp,
    color: "text-purple-400",
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Meta-Learning Strategy Orchestrator",
    description:
      "Learns which strategies and models to deploy per market regime, using live performance and risk signals to rebalance your portfolio automatically.",
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency Runtime",
    description:
      "C++20 + ONNX Runtime + TensorRT for sub-millisecond inference on live order flow.",
  },
  {
    icon: BarChart3,
    title: "Hybrid ML Pipeline",
    description:
      "Meta-learning layer over Transformer, sequence, and classical models, exported to ONNX and optimized for live regime-aware selection.",
  },
  {
    icon: Code,
    title: "Registry-Driven Pipelines",
    description:
      "Declarative CPU→GPU preprocessing with plugin registries for indicators, NLP, and explainability.",
  },
  {
    icon: Shield,
    title: "Enterprise-Ready Controls",
    description:
      "Risk, caching, and observability contracts baked into the engine for safe execution.",
  },
  {
    icon: Cpu,
    title: "Multi-Tier Caching",
    description:
      "L1–L4 caching hierarchy with TinyLFU admission to keep hot features and models warm.",
  },
  {
    icon: TrendingUp,
    title: "Live Analytics & Telemetry",
    description:
      "Prometheus metrics, traces, and dashboards for latency, drift, and PnL in a single view.",
  },
];

const benchmarkData = [
  { name: "MarketMind", p50: 0.8, p95: 3.0, p99: 10 },
  { name: "Baseline Python", p50: 45, p95: 120, p99: 250 },
  { name: "Cloud API", p50: 150, p95: 400, p99: 800 },
];

const architectureLayers = [
  { name: "Desktop UI", tech: "JavaFX + Spring Boot", color: "#3b82f6" },
  { name: "Web Interface", tech: "Next.js 16 + React", color: "#10b981" },
  { name: "Python ML", tech: "PyTorch + ONNX Export", color: "#8b5cf6" },
  { name: "C++ Runtime", tech: "ORT + TensorRT Inference", color: "#f59e0b" },
  { name: "Cache Layer", tech: "Redis + TinyLFU L1-L4", color: "#ef4444" },
  { name: "Telemetry", tech: "Prometheus + OpenTelemetry", color: "#06b6d4" },
];

const codeExample = `// Strategy registration with MarketMind
@Strategy(name = "momentum_ensemble")
class MomentumStrategy {
  @Cache(ttl = "5m", tier = L2)
  async predict(features: Features) {
    // GPU inference in <1ms
    const signal = await this.model.infer(features);
    
    // Risk checks + position sizing
    return this.riskEngine.size(signal);
  }
}`;

// REMOVE this line:
// const chartData = generateData();

export default function MarketMindHero() {
  const [mounted, setMounted] = useState(false);
  const [chartData, setChartData] = useState<{ time: number; value: number }[]>([]);
  const [activeMetric, setActiveMetric] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeLayer, setActiveLayer] = useState(3);

  useEffect(() => {
    setMounted(true);
    setChartData(generateData()); // ✅ client-only, no hydration mismatch
  }, []);

  useEffect(() => {
    if (!autoRotate) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  useEffect(() => {
    const layerInterval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % architectureLayers.length);
    }, 2000);
    return () => clearInterval(layerInterval);
  }, []);

  const handleMetricClick = (idx: number) => {
    setActiveMetric(idx);
    setAutoRotate(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 transition-opacity duration-1000 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">
              Meta-learning quant runtime · C++ · GPU · TensorRT
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                id="hero-heading"
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Meta-learning control plane
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  on an ultra-low-latency C++/GPU runtime
                </span>
              </h1>

              <p
                className={`text-lg sm:text-xl text-slate-300 mb-4 leading-relaxed transition-all duration-1000 delay-200 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                MarketMind continuously adapts strategies across market regimes while a
                hard real-time C++ execution engine and GPU inference layer keep drift,
                slippage, and capacity under control.
              </p>

              <p
                className={`text-sm text-slate-400 mb-8 transition-all duration-1000 delay-250 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Built for quant funds, HFT desks, and advanced retail algos that need a
                meta-learning layer on top of an engine that actually hits strict latency
                SLOs.
              </p>

              <div
                className={`flex flex-wrap gap-4 mb-4 transition-all duration-1000 delay-300 ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <Button asChild size="lg">
                  <Link href="/docs/quickstart">Run 3-Step Quickstart</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="https://marketmind-docs.readthedocs.io/en/latest/">
                    View Technical Docs
                  </a>
                </Button>
              </div>

              <p className="text-xs text-slate-500 mb-8">
                Proprietary, internal-first platform. Docs and examples provided for
                internal contributors and approved partners.
              </p>

              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                aria-label="Key performance metrics"
              >
                {metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  const isActive = activeMetric === idx;
                  return (
                    <button
                      key={metric.label}
                      type="button"
                      onClick={() => handleMetricClick(idx)}
                      className={`text-left rounded-xl p-4 border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                        isActive
                          ? "border-emerald-500/60 bg-slate-900/70 scale-[1.03]"
                          : "border-white/5 bg-slate-900/30 hover:border-emerald-500/40 hover:bg-slate-900/50"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className={`${metric.color} mb-2`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-sm text-slate-300">{metric.label}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {metric.detail}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${
                mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-slate-400 mb-1">
                      Simulated Strategy PnL
                    </div>
                    <div className="text-2xl font-bold text-emerald-400">+24.7%</div>
                    <div className="text-xs text-slate-500">
                      Example equity curve (demo data)
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-emerald-400">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-medium">Real-time View</span>
                    </div>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                      fill="url(#colorValue)"
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Win Rate</div>
                    <div className="text-lg font-semibold">73.2%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Sharpe</div>
                    <div className="text-lg font-semibold">2.84</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Max DD</div>
                    <div className="text-lg font-semibold">-4.1%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stack / tech row stays as-is, under hero */}
          <div className="mt-12 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="uppercase tracking-[0.2em] text-slate-400">STACK</span>
            <span>Python 3.12</span>
            <span className="h-[1px] w-6 bg-slate-700" />
            <span>C++20 / ONNX Runtime</span>
            <span className="h-[1px] w-6 bg-slate-700" />
            <span>TensorRT 10.x / CUDA 12.x</span>
            <span className="h-[1px] w-6 bg-slate-700" />
            <span>JavaFX · Spring Boot</span>
          </div>
        </div>
      </section>

      {/* Credibility strip: latency, meta-learning, risk, stack */}
      <section className="max-w-7xl mx-auto px-6 pt-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-border/60 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Latency
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-50">
              p95 ≈ 3 ms
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Snapshot on GPU-accelerated inference; replace with your measured numbers.
            </p>
          </Card>
          <Card className="border-border/60 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Meta-learning
            </p>
            <p className="mt-2 text-sm text-slate-50">
              Continual regime adaptation with live performance + risk feedback.
            </p>
          </Card>
          <Card className="border-border/60 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Risk controls
            </p>
            <p className="mt-2 text-sm text-slate-50">
              Kill switches, per-strategy and portfolio limits, circuit breakers.
            </p>
          </Card>
          <Card className="border-border/60 bg-slate-900/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Runtime stack
            </p>
            <p className="mt-2 text-sm text-slate-50">
              C++ core · Python orchestration · GPU inference · observability-first.
            </p>
          </Card>
        </div>
      </section>

      {/* Performance Benchmarks – now also acts as Performance teaser */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Performance, Real Numbers
          </h2>
          <p className="text-lg sm:text-xl text-slate-400">
            Measured inference latency across production-like workloads
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Gauge className="w-6 h-6 text-emerald-400" />
              Latency Comparison (ms)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={benchmarkData}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Bar dataKey="p50" fill="#10b981" radius={[8, 8, 0, 0]}>
                  {benchmarkData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#10b981" : "#334155"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">p50</div>
                <div className="text-sm font-semibold text-emerald-400">0.8ms</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">p95</div>
                <div className="text-sm font-semibold text-emerald-400">3.0ms</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-1">p99</div>
                <div className="text-sm font-semibold text-emerald-400">10ms</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-400" />
                Why This Matters
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>
                    <strong>50–150x faster</strong> than Python-only solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Sub-10ms p99</strong> enables high-frequency strategies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <span>
                    <strong>GPU acceleration</strong> with TensorRT optimization
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3">Test Configuration</h4>
              <div className="text-sm text-slate-400 space-y-1">
                <div>• RTX 4090 GPU</div>
                <div>• Batch size: 32</div>
                <div>• Model: Hybrid Transformer (ONNX → TensorRT)</div>
                <div>• Measured over 10k inferences</div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance CTAs into dedicated page + telemetry docs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/performance">View Performance Page</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/docs/telemetry">See Telemetry &amp; Metrics Docs</Link>
          </Button>
        </div>
      </section>

      {/* Architecture Visualization – acts as Architecture teaser */}
      <section className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Multi-Language Architecture
          </h2>
          <p className="text-lg sm:text-xl text-slate-400">
            Meta-learning control plane over a low-latency C++/GPU runtime and multi-language
            clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            {architectureLayers.map((layer, idx) => (
              <div
                key={layer.name}
                className={`bg-slate-900/30 backdrop-blur-sm border rounded-xl p-5 transition-all duration-300 ${
                  activeLayer === idx
                    ? "border-emerald-500/60 bg-slate-900/70 scale-[1.02]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold mb-1">{layer.name}</div>
                    <div className="text-sm text-slate-400">{layer.tech}</div>
                  </div>
                  <Layers className="w-5 h-5 text-slate-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-emerald-400" />
              Example Strategy Code
            </h3>
            <pre className="bg-slate-950/50 rounded-lg p-6 overflow-x-auto text-sm">
              <code className="text-emerald-400">{codeExample}</code>
            </pre>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <Database className="w-4 h-4" />
              <span>Auto-cached, GPU-accelerated, risk-controlled</span>
            </div>
          </div>
        </div>

        {/* Architecture CTAs into dedicated page + ML pipeline docs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/architecture">View Full Architecture</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/docs/ml-pipeline">Read ML Pipeline Docs</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for Performance
          </h2>
          <p className="text-lg sm:text-xl text-slate-400">
            Enterprise-grade infrastructure designed for the demands of modern
            quantitative trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-slate-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-slate-900/50 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Wire This Into Your Stack?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Connect the C++ inference service, Python pipelines, and Java desktop
              to your existing infrastructure with clear contracts for training,
              caching, and observability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all hover:scale-105 shadow-lg shadow-emerald-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Request Access
              </a>
              <a
                href="/demo"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Schedule Deep-Dive Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
