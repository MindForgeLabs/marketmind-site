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
