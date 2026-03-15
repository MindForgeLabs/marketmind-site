"use client";

import { useEffect, useState } from "react";
import type { MetricsResponse } from "@marketmind/domain";

export function useLiveMetrics(pollIntervalMs = 5000) {
    const [metrics, setMetrics] = useState<MetricsResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const fetchMetrics = async () => {
            try {
                const res = await fetch("/api/metrics", { cache: "no-store" });
                if (!res.ok) return;
                const data = (await res.json()) as MetricsResponse;
                if (!cancelled) setMetrics(data);
            } catch (error) {
                // optional: send to logging/telemetry later
                console.error("Failed to fetch metrics", error);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchMetrics();
        const id = setInterval(fetchMetrics, pollIntervalMs);

        return () => {
            cancelled = true;
            clearInterval(id);
        };
    }, [pollIntervalMs]);

    return { metrics, loading };
}
