import type { Metadata } from "next";
import { Karla, Syne } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider, ConsentDefaultsScript } from "@/components/cookies";
import { SITE_URL } from "@/lib/constants";
import { isProductionSite } from "@/lib/seo/is-production";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Immigration Expert Witnesses | Tribunal Evidence",
    template: "%s | Immigration Expert Witnesses",
  },
  description:
    "Find qualified immigration expert witnesses for tribunal proceedings — country conditions, persecution, human rights, and oral evidence. CPR Part 35.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      "en-GB": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    siteName: "Immigration Expert Witnesses",
    url: SITE_URL,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: isProductionSite() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${karla.variable} ${syne.variable} h-full`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
