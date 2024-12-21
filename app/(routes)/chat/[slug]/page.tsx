"use client";

import { useEffect, useState } from "react";
import { SideBar } from "@/components/custom/sidebar/sidebar";
import useLocalStorage from "@/lib/use.local";
import { Message } from "ai/react";
import { ChatComp } from "@/components/custom/chat/comp";
import LoadingScreen from "@/components/custom/loading.screen";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ChatPage({ params }: PageProps) {
  const [loading, setLoading] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useLocalStorage(
    "acter-isCollapsed",
    false,
  );
  const [history, setHistory] = useState<Message[]>([]);

  const chatID = params.slug.replace(/^\//, "");

  useEffect(() => {
    async function handleSlug() {
      setLoading(true);
      try {
        const response = await fetch("/api/ai/history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chatID }),
        });

        if (response.ok) {
          const chatHistory = await response.json();
          setHistory(chatHistory);
        } else {
          console.error("Failed to fetch chat history");
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      } finally {
        setLoading(false);
      }
    }

    handleSlug();
  }, [params.slug, chatID]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />

      {/* Left Panel */}
      <div className="flex-1 flex flex-col p-4 border-r overflow-hidden">
        {/* Input Area */}
        <ChatComp chatId={chatID} history={history} />
      </div>
    </div>
  );
}
