import { NextResponse } from "next/server";

const sampleStrategies = [
  {
    id: "momentum_1",
    name: "Momentum Ensemble",
    status: "active",
    pnl: 12450.32,
    winRate: 0.68,
    sharpe: 2.1,
  },
  {
    id: "mean_rev_1",
    name: "Mean Reversion Alpha",
    status: "active",
    pnl: 8320.15,
    winRate: 0.71,
    sharpe: 1.8,
  },
  {
    id: "ml_hybrid_1",
    name: "ML Hybrid Strategy",
    status: "paused",
    pnl: -420.5,
    winRate: 0.45,
    sharpe: 0.3,
  },
];

export async function GET() {
  return NextResponse.json(sampleStrategies);
}
