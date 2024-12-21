import { NextRequest } from "next/server";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { ragChat } from "@/lib/rag";

export const POST = async (req: NextRequest) => {
  const { messages } = await req.json();

  const lastMsg = messages[messages.length - 1].content;
  const res = await ragChat.chat(lastMsg, {
    namespace: "acter-db",
    streaming: true,
    historyLength: 100,
    historyTTL: 604_800,
    similarityThreshold: 0.7,
  });

  return aiUseChatAdapter(res);
};