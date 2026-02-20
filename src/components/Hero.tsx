import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Turn clicks into{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              revenue
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl mb-8">
            Dub is the modern link attribution platform for short links, conversion tracking, and affiliate programs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/register">Start for free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/contact/sales">Get a demo</Link>
            </Button>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="links" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="links" className="text-sm sm:text-base">
                  Short Links
                </TabsTrigger>
                <TabsTrigger value="analytics" className="text-sm sm:text-base">
                  Conversion Analytics
                </TabsTrigger>
                <TabsTrigger value="partners" className="text-sm sm:text-base">
                  Affiliate Programs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="links" className="mt-8">
                <div className="rounded-lg border bg-card p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">Short Links</h3>
                  <p className="text-muted-foreground">
                    Create and manage short links at scale, with advanced features, folders, and role-based access control.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="mt-8">
                <div className="rounded-lg border bg-card p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">Conversion Analytics</h3>
                  <p className="text-muted-foreground">
                    From first click to conversion, understand exactly how your marketing drives revenue with Dub&apos;s powerful attribution engine.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="partners" className="mt-8">
                <div className="rounded-lg border bg-card p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">Affiliate Programs</h3>
                  <p className="text-muted-foreground">
                    Build powerful, embedded referral/affiliate programs to boost product-led growth and increase revenue.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
