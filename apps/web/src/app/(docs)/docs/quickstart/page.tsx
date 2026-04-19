import type { Metadata } from "next";
import Content from "@content/docs/quickstart.mdx";

export const metadata: Metadata = {
  title: "Quickstart",
  description:
    "Orient to the current MarketMind research substrate and validation workflow.",
};

export default function Page() {
  return <Content />;
}
