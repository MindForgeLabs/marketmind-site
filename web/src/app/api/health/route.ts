import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    services: {
      inference: "up",
      cache: "up",
      database: "up",
      monitoring: "up",
    },
    version: "4.1.17",
  });
}
