import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import { PageBackground } from "@/components/fx/PageBackground";
import "./globals.css";

// Self-hosted variable fonts (public/fonts): no network at build time, no CDN at runtime.
const inter = localFont({
  src: "../public/fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});
const playfair = localFont({
  src: [
    { path: "../public/fonts/playfair.woff2", weight: "400 900", style: "normal" },
    { path: "../public/fonts/playfair-italic.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yerlan.live";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.tagline,
  keywords: ["React Native Developer", "Software Engineer", "React", "TypeScript", "Leicester", profile.name],
  openGraph: { title, description: profile.tagline, type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image", title, description: profile.tagline },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <PageBackground />
        {children}
      </body>
    </html>
  );
}
