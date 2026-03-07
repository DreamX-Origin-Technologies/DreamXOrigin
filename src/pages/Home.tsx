import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Grid from "@/components/ui/grid";
import { DotPattern } from "@/components/ui/dot-pattern";
import { FeatureSection } from "@/components/feature-section";
import StatsCount from "@/components/ui/statscount";
import { JsonLdOrganization } from "@/components/JsonLd";
import { SeoHead } from "@/components/SeoHead";

const HOME_TITLE = "DreamX Origin | Scalable Web & Mobile App Development for Startups";
const HOME_DESCRIPTION =
  "We build scalable web and mobile applications for startups and businesses. React, Next.js, Flutter, React Native, and full-stack development. Get a free consultation.";

export function Home() {
  return (
    <>
      <SeoHead title={HOME_TITLE} description={HOME_DESCRIPTION} canonical="/" />
      <JsonLdOrganization />
      <div
        aria-hidden="true"
        className="absolute inset-0 h-175 overflow-hidden"
      >
        <div className="transform-[translate3d(0,0,0)] absolute -inset-x-10 bottom-0 h-[60%] opacity-60 blur-[100px] dark:opacity-0">
          <div className="mask-[radial-gradient(closest-side,black_100%,transparent_100%)]  h-175 -scale-y-100 hero-gradiant"></div>
        </div>
      </div>
      <Grid columns={25} rows={10} className="absolute h-160 "></Grid>
      <Hero />

      <FeatureSection />

      <StatsCount />

      <div className="bg-background min-h-200 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern className="min-h-200" glow />
        <Contact />
      </div>
    </>
  );
}
