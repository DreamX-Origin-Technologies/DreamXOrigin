"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer transition-all",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring aria-invalid:border-destructive",
    "text-sm font-semibold text-white whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&_svg]:text-white",
    "animate-rainbow-button",
    "shadow-[0_4px_14px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_14px_0_rgba(0,0,0,0.35),0_0_20px_-4px_rgba(124,58,237,0.25),0_0_0_1px_rgba(255,255,255,0.06)]"
  ),
  {
    variants: {
      variant: {
        default:
          "[background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:2px_solid_transparent]",
        outline:
          "border border-input [background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const LIGHT_BLACK = "#1c1c1e";

const variantBgStyles = {
  default: {
    backgroundImage: `linear-gradient(${LIGHT_BLACK}, ${LIGHT_BLACK}), linear-gradient(${LIGHT_BLACK} 50%, rgba(255,255,255,0.06) 80%, transparent), linear-gradient(90deg, var(--color-1), var(--color-5), var(--color-3), var(--color-4), var(--color-2))`,
    backgroundSize: "100% 100%, 100% 100%, 200% 200%",
    backgroundPosition: "0 0, 0 0, 0% 50%",
  },
  outline: {
    backgroundImage: `linear-gradient(${LIGHT_BLACK}, ${LIGHT_BLACK}), linear-gradient(${LIGHT_BLACK} 50%, rgba(255,255,255,0.05) 80%, transparent), linear-gradient(90deg, var(--color-1), var(--color-5), var(--color-3), var(--color-4), var(--color-2))`,
    backgroundSize: "100% 100%, 100% 100%, 200% 200%",
    backgroundPosition: "0 0, 0 0, 0% 50%",
  },
} as const;

export interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rainbowButtonVariants> {
  asChild?: boolean;
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, variant = "default", size = "lg", asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const bgStyle = variant ? variantBgStyles[variant] : variantBgStyles.default;
    return (
      <Comp
        ref={ref}
        data-slot="rainbow-button"
        className={cn(rainbowButtonVariants({ variant, size, className }))}
        style={{ ...bgStyle, ...style }}
        {...props}
      />
    );
  }
);

RainbowButton.displayName = "RainbowButton";

export { RainbowButton, rainbowButtonVariants };
