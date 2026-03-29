"use client";

import { motion } from "motion/react";
import {
  LayoutGrid,
  CreditCard,
  Package,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const statCards = [
  {
    label: "Multi-Channel Selling",
    subtext: "Web, Mobile & Marketplaces",
    icon: LayoutGrid,
    color: "from-blue-500/90 to-cyan-500/90",
    position: "top",
  },
  {
    label: "Payment Gateways",
    subtext: "Stripe, Razorpay & more",
    icon: CreditCard,
    color: "from-violet-500/90 to-purple-500/90",
    position: "right",
  },
  {
    label: "Inventory & Orders",
    subtext: "Real-time sync",
    icon: Package,
    color: "from-pink-500/90 to-rose-500/90",
    position: "bottom",
  },
  {
    label: "Analytics & CRM",
    subtext: "Insights that convert",
    icon: BarChart3,
    color: "from-emerald-500/90 to-teal-500/90",
    position: "left",
  },
] as const;

export function EcommerceOneStopIllustration({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full min-h-auto md:min-h-[480px] max-w-2xl mx-auto py-10 md:py-0 px-4 md:px-0",
        className
      )}
      aria-hidden
    >
      {/* Central glowing hexagon / 3D-style hub */}
      <motion.div
        className="relative md:absolute md:inset-0 flex items-center justify-center pointer-events-none mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40"
          animate={{
            rotateY: [0, 5, 0],
            rotateX: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Hexagon base with gradient glow */}
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))" }}
          >
            <defs>
              <linearGradient
                id="hex-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.85" />
              </linearGradient>
              <filter id="hex-glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Hexagon */}
            <polygon
              points="80,12 148,50 148,110 80,148 12,110 12,50"
              fill="url(#hex-gradient)"
              className="opacity-90"
              filter="url(#hex-glow)"
            />
            {/* Inner highlight for 3D effect */}
            <polygon
              points="80,28 132,58 132,102 80,132 28,102 28,58"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            {/* Center icon area - shopping bag / store symbol */}
            <g transform="translate(80, 80)">
              <rect
                x="-18"
                y="-24"
                width="36"
                height="32"
                rx="4"
                fill="rgba(255,255,255,0.2)"
              />
              <path
                d="M-10 -8 L-10 8 L10 8 L10 -8 L6 -8 L6 -4 L-6 -4 L-6 -8 Z"
                fill="rgba(255,255,255,0.9)"
              />
              <circle cx="-4" cy="0" r="2" fill="rgba(255,255,255,0.6)" />
              <circle cx="4" cy="0" r="2" fill="rgba(255,255,255,0.6)" />
            </g>
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating stat cards around the center */}
      <div className="flex flex-col gap-4 md:block w-full">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          const positionClasses = {
            top: "md:top-4 md:left-1/2 md:-translate-x-1/2",
            right: "md:right-4 md:top-1/2 md:-translate-y-1/2",
            bottom: "md:bottom-4 md:left-1/2 md:-translate-x-1/2",
            left: "md:left-4 md:top-1/2 md:-translate-y-1/2",
          };
          return (
            <motion.div
              key={card.label}
              className={cn(
                "relative md:absolute flex items-center gap-3 rounded-xl border border-border/80 bg-card/95 px-4 py-3 shadow-xl backdrop-blur-sm w-full md:w-auto md:min-w-[170px] md:max-w-[200px]",
                positionClasses[card.position]
              )}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -4, 0],
              }}
              transition={{
                opacity: { delay: 0.2 + i * 0.1, duration: 0.4 },
                scale: { delay: 0.2 + i * 0.1, duration: 0.4 },
                y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                  card.color
                )}
              >
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm leading-tight">
                  {card.label}
                </p>
                <p className="text-muted-foreground text-xs truncate">
                  {card.subtext}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
