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
