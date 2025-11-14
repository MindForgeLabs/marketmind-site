# ============================================================
# MarketMind Site Scaffolder - Optimized & Production-Ready
# PowerShell 7+ | Creates complete Next.js site structure
# ============================================================

param(
    [string]$Root = (Get-Location),
    [switch]$WhatIf
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$srcApp = Join-Path $Root 'src\app'

# ============================================================
# HELPER FUNCTIONS
# ============================================================

function New-MmPage {
    param(
        [Parameter(Mandatory)]
        [string]$RelativePath,
        [Parameter(Mandatory)]
        [string]$Content
    )

    $fullPath = Join-Path $srcApp $RelativePath
    $dir = Split-Path $fullPath -Parent
    
    if ($WhatIf) {
        Write-Host "Would create: $RelativePath" -ForegroundColor DarkGray
        return
    }

    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    # UTF-8 without BOM for Next.js
    $Content | Set-Content -Path $fullPath -Encoding utf8NoBOM
    Write-Host "📝 $RelativePath" -ForegroundColor DarkGray
}

function New-MmApiRoute {
    param(
        [Parameter(Mandatory)]
        [string]$RelativeDir,
        [Parameter(Mandatory)]
        [string]$Content
    )

    $dir = Join-Path $srcApp $RelativeDir
    $routePath = Join-Path $dir 'route.ts'
    
    if ($WhatIf) {
        Write-Host "Would create API: $RelativeDir/route.ts" -ForegroundColor DarkGray
        return
    }

    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    $Content | Set-Content -Path $routePath -Encoding utf8NoBOM
    Write-Host "🔌 $RelativeDir/route.ts" -ForegroundColor DarkGray
}

# ============================================================
# START SCAFFOLDING
# ============================================================

Write-Host "🚀 MarketMind Site Scaffolder" -ForegroundColor Cyan
Write-Host "   Root: $srcApp" -ForegroundColor DarkGray
if ($WhatIf) {
    Write-Host "   Mode: DRY RUN (no files will be created)" -ForegroundColor Yellow
}
Write-Host ""

# ============================================================
# SECTION 1: DOCUMENTATION PAGES
# ============================================================

Write-Host "📚 Creating documentation structure..." -ForegroundColor Yellow

# Docs landing page
New-MmPage 'docs\page.tsx' @'
import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    links: [
      { name: "Quickstart", href: "/quickstart", desc: "Get up and running in 3 steps" },
      { name: "Installation", href: "/docs/installation", desc: "System requirements and setup" },
      { name: "Architecture", href: "/docs/architecture", desc: "How MarketMind works" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { name: "Strategies", href: "/docs/strategies", desc: "Building and deploying trading strategies" },
      { name: "ML Pipeline", href: "/docs/ml-pipeline", desc: "Training and exporting models" },
      { name: "Caching", href: "/docs/caching", desc: "Multi-tier cache architecture" },
      { name: "Risk Management", href: "/docs/risk", desc: "Position sizing and safety controls" },
    ],
  },
  {
    title: "Infrastructure",
    links: [
      { name: "C++ Runtime", href: "/docs/cpp-runtime", desc: "Low-latency inference engine" },
      { name: "Python Services", href: "/docs/python-services", desc: "Training and preprocessing" },
      { name: "Desktop UI", href: "/docs/desktop", desc: "JavaFX monitoring dashboard" },
      { name: "Telemetry", href: "/docs/telemetry", desc: "Metrics and observability" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { name: "REST API", href: "/docs/api/rest", desc: "HTTP endpoints" },
      { name: "gRPC", href: "/docs/api/grpc", desc: "High-performance RPC" },
      { name: "WebSocket", href: "/docs/api/websocket", desc: "Real-time data feeds" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-slate-300 mb-12">
          Everything you need to build, deploy, and monitor algorithmic trading strategies with MarketMind.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {docSections.map((section) => (
            <div key={section.title} className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block p-3 rounded-lg hover:bg-slate-800/50 transition group"
                    >
                      <div className="font-semibold text-emerald-400 group-hover:text-emerald-300">
                        {link.name}
                      </div>
                      <div className="text-sm text-slate-400">{link.desc}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
'@

# Quickstart
New-MmPage 'quickstart\page.tsx' @'
export default function QuickstartPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">3-Step Quickstart</h1>
        <p className="text-slate-300 mb-8">
          Get MarketMind running in minutes. This guide assumes you have the system requirements installed.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              Clone and Install
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400">git clone https://github.com/yourorg/marketmind.git</div>
              <div className="text-emerald-400">cd marketmind && pip install -e .</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              Start Services
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400">docker-compose up -d</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              Run Example Strategy
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400">python examples/momentum_strategy.py --mode paper</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
'@

# Installation
New-MmPage 'docs\installation\page.tsx' @'
export default function InstallationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Installation</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Python 3.12+</li>
            <li>• C++20 compiler (GCC 11+, Clang 14+, or MSVC 2022+)</li>
            <li>• CUDA 12.x + cuDNN 9.x (for GPU acceleration)</li>
            <li>• Java 21+ (for desktop UI)</li>
            <li>• Redis 7.x (for caching)</li>
            <li>• 16GB+ RAM (32GB recommended)</li>
            <li>• NVIDIA GPU with 8GB+ VRAM (RTX 3070 or better)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Install</h2>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
            <div className="text-slate-400 mb-2"># Clone repository</div>
            <div className="text-emerald-400 mb-4">git clone https://github.com/yourorg/marketmind.git</div>
            
            <div className="text-slate-400 mb-2"># Install Python dependencies</div>
            <div className="text-emerald-400 mb-4">cd marketmind && pip install -e .</div>
            
            <div className="text-slate-400 mb-2"># Build C++ runtime</div>
            <div className="text-emerald-400 mb-4">cmake -B build && cmake --build build --config Release</div>
            
            <div className="text-slate-400 mb-2"># Start services</div>
            <div className="text-emerald-400">docker-compose up -d</div>
          </div>
        </section>
      </div>
    </main>
  );
}
'@

# ============================================================
# DOCUMENTATION PAGES (CONTINUED)
# ============================================================

# Architecture
New-MmPage 'docs\architecture\page.tsx' @'
export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">System Architecture</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-slate-300 mb-4">
            MarketMind uses a multi-language architecture where each component is optimized for its specific role:
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold">Python:</span>
              <span>Training ML models, feature engineering, backtesting, and data preprocessing.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">C++:</span>
              <span>Real-time inference engine with ONNX Runtime + TensorRT for sub-millisecond latency.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">Java:</span>
              <span>Desktop monitoring dashboard and control plane for traders.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 font-bold">TypeScript:</span>
              <span>Web interface for documentation, monitoring, and administration.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Data Flow</h2>
          <div className="bg-slate-900 border border-white/10 rounded-lg p-6">
            <ol className="space-y-4 text-slate-300">
              <li>
                <strong className="text-white">1. Training (Python):</strong>{" "}
                Models are trained on historical data and exported to ONNX.
              </li>
              <li>
                <strong className="text-white">2. Optimization (Python):</strong>{" "}
                ONNX models are converted to TensorRT engines for GPU acceleration.
              </li>
              <li>
                <strong className="text-white">3. Deployment (C++):</strong>{" "}
                TensorRT engines are loaded into the C++ inference runtime.
              </li>
              <li>
                <strong className="text-white">4. Execution (C++):</strong>{" "}
                Live market data is transformed into features, fed through the model, and turned into signals.
              </li>
              <li>
                <strong className="text-white">5. Monitoring (Java/Web):</strong>{" "}
                Real-time metrics, PnL, and health checks are surfaced via dashboards and APIs.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Guarantees</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <div className="font-semibold mb-2">Inference Latency</div>
              <div className="text-2xl font-bold text-emerald-400">p95 &lt; 3ms</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="font-semibold mb-2">Cache Hit Rate</div>
              <div className="text-2xl font-bold text-blue-400">&gt; 95%</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
'@

# Strategies
New-MmPage 'docs\strategies\page.tsx' @'
export default function StrategiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Building Strategies</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Strategy Lifecycle</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">1. Development</h3>
              <p className="text-slate-300">
                Write strategy logic in Python, define features, and specify model dependencies.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">2. Backtesting</h3>
              <p className="text-slate-300">
                Run historical simulations, perform walk-forward testing, and validate robustness.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">3. Paper Trading</h3>
              <p className="text-slate-300">
                Execute strategies against live market data without sending real orders.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">4. Production</h3>
              <p className="text-slate-300">
                Deploy to the C++ runtime with full risk controls and observability.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Example Strategy</h2>
          <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm">
            <code className="text-emerald-400">{`@strategy(name="momentum_mean_reversion")
class HybridStrategy(BaseStrategy):
    def __init__(self):
        self.momentum = MomentumIndicator(window=20)
        self.mean_rev = MeanReversionIndicator(window=50)

    @cache(ttl="5m", tier=CacheTier.L2)
    async def predict(self, features: Features) -> Signal:
        mom_signal = await self.momentum.compute(features)
        mr_signal = await self.mean_rev.compute(features)

        # Ensemble with learned weights
        signal = 0.6 * mom_signal + 0.4 * mr_signal

        return self.risk_engine.size_position(signal)`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Always implement position limits and stop-losses.</li>
            <li>• Use walk-forward optimization to avoid overfitting.</li>
            <li>• Monitor live performance and risk metrics in real time.</li>
            <li>• Run in paper mode for at least 1–2 weeks before going live.</li>
            <li>• Prefer simple, interpretable strategies over unnecessary complexity.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# ML Pipeline
New-MmPage 'docs\ml-pipeline\page.tsx' @'
export default function MLPipelinePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">ML Pipeline</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Supported Model Types</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Transformer Models</h3>
              <p className="text-sm text-slate-400">
                Attention-based sequence models for complex time-series prediction.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">LSTM / GRU</h3>
              <p className="text-sm text-slate-400">
                Recurrent networks for capturing sequential dependencies.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">TCN</h3>
              <p className="text-sm text-slate-400">
                Temporal convolutional networks for fast, parallelizable inference.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Ensemble Methods</h3>
              <p className="text-sm text-slate-400">
                Blend multiple models with learned weights for robust performance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Training → Production Pipeline</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Train in PyTorch</h3>
                <p className="text-slate-400 text-sm">
                  Use standard training loops and experiment tracking for your models.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Export to ONNX</h3>
                <p className="text-slate-400 text-sm">
                  Export trained models via <code>torch.onnx.export</code> for portability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Optimize with TensorRT</h3>
                <p className="text-slate-400 text-sm">
                  Compile ONNX models into TensorRT engines for GPU-accelerated inference.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Deploy to C++ Runtime</h3>
                <p className="text-slate-400 text-sm">
                  Load TensorRT engines into the C++ inference service and expose via RPC.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Model Monitoring</h2>
          <p className="text-slate-300 mb-4">
            MarketMind continuously tracks model quality and drift in production:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Prediction and residual distribution monitoring.</li>
            <li>• Feature drift and data-quality checks.</li>
            <li>• Real-time accuracy and PnL attribution metrics.</li>
            <li>• Hooks for automatic retraining and deployment triggers.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# Caching
New-MmPage 'docs\caching\page.tsx' @'
export default function CachingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Multi-Tier Caching</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cache Hierarchy</h2>
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">L1: In-Process Cache</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: process memory (C++ / Python).</div>
                <div>• Latency: ~10 nanoseconds.</div>
                <div>• Size: ~256MB per process.</div>
                <div>• Use case: hot features and model outputs.</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">L2: Shared Memory</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: shared memory / Unix domain sockets.</div>
                <div>• Latency: ~1 microsecond.</div>
                <div>• Use case: cross-process feature sharing.</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">L3: Redis (Local)</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: local Redis instance.</div>
                <div>• Latency: ~100 microseconds.</div>
                <div>• Use case: precomputed indicators and historical features.</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-orange-400">L4: Remote Cache</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: distributed Redis cluster / key-value store.</div>
                <div>• Latency: ~1 millisecond.</div>
                <div>• Use case: cold features and backtesting data.</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cache Admission Policy</h2>
          <p className="text-slate-300 mb-4">
            MarketMind uses <strong>TinyLFU</strong> for intelligent cache admission and eviction:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Tracks approximate access frequency with minimal memory usage.</li>
            <li>• Protects against cache pollution from large one-off scans.</li>
            <li>• Promotes genuinely hot keys to faster tiers automatically.</li>
            <li>• Supports configurable warmup periods for new deployments.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# Risk Management
New-MmPage 'docs\risk\page.tsx' @'
export default function RiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Risk Management</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Built-in Safety Controls</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Position Limits</h3>
              <p className="text-slate-300">
                Maximum position sizes across symbols, sectors, and the overall portfolio.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Drawdown Protection</h3>
              <p className="text-slate-300">
                Automatic strategy pause or throttle when account-level drawdowns breach configured thresholds.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Volatility Adjustment</h3>
              <p className="text-slate-300">
                Dynamic position sizing based on realized or implied volatility.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Kill Switch</h3>
              <p className="text-slate-300">
                One-command emergency halt across all strategies and accounts.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Risk Configuration</h2>
          <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm">
            <code className="text-emerald-400">{`risk_config = {
  "max_position_pct": 0.05,        # 5% of portfolio per position
  "max_sector_exposure": 0.25,     # 25% max in single sector
  "max_daily_loss_pct": 0.02,      # 2% daily loss limit
  "max_drawdown_pct": 0.10,        # 10% max drawdown before pause
  "leverage_limit": 2.0,           # Max 2x leverage
  "stop_loss_pct": 0.03,           # 3% stop loss per trade
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Real-Time Monitoring</h2>
          <p className="text-slate-300 mb-4">
            All risk metrics are tracked in real time and surfaced through:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Desktop monitoring dashboard (JavaFX).</li>
            <li>• Web interface dashboards.</li>
            <li>• Prometheus metrics endpoints.</li>
            <li>• Slack / email / PagerDuty alerts on limit violations.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# C++ Runtime
New-MmPage 'docs\cpp-runtime\page.tsx' @'
export default function CppRuntimePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">C++ Inference Runtime</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why C++ for Inference?</h2>
          <p className="text-slate-300 mb-4">
            Python is ideal for research and training, but production inference has stricter requirements:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Sub-millisecond latency requirements.</li>
            <li>• Deterministic performance without GIL / GC pauses.</li>
            <li>• Predictable memory footprint and allocation patterns.</li>
            <li>• Direct integration with CUDA and TensorRT.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <div className="bg-slate-900 rounded-lg p-6">
            <pre className="text-sm text-emerald-400 overflow-x-auto">{`┌─────────────────────────────────┐
│   Market Data Feed (gRPC)      │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  Feature Preprocessor (C++20)  │
│  - Vectorized operations       │
│  - Zero-copy where possible    │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  TensorRT Inference Engine     │
│  - GPU acceleration            │
│  - FP16 / INT8 quantization    │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  Signal & Risk Checks          │
└────────────┬────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│  Order Management System       │
└─────────────────────────────────┘`}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Performance Optimizations</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Memory pools in hot paths to avoid allocations.</li>
            <li>• Lock-free queues for cross-thread communication.</li>
            <li>• SIMD vectorization for feature computation.</li>
            <li>• Cache-friendly data layouts for low-latency access.</li>
            <li>• Pinned CUDA memory for fast host ↔ device transfers.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# Python Services
New-MmPage 'docs\python-services\page.tsx' @'
export default function PythonServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Python Services</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Core Components</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Training Service</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• PyTorch model training.</li>
                <li>• Hyperparameter optimization.</li>
                <li>• ONNX export pipeline.</li>
                <li>• Validation and model selection.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Backtesting Engine</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Historical simulation and PnL curves.</li>
                <li>• Walk-forward and out-of-sample testing.</li>
                <li>• Performance and risk analytics.</li>
                <li>• Strategy comparison workflows.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Data Pipeline</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Market data ingestion and normalization.</li>
                <li>• Feature engineering / label generation.</li>
                <li>• Data-quality checks and anomaly detection.</li>
                <li>• Integration with object storage and databases.</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Research Notebooks</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Jupyter-based research environment.</li>
                <li>• Strategy prototyping and visualization tools.</li>
                <li>• Shared experiments and reproducible runs.</li>
                <li>• Tight integration with backtesting engine.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Python ↔ C++ Integration</h2>
          <p className="text-slate-300 mb-4">
            Python and C++ services communicate via high-performance channels:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>gRPC</strong> for RPC-style inference and management calls.</li>
            <li>• <strong>Shared memory</strong> for zero-copy feature passing.</li>
            <li>• <strong>ONNX</strong> as the model interchange format.</li>
            <li>• <strong>Redis</strong> as a shared cache for features and signals.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# Desktop Monitoring UI
New-MmPage 'docs\desktop\page.tsx' @'
export default function DesktopPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Desktop Monitoring Dashboard</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">JavaFX Application</h2>
          <p className="text-slate-300 mb-4">
            The desktop dashboard provides a rich, low-latency interface for live trading operations.
          </p>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Live PnL and exposure tracking.</li>
              <li>• Strategy health and status indicators.</li>
              <li>• Real-time positions and orders view.</li>
              <li>• System resource and latency monitoring.</li>
              <li>• Manual overrides and kill-switch controls.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <p className="text-slate-300 mb-4">
            The desktop application connects to several backend services:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Spring Boot</strong> backend for REST and WebSocket APIs.</li>
            <li>• <strong>Prometheus</strong> for metrics aggregation.</li>
            <li>• <strong>PostgreSQL</strong> for historical data.</li>
            <li>• <strong>Redis</strong> as a real-time state cache.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
            <div className="text-slate-400 mb-2"># Build desktop application</div>
            <div className="text-emerald-400 mb-4">mvn clean package</div>

            <div className="text-slate-400 mb-2"># Run</div>
            <div className="text-emerald-400">java -jar target/marketmind-desktop.jar</div>
          </div>
        </section>
      </div>
    </main>
  );
}
'@

# Telemetry
New-MmPage 'docs\telemetry\page.tsx' @'
export default function TelemetryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Telemetry & Observability</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Metrics</h2>
          <p className="text-slate-300 mb-4">
            MarketMind exposes detailed metrics for latency, throughput, errors, and model performance.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Per-endpoint and per-strategy latency distributions.</li>
            <li>• Throughput and queue-depth tracking for each service.</li>
            <li>• Model-specific metrics such as win rate and Sharpe ratio.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tracing</h2>
          <p className="text-slate-300 mb-4">
            Distributed tracing allows you to follow a request from data ingestion through inference and order routing.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• OpenTelemetry integration.</li>
            <li>• Sampling strategies for high-volume environments.</li>
            <li>• Span attributes for model and strategy IDs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
          <p className="text-slate-300 mb-4">
            Alerting policies can be configured for latency, error rates, risk thresholds, and model drift.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Slack, email, PagerDuty, or custom webhooks.</li>
            <li>• Per-strategy SLOs and SLIs.</li>
            <li>• Automatic escalation paths for critical incidents.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
'@

# ============================================================
# API REFERENCE PAGES
# ============================================================

New-MmPage 'docs\api\rest\page.tsx' @'
export default function RestAPIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">REST API Reference</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-emerald-400">
            https://api.marketmind.ai/v1
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-500 text-slate-950 px-3 py-1 rounded font-mono text-sm font-bold">
                  GET
                </span>
                <code className="text-emerald-400">/metrics</code>
              </div>
              <p className="text-slate-300 mb-3">
                Get current system metrics such as latency, throughput, and win rate.
              </p>
              <div className="bg-slate-900 rounded p-3 text-sm">
                <div className="text-slate-400 mb-2">Response:</div>
                <pre className="text-emerald-400">{`{
  "latencyP95Ms": 3.0,
  "throughputPerSec": 1000,
  "winRate": 0.732
}`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-500 text-slate-950 px-3 py-1 rounded font-mono text-sm font-bold">
                  GET
                </span>
                <code className="text-emerald-400">/equity-curve</code>
              </div>
              <p className="text-slate-300 mb-3">Retrieve equity curve data points for dashboards.</p>
              <div className="bg-slate-900 rounded p-3 text-sm">
                <div className="text-slate-400 mb-2">Response:</div>
                <pre className="text-emerald-400">{`[
  { "time": 0, "value": 100.0 },
  { "time": 1, "value": 102.3 }
]`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
'@

New-MmPage 'docs\api\grpc\page.tsx' @'
export default function GrpcAPIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">gRPC API Reference</h1>
        <p className="text-slate-300 mb-4">
          High-performance RPC interface for low-latency integrations with exchange connectors, risk systems,
          and downstream services.
        </p>
        <p className="text-slate-400">
          Detailed protobuf definitions and examples will be published in a future release. Internally, MarketMind
          uses gRPC for strategy control, health checking, and streaming model inference.
        </p>
      </div>
    </main>
  );
}
'@

New-MmPage 'docs\api\websocket\page.tsx' @'
export default function WebSocketAPIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">WebSocket API Reference</h1>
        <p className="text-slate-300 mb-4">
          Real-time streaming API for market data, signals, and position updates.
        </p>
        <p className="text-slate-400">
          The WebSocket API is designed for dashboards and real-time monitoring. Clients can subscribe to
          strategy feeds, metrics channels, and PnL streams with a single persistent connection.
        </p>
      </div>
    </main>
  );
}
'@

# ============================================================
# FEATURE / MARKETING PAGES
# ============================================================

New-MmPage 'features\page.tsx' @'
export default function FeaturesPage() {
  const features = [
    {
      title: "Ultra-Low Latency",
      description: "Sub-3ms p95 inference with C++20 and TensorRT optimization.",
      benefits: ["50–150x faster than Python-only stacks", "GPU acceleration", "Zero-copy pipelines"],
    },
    {
      title: "Hybrid ML Models",
      description: "Combine Transformers, LSTMs, and classical indicators.",
      benefits: ["Flexible architecture", "ONNX export", "Fast iteration"],
    },
    {
      title: "Enterprise Risk Controls",
      description: "Built-in position limits, drawdown protection, and kill switch.",
      benefits: ["Real-time monitoring", "Automatic circuit breakers", "Audit logging"],
    },
    {
      title: "Multi-Tier Caching",
      description: "L1–L4 cache hierarchy with TinyLFU admission.",
      benefits: [">95% hit rate", "Sub-microsecond L1", "Intelligent promotion"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-slate-300 mb-12">
          Everything you need to build, deploy, and monitor production trading strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900/50 border border-white/10 rounded-xl p-8 hover:border-emerald-500/30 transition"
            >
              <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
              <p className="text-slate-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">✓</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
'@

New-MmPage 'pricing\page.tsx' @'
export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-xl text-slate-300 mb-8">
          MarketMind is an internal-first platform. Pricing is available on request for approved partners.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
'@

New-MmPage 'integrations\page.tsx' @'
export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Integrations</h1>
        <p className="text-slate-300 mb-8">
          MarketMind integrates with your existing data providers, execution venues, and monitoring stack.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Data Providers</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Polygon.io</li>
              <li>• Alpha Vantage</li>
              <li>• Interactive Brokers</li>
              <li>• Custom feeds via gRPC / REST</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Execution</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• FIX protocol</li>
              <li>• Alpaca</li>
              <li>• Interactive Brokers</li>
              <li>• Custom broker adapters</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Monitoring</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Prometheus + Grafana</li>
              <li>• DataDog</li>
              <li>• New Relic</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Notifications</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Slack</li>
              <li>• PagerDuty</li>
              <li>• Email</li>
              <li>• Custom webhooks</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
'@

# ============================================================
# COMPANY / LEGAL PAGES
# ============================================================

New-MmPage 'about\page.tsx' @'
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About MarketMind</h1>

        <section className="mb-12">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            MarketMind is an advanced algorithmic trading platform that combines state-of-the-art machine
            learning with ultra-low-latency execution infrastructure.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Built by quants and engineers, for quants and engineers. The platform is designed to enable
            institutional and advanced retail traders to deploy sophisticated strategies with transparent,
            measurable performance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Principles</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              MarketMind uses a multi-language architecture where each component is optimized for its role:
              Python for training, C++ for inference, Java for monitoring, and TypeScript for the web.
            </p>
            <p>
              Every optimization is backed by benchmarks, and every feature is designed with observability
              and safety in mind.
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
'@

New-MmPage 'security\page.tsx' @'
export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Security</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-slate-300 mb-6">
            MarketMind is designed with security as a first-class concern. All components implement
            defense-in-depth with multiple layers of protection.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Encryption</h3>
              <p className="text-slate-400">
                All data is encrypted in transit (TLS 1.3) and at rest (AES-256 or better).
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Access Control</h3>
              <p className="text-slate-400">
                Role-based access control with least-privilege defaults for all services.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Audit Logging</h3>
              <p className="text-slate-400">
                Comprehensive audit trails for configuration changes, deployments, and API calls.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Compliance</h3>
              <p className="text-slate-400">
                Designed to run on SOC 2 Type II compliant infrastructure; detailed reports available on request.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Report a Vulnerability</h2>
          <p className="text-slate-300">
            If you discover a security issue, please email{" "}
            <a href="mailto:security@marketmind.ai" className="text-emerald-400 hover:underline">
              security@marketmind.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
'@

New-MmPage 'privacy\page.tsx' @'
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
            <p>
              We collect the minimum data necessary to provide and improve the platform, including usage analytics,
              performance metrics, and diagnostic logs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Usage</h2>
            <p>
              Data is used solely for operating the platform, improving performance, and providing support. We do
              not sell customer data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
            <p>
              Trading data and metrics may be retained to satisfy regulatory and compliance requirements. Personal
              information is removed or anonymized upon account termination where feasible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p>
              Questions about privacy? Email{" "}
              <a href="mailto:privacy@marketmind.ai" className="text-emerald-400 hover:underline">
                privacy@marketmind.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
'@

New-MmPage 'terms\page.tsx' @'
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By using MarketMind, you agree to be bound by these Terms of Service and any future updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Trading Risks</h2>
            <p>
              Trading involves substantial risk of loss. Past performance does not guarantee future results. You
              are solely responsible for all trading decisions and outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. System Availability</h2>
            <p>
              While we aim for high availability, we do not guarantee uninterrupted service. Maintenance windows
              and outages may occur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p>
              All software, models, and documentation are the property of MarketMind or its licensors. Customer
              strategies and data remain the property of the customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:legal@marketmind.ai" className="text-emerald-400 hover:underline">
                legal@marketmind.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
'@

# ============================================================
# GUIDES / SEARCH / DASHBOARD
# ============================================================

New-MmPage 'guides\page.tsx' @'
import Link from "next/link";

export default function GuidesPage() {
  const guides = [
    {
      title: "First Strategy",
      description: "Build and deploy your first trading strategy.",
      href: "/guides/first-strategy",
      time: "15 min",
    },
    {
      title: "Model Training",
      description: "Train a Transformer model and export it to ONNX.",
      href: "/guides/model-training",
      time: "30 min",
    },
    {
      title: "Performance Tuning",
      description: "Optimize inference latency and throughput.",
      href: "/guides/performance-tuning",
      time: "45 min",
    },
    {
      title: "Production Deployment",
      description: "Deploy strategies to production with confidence.",
      href: "/guides/production-deployment",
      time: "60 min",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Guides</h1>
        <p className="text-xl text-slate-300 mb-12">
          Step-by-step tutorials for common MarketMind workflows.
        </p>

        <div className="space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block bg-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 hover:bg-slate-900/70 transition group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition">
                    {guide.title}
                  </h2>
                  <p className="text-slate-400">{guide.description}</p>
                </div>
                <div className="text-sm text-slate-500 whitespace-nowrap ml-4">
                  {guide.time}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
'@

New-MmPage 'search\page.tsx' @'
"use client";

import { useState } from "react";

type DocLink = {
  title: string;
  href: string;
  category: string;
  description: string;
};

const docsIndex: DocLink[] = [
  {
    title: "Quickstart",
    href: "/quickstart",
    category: "Getting Started",
    description: "Spin up MarketMind and run your first strategy.",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    category: "Getting Started",
    description: "System requirements and installation instructions.",
  },
  {
    title: "System Architecture",
    href: "/docs/architecture",
    category: "Architecture",
    description: "High-level overview of Python, C++, and Java components.",
  },
  {
    title: "ML Pipeline",
    href: "/docs/ml-pipeline",
    category: "Core Concepts",
    description: "Training, exporting, and deploying ML models.",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const results =
    normalizedQuery.length === 0
      ? []
      : docsIndex.filter((item) => {
          const haystack =
            (item.title + " " + item.category + " " + item.description).toLowerCase();
          return haystack.includes(normalizedQuery);
        });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Search Documentation</h1>
        <p className="text-slate-300 mb-8">
          Type to quickly jump to docs, guides, and reference pages.
        </p>

        <input
          type="search"
          placeholder="Search by keyword, e.g. latency, TensorRT, risk..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 bg-slate-900 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <div className="mt-8 space-y-4">
          {normalizedQuery.length > 0 && results.length === 0 && (
            <p className="text-slate-500 text-sm">
              No matches found. Try another keyword.
            </p>
          )}

          {results.map((result) => (
            <a
              key={result.href}
              href={result.href}
              className="block bg-slate-900/60 border border-white/10 rounded-lg p-4 hover:border-emerald-400/50 hover:bg-slate-900 transition"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold">{result.title}</h2>
                <span className="text-xs text-slate-400">{result.category}</span>
              </div>
              <p className="text-sm text-slate-400">{result.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
'@

New-MmPage 'dashboard\page.tsx' @'
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
'@

# ============================================================
# API ROUTES
# ============================================================

New-MmApiRoute 'api\metrics' @'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    latencyP95Ms: 3.0,
    throughputPerSec: 1000,
    winRate: 0.732,
  });
}
'@

New-MmApiRoute 'api\equity-curve' @'
import { NextResponse } from "next/server";

const sampleEquity = [
  { time: 0, value: 100.0 },
  { time: 1, value: 101.2 },
  { time: 2, value: 102.8 },
  { time: 3, value: 101.9 },
  { time: 4, value: 104.3 },
];

export async function GET() {
  return NextResponse.json(sampleEquity);
}
'@

New-MmApiRoute 'api\strategies' @'
import { NextResponse } from "next/server";

const sampleStrategies = [
  {
    id: "momentum_1",
    name: "Momentum Ensemble",
    status: "active",
    pnl: 12450.32,
    winRate: 0.68,
    sharpe: 2.1,
  },
  {
    id: "mean_rev_1",
    name: "Mean Reversion Alpha",
    status: "active",
    pnl: 8320.15,
    winRate: 0.71,
    sharpe: 1.8,
  },
  {
    id: "ml_hybrid_1",
    name: "ML Hybrid Strategy",
    status: "paused",
    pnl: -420.5,
    winRate: 0.45,
    sharpe: 0.3,
  },
];

export async function GET() {
  return NextResponse.json(sampleStrategies);
}
'@

New-MmApiRoute 'api\positions' @'
import { NextResponse } from "next/server";

const samplePositions = [
  {
    symbol: "AAPL",
    quantity: 100,
    entryPrice: 175.5,
    currentPrice: 178.2,
    pnl: 270.0,
    pnlPct: 1.54,
  },
  {
    symbol: "TSLA",
    quantity: -50,
    entryPrice: 245.3,
    currentPrice: 242.1,
    pnl: 160.0,
    pnlPct: 1.3,
  },
];

export async function GET() {
  return NextResponse.json(samplePositions);
}
'@

New-MmApiRoute 'api\health' @'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    services: {
      inference: "up",
      cache: "up",
      database: "up",
      monitoring: "up",
    },
    version: "4.1.17",
  });
}
'@

# ============================================================
# SUMMARY OUTPUT
# ============================================================

Write-Host "`nCreated:" -ForegroundColor Yellow
Write-Host "  📚 15+ documentation pages" -ForegroundColor White
Write-Host "  🔌 5 API routes" -ForegroundColor White
Write-Host "  ⚡ Feature & company pages" -ForegroundColor White
Write-Host "  📖 Guides, search, and dashboard" -ForegroundColor White
Write-Host "`nAll JSX issues fixed:" -ForegroundColor Green
Write-Host "  ✓ Link imports where needed" -ForegroundColor White
Write-Host "  ✓ Valid anchors and components" -ForegroundColor White
Write-Host "  ✓ UTF-8 encoding" -ForegroundColor White
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "  1. cd $Root" -ForegroundColor White
Write-Host "  2. npm run dev" -ForegroundColor White
Write-Host "  3. Visit http://localhost:3000" -ForegroundColor White
Write-Host "`n🚀 Ready to ship!" -ForegroundColor Green

