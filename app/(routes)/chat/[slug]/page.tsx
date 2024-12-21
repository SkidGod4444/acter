"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, PaperclipIcon, ArrowUpIcon } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CustomTextArea } from "@/components/custom/text.area";
import { SideBar } from "@/components/custom/sidebar/sidebar";
import useLocalStorage from "@/lib/use.local";
import { LibSelector } from '@/components/custom/lib.selector';

export default function Component() {
  const [isCodeCollapsed, setIsCodeCollapsed] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useLocalStorage("acter-isCollapsed", false);

  const toggleCodePanel = () => {
    setIsCodeCollapsed(!isCodeCollapsed);
  };

  const messages = [
    { id: 1, text: "Hello! How can I help you today?" },
    { id: 2, text: "Can you explain how to use React hooks?" },
    { id: 3, text: "React hooks are functions that let you use state and other React features in functional components..." },
  ];

  const codeExample = `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
  `.trim();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />

      {/* Left Panel */}
      <div className="flex-1 flex flex-col p-4 border-r">
        <nav className="flex items-center justify-between border-b pb-2 mb-4">
          <h2 className="text-2xl font-bold">Messages</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleCodePanel}
          >
            {isCodeCollapsed ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </Button>
        </nav>
        <ScrollArea className="flex-1 mb-4 p-4 bg-gray-50 rounded-lg">
          {messages.map((message) => (
            <div key={message.id} className="mb-4 p-3 bg-white rounded-lg shadow-sm">
              {message.text}
            </div>
          ))}
        </ScrollArea>

        {/* Input Area */}
        <form
                // onSubmit={handleFormSubmit}
                className="flex flex-col gap-2 bg-background border dark:bg-black rounded-xl dark:border-white p-2 min-h-[60px]"
              >
          <CustomTextArea
            placeholder="Acter, make me a glowing button component..."
            className="flex-1 bg-transparent focus:outline-none shadow-none"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <PaperclipIcon className="w-4 h-4" />
              </Button>
              <LibSelector />
            </div>
            <Button size="icon">
              <ArrowUpIcon className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>

      {/* Right Panel - Code Viewer */}
      <div
        className={`flex transition-all duration-300 ease-in-out ${
          isCodeCollapsed ? 'w-12' : 'w-1/2'
        }`}
      >
        {!isCodeCollapsed && (
          <div className="flex-1 p-4 border-l">
            <h2 className="text-2xl font-bold mb-4">Code</h2>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
}
