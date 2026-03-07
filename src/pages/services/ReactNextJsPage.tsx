import { ServicePageLayout } from "@/components/ServicePageLayout";
import { SERVICES_SEO } from "@/data/services-seo";

export function ReactNextJsPage() {
  return <ServicePageLayout service={SERVICES_SEO["react-nextjs"]} />;
}
