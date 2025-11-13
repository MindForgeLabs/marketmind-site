import * as React from "react";

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
    <main className={`mx-auto max-w-3xl px-4 py-10 text-slate-200 ${className}`}>
      {/* Visible on focus for keyboard users */}
      <a
        href="#docs-content"
        className="sr-only focus:not-sr-only inline-block mb-4 px-2 py-1 rounded bg-slate-700"
      >
        Skip to content
      </a>

      <header className="mb-6">
        <h1 id={headingId} className="text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-slate-400">{description}</p>
      </header>

      <article id="docs-content" aria-labelledby={headingId} className="prose prose-invert max-w-none">
        {children}
      </article>
    </main>
  );
}
