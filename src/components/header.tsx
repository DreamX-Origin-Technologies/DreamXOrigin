"use client";
import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";

import { cn } from "@/lib/utils";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            className="flex gap-2 items-center font-medium rounded-md hover:bg-accent"
            href="/"
          >
            <Logo className="h-4" /> Dream Origin
          </a>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <DesktopNav />
        </div>
        <div className="hidden items-center gap-2 md:flex">
					<Button>Get Started</Button>
				</div>
        <MobileNav />
      </nav>
    </header>
  );
}
