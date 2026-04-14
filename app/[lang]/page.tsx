import type { Metadata } from "next";
import { getDictionary, hasLocale } from "./dictionaries";
import { BASE_URL } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import LossSection from "@/components/sections/LossSection";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import AppPreview from "@/components/sections/AppPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export async function generateMetadata({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Promise<any>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(String(lang ?? "")) ? (lang as "fr" | "en") : "fr";
  const dict = await getDictionary(locale);

  const ogLocale = locale === "fr" ? "fr_CI" : "en_US";
  const alternateLocale = locale === "fr" ? "en" : "fr";
  const alternateOgLocale = locale === "fr" ? "en_US" : "fr_CI";

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "x-default": `${BASE_URL}/fr`,
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Transport Facile",
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function LangPage({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Promise<any>;
}) {
  const { lang } = await params;
  const locale = hasLocale(String(lang ?? "")) ? (lang as "fr" | "en") : "fr";
  const dict = await getDictionary(locale);

  return (
    <>
      <Header />
      <main suppressHydrationWarning>
        <Hero dict={dict.hero} />
        <LossSection dict={dict.loss} />
        <Services dict={dict.services} />
        <TrustBar dict={dict.trustBar} />
        <AppPreview dict={dict.appPreview} />
        <HowItWorks dict={dict.howItWorks} />
        <Pricing dict={dict.pricing} simulatorDict={dict.simulator} />
        <SocialProof dict={dict.socialProof} />
        <About dict={dict.about} />
        <FAQ dict={dict.faq} whatsappMessage={dict.whatsapp.message} />
        <Contact />
      </main>
      <Footer dict={dict.footer} locale={locale} />
      <WhatsAppButton />
    </>
  );
}
