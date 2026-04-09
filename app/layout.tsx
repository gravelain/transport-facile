import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Transport Facile – Digitalisation des Agences de Transport en Côte d'Ivoire",
    template: "%s | Transport Facile",
  },
  description:
    "Transport Facile digitalise les agences de voyages interurbaines en Côte d'Ivoire avec ResaBus Core (billetterie en ligne + QR Code) et ResaBus Colis Core (envoi de colis). Demandez une démo gratuite.",
  keywords: [
    "billetterie en ligne Côte d'Ivoire",
    "transport interurbain numérique",
    "agence de voyage digitale Abidjan",
    "ResaBus Core",
    "QR code billet bus Afrique",
    "envoi colis bus Côte d'Ivoire",
    "digitalisation transport Afrique de l'Ouest",
    "API billetterie bus",
  ],
  authors: [{ name: "Transport Facile" }],
  creator: "Transport Facile",
  publisher: "Transport Facile",
  metadataBase: new URL("https://transport-facile.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Transport Facile – La billetterie en ligne pour vos agences de transport",
    description:
      "Digitalisez votre agence de transport en 48h avec ResaBus Core et ResaBus Colis Core. Billetterie en ligne, QR Code, envoi de colis.",
    type: "website",
    locale: "fr_CI",
    siteName: "Transport Facile",
    url: "https://transport-facile.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transport Facile – Digitalisation du Transport en Côte d'Ivoire",
    description:
      "Billetterie en ligne et gestion de colis pour les agences de transport interurbain en Afrique de l'Ouest.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Transport Facile",
  description:
    "Digitalisation des agences de voyages interurbaines en Afrique de l'Ouest",
  url: "https://transport-facile.com",
  areaServed: ["CI"],
  serviceType: "Logiciel de transport et billetterie",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions de digitalisation du transport",
    itemListElement: [
      {
        "@type": "Offer",
        name: "ResaBus Core",
        description:
          "Système complet de billetterie en ligne avec scan QR Code pour les agences de bus",
      },
      {
        "@type": "Offer",
        name: "ResaBus Colis Core",
        description:
          "Système de réservation pour l'envoi de colis par bus avec suivi en temps réel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
