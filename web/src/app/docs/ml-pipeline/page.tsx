import type { Metadata } from "next";
import Content from "./page.mdx";

export const metadata: Metadata = {
  title: "ML Pipeline | MarketMind",
  description:
    "Training → export → optimization workflow and how models flow into the runtime.",
};

export default function Page() {
  return <Content />;
}
