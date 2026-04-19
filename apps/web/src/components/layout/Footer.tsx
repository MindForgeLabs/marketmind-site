import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MarketMind</h3>
            <p className="text-sm text-slate-400">
              Validation-first algorithmic trading research platform for systematic
              strategy development, governed backtesting, and reproducible run bundles.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-emerald-400 transition">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Docs &amp; resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="hover:text-emerald-400 transition">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/quickstart" className="hover:text-emerald-400 transition">
                  Quickstart
                </Link>
              </li>
              <li>
                <Link href="/docs/architecture" className="hover:text-emerald-400 transition">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/docs/telemetry" className="hover:text-emerald-400 transition">
                  Telemetry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-emerald-400 transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 MarketMind. Proprietary technology platform.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-emerald-400 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-emerald-400 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
