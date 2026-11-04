import { useEffect } from "react";
import { profile } from "../data/profile";

type PageMetadataOptions = {
  title: string;
  description: string;
  image?: string;
};

type MetaAttribute = "name" | "property";

function upsertMeta(
  attribute: MetaAttribute,
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = url;
}

export default function usePageMetadata({
  title,
  description,
  image = profile.photo,
}: PageMetadataOptions): void {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${window.location.pathname}`;
    const absoluteImageUrl = new URL(image, origin).toString();
    const absoluteProfileImage = new URL(profile.photo, origin).toString();

    document.title = title;

    upsertMeta("name", "author", profile.name);
    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      "index,follow,max-image-preview:large"
    );

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Brahmana Purba");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", absoluteImageUrl);
    upsertMeta(
      "property",
      "og:image:alt",
      "Portfolio of Brahmana Purba"
    );

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImageUrl);

    upsertCanonical(canonicalUrl);

    const personId = `${origin}/#person`;

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": personId,
          name: profile.name,
          url: `${origin}/`,
          image: absoluteProfileImage,
          jobTitle: "Information Technology Student",
          description:
            "Information Technology student at Institut Teknologi Del focused on backend development, mobile applications, and artificial intelligence.",
          affiliation: {
            "@type": "CollegeOrUniversity",
            name: "Institut Teknologi Del",
          },
          sameAs: profile.socialLinks.map((social) => social.url),
        },
        {
          "@type": "WebSite",
          "@id": `${origin}/#website`,
          url: `${origin}/`,
          name: "Brahmana Purba | Official Portfolio",
          publisher: {
            "@id": personId,
          },
        },
      ],
    };

    let schemaElement = document.getElementById(
      "person-structured-data"
    ) as HTMLScriptElement | null;

    if (!schemaElement) {
      schemaElement = document.createElement("script");
      schemaElement.id = "person-structured-data";
      schemaElement.type = "application/ld+json";
      document.head.appendChild(schemaElement);
    }

    schemaElement.textContent = JSON.stringify(structuredData);
  }, [title, description, image]);
}