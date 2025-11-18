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
    // Add more docs as you flesh the site out
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
