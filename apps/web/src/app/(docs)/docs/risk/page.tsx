import type { Metadata } from "next";
import Content from "@content/docs/risk.mdx";

export const metadata: Metadata = {
  title: "Risk | MarketMind",
  description:
    "Current research governance gates and planned execution risk controls.",
};

export default function Page() {
  return <Content />;
}
