"use client";
import { Message, useChat } from "ai/react";
import { useCallback, useEffect, useState, useMemo } from "react";
import { CustomTextArea } from "@/components/custom/text.area";
import { PaperclipIcon, ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LibSelector } from "../lib.selector";
import MsgsWrapper from "../msgs/msgs.wrapper";

export const ChatComp = ({
  chatId,
  history,
  onHasMessagesChange,
  msgs,
}: {
  chatId: number | string;
  history?: Message[];
  onHasMessagesChange?: (hasMessages: boolean) => void;
  msgs?: (Messages: Message[]) => void;
}) => {
  const [space, setSpace] = useState<string | null>("default-ui");

  // Stable handleSpaceSelect function
  const handleSpaceSelect = useCallback((selectedSpaceId: string | null) => {
    console.log("Space selected:", selectedSpaceId);
    setSpace(selectedSpaceId);
  }, []);

  // Memoize API body to avoid unnecessary re-renders
  const apiBody = useMemo(
    () => ({
      chatId,
      namespace: space,
    }),
    [chatId, space],
  );

  const { messages, handleInputChange, handleSubmit, input, isLoading } =
    useChat({
      api: "/api/ai/stream",
      body: apiBody,
      initialMessages: history,
    });

  // Add Enter key submission logic
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        const form = document.querySelector("form");
        if (form) {
          form.requestSubmit();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Track changes to messages
  useEffect(() => {
    if (messages.length > 0) {
      onHasMessagesChange?.(true);
      msgs?.(messages);
    }
  }, [messages, onHasMessagesChange, msgs]);

  return (
    <div className="relativeflex-col items-center justify-center h-full w-full">
      {messages.length > 0 && <MsgsWrapper msgs={messages} />}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-background dark:bg-black rounded-xl border dark:border-white p-2 min-h-[60px]"
      >
        <CustomTextArea
          value={input}
          onChange={handleInputChange}
          placeholder="Acter make me a glowing button component..."
          className="flex-1 bg-transparent focus:outline-none shadow-none"
        />
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-row">
            <Button variant="outline" size="icon" disabled>
              <PaperclipIcon className="w-4 h-4" />
            </Button>
            <LibSelector onSpaceSelect={handleSpaceSelect} />
          </div>
          <Button
            size="icon"
            type="submit"
            disabled={input === "" || isLoading}
          >
            <ArrowUpIcon className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};
