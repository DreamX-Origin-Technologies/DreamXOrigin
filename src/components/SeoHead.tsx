import { useEffect } from "react";

export type SeoHeadProps = {
  title: string;
  description: string;
  canonical?: string;
};

const SITE_NAME = "DreamXOrigin";

export function SeoHead({ title, description, canonical }: SeoHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const origin = window.location.origin;
      const canonicalUrl = canonical.startsWith("http") ? canonical : `${origin}${canonical}`;
      if (linkCanonical) {
        linkCanonical.setAttribute("href", canonicalUrl);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    }

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, canonical]);

  return null;
}
