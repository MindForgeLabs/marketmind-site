import type { Metadata } from "next";
import Content from "@content/docs/strategies.mdx";

export const metadata: Metadata = {
  title: "Strategies | MarketMind",
  description:
    "Strategy research boundaries under PIT-safe data, leakage-aware validation, and governance gates.",
};

export default function Page() {
  return <Content />;
}
