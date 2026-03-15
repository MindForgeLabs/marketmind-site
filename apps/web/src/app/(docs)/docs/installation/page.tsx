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
