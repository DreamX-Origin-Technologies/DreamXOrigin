import * as React from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dub
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/links" className={navigationMenuTriggerStyle()}>
                Short Links
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/analytics" className={navigationMenuTriggerStyle()}>
                Conversion Analytics
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/partners" className={navigationMenuTriggerStyle()}>
                Affiliate Programs
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/contact/sales">Get a demo</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Start for free</Link>
          </Button>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                to="/links"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Short Links
              </Link>
              <Link
                to="/analytics"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Conversion Analytics
              </Link>
              <Link
                to="/partners"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Affiliate Programs
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link to="/contact/sales" onClick={() => setMobileMenuOpen(false)}>
                    Get a demo
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    Start for free
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
