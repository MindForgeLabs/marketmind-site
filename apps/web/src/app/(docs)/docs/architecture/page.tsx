import type { Metadata } from "next";
import Content from "@content/docs/architecture.mdx";

export const metadata: Metadata = {
  title: "Architecture | MarketMind",
  description:
    "Current governed research substrate boundaries and proposed future runtime lanes.",
};

export default function Page() {
  return <Content />;
}
