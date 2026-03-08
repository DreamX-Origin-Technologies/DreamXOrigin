"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { Button } from "@/components/ui/button";
import { XIcon, MenuIcon, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  companyLinks,
  companyLinks2,
  productLinks,
} from "@/components/nav-links";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [productExpanded, setProductExpanded] = React.useState(false);
  const [companyExpanded, setCompanyExpanded] = React.useState(false);

  const close = () => setOpen(false);

  return (
    <div className="flex md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="size-9"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="ghost"
      >
        {open ? (
          <XIcon className="size-5" />
        ) : (
          <MenuIcon className="size-5" />
        )}
      </Button>

      {open && (
        <Portal className="top-14 left-0 right-0" id="mobile-menu">
          <PortalBackdrop
            className="data-[state=open]:fade-in-0"
            data-state={open ? "open" : "closed"}
            onClick={close}
          />
          <div
            className={cn(
              "relative z-50 flex flex-col gap-0 overflow-y-auto border-b border-border bg-background shadow-lg",
              "max-h-[calc(100vh-3.5rem)] w-full px-4 pb-6 pt-2",
              "data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=open]:slide-in-from-top-2 duration-200"
            )}
            data-slot={open ? "open" : "closed"}
            id="mobile-menu-panel"
          >
            {/* Product */}
            <div className="border-b border-border py-2">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left font-medium hover:bg-accent"
                onClick={() => setProductExpanded(!productExpanded)}
                type="button"
              >
                Product
                <ChevronDown
                  className={cn("size-4 shrink-0 transition-transform", {
                    "rotate-180": productExpanded,
                  })}
                />
              </button>
              {productExpanded && (
                <div className="space-y-0.5 pl-3 pb-2">
                  {productLinks.map((item, i) => (
                    <a
                      className="flex items-center gap-x-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                      href={item.href}
                      key={`product-${i}`}
                      onClick={close}
                    >
                      <item.icon className="size-4 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Company */}
            <div className="border-b border-border py-2">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left font-medium hover:bg-accent"
                onClick={() => setCompanyExpanded(!companyExpanded)}
                type="button"
              >
                Company
                <ChevronDown
                  className={cn("size-4 shrink-0 transition-transform", {
                    "rotate-180": companyExpanded,
                  })}
                />
              </button>
              {companyExpanded && (
                <div className="space-y-0.5 pl-3 pb-2">
                  {companyLinks.map((item, i) => (
                    <a
                      className="flex items-center gap-x-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                      href={item.href}
                      key={`company-${i}`}
                      onClick={close}
                    >
                      <item.icon className="size-4 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                  {companyLinks2.map((item, i) => {
                    const isInternal =
                      item.href.startsWith("/") && !item.href.includes("#");
                    const Comp = isInternal ? Link : "a";
                    const props = isInternal
                      ? { to: item.href }
                      : { href: item.href };
                    return (
                      <Comp
                        className="flex items-center gap-x-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground"
                        key={`company2-${i}`}
                        onClick={close}
                        {...props}
                      >
                        <item.icon className="size-4 shrink-0" />
                        <span>{item.label}</span>
                      </Comp>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Careers */}
            <div className="border-b border-border py-2">
              <Link
                className="block rounded-md px-3 py-2.5 font-medium hover:bg-accent"
                onClick={close}
                to="/careers"
              >
                Careers
              </Link>
            </div>

            {/* Contact */}
            <div className="pt-4">
              <Button asChild className="w-full" size="lg">
                <a href="#contact-us" onClick={close}>
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
