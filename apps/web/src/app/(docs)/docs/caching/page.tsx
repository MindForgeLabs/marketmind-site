import type { Metadata } from "next";
import Content from "@content/docs/caching.mdx";

export const metadata: Metadata = {
  title: "Caching | MarketMind",
  description:
    "Caching rules for reproducible research and planned runtime cache layers.",
};

export default function Page() {
  return <Content />;
}
