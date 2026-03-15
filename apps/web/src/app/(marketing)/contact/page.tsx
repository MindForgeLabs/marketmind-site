// src/app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Request access to MarketMind
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            MarketMind is currently available to internal teams and select partners.
            Share a bit about your use case and we&apos;ll follow up with next steps.
          </p>
        </header>

        <section className="space-y-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 text-sm">
              <div className="text-slate-400">Primary contact</div>
              <div className="font-medium">engineering@marketmind.ai</div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="text-slate-400">Security / legal</div>
              <div className="font-medium">
                <a
                  href="mailto:security@marketmind.ai"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  security@marketmind.ai
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            For privacy or data-processing questions, please see our{" "}
            <Link
              href="/privacy"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/security"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Security Overview
            </Link>
            .
          </p>
        </section>

        <section className="mt-10 text-xs text-slate-500 space-y-2">
          <p>
            A proper intake form or scheduling link can be wired here later (Calendly,
            HubSpot, internal ticketing, etc.). For now, email is the single source of
            truth for new access requests.
          </p>
        </section>
      </div>
    </main>
  );
}
