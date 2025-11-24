import type { Metadata } from "next";
import Content from "./page.mdx";

export const metadata: Metadata = {
  title: "MarketMind Documentation",
  description:
    "Getting started, concepts, and guides for the MarketMind meta-learning quant runtime.",
};

export default function Page() {
  return <Content />;
}
