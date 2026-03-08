"use client";

import { cn } from "@/lib/utils";

interface LightRaysProps {
  className?: string;
  /** Number of ray elements. @default 9 */
  count?: number;
  /** Single ray color (CSS). Ignored if colors is provided. */
  color?: string;
  /** Multiple ray colors – cycles through for each ray (e.g. ice blue, orange, violet). */
  colors?: string[];
  /** Blur in pixels. @default 60 */
  blur?: number;
  /** Length as CSS value. @default 70vh */
  length?: string;
  /** Origin: top-center, center, etc. @default "50% 0%" */
  origin?: string;
}

const DEFAULT_COLORS = [
  "rgba(125, 211, 252, 0.45)",   /* ice blue */
  "rgba(251, 146, 60, 0.42)",   /* orange */
  "rgba(167, 139, 250, 0.42)",   /* violet */
  "rgba(45, 212, 191, 0.4)",    /* teal */
];

export function LightRays({
  className,
  count = 9,
  color,
  colors = DEFAULT_COLORS,
  blur = 60,
  length = "70vh",
  origin = "50% 0%",
}: LightRaysProps) {
  const step = 180 / (count + 1);
  const rayList = Array.from({ length: count }, (_, i) => {
    const angle = -90 + step * (i + 1);
    const rayColor = color ?? colors[i % colors.length];
    return { angle, color: rayColor };
  });
  const glowColor = color ?? colors[0];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={{
        transformOrigin: origin,
      }}
    >
      <div
        className="absolute flex h-full w-full items-center justify-center"
        style={{
          left: "50%",
          top: "0%",
          transform: "translateX(-50%)",
          width: "200vmax",
          height: length,
        }}
      >
        {rayList.map(({ angle, color: rayColor }, i) => (
          <div
            key={i}
            className="absolute h-full w-[2px] bg-gradient-to-b from-transparent to-current"
            style={{
              background: `linear-gradient(to bottom, transparent, ${rayColor})`,
              filter: `blur(${blur}px)`,
              transform: `rotate(${angle}deg)`,
              transformOrigin: "50% 0%",
              animation: "hero-ray-pulse 6s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      {/* Soft radial glow at origin – blend of first color */}
      <div
        className="absolute left-1/2 top-0 h-[40vh] w-[120%] -translate-x-1/2 rounded-full opacity-55 dark:opacity-45"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${glowColor}, transparent 70%)`,
          filter: `blur(${blur * 0.5}px)`,
        }}
      />
    </div>
  );
}
