import { cn } from "@/lib/utils";
import type React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { Meteors } from "@/components/ui/meteors";
import { HyperText } from "@/components/ui/hyper-text";
import { TextAnimate } from "@/components/ui/text-animate";
import {
  IconAppDevelopment,
  IconWebDevelopment,
  IconWebDesign,
  IconBranding,
  IconSEO,
  IconProductDesign,
  IconPaymentGateway,
  IconAI,
} from "@/components/feature-icons";

type FeatureType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
};

const features: FeatureType[] = [
  {
    id: "app",
    title: "App Development",
    description:
      "Modern mobile applications to keep your business always within customers' reach.",
    icon: <IconAppDevelopment />,
    className: "md:col-span-2",
    gradientFrom: "#8B5CF6",
    gradientTo: "#A78BFA",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Clean, scalable websites that enhance your online presence and conversions.",
    icon: <IconWebDevelopment />,
    className: "md:col-span-2",
    gradientFrom: "#0EA5E9",
    gradientTo: "#38BDF8",
  },
  {
    id: "design",
    title: "Web Design",
    description:
      "User-focused designs that deliver a seamless and engaging experience.",
    icon: <IconWebDesign />,
    className: "",
    gradientFrom: "#F59E0B",
    gradientTo: "#FBBF24",
  },
  {
    id: "branding",
    title: "Branding",
    description: "Create a unique identity that resonates with your audience.",
    icon: <IconBranding />,
    className: "",
    gradientFrom: "#EC4899",
    gradientTo: "#F472B6",
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Boost your visibility and attract more visitors through SEO.",
    icon: <IconSEO />,
    className: "",
    gradientFrom: "#10B981",
    gradientTo: "#34D399",
  },
  {
    id: "product",
    title: "Product Design",
    description: "Design innovative products that solve real-world problems.",
    icon: <IconProductDesign />,
    className: "",
    gradientFrom: "#6366F1",
    gradientTo: "#818CF8",
  },
  {
    id: "payment",
    title: "Payment Gateway Integration",
    description:
      "Integrate a payment gateway into your business to enable seamless and secure client payments.",
    icon: <IconPaymentGateway />,
    className: "md:col-span-2",
    gradientFrom: "#22C55E",
    gradientTo: "#4ADE80",
  },
  {
    id: "ai",
    title: "AI",
    description:
      "We provide AI solutions to help improve your business operations and reduce the effort required to manage client flow and resolve issues.",
    icon: <IconAI />,
    className: "md:col-span-2",
    gradientFrom: "#A855F7",
    gradientTo: "#C084FC",
  },
];

export function FeatureSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Vector SVG background */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute h-full w-full opacity-30 dark:opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="feature-vec-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="feature-vec-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--chart-2)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="feature-vec-3" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#feature-vec-1)" d="M0 0 Q 400 120 800 40 Q 1200 0 1200 200 L 1200 0 Z" />
          <path fill="url(#feature-vec-2)" d="M0 800 Q 600 400 1200 600 L 1200 800 Z" />
          <path fill="url(#feature-vec-3)" d="M0 400 Q 300 350 600 400 Q 900 450 1200 400 L 1200 800 L 0 800 Z" />
        </svg>
      </div> 
      {/* Magic UI Meteors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Meteors number={14} minDuration={4} maxDuration={8} angle={215} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-12 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <HyperText
          as="h2"
          className="font-medium text-3xl tracking-tight md:text-5xl"
          startOnView
          duration={600}
          delay={200}
        >
          What we do
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
          We build next-generation mobile and web applications powered by
          intelligent AI solutions. Our mission is to transform ideas into
          scalable digital products that drive automation, efficiency, and
          business growth.
        </TextAnimate>
      </div>

      {/* Bento grid – Efferd feature 6 style with varying card sizes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
        {features.map((feature) => (
          <MagicCard
            key={feature.id}
            className={cn(
              "rounded-xl bg-background p-6 transition-shadow hover:shadow-lg",
              feature.className
            )}
            gradientFrom={feature.gradientFrom}
            gradientTo={feature.gradientTo}
            gradientSize={180}
          >
            <FeatureCard feature={feature} />
          </MagicCard>
        ))}
      </div>
    </div>
    </div>
  );
}

function FeatureCard({
  feature,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  feature: FeatureType;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex w-fit items-center justify-center rounded-lg bg-muted/30 p-2.5",
          "[&_svg]:size-8"
        )}
      >
        {feature.icon}
      </div>
      <div className="space-y-1.5">
        <h3 className="font-semibold text-base text-foreground">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
