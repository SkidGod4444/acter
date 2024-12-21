"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ClipboardIcon } from "lucide-react";

interface MsgProps {
  content: string;
  isUser: boolean;
}

export default function Message({ content, isUser }: MsgProps) {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const renderMessageContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);
    return (
      <>
        {parts.map((part, index) => {
          if (
            (part.startsWith("```") && part.endsWith("```")) ||
            part.startsWith("```")
          ) {
            const [...codeLines] = part.split("\n");
            const code = codeLines.slice(0, -1).join("\n");

            return (
              <div key={index} className="relative w-full">
                <pre className="bg-gray-800 text-white p-4 rounded-md my-2 overflow-x-auto">
                  <code>{code}</code>
                </pre>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => handleCopy(code)}
                >
                  <ClipboardIcon className="w-4 h-4" />
                </Button>
                {copyStatus && (
                  <span className="absolute top-2 left-2 text-sm text-green-500">
                    {copyStatus}
                  </span>
                )}
              </div>
            );
          } else {
            return <p key={index}>{part}</p>;
          }
        })}
      </>
    );
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(null), 2000);
    });
  };

  return (
    <div className="bg-transparent py-5">
      <div className="px-6 py-2">
        <div
          className={cn("max-w-3xl mx-auto flex", {
            "flex-row-reverse": isUser, // User's messages on the right
            "flex-row": !isUser, // Bot's messages on the left
          })}
        >
          {!isUser && (
            <div
              className={cn(
                "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center cursor-pointer",
              )}
            >
              <Avatar>
                <AvatarImage src="/assets/acter-logo.jpg" alt="@acter" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          )}

          <div
            className={cn("flex flex-col w-full text-start mx-6", {
              "items-end": isUser,
              "items-start mb-5": !isUser,
            })}
          >
            <div
              className={cn("flex items-center space-x-2", {
                "justify-end": isUser,
                "justify-start": !isUser,
              })}
            >
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {!isUser && "Acter"}
              </span>
            </div>

            <div
              className={cn(
                "text-md font-normal text-gray-900 dark:text-white px-3 py-2",
                { "rounded-xl mt-2 bg-muted": isUser },
              )}
            >
              {/* Render MDX-like content */}
              <div>{renderMessageContent(content)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
