import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    latencyP95Ms: 3.0,
    throughputPerSec: 1000,
    winRate: 0.732,
  });
}
