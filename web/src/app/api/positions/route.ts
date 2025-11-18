import { NextResponse } from "next/server";

const samplePositions = [
  {
    symbol: "AAPL",
    quantity: 100,
    entryPrice: 175.5,
    currentPrice: 178.2,
    pnl: 270.0,
    pnlPct: 1.54,
  },
  {
    symbol: "TSLA",
    quantity: -50,
    entryPrice: 245.3,
    currentPrice: 242.1,
    pnl: 160.0,
    pnlPct: 1.3,
  },
];

export async function GET() {
  return NextResponse.json(samplePositions);
}
