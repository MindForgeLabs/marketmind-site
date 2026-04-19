import type { Metadata } from "next";
import Content from "@content/docs/telemetry.mdx";

export const metadata: Metadata = {
  title: "Telemetry & Metrics | MarketMind",
  description:
    "Observability for research artifacts today and planned runtime telemetry later.",
};

export default function Page() {
  return <Content />;
}
