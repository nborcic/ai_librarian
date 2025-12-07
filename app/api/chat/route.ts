import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt, model = "ALIENTELLIGENCE/librarianv2:latest" } =
      await request.json();

    const ollamaUrl = `${process.env.DOCKER_MODEL_URL}/api/generate`;

    const response = await fetch(ollamaUrl, {
      method: "POST",
      body: JSON.stringify({ model, prompt, stream: false }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json({
      response: data.response,
      model: data.model,
      done: data.done,
      modelUsed: model,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
