"use client";

import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  className?: string;
  /** Grid cell size in pixels. @default 64 */
  gridSize?: number;
  /** Grid line color (CSS). @default theme-aware */
  gridColor?: string;
  /** Fade from center: 0 = no fade, 1 = full fade. @default 0.7 */
  gridFadeStart?: number;
  gridFadeEnd?: number;
}

export function AnimatedGrid({
  className,
  gridSize = 64,
  gridColor = "rgba(0,0,0,0.03)",
  gridFadeStart = 0,
  gridFadeEnd = 0.7,
}: AnimatedGridProps) {
  const maskStyle = {
    maskImage: `radial-gradient(ellipse 80% 70% at 50% 0%, black ${gridFadeStart * 100}%, transparent ${gridFadeEnd * 100}%)`,
    WebkitMaskImage: `radial-gradient(ellipse 80% 70% at 50% 0%, black ${gridFadeStart * 100}%, transparent ${gridFadeEnd * 100}%)`,
  };
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {/* Light mode grid */}
      <div
        className="absolute inset-0 opacity-70 dark:opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          animation: "hero-grid-fade 8s ease-in-out infinite",
          ...maskStyle,
        }}
      />
      {/* Dark mode grid - lighter lines */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          animation: "hero-grid-fade 8s ease-in-out infinite",
          ...maskStyle,
        }}
      />
    </div>
  );
}
