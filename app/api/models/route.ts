import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${process.env.DOCKER_MODEL_URL}/api/models`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

