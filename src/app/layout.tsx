import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const SITE = "https://ironwoodtucson.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Ironwood Landscaping | Premium Landscape Design & Maintenance in Tucson, AZ",
  description:
    "Desert-smart landscaping, hardscaping, irrigation, and maintenance for Tucson, the Catalina Foothills, Oro Valley, Marana, and beyond.",
  openGraph: {
    title: "Ironwood Landscaping — Tucson, AZ",
    description: "Landscape design and maintenance built for the Sonoran Desert. Licensed, insured, locally owned.",
    url: SITE,
    siteName: "Ironwood Landscaping",
    type: "website",
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
