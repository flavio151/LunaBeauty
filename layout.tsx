import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["500", "600"],
});

const body = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lunabeauty.ro"),
  title: {
    default: `${site.nume} — Salon de înfrumusețare în București`,
    template: `%s — ${site.nume}`,
  },
  description: site.descriere,
  keywords: [
    "salon înfrumusețare București",
    "salon beauty",
    "manichiură",
    "tratament facial",
    "coafor",
    "machiaj profesional",
  ],
  openGraph: {
    title: `${site.nume} — Salon de înfrumusețare în București`,
    description: site.descriere,
    locale: "ro_RO",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivory font-body text-ink antialiased">
        <a
          href="#continut"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-wine focus:px-4 focus:py-2 focus:text-ivory"
        >
          Sari la conținut
        </a>
        <Navbar />
        <main id="continut" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
