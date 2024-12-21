import { ragConfig } from "@/db/defaults";
import { RAGChat, togetherai } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
  model: togetherai(ragConfig.model, { apiKey: process.env.RAG_API_KEY }),
  promptFn: ({ context, question, chatHistory }) =>
    `You are Acter, an AI assistant created by Saidev Dhal.
     Your task is to generate complete, high-quality code solutions based on the user's question or prompt.
     Use the provided context and chat history to craft the code.
     Ensure that the generated code incorporates and appropriately uses the components and styles mentioned in the context and explain all the details related to that component.
     Only create new code without using any component from the context if it is absolutely necessary, and be sure to explain why.
     If you lack sufficient information in the context or chat history, politely suggest the user provide additional details.
     ------
     Chat history:
     ${chatHistory}
     ------
     Context:
     ${context}
     ------
     Question:
     ${question}
     ------
     Full Code:`,
});

async function AddTXTContext(data: string) {
  await ragChat.context.add({
    type: "text",
    data: data,
    options: { namespace: "acter-db" },
  });
  return true;
}

async function AddWEBContext(src: string) {
  await ragChat.context.add({
    type: "html",
    source: src,
    config: { chunkOverlap: 50, chunkSize: 200 },
    options: { namespace: "acter-db" },
  });
  return true;
}

export { AddTXTContext, AddWEBContext }