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
