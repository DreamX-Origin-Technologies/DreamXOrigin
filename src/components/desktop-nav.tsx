import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  companyLinks,
  companyLinks2,
  productLinks,
} from "@/components/nav-links";

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-muted/50 p-1 pr-1.5 dark:bg-background">
            <div className="grid w-2xs grid-cols-1 gap-2 p-2 rounded-md border bg-popover shadow">
              {productLinks.map((item, i) => (
                <NavigationMenuLink
                  className="w-full flex-row gap-x-2"
                  href={item.href}
                  key={`item-${item.label}-${i}`}
                >
                  <item.icon className="size-4 text-foreground" />
                  <span className="font-medium">{item.label}</span>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-muted/50 p-1 pr-1.5 pb-1.5 dark:bg-background">
            <div className="grid w-lg grid-cols-2 gap-2">
              <div className="space-y-2 rounded-md border bg-popover p-2 shadow">
                {companyLinks.map((item, i) => (
                  <NavigationMenuLink
                    className="w-full flex-row gap-x-2"
                    href={item.href}
                    key={`item-${item.label}-${i}`}
                  >
                    <item.icon className="size-4 text-foreground" />
                    <span className="font-medium">{item.label}</span>
                  </NavigationMenuLink>
                ))}
              </div>
              <div className="space-y-2 p-3">
                {companyLinks2.map((item, i) => {
                  const isInternal = item.href.startsWith("/") && !item.href.includes("#");
                  return (
                    <NavigationMenuLink asChild key={`company2-${item.label}-${i}`}>
                      {isInternal ? (
                        <Link
                          to={item.href}
                          className="flex flex-row items-center gap-x-2 rounded-sm p-2 hover:bg-accent"
                        >
                          <item.icon className="size-4 text-foreground" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="flex flex-row items-center gap-x-2 rounded-sm p-2 hover:bg-accent"
                        >
                          <item.icon className="size-4 text-foreground" />
                          <span className="font-medium">{item.label}</span>
                        </a>
                      )}
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuLink asChild className="px-4">
          <Link
            to="/careers"
            className="rounded-md p-2 hover:bg-accent font-medium"
          >
            Careers
          </Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
