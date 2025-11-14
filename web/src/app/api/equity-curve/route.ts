import { NextResponse } from "next/server";

const sampleEquity = [
  { time: 0, value: 100.0 },
  { time: 1, value: 101.2 },
  { time: 2, value: 102.8 },
  { time: 3, value: 101.9 },
  { time: 4, value: 104.3 },
];

export async function GET() {
  return NextResponse.json(sampleEquity);
}
