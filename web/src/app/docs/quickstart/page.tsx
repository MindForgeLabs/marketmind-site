import type { Metadata } from "next";
import Content from "./page.mdx";

export const metadata: Metadata = {
  title: "Quickstart",
  description:
    "Install the client, run a health check, and execute your first MarketMind strategy.",
};

export default function Page() {
  return <Content />;
}
