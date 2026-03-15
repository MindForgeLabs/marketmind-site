import type { Metadata } from "next";
import Content from "@content/docs/ml-pipeline.mdx";

export const metadata: Metadata = {
  title: "ML Pipeline | MarketMind",
  description:
    "Planned (Phase II): training → export → optimization workflow and how models would flow into the runtime. No training or inference pipeline is shipped today.",
};

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-4">
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4" role="status">
          <p className="text-sm font-semibold text-amber-400">
            Planned (Phase II): This page describes the target ML pipeline.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            No training or inference pipeline is shipped today.
          </p>
        </div>
      </div>
      <Content />
    </>
  );
}
