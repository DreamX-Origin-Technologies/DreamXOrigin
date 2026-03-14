"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { HyperText } from "@/components/ui/hyper-text";
import { TextAnimate } from "@/components/ui/text-animate";
import { Workflow } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const TECH_LOGOS = [
  {
    id: "react",
    name: "React",
    src: "https://cdn.simpleicons.org/react/61DAFB",
    position: "left-top",
  },
  {
    id: "typescript",
    name: "TypeScript",
    src: "https://cdn.simpleicons.org/typescript/3178C6",
    position: "left-mid",
  },
  {
    id: "node",
    name: "Node.js",
    src: "https://cdn.simpleicons.org/nodedotjs/339933",
    position: "left-bot",
  },
  {
    id: "python",
    name: "Python",
    src: "https://cdn.simpleicons.org/python/3776AB",
    position: "right-top",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    position: "right-mid",
  },
  {
    id: "vite",
    name: "Vite",
    src: "https://cdn.simpleicons.org/vite/646CFF",
    position: "right-bot",
  },
];

const POSITION_CLASSES: Record<string, string> = {
  "left-top": "left-[18%] top-[18%] -translate-x-1/2 -translate-y-1/2",
  "left-mid": "left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2",
  "left-bot": "left-[18%] bottom-[18%] -translate-x-1/2 translate-y-1/2",
  "right-top": "right-[18%] top-[18%] translate-x-1/2 -translate-y-1/2",
  "right-mid": "right-[18%] top-1/2 translate-x-1/2 -translate-y-1/2",
  "right-bot": "right-[18%] bottom-[18%] translate-x-1/2 translate-y-1/2",
  center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const refs = {
    "left-top": useRef<HTMLDivElement>(null),
    "left-mid": useRef<HTMLDivElement>(null),
    "left-bot": useRef<HTMLDivElement>(null),
    "right-top": useRef<HTMLDivElement>(null),
    "right-mid": useRef<HTMLDivElement>(null),
    "right-bot": useRef<HTMLDivElement>(null),
  };

  return (
    <section className="relative w-full overflow-hidden border-t border-border/50 bg-muted/20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20">
        {/* Header: subheading + title + description */}
        <div className="mx-auto max-w-2xl space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium">
            <Workflow className="size-4" aria-hidden />
            <span>Expertise</span>
          </div>
          <HyperText
            as="h2"
            className="font-medium text-3xl tracking-tight md:text-5xl"
            startOnView
            duration={600}
            delay={200}
          >
            Integrate With Your Stack
          </HyperText>
          <TextAnimate
            as="p"
            by="word"
            animation="blurInUp"
            duration={0.4}
            delay={0.3}
            startOnView
            once
            className="text-muted-foreground text-sm leading-relaxed md:text-base"
          >
            shadcn/ui and Efferd integration-10 design—built with the tools your
            team already uses.
          </TextAnimate>
        </div>

        {/* Diagram: hub + 6 tech logos + Magic UI Animated Beams */}
        <div className="relative mx-auto mt-14 w-full max-w-3xl">
          <div
            ref={containerRef}
            className="relative w-full min-h-[280px] md:min-h-[320px]"
            style={{ aspectRatio: "400 / 280" }}
          >
            {/* Animated beams from each tech logo to center hub */}
            {TECH_LOGOS.map((tech, i) => (
              <AnimatedBeam
                key={tech.id}
                containerRef={containerRef}
                fromRef={refs[tech.position as keyof typeof refs]}
                toRef={centerRef}
                curvature={-25}
                duration={3 + (i % 3) * 0.5}
                delay={i * 0.15}
                pathColor="hsl(var(--muted-foreground))"
                pathWidth={1.5}
                pathOpacity={0.25}
                gradientStartColor="hsl(var(--chart-1))"
                gradientStopColor="hsl(var(--chart-2))"
              />
            ))}

            {/* Central hub – X / integration icon */}
            <div
              ref={centerRef}
              className={cn(
                "absolute z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border bg-card shadow-sm md:h-16 md:w-16",
                POSITION_CLASSES.center
              )}
            >
              <svg
                className="h-6 w-6 text-foreground/80 md:h-7 md:w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M7 7l5 5m0 0l5 5M7 17l5-5m0 0l5-5" />
              </svg>
            </div>

            {/* Peripheral tech logos */}
            {TECH_LOGOS.map((tech) => (
              <div
                key={tech.id}
                ref={refs[tech.position as keyof typeof refs]}
                className={cn(
                  "absolute z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-card shadow-sm md:h-14 md:w-14",
                  POSITION_CLASSES[tech.position]
                )}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-6 w-6 object-contain md:h-7 md:w-7"
                  width={28}
                  height={28}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
