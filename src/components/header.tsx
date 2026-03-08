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
    // <header
    //   className={cn("sticky top-0 z-50  border-b backdrop-blur-sm ", {
    //     "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
    //       scrolled,
    //   })}
    // >
    //   <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between">

    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-7xl border-border border-b md:rounded-md md:border md:transition-all md:ease-out md:top-2 md:shadow backdrop-blur-sm",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:shadow":
            scrolled,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out md:px-2",
          {
            // "md:px-2": scrolled,
          }
        )}
      >
        <div className="flex items-center ">
          <a
            className="flex gap-2 items-center font-medium rounded-md hover:bg-accent"
            href="/"
          >
            <Logo className="h-4" /> DreamXOrigin
          </a>
        </div>
        <div className="hidden items-center   md:flex">
          <DesktopNav />
        </div>

        <div className="hidden items-center md:flex">
          <a href="#contact-us">
            <Button>Contact Us</Button>
          </a>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
