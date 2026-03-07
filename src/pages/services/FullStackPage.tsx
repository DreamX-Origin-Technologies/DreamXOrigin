import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SERVICES_SEO } from "@/data/services-seo";

export function FullStackPage() {
  return <ServicePageLayout service={SERVICES_SEO["full-stack"]} />;
}
