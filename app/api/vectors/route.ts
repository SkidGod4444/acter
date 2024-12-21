import { ragChat } from '@/lib/rag';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { source, namespace, metadata } = await req.json();

    await ragChat.context.add({
      type: "html",
      source: source,
      config: { chunkOverlap: 50, chunkSize: 200 },
      options: { namespace: namespace, metadata: { title: metadata.title, description: metadata.description } },
    });

    return NextResponse.json({ message: "Content added successfully to ragChat context!" });
  } catch (error) {
    console.error("Error adding content to ragChat context:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
