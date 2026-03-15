export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Architecture</h1>
      <p className="text-slate-300 mb-4">
        Current platform: validation, backtesting, gate CLI, run bundles, PIT-safe path, and artifact registry (CAS). Full architecture (meta-learning, C++ execution) is documented as roadmap in the docs.
      </p>
      <p className="text-slate-500 text-sm">Detailed architecture overview coming soon. See <a href="/docs/architecture" className="text-emerald-400 hover:underline">Docs → Architecture</a> for current vs. target design.</p>
    </main>
  );
}
