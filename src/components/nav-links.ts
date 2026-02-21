import {
  BarChart,
  CodeIcon,
  FileText,
  GlobeIcon,
  Handshake,
  HelpCircle,
  LayersIcon,
  Leaf,
  PlugIcon,
  RotateCcw,
  Shield,
  Star,
  UserPlusIcon,
  Users,
} from "lucide-react";
import type { LinkItemType } from "@/components/sheard";

export const productLinks: LinkItemType[] = [
  {
    label: "E-Commerce",
    href: "#",
    icon: LayersIcon,
  },
  {
    label: "Networking",
    href: "#",
    icon: UserPlusIcon,
  },
  // {
  //   label: "21Neurons",
  //   href: "#",
  //   icon: GlobeIcon,
  // }
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
    label: "Terms of Service - Comming soon",
    href: "#",
    icon: FileText,
  },
  {
    label: "Privacy Policy - Comming soon",
    href: "#",
    icon: Shield,
  },
  {
    label: "Blog - Comming soon",
    href: "#",
    icon: Leaf,
  },
  {
    label: "Help Center",
    href: "#",
    icon: HelpCircle,
  },
];
