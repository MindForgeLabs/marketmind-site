import type { Metadata } from "next";
import Content from "@content/docs/index.mdx";

export const metadata: Metadata = {
  title: "MarketMind Documentation",
  description:
    "Validation-first algorithmic trading R&D platform: backtesting, gates, run bundles, and reproducibility.",
};

export default function Page() {
  return <Content />;
}
