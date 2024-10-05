import { Button } from "@/components/ui/button";
import {
  BoltIcon,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import DraggableWrapper from "../dragable.wrapper";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Calendar } from "@nextui-org/calendar";
import type { DateValue } from "@react-types/calendar";
import { parseDate } from "@internationalized/date";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import CodeComparison from "@/components/ui/code-comparison";
import { afterCode, beforeCode } from "@/db/defaults";
import SwipeableStackCards from "@/components/ui/swipe-cards";

const placeholders = [
  "Who is Saidev Dhal?",
  "What is Acter?",
  "How Acter is different?",
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

export default function DragableCards() {
  const [value, setValue] = useState<DateValue>(parseDate("2006-04-13"));
  return (
    <>
      <DraggableWrapper
        initial={{ top: -70, left: -200, rotate: 20 }}
        animate={{
          top: 30,
          left: -300,
        }}
      >
           <Card className="p-4 shadow-xl">
           <SwipeableStackCards />
           </Card>
      </DraggableWrapper>
      <DraggableWrapper
        initial={{ top: -100, right: "15%", rotate: -10 }}
        animate={{
          top: -50,
          right: "15%",
        }}
      >
        <Card className="p-4 shadow-xl">
          <h3 className="mb-2 font-semibold">AI Content Generator</h3>
          <form>
            <Input placeholder="Enter prompt for AI" className="mb-2" />
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button size="icon" variant="ghost">
                  <BoltIcon className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Sparkles className="h-4 w-4" />
                </Button>
              </div>
              <Button type="submit">Generate</Button>
            </div>
          </form>
        </Card>
      </DraggableWrapper>

      <DraggableWrapper
        initial={{ bottom: -80, left: -130, rotate: 10 }}
        animate={{
          bottom: -100,
          left: -500,
        }}
      >
        <Card className="p-4 shadow-xl">
        <CodeComparison
      beforeCode={beforeCode}
      afterCode={afterCode}
      language="typescript"
      filename="sumArrayComparison.ts"
      lightTheme="github-light"
      darkTheme="github-dark"
    />
        </Card>
      </DraggableWrapper>

      <DraggableWrapper
        initial={{ bottom: -150, right: "15%", rotate: -20 }}
        animate={{
          bottom: -180,
          right: "5%",
        }}
      >
        <Card className="p-4 shadow-xl">
          <Calendar
            aria-label="Date (Controlled)"
            value={value}
            onChange={setValue}
          />
        </Card>
      </DraggableWrapper>

      <DraggableWrapper
        initial={{ top: 50, left: "20%", rotate: -10 }}
        animate={{
          top: 50,
          left: "10%",
        }}
      >
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </DraggableWrapper>

      <DraggableWrapper
        initial={{ top: 100, right: -200, rotate: -15 }}
        animate={{
          top: 80,
          right: -100,
        }}
      >
        <Card className="p-4 h-[200px] w-[300px] shadow-xl">
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </Card>
      </DraggableWrapper>
    </>
  );
}
