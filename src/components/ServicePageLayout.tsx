import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/SeoHead";
import { JsonLdService, JsonLdBreadcrumb } from "@/components/JsonLd";
import type { ServiceSeo } from "@/data/services-seo";
import { ArrowRightIcon } from "lucide-react";

type ServicePageLayoutProps = {
  service: ServiceSeo;
};

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: service.h1, path: service.slug },
  ];

  return (
    <>
      <SeoHead
        title={service.title}
        description={service.metaDescription}
        canonical={service.slug}
      />
      <JsonLdBreadcrumb items={breadcrumbItems} />
      <JsonLdService
        name={service.h1}
        description={service.metaDescription}
        slug={service.slug}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#contact-us">
              <Button size="lg" className="gap-2">
                {service.ctaPrimary}
                <ArrowRightIcon className="size-4" />
              </Button>
            </a>
            {service.ctaSecondary && (
              <Button size="lg" variant="outline" asChild>
                <a href="/#contact-us">{service.ctaSecondary}</a>
              </Button>
            )}
          </div>
        </header>

        <div className="space-y-12">
          {service.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                {section.h2}
              </h2>
              {section.content && (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.h3 && section.h3.length > 0 && (
                <ul className="mt-6 space-y-6">
                  {section.h3.map((sub, j) => (
                    <li key={j}>
                      <h3 className="text-base font-medium md:text-lg">
                        {sub.h3}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed md:text-base">
                        {sub.content}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {service.internalLinks.length > 0 && (
          <section className="mt-16 rounded-lg border bg-muted/30 p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Related services
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {service.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-16 text-center">
          <p className="text-muted-foreground">
            Ready to start your project? We’d love to hear from you.
          </p>
          <a href="/#contact-us" className="mt-4 inline-block">
            <Button size="lg" className="gap-2">
              {service.ctaPrimary}
              <ArrowRightIcon className="size-4" />
            </Button>
          </a>
        </section>
      </article>
    </>
  );
}
