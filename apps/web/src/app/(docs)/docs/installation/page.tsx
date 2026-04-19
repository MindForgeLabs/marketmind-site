import type { Metadata } from "next";
import Content from "@content/docs/installation.mdx";

export const metadata: Metadata = {
  title: "Installation | MarketMind",
  description: "Workspace installation and current dependency boundaries.",
};

export default function Page() {
  return <Content />;
}
