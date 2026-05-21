import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections";
import { ThemeLightRays } from "@/components/ui/theme-light-rays";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://djibrilla.dev";
const siteTitle = "Djibrilla Boubacar - Software Engineer";
const siteDescription =
  "Portfolio of Djibrilla Boubacar, a software engineer building machine learning, computer vision, and applied AI systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s - Djibrilla Boubacar",
  },
  description: siteDescription,
  authors: [{ name: "Djibrilla Boubacar" }],
  creator: "Djibrilla Boubacar",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/logo/logo%20orange.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo/logo%20blue.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Djibrilla Boubacar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        geist.variable,
        "font-sans antialiased",
      )}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground">
        <Providers>
          <ThemeLightRays />
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
