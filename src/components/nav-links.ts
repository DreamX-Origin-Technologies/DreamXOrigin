import {
  Code2,
  Cloud,
  FileText,
  HelpCircle,
  LayersIcon,
  Leaf,
  RotateCcw,
  Shield,
  Smartphone,
  Terminal,
  GlobeIcon,
  Handshake,
  Star,
  Users,
} from "lucide-react";
import type { LinkItemType } from "@/components/sheard";

export const serviceLinks: LinkItemType[] = [
  {
    label: "React & Next.js Web Development",
    href: "/services/react-nextjs-web-development",
    icon: LayersIcon,
    description: "Fast, scalable web apps for startups",
  },
  {
    label: "Flutter App Development",
    href: "/services/flutter-app-development",
    icon: Smartphone,
    description: "Cross-platform iOS & Android",
  },
  {
    label: "React Native App Development",
    href: "/services/react-native-app-development",
    icon: Code2,
    description: "One codebase, iOS & Android",
  },
  {
    label: "Android Native (Kotlin)",
    href: "/services/android-native-kotlin-development",
    icon: Terminal,
    description: "High-performance Android apps",
  },
  {
    label: "Full-Stack Development",
    href: "/services/full-stack-development",
    icon: LayersIcon,
    description: "Node.js, Go, Python backends",
  },
  {
    label: "Cloud Application (AWS)",
    href: "/services/cloud-application-development",
    icon: Cloud,
    description: "Scalable, cloud-ready apps",
  },
];

export const productLinks: LinkItemType[] = [
  {
    label: "E-Commerce",
    href: "#",
    icon: LayersIcon,
  },
  {
    label: "Networking",
    href: "#",
    icon: GlobeIcon,
  },
];

export const companyLinks: LinkItemType[] = [
  {
    label: "About Us",
    href: "#",
    icon: Users,
  },
  {
    label: "Customer Stories",
    href: "#",
    icon: Star,
  },
  {
    label: "Partnerships",
    href: "#",
    icon: Handshake,
  },
];

export const companyLinks2: LinkItemType[] = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    icon: Shield,
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
    icon: FileText,
  },
  {
    label: "Refund & Cancellation Policy",
    href: "/refund-cancellation-policy",
    icon: RotateCcw,
  },
  {
    label: "Blog - Coming soon",
    href: "#",
    icon: Leaf,
  },
  {
    label: "Help Center",
    href: "/#contact-us",
    icon: HelpCircle,
  },
];
