import type { Metadata } from "next";
import Content from "@content/docs/ml-pipeline.mdx";

export const metadata: Metadata = {
  title: "ML Pipeline | MarketMind",
  description:
    "Planned Phase II allocator and training work; no validated adaptive allocator is shipped today.",
};

export default function Page() {
  return <Content />;
}
