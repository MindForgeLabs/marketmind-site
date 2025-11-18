import * as React from "react";
import Link from "next/link";

type DocsLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export default function DocsLayout({
  children,
  title = "Documentation",
  description = "Concepts, tutorials, and guides.",
  className = "",
}: DocsLayoutProps) {
  const headingId = "docs-heading";

  return (
    <main className={`mx-auto max-w-5xl px-4 py-10 text-slate-200 ${className}`}>
      {/* Visible on focus for keyboard users */}
      <a
        href="#docs-content"
        className="sr-only focus:not-sr-only inline-block mb-4 px-2 py-1 rounded bg-slate-700"
      >
        Skip to content
      </a>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        {/* Left-hand docs nav; simple for Phase 3, can grow later */}
        <aside className="lg:w-56 lg:flex-shrink-0">
          <div className="sticky top-24 space-y-4 text-sm text-slate-400">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Docs navigation
            </p>
            <nav aria-label="Documentation">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/quickstart"
                    className="block rounded px-2 py-1 hover:bg-slate-800 hover:text-slate-100"
                  >
                    Getting started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/architecture"
                    className="block rounded px-2 py-1 hover:bg-slate-800 hover:text-slate-100"
                  >
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    href="/performance"
                    className="block rounded px-2 py-1 hover:bg-slate-800 hover:text-slate-100"
                  >
                    Performance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/telemetry"
                    className="block rounded px-2 py-1 hover:bg-slate-800 hover:text-slate-100"
                  >
                    Telemetry &amp; metrics
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main docs content */}
        <div className="flex-1">
          <header className="mb-6">
            <h1 id={headingId} className="text-2xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-slate-400">{description}</p>
          </header>

          <article
            id="docs-content"
            aria-labelledby={headingId}
            className="prose prose-invert max-w-none"
          >
            {children}
          </article>
        </div>
      </div>
    </main>
  );
}
