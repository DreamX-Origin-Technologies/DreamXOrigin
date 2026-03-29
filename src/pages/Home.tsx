import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Grid from "@/components/ui/grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import { FeatureSection } from "@/components/feature-section";
import StatsCount from "@/components/ui/statscount";
import { LogoCloud } from "@/components/logo-cloud";
import { JsonLdOrganization } from "@/components/JsonLd";
import { SeoHead } from "@/components/SeoHead";

const HOME_TITLE = "DreamXOrigin | Scalable Web & Mobile App Development for Startups";
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
      <LogoCloud />

      <div className="bg-background min-h-200 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern className="min-h-200" glow />
        <Contact />
      </div>
    </>
  );
}
