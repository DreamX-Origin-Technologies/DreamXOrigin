import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Grid from "@/components/ui/grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import { FeatureSection } from "@/components/feature-section";
import StatsCount from "@/components/ui/statscount";
import { LogoCloud } from "@/components/logo-cloud";
import { JsonLdOrganization } from "@/components/JsonLd";
import { SeoHead } from "@/components/SeoHead";
import Testimonials01 from "@/components/testimonials-01";

const HOME_TITLE = "DreamX Origin | Scalable Web & Mobile App Development for Startups";
const HOME_DESCRIPTION =
  "We build scalable web and mobile applications for startups and businesses. React, Next.js, Flutter, React Native, and full-stack development. Get a free consultation.";

export function Home() {
  return (
    <>
      <SeoHead title={HOME_TITLE} description={HOME_DESCRIPTION} canonical="/" />
      <JsonLdOrganization />

      <Hero />

      <FeatureSection />

      <StatsCount />

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden py-10">
        {/* Background Illustrations */}
        <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/4 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[120px]" />

        <DotPattern className="absolute inset-0 z-0 opacity-40" />

        <div className="relative z-10 w-full">
          <LogoCloud />
          <Testimonials01 />
        </div>
      </div>

      <div className="bg-background min-h-200 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern className="min-h-200" />
        <Contact />
      </div>
    </>
  );
}
