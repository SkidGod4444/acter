import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { IconBrandGithub } from '@tabler/icons-react';
import { cn } from "@/lib/utils";
import { OfcLinks } from "@/db/defaults";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";

export function OsBtn() {
  return (
    <div className="z-10 flex items-center justify-center">
      <Link href={OfcLinks.github}>
        <Badge
          className={cn(
            "group rounded-full border border-muted-foreground/40 hover:border-muted-foreground bg-white text-sm text-muted-foreground transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white dark:bg-background dark:text-primary",
            "shadow-md hover:shadow-lg"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-gray-600 dark:text-white font-[family-name:var(--font-geist-semi-bold)]">
            <span className="flex flex-row items-center text-xs">
              <IconBrandGithub className="size-4 mr-2" />
              Become a contributor
            </span>
            <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </AnimatedShinyText>
        </Badge>
      </Link>
    </div>
  );
}