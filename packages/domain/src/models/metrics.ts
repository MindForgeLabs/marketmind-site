/**
 * Shared shape for live metrics (latency, throughput, win rate).
 * Used by dashboard and API responses.
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
