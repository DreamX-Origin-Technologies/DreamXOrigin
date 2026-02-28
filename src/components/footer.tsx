import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative">
      <div
        className={cn(
          "mx-auto max-w-5xl lg:border-x",
          "dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
        )}
      >
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
            <a href="#" className="flex items-center gap-2 font-medium">
              <Logo className="h-5" /> DreamX Origin
            </a>
            <p className="max-w-sm text-balance text-muted-foreground text-sm">
              Scale your business with Dream Origin.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, index) => (
                <Button
                  asChild
                  key={`social-${item.link}-${index}`}
                  size="icon-sm"
                  variant="outline"
                >
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Resources</span>
            <div className="mt-2 flex flex-col gap-2">
              {resources.map(({ href, title }) => (
                <a
                  className="w-max text-sm hover:underline"
                  href={href}
                  key={title}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Company</span>
            <div className="mt-2 flex flex-col gap-2">
              {company.map(({ href, title, isRouterLink }) =>
                isRouterLink ? (
                  <Link
                    className="w-max text-sm hover:underline"
                    to={href}
                    key={title}
                  >
                    {title}
                  </Link>
                ) : (
                  <a
                    className="w-max text-sm hover:underline"
                    href={href}
                    key={title}
                  >
                    {title}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 py-4">
          <p className="text-center font-light text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} DreamX Origin, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const company = [
  {
    title: "About Us",
    href: "#",
    isRouterLink: false,
  },
  {
    title: "Careers",
    href: "#",
    isRouterLink: false,
  },
  {
    title: "Brand assets",
    href: "#",
    isRouterLink: false,
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    isRouterLink: true,
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
    isRouterLink: true,
  },
];

const resources = [
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Help Center",
    href: "#",
  },
  {
    title: "Contact Support",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: <FacebookIcon />,
    link: "#",
  },
  {
    icon: <LinkedinIcon />,
    link: "#",
  },
  {
    icon: <YoutubeIcon />,
    link: "#",
  },
];
