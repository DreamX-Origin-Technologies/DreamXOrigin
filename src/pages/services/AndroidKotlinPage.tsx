import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SERVICES_SEO } from "@/data/services-seo";

export function AndroidKotlinPage() {
  return <ServicePageLayout service={SERVICES_SEO["android-kotlin"]} />;
}
