/**
 * Shared shape for illustrative metrics.
 * Production telemetry is roadmap work, not current product truth.
 */
export type MetricsResponse = {
  latencyP95Ms: number;
  throughputPerSec: number;
  winRate: number;
  deltas?: {
    latency: number;
    throughput: number;
    winRate: number;
  };
};
