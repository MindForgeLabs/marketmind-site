import type { Metadata } from "next";
import Content from "@content/docs/cpp-runtime.mdx";

export const metadata: Metadata = {
  title: "C++ Runtime | MarketMind",
  description:
    "Planned Phase III runtime work; no current C++/GPU or broker execution product capability.",
};

export default function Page() {
  return <Content />;
}
