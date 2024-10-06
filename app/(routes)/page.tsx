"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  MenuIcon,
  PlusIcon,
  BookOpenIcon,
  LayoutDashboardIcon,
  ChevronLeftIcon,
  PaperclipIcon,
  ArrowUpIcon,
  MoveUpRight,
} from "lucide-react";
import { CustomTextArea } from "@/components/custom/text.area";
import { Badge } from "@/components/ui/badge";
import { OsBtn } from "@/components/custom/os.button";
import { OfcLinks } from "@/db/defaults";
import { useUser } from "@/context/user.context";
import DragableCards from "@/components/custom/hero/dragable.cards";
import AuthDialog from "@/components/custom/auth/auth.dialog";

export default function Component() {
  const { user } = useUser();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative h-screen z-50 flex flex-col dark:bg-black dark:text-white bg-background text-black font-[family-name:var(--font-geist-regular)] overflow-hidden">
      
      {/* Background */}
      <div className="fixed inset-0 z-20 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] dark:bg-[size:3rem_3rem]" />

      {/* Main Layout */}
      <div className="flex h-full w-full z-30">
        {/* Sidebar */}
        {user && (
          <div
            className={cn(
              "hidden md:flex flex-col transition-all duration-300 border-r",
              isSidebarExpanded ? "w-60" : "w-12",
            )}
          >
            <div className="flex items-center justify-between p-2">
              <span
                className={cn(
                  "text-2xl font-bold",
                  !isSidebarExpanded && "hidden",
                )}
              >
                Acter
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
              >
                {isSidebarExpanded ? <ChevronLeftIcon /> : <MenuIcon />}
              </Button>
            </div>
            <nav className="flex flex-col gap-2 p-4">
              <Button variant="ghost" className="justify-start">
                <PlusIcon className="mr-2" />
                {isSidebarExpanded && "New Chat"}
              </Button>
              <Button variant="ghost" className="justify-start">
                <BookOpenIcon className="mr-2" />
                {isSidebarExpanded && "Docs"}
              </Button>
              <Button variant="ghost" className="justify-start">
                <LayoutDashboardIcon className="mr-2" />
                {isSidebarExpanded && "Dashboard"}
              </Button>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col flex-1 z-40">
          {/* Header at the top */}
          <header className="flex justify-end items-center p-4 bg-transparent border-none">
            {/* <Badge>Public Beta</Badge> */}
            <AuthDialog open={isOpen} onOpenChange={setIsOpen}/>
          </header>

          <div className="mt-28 md:mt-10">
            <OsBtn />
          </div>
          <main className="flex-1 flex flex-col items-center justify-center p-4">
            <h2 className="text-4xl mb-4 font-[family-name:var(--font-geist-bold)] tracking-tighter select-none">
              What can I help you ship?
            </h2>
            <p className="text-sm mb-4 select-none dark:text-white text-muted-foreground">
              Am the one who supports Acternity UI, ask questions, debug code.
            </p>

            {/* Input area */}
            <div className="w-full max-w-3xl mb-10">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-2 bg-background border-black dark:bg-black rounded-xl border border-dashed dark:border-white p-2 min-h-[60px]">
                <CustomTextArea
                  placeholder="Acter make me a bra for my huge buttons..."
                  className="flex-1 bg-transparent focus:outline-none shadow-none"
                />
                <div className="flex items-center justify-between gap-2">
                  <Button variant="ghost" size="icon">
                    <PaperclipIcon className="w-4 h-4" />
                  </Button>
                  <Button size="icon">
                    <ArrowUpIcon className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant={"secondary"}
                className="cursor-pointer rounded-xl border border-muted-foreground"
              >
                Generate a SaaS pricing calculator
                <MoveUpRight className="size-3 ml-1" />
              </Badge>
              <Badge
                variant={"secondary"}
                className="cursor-pointer rounded-xl border border-muted-foreground"
              >
                How can I structure LLM output?
                <MoveUpRight className="size-3 ml-1" />
              </Badge>
              <Badge
                variant={"secondary"}
                className="cursor-pointer rounded-xl border border-muted-foreground"
              >
                Write code to implement a min heap
                <MoveUpRight className="size-3 ml-1" />
              </Badge>
            </div>
          </main>
          <div className="hidden md:flex z-20">
            <DragableCards />
          </div>

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
