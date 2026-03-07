import { useLocation } from "react-router-dom";

const SITE_URL = "https://dreamxorigin.com"; // Update with your production URL

type OrganizationSchema = {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  description?: string;
  contactPoint?: {
    "@type": "ContactPoint";
    email: string;
    telephone?: string;
    contactType: string;
  };
};

type ServiceSchema = {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: { "@type": "Organization"; name: string };
  areaServed?: string;
  url?: string;
};

export function JsonLdOrganization() {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DreamXOrigin",
    url: SITE_URL,
    description:
      "DreamXOrigin builds scalable web and mobile applications for startups and businesses. We offer React, Next.js, Flutter, React Native, and full-stack development.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@dreamxorigin.com",
      telephone: "+919894591650",
      contactType: "customer service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

type JsonLdServiceProps = {
  name: string;
  description: string;
  slug: string;
};

export function JsonLdService({ name, description, slug }: JsonLdServiceProps) {
  const schema: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: "DreamXOrigin" },
    areaServed: "Worldwide",
    url: `${SITE_URL}${slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdBreadcrumb({ items }: { items: { name: string; path: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdPage() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return <JsonLdOrganization />;
  }
  return null;
}
