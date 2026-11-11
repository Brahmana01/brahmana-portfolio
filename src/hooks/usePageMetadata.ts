
import { useEffect } from "react";
import { profile } from "../data/profile";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://brahmana-purba.is-a.dev";

const SITE_NAME = "Brahmana Purba";

const DEFAULT_DESCRIPTION =
  "Official portfolio of Brahmana Purba, an Information Technology student at Institut Teknologi Del focused on backend development, mobile applications, and artificial intelligence.";

// ==========================================
// TYPES
// ==========================================

type PageMetadataOptions = {
  title: string;
  description: string;
  image?: string;
};

type MetaAttribute = "name" | "property";

// ==========================================
// META TAG HELPER
// ==========================================

function upsertMeta(
  attribute: MetaAttribute,
  key: string,
  content: string
) {
  const selector = `meta[${attribute}="${key}"]`;

  const elements = document.head.querySelectorAll<HTMLMetaElement>(
    selector
  );

  let element = elements[0];

  // Remove duplicate metadata
  elements.forEach((item, index) => {
    if (index > 0) item.remove();
  });

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

// ==========================================
// CANONICAL URL HELPER
// ==========================================

function upsertCanonical(url: string) {
  const elements = document.head.querySelectorAll<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  let element = elements[0];

  // Remove duplicate canonical links
  elements.forEach((item, index) => {
    if (index > 0) item.remove();
  });

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = url;
}

// ==========================================
// STRUCTURED DATA HELPER
// ==========================================

function upsertStructuredData(data: object) {
  let element = document.getElementById(
    "person-structured-data"
  ) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = "person-structured-data";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

// ==========================================
// PAGE METADATA HOOK
// ==========================================

export default function usePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  image = profile.photo,
}: PageMetadataOptions): void {
  useEffect(() => {
    // --------------------------------------
    // FIXED PRIMARY DOMAIN
    // --------------------------------------

    const pathname =
      window.location.pathname.replace(/\/+$/, "") || "/";

    const canonicalUrl = new URL(
      pathname,
      `${SITE_URL}/`
    ).toString();

    // --------------------------------------
    // ABSOLUTE IMAGE URL
    // --------------------------------------

    const absoluteImageUrl = new URL(
      image || profile.photo,
      `${SITE_URL}/`
    ).toString();

    const absoluteProfileImage = new URL(
      profile.photo,
      `${SITE_URL}/`
    ).toString();

    // --------------------------------------
    // DOCUMENT TITLE
    // --------------------------------------

    document.title = title;

    // --------------------------------------
    // BASIC SEO
    // --------------------------------------

    upsertMeta("name", "author", profile.name);

    upsertMeta(
      "name",
      "description",
      description
    );

    upsertMeta(
      "name",
      "robots",
      "index,follow,max-image-preview:large"
    );

    // --------------------------------------
    // OPEN GRAPH
    // --------------------------------------

    upsertMeta(
      "property",
      "og:type",
      "website"
    );

    upsertMeta(
      "property",
      "og:site_name",
      SITE_NAME
    );

    upsertMeta(
      "property",
      "og:title",
      title
    );

    upsertMeta(
      "property",
      "og:description",
      description
    );

    upsertMeta(
      "property",
      "og:url",
      canonicalUrl
    );

    upsertMeta(
      "property",
      "og:image",
      absoluteImageUrl
    );

    upsertMeta(
      "property",
      "og:image:alt",
      "Portrait of Brahmana Purba, Information Technology student and developer"
    );

    // --------------------------------------
    // TWITTER / X CARDS
    // --------------------------------------

    upsertMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );

    upsertMeta(
      "name",
      "twitter:title",
      title
    );

    upsertMeta(
      "name",
      "twitter:description",
      description
    );

    upsertMeta(
      "name",
      "twitter:image",
      absoluteImageUrl
    );

    upsertMeta(
      "name",
      "twitter:image:alt",
      "Portrait of Brahmana Purba"
    );

    // --------------------------------------
    // CANONICAL
    // --------------------------------------

    upsertCanonical(canonicalUrl);

    // --------------------------------------
    // PERSON + WEBSITE STRUCTURED DATA
    // --------------------------------------

    const personId = `${SITE_URL}/#person`;

    const websiteId = `${SITE_URL}/#website`;

    const structuredData = {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "Person",

          "@id": personId,

          name: profile.name,

          url: `${SITE_URL}/`,

          image: absoluteProfileImage,

          jobTitle: "Information Technology Student",

          description:
            "Information Technology student at Institut Teknologi Del focused on backend development, mobile application development, and artificial intelligence.",

          affiliation: {
            "@type": "CollegeOrUniversity",
            name: "Institut Teknologi Del",
          },

          sameAs: profile.socialLinks.map(
            (social) => social.url
          ),
        },

        {
          "@type": "WebSite",

          "@id": websiteId,

          url: `${SITE_URL}/`,

          name: "Brahmana Purba | Official Portfolio",

          publisher: {
            "@id": personId,
          },
        },
      ],
    };

    upsertStructuredData(structuredData);

  }, [title, description, image]);
}
