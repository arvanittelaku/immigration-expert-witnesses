const DEFAULT_SITE_URL = "https://immigrationexpertwitnesses.com";

/** Canonical origin for SEO — strips www; ignores localhost/netlify preview env. */
export function getPublicSiteUrl(): string {
  const fallback = DEFAULT_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();
export const SITE_NAME = "Immigration Expert Witnesses";
export const SITE_EMAIL = "cases@immigrationexpertwitnesses.com";
export const SISTER_HUB_URL = "https://immigrationexpertreports.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertwitnesses";

export const COLORS = {
  primary: "#18181b",
  accent: "#0284c7",
  gold: "#0284c7",
  background: "#f4f6f8",
  sectionAlt: "#eef2f6",
  border: "#e2e8f0",
  heading: "#18181b",
  body: "#3f4654",
  ink: "#18181b",
  paper: "#f4f6f8",
  surface: "#ffffff",
  sky: "#0284c7",
} as const;
