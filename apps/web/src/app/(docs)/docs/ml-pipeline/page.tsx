import type { Metadata } from "next";
import Content from "@content/docs/ml-pipeline.mdx";

export const metadata: Metadata = {
  title: "ML Pipeline | MarketMind",
  description:
    "Phase II-0 (non-promotable): governed II-0B artifact lane complete; II-0C research pilot harness complete (wiring only — not training). Phase II (conditional): promotable training → export → optimization pipeline. No training or inference pipeline is shipped today.",
};

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-4">
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4" role="status">
          <p className="text-sm font-semibold text-amber-400">
            Phase II-0 (non-promotable): governed II-0B artifact contract path is complete on that lane; II-0C completes research-only pilot harness wiring (not a shipped training or inference pipeline).
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Phase II (conditional): promotable training pipeline — PyTorch training, ONNX export, context encoder, meta-policy allocator — conditional on Phase II-0 evidence confirming a viable path.
          </p>
        </div>
      </div>
      <Content />
    </>
  );
}
