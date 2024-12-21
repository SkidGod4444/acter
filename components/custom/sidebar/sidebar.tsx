import { Button } from "@/components/ui/button";
import { menuItems } from "@/db/defaults";
import { cn } from "@/lib/utils";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  isSidebarExpanded: boolean | string;
  setIsSidebarExpanded: (expanded: boolean | string) => void;
}

export const SideBar = ({
  isSidebarExpanded,
  setIsSidebarExpanded,
}: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r-2 bg-background transition-all duration-300",
        isSidebarExpanded ? "w-56" : "w-14",
      )}
    >
      {/* Header Section */}
      <div className="flex h-14 items-center justify-between px-3 py-2">
        {/* Logo */}
        <Image
          src="/assets/acter-logo.jpg"
          alt="Acter Logo"
          width={30}
          height={30}
          className="rounded-md cursor-pointer"
        />
        {/* Toggle Button */}
        {isSidebarExpanded && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className="ml-auto"
          >
            <PanelLeftClose className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-hidden">
        <div className="space-y-2">
          {/* Menu Items */}
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg p-2 mx-2 text-sm font-medium hover:bg-accent transition-colors",
                    isSidebarExpanded ? "justify-start px-3" : "justify-center",
                    item.disabled ? "opacity-50" : "",
                  )}
                  aria-disabled={item.disabled}
                  onClick={(e) => item.disabled && e.preventDefault()}
                >
                  <item.icon className="h-5 w-5" />
                  {isSidebarExpanded && (
                    <span className="ml-3">{item.label}</span>
                  )}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-auto flex justify-center">
        {!isSidebarExpanded && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          >
            <PanelLeftOpen className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};
