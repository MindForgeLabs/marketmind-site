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
