"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export function Meteors({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => {
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      const duration =
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration);
      return {
        "--angle": -angle + "deg",
        top: "-5%",
        left: `calc(${Math.random() * 100}%)`,
        animation: `meteor ${duration}s linear ${delay}s infinite`,
      } as React.CSSProperties;
    });
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "pointer-events-none absolute size-0.5 rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10] dark:bg-zinc-400",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent dark:from-zinc-400" />
        </span>
      ))}
    </>
  );
}
