import type { Metadata } from "next";
import Content from "./page.mdx";

export const metadata: Metadata = {
  title: "Telemetry & Metrics | MarketMind",
  description: "Observability, metrics, and tracing for MarketMind runtimes.",
};

export default function Page() {
  return <Content />;
}
