import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Transport Facile – Billetterie en ligne pour agences de bus en Côte d'Ivoire",
    template: "%s | Transport Facile",
  },
  description:
    "Transport Facile digitalise les agences de transport interurbain en Côte d'Ivoire. Vente de billets en ligne, QR Code embarquement, gestion de colis, tableau de bord en temps réel. Opérationnel en 48h. Commission à partir de 2,5%, zéro frais fixes.",
  keywords: [
    "billetterie en ligne Côte d'Ivoire",
    "vente billet bus Abidjan",
    "logiciel gestion agence transport Abidjan",
    "transport interurbain numérique Côte d'Ivoire",
    "digitalisation agence voyage Abidjan",
    "ResaBus Core",
    "QR code billet bus Côte d'Ivoire",
    "envoi colis bus Côte d'Ivoire",
    "gestion colis transport interurbain",
    "Wave Orange Money paiement transport",
    "Mobile Money billet bus",
    "digitalisation transport Afrique de l'Ouest",
    "SaaS transport bus Abidjan",
    "réservation bus en ligne Abidjan Bouaké",
    "logiciel caisse agence transport",
  ],
  authors: [{ name: "Transport Facile", url: "https://transport-facile.com" }],
  creator: "Transport Facile",
  publisher: "Transport Facile",
  metadataBase: new URL("https://transport-facile.com"),
  alternates: {
    canonical: "/",
    languages: { "fr-CI": "/" },
  },
  openGraph: {
    title:
      "Transport Facile – La billetterie en ligne pour vos agences de transport",
    description:
      "Digitalisez votre agence de transport en 48h avec ResaBus Core et ResaBus Colis Core. Billetterie en ligne, QR Code embarquement, suivi de colis, tableau de bord recettes en temps réel.",
    type: "website",
    locale: "fr_CI",
    siteName: "Transport Facile",
    url: "https://transport-facile.com",
    images: [
      {
        url: "https://transport-facile.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transport Facile – Billetterie en ligne pour agences de bus en Côte d'Ivoire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Transport Facile – Digitalisation du Transport en Côte d'Ivoire",
    description:
      "Billetterie en ligne et gestion de colis pour les agences de transport interurbain en Afrique de l'Ouest. Opérationnel en 48h.",
    images: ["https://transport-facile.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Ajouter votre code Google Search Console ici une fois le site déployé
    // google: "VOTRE_CODE_VERIFICATION",
  },
};

// Organisation principale
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://transport-facile.com/#organization",
  name: "Transport Facile",
  alternateName: "ResaBus",
  description:
    "Digitalisation des agences de voyages interurbaines en Côte d'Ivoire : billetterie en ligne, gestion de colis, tableau de bord en temps réel.",
  url: "https://transport-facile.com",
  logo: {
    "@type": "ImageObject",
    url: "https://transport-facile.com/logo/Design-sans-titre-_1_.svg",
  },
  image: "https://transport-facile.com/og-image.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressCountry: "CI",
  },
  areaServed: {
    "@type": "Country",
    name: "Côte d'Ivoire",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "French",
    areaServed: "CI",
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abidjan",
      addressCountry: "CI",
    },
  },
  serviceType: "Logiciel SaaS de billetterie et gestion de transport",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions de digitalisation du transport interurbain",
    itemListElement: [
      {
        "@type": "Offer",
        name: "ResaBus Core - Plan Essentiel",
        description:
          "Billetterie en ligne 24h/24 avec QR Code sécurisé, gestion des lignes et horaires, tableau de bord recettes. Commission 3% par billet vendu en ligne.",
        price: "3",
        priceCurrency: "XOF",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitCode: "C62",
          },
        },
      },
      {
        "@type": "Offer",
        name: "ResaBus Core - Plan Pro",
        description:
          "Billetterie + gestion de colis ResaBus Colis Core, SMS automatiques, statistiques avancées. Commission 2,5% par billet vendu en ligne.",
        price: "2.5",
        priceCurrency: "XOF",
      },
      {
        "@type": "Offer",
        name: "ResaBus Core - Plan Enterprise",
        description:
          "Solution sur mesure pour les grands opérateurs de transport, infrastructure dédiée, chef de projet dédié. Commission à partir de 1,5%.",
      },
    ],
  },
  sameAs: [],
};

// Données structurées pour l'application SaaS
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ResaBus Core",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Système de billetterie en ligne avec QR Code pour les agences de bus en Côte d'Ivoire. Permet la réservation en ligne, le paiement Mobile Money/Wave, et le scan QR Code à l'embarquement.",
  url: "https://transport-facile.com",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "XOF",
    description: "Commission de 2,5% à 3% par billet vendu. Aucun frais fixe.",
  },
  provider: {
    "@id": "https://transport-facile.com/#organization",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "fr";

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* Preconnect pour performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
