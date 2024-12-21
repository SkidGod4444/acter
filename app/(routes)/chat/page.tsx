"use client";

import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import useLocalStorage from "@/lib/use.local";
import { useUser } from "@/context/user.context";
import { OfcLinks } from "@/db/defaults";
import { SideBar } from "@/components/custom/sidebar/sidebar";
import { useEffect, useState } from "react";
import { ChatComp } from "@/components/custom/chat/comp";

export default function ChatPage() {
  const { user } = useUser();
  const [chatID, setChatID] = useState<string | number>("null");
  const [isMsg, setMsg] = useState(false);

  useEffect(() => {
    const fetchChatID = async () => {
      const id = Math.floor(Math.random() * 900000) + 100000;
      setChatID(id.toString());
    };

    if (user) {
      fetchChatID();
    }
  }, [user, chatID]);

  useEffect(() => {
    if (chatID && isMsg) {
      window.location.href = `/chat/${chatID}`;
    }
  }, [chatID, isMsg]);

  const [isSidebarExpanded, setIsSidebarExpanded] = useLocalStorage(
    "acter-isCollapsed",
    false
  );

  return (
    <div className="relative h-screen flex z-50 flex-col dark:bg-black dark:text-white bg-background text-black font-[family-name:var(--font-geist-regular)] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-20 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] dark:bg-[size:3rem_3rem]" />

      {/* Main Layout */}
      <div className="flex h-full w-full z-30">
        {/* Sidebar */}
        <SideBar
            isSidebarExpanded={isSidebarExpanded}
            setIsSidebarExpanded={(expanded) => setIsSidebarExpanded(expanded)}
          />

        {/* Main Content */}
        <div className="flex flex-col flex-1 z-40">
          {/* Header at the top */}
          <header className="flex justify-end items-center p-4 bg-transparent border-none">
            <Badge>Public Beta</Badge>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h2 className="text-4xl mb-4 font-[family-name:var(--font-geist-bold)] tracking-tighter select-none">
              Need awesome components to ship?
            </h2>
            <p className="text-sm mb-4 select-none dark:text-white text-muted-foreground">
              Am the one who supports Acternity UI, Magic UI and more libraries. Ask questions, modify component.
            </p>

            {/* Input area */}
            <div className="w-full max-w-3xl mb-10">
              <ChatComp chatId={chatID} onHasMessagesChange={setMsg} />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant={"secondary"} className="cursor-pointer rounded-xl border border-muted-foreground">
                Generate a SaaS pricing calculator
                <MoveUpRight className="size-3 ml-1" />
              </Badge>
              <Badge variant={"secondary"} className="cursor-pointer rounded-xl border border-muted-foreground">
                How can I structure LLM output?
                <MoveUpRight className="size-3 ml-1" />
              </Badge>
              <Badge variant={"secondary"} className="cursor-pointer rounded-xl border border-muted-foreground">
                Write code to implement a min heap
                <MoveUpRight className="size-3 ml-1" />
              </Badge>
            </div>
          </main>

          {/* Footer at the bottom */}
          <footer className="p-8">
            <div className="flex justify-center items-center text-xs text-gray-500">
              <div className="flex items-center">
                <a href="/legal/ai-policy" className="hover:underline">
                  Terms
                </a>
                <div className="h-4 w-px bg-gray-300 mx-2"></div>
                <a href="/legal/agreement" className="hover:underline">
                  AI Policy
                </a>
                <div className="h-4 w-px bg-gray-300 mx-2"></div>
                <a href="/legal/privacy-policy" className="hover:underline">
                  Privacy
                </a>
              </div>
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              <a href={OfcLinks.portfolio} className="hover:underline">
                By Saidev Dhal
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
