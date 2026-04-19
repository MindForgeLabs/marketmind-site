import type { Metadata } from "next";
import Content from "@content/docs/api.mdx";

export const metadata: Metadata = {
  title: "API | MarketMind",
  description:
    "Current modest API surface and planned REST, gRPC, and WebSocket work.",
};

export default function Page() {
  return <Content />;
}
