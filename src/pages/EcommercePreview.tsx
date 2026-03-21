import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Meteors } from "@/components/ui/meteors";
import {
  Star,
  Zap,
  Shield,
  ChevronRight,
  LayoutDashboard,
  Plug,
  BarChart3,
} from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { EcommerceOneStopIllustration } from "@/components/ecommerce-one-stop-illustration";
import heroImage from "@/assets/ecommerce banner.webp";
import waveBg from "@/assets/wave.svg";

export function EcommercePreview() {
  return (
    <div className="w-full min-h-screen text-foreground flex flex-col">
      <SeoHead
        title="DreamX Commerce | One-Stop E-Commerce Platform for Business"
        description="Your one-stop solution for online selling. Scale your business with a complete e-commerce platform: multi-channel selling, payments, inventory, and analytics—built for startups and enterprises."
        canonical="/ecommerce"
      />

      {/* Hero Section - reference-inspired clean layout */}

      <section className="relative w-full overflow-hidden px-4 pt-16 pb-10 lg:pt-24 z-2">
        <Meteors number={12} />
        <div
          className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/35 via-pink-400/25 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[-7rem] top-12 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-cyan-400/35 via-sky-400/25 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-60 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-300/30 via-teal-300/20 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[12%] top-[28%] h-24 w-24 rotate-12 rounded-3xl border border-violet-300/45 bg-violet-300/20 blur-sm"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[14%] top-[34%] h-20 w-20 -rotate-6 rounded-full border border-sky-300/50 bg-sky-200/30 blur-sm"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            <span className="text-sky-500 italic">Style-first</span> commerce
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Launch and scale your fashion store with one ecommerce platform for catalog
            management, smart merchandising, secure checkout, and real-time sales insights.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <RainbowButton className="h-10 px-7 text-base font-semibold">
              Book a Demo
            </RainbowButton>
            <Button
              variant="outline"
              size="lg"
              className="h-10 border-[#e7d7eb] bg-[#fff7ff] px-7 text-base text-[#4b3651] hover:bg-[#fff1ff]"
            >
              Meet an advisor
            </Button>
          </div>

          <div className="relative mt-12 w-full max-w-5xl z-2">
            <div className="relative overflow-hidden z-2 shadow-md rounded-md border-border/60 bg-card">
              <img
                src={heroImage}
                alt="DreamX product preview"
                className="h-full w-full object-cover z-2"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>
      <section className="absolute md:top-120 w-full z-1">
        <img src={waveBg} alt="wave" className="h-full" />
      </section>

      {/* One Stop Solution Section - with creative illustration */}
      <section className="w-full py-20 lg:py-28 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                One Stop Solution to Your Online Selling
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                From storefront to checkout, inventory to analytics—we bring everything into one platform. Whether you&apos;re a startup, growing brand, or enterprise, DreamX Commerce is designed to automate your sales workflow and help you do more in less time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-12 px-8 text-base font-semibold">
                  What We Propose
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <EcommerceOneStopIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Platform capabilities / What we build for business */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Built for Business—See What We Deliver
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              High-performance storefronts, seamless checkout, and scalable architecture. Experience the platform we build for brands and enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <MagicCard className="p-6 flex flex-col h-full bg-background">
              <div className="w-full flex-1 min-h-[250px] rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <LayoutDashboard className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm">B2B</div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold mb-1">Unified Dashboard</h3>
                  <p className="text-muted-foreground text-sm">Orders, inventory, and analytics in one place</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-1">Manage multiple channels and teams from a single, scalable control center.</p>
              <Button className="w-full mt-auto group">
                Explore Features <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagicCard>

            <MagicCard className="p-6 flex flex-col h-full bg-background" gradientFrom="#00D2FF" gradientTo="#3A7BD5">
              <div className="w-full flex-1 min-h-[250px] rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Plug className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold mb-1">Integrations & APIs</h3>
                  <p className="text-muted-foreground text-sm">Connect your stack</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-1">Stripe, Razorpay, ERPs, CRMs, and custom APIs—one platform that fits your workflow.</p>
              <Button className="w-full mt-auto group">
                View Integrations <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagicCard>

            <MagicCard className="p-6 flex flex-col h-full bg-background" gradientFrom="#F5AF19" gradientTo="#F12711">
              <div className="w-full flex-1 min-h-[250px] rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BarChart3 className="h-16 w-16 text-muted-foreground/50 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-3 left-3 bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-2 py-1 rounded-sm">NEW</div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold mb-1">Analytics & Insights</h3>
                  <p className="text-muted-foreground text-sm">Data that converts</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-1">Real-time reports, customer behavior, and revenue analytics to grow your business.</p>
              <Button className="w-full mt-auto group">
                See Analytics <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Value Proposition - B2B focused */}
      <section className="w-full py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Compliant</h3>
              <p className="text-muted-foreground">
                PCI-ready checkout, encrypted payments, and compliance built in so your business and customers stay protected.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scalable Infrastructure</h3>
              <p className="text-muted-foreground">
                Built to scale from launch to enterprise. High performance and reliability so your store grows without limits.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integration-Ready</h3>
              <p className="text-muted-foreground">
                Connect with your existing tools—ERPs, CRMs, marketplaces, and custom systems—for a true one-stop setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Supercharge Your Online Sales—Try DreamX Commerce
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join businesses that sell more with one platform. Get a demo or start a conversation with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RainbowButton className="h-12 px-8 text-base font-semibold">
              Get a Quick Demo
            </RainbowButton>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
