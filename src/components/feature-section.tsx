import { cn } from "@/lib/utils";
import type React from "react";
import { DecorIcon } from "@/components/ui/decor-icon";
import {
  LayoutDashboardIcon,
  TerminalIcon,
  ShieldCheckIcon,
  FileTextIcon,
  MonitorCog,
  Smartphone,
  Brush,
  Tag,
  Search,
  BoxIcon,
  Shield,
  AtomIcon,
} from "lucide-react";

type FeatureType = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export function FeatureSection() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-12 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-2xl space-y-2 text-center">
        <h2 className="font-medium text-3xl tracking-tight md:text-5xl">
          What we do
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
          We build next-generation mobile and web applications powered by intelligent AI solutions. Our mission is to transform ideas into scalable digital products that drive automation, efficiency, and business growth.
{/*           
          We’re a team of driven engineers who thrive on solving tough client
          problems. With innovation at our core and precision in our craft, we
          deliver solutions that achieve 99.9% satisfaction — every time. */}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}
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
        "relative flex flex-col justify-between gap-6 bg-background px-6 pt-8 pb-6 shadow-xs",
        // Gradient inspired by testimonials
        "dark:bg-[radial-gradient(50%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
        className,
      )}
      {...props}
    >
      {/* Extended Borders */}
      <div className="absolute -inset-y-4 -left-px w-px bg-border" />
      <div className="absolute -inset-y-4 -right-px w-px bg-border" />
      <div className="absolute -inset-x-4 -top-px h-px bg-border" />
      <div className="absolute -right-4 -bottom-px -left-4 h-px bg-border" />

      {/* Corner Decor */}
      <DecorIcon className="size-3.5" position="top-left" />

      <div
        className={cn(
          "relative z-10 flex w-fit items-center justify-center rounded-lg border bg-muted/20 p-3",
          "[&_svg]:size-5 [&_svg]:stroke-[1.5] [&_svg]:text-foreground",
        )}
      >
        {feature.icon}
      </div>

      <div className="relative z-10 space-y-2">
        <h3 className="font-medium text-base text-foreground">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

const features: FeatureType[] = [
  {
    title: "App Development",
    icon: <Smartphone />,
    description:
      "Modern mobile applications to keep your business always within customers' reach.",
  },
  {
    title: "Web Development",
    icon: <MonitorCog />,
    description:
      "Clean, scalable websites that enhance your online presence and conversions.",
  },
  {
    title: "Web Design",
    icon: <Brush />,
    description:
      "User-focused designs that deliver a seamless and engaging experience.",
  },
  {
    title: "Branding",
    icon: <Tag />,
    description: "Create a unique identity that resonates with your audience.",
  },
  {
    title: "Search Engine Optimization",
    icon: <Search />,
    description: "Boost your visibility and attract more visitors through SEO.",
  },
  {
    title: "Product Design",
    icon: <BoxIcon />,
    description: "Design innovative products that solve real-world problems.",
  },
  {
    title: "Payment Gateway Integration",
    icon: <ShieldCheckIcon />,
    description:
      "Integrate a payment gateway into your business to enable seamless and secure client payments.",
  },
  {
    title: "AI",
    icon: <AtomIcon />,
    description:
      "We provide AI solutions to help improve your business operations and reduce the effort required to manage client flow and resolve issues.",
  },
];
