import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MagicCard } from "@/components/ui/magic-card";
import { Meteors } from "@/components/ui/meteors";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Zap,
  Package,
  Shield,
  ShoppingCart,
  TrendingUp
} from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { EcommerceOneStopIllustration } from "@/components/ecommerce-one-stop-illustration";
import heroImage from "@/assets/ecommerce banner.webp";
import waveBg from "@/assets/wave.svg";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '@/components/motion-primitives/image-comparison';
import emptyShopImage from '@/assets/retail-shop-empty.jpg';
import successShopImage from '@/assets/ecommerce-thriving.png';
import { motion } from 'motion/react';

function FeatureCard({ title, description, icon, gradient, className }: { title: string, description: string, icon: React.ReactNode, gradient: string, className?: string }) {
  return (
    <div className={`relative bg-background border border-border/50 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col p-6 w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${className || 'lg:max-w-[300px]'}`}>
      <div className="relative w-full h-[160px] rounded-2xl mb-6 overflow-hidden flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="relative group flex items-center justify-center">
          <div className="absolute left-[-20px] z-0 h-10 w-12 rotate-[-15deg] rounded-[1rem] bg-white/80 border border-zinc-100 shadow-sm blur-[0.5px] dark:bg-zinc-800 dark:border-zinc-700" />
          <div className="absolute right-[-20px] z-0 h-10 w-12 rotate-[15deg] rounded-[1rem] bg-white/80 border border-zinc-100 shadow-sm blur-[0.5px] dark:bg-zinc-800 dark:border-zinc-700" />
          <div className={`relative z-10 w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${gradient} p-[1px] shadow-xl`}>
            <div className="w-full h-full rounded-[1.2rem] flex items-center justify-center bg-gradient-to-br from-white/20 to-transparent">
              {icon}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center px-1 flex-1 flex flex-col items-center">
        <h3 className="text-[17px] font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

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
      <section className="w-full py-20 px-4 md:px-6 overflow-hidden bg-background">
        <div className="container mx-auto max-w-7xl pt-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-start w-full relative">

            {/* Left Column: Content + Card 1 */}
            <div className="flex flex-col gap-10 lg:gap-14 max-w-xl z-20">
              <div className="flex flex-col items-start text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.1] text-foreground mb-4">
                  Scale your storefront:<br className="hidden sm:block" /> explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 font-semibold px-1">all-in-one</span> platform.
                </h2>
                <p className="text-muted-foreground text-base sm:text-[17px] max-w-md leading-relaxed mb-8">
                  Everything you need to launch, manage, and scale your online business without limitations.
                </p>
                {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                   <Button size="lg" className="rounded-xl h-12 px-8 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-sm font-medium w-full sm:w-auto transition-all">
                     Try for free!
                   </Button>
                   <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 shadow-sm font-medium border-border w-full sm:w-auto hover:bg-muted transition-all">
                     View Demo
                   </Button>
                 </div> */}
              </div>

              {/* Card 1 - Manage */}
              <div className="lg:pl-6 w-full flex justify-center lg:justify-start">
                <FeatureCard
                  title="Manage - Inventory"
                  description="Centralized inventory management to track stock across all your sales channels in real-time."
                  icon={<Package className="w-6 h-6 text-white" />}
                  gradient="from-pink-400 to-orange-400"
                  className="max-w-full lg:max-w-full"
                />
              </div>
            </div>

            {/* Right Column Grid (Cards 2 & 3) */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 relative z-10 w-full lg:w-auto mt-8 lg:mt-0 pb-10">
              <div className="flex justify-center sm:justify-end lg:mt-32">
                <FeatureCard
                  title="Convert - Checkout"
                  description="Frictionless, one-click checkout experiences designed to minimize cart abandonment and boost conversions."
                  icon={<ShoppingCart className="w-6 h-6 text-white" />}
                  gradient="from-fuchsia-400 to-indigo-400"
                />
              </div>
              <div className="flex justify-center sm:justify-start lg:mt-0">
                <FeatureCard
                  title="Grow - Analytics"
                  description="Actionable insights and comprehensive reporting to help you scale your operations effectively."
                  icon={<TrendingUp className="w-6 h-6 text-white" />}
                  gradient="from-blue-400 to-cyan-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8 bg-muted/30">
        {/* Center: Image Comparison */}
        <div className="relative z-10 flex items-center justify-center max-w-6xl mx-auto">
          <div className="w-full aspect-video sm:aspect-[4/3] lg:aspect-[21/9] relative rounded-2xl overflow-hidden shadow-2xl border border-border/10">
            <ImageComparison className="w-full h-full object-cover" enableHover>
              <ImageComparisonImage
                src={successShopImage}
                alt="Thriving Online Store"
                position="left"
              />
              <ImageComparisonImage
                src={emptyShopImage}
                alt="Empty Retail Store"
                position="right"
                className="opacity-90 saturate-50 contrast-125"
              />
              <ImageComparisonSlider className="bg-white/80 backdrop-blur-sm w-[2px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border/50 rounded-full flex gap-1 items-center justify-center shadow-2xl cursor-ew-resize">
                  <div className="w-1.5 h-4 bg-muted-foreground/30 rounded-full" />
                  <div className="w-1.5 h-4 bg-muted-foreground/30 rounded-full" />
                </div>
              </ImageComparisonSlider>
            </ImageComparison>

            {/* Floating Labels */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white/90 text-[13px] font-medium z-10 pointer-events-none shadow-sm border border-white/10">
              Traditional Retail
            </div>
            <div className="absolute top-4 right-4 bg-pink-500/90 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-[13px] font-bold z-10 pointer-events-none shadow-md border border-white/20">
              Unified Commerce
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - B2B focused */}
      <section className="w-full py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">

          {/* Moving Line Animation (Beam) behind cards */}
          <div className="absolute top-[40%] left-10 right-10 h-[0px] hidden md:block pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            {/* The moving laser line */}
            <motion.div
              className="absolute top-[-1px] bottom-[-1px] w-60 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
              animate={{ left: ["-20%", "120%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            {/* Card 1 */}
            <div className="relative group p-[1px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(99,102,241,0.5)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full bg-card rounded-[calc(1rem-1px)]">
                <MagicCard className="flex flex-col items-center p-6 bg-transparent h-full border-none shadow-none" gradientFrom="#6366f1" gradientTo="#a855f7">
                  <div className="size-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 duration-500">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Secure & Compliant</h3>
                  <p className="text-muted-foreground">
                    PCI-ready checkout, encrypted payments, and compliance built in so your business and customers stay protected.
                  </p>
                </MagicCard>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group p-[1px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(34,211,238,0.5)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full bg-card rounded-[calc(1rem-1px)]">
                <MagicCard className="flex flex-col items-center p-6 bg-transparent h-full border-none shadow-none" gradientFrom="#22d3ee" gradientTo="#3b82f6">
                  <div className="size-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 duration-500">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Scalable Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Built to scale from launch to enterprise. High performance and reliability so your store grows without limits.
                  </p>
                </MagicCard>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group p-[1px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 h-full">
              <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(249,115,22,0.5)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full bg-card rounded-[calc(1rem-1px)]">
                <MagicCard className="flex flex-col items-center p-6 bg-transparent h-full border-none shadow-none" gradientFrom="#fb923c" gradientTo="#f43f5e">
                  <div className="size-16 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 duration-500">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Integration-Ready</h3>
                  <p className="text-muted-foreground">
                    Connect with your existing tools—ERPs, CRMs, marketplaces, and custom systems—for a true one-stop setup.
                  </p>
                </MagicCard>
              </div>
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
