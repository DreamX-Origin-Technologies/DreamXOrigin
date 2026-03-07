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
          "mx-auto max-w-6xl lg:border-x",
          "dark:bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.1),transparent)]",
        )}
      >
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="grid max-w-6xl grid-cols-5 gap-6 p-4">
          <div className="col-span-2 flex flex-col gap-4 pt-5 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-medium">
              <Logo className="h-5" /> DreamX Origin
            </Link>
            <p className="max-w-sm text-balance text-muted-foreground text-sm">
              Scalable web and mobile applications for startups and businesses. React, Flutter, and full-stack development.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, index) => (
                <Button
                  asChild
                  key={`social-${item.link}-${index}`}
                  size="icon-sm"
                  variant="outline"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="col-span-4 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Services</span>
            <div className="mt-2 flex flex-col gap-2">
              {services.map(({ href, title, isRouterLink }) =>
                isRouterLink ? (
                  <Link
                    className="w-max text-sm hover:underline"
                    to={href}
                    key={title}
                  >
                    {title}
                  </Link>
                ) : (
                  <a className="w-max text-sm hover:underline" href={href} key={title}>
                    {title}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Resources</span>
            <div className="mt-2 flex flex-col gap-2">
              {resources.map(({ href, title, isRouterLink }) =>
                isRouterLink ? (
                  <Link className="w-max text-sm hover:underline" to={href} key={title}>
                    {title}
                  </Link>
                ) : (
                  <a className="w-max text-sm hover:underline" href={href} key={title}>
                    {title}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="col-span-4 w-full md:col-span-1">
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

const services = [
  { title: "React & Next.js Development", href: "/services/react-nextjs-web-development", isRouterLink: true },
  { title: "Flutter App Development", href: "/services/flutter-app-development", isRouterLink: true },
  { title: "React Native Development", href: "/services/react-native-app-development", isRouterLink: true },
  { title: "Android (Kotlin) Development", href: "/services/android-native-kotlin-development", isRouterLink: true },
  { title: "Full-Stack Development", href: "/services/full-stack-development", isRouterLink: true },
  { title: "Cloud (AWS) Development", href: "/services/cloud-application-development", isRouterLink: true },
];

const company = [
  { title: "About Us", href: "#", isRouterLink: false },
  { title: "Careers", href: "#", isRouterLink: false },
  { title: "Privacy Policy", href: "/privacy-policy", isRouterLink: true },
  { title: "Terms & Conditions", href: "/terms-and-conditions", isRouterLink: true },
  { title: "Refund & Cancellation Policy", href: "/refund-cancellation-policy", isRouterLink: true },
];

const resources: { title: string; href: string; isRouterLink?: boolean }[] = [
  { title: "Blog", href: "#", isRouterLink: false },
  { title: "Help Center", href: "/#contact-us", isRouterLink: false },
  { title: "Contact Support", href: "/#contact-us", isRouterLink: false },
];

const socialLinks = [
  {
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/company/dreamxorigin-technology/",
  },
  {
    icon: <YoutubeIcon />,
    link: "#",
  },
];
