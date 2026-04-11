import { getDictionary, hasLocale } from "./dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LossSection from "@/components/LossSection";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <main>
        <Hero dict={dict.hero} />
        <LossSection dict={dict.loss} />
        <Services dict={dict.services} />
        <TrustBar dict={dict.trustBar} />
        <AppPreview dict={dict.appPreview} />
        <HowItWorks dict={dict.howItWorks} />
        <Pricing dict={dict.pricing} simulatorDict={dict.simulator} />
        <SocialProof dict={dict.socialProof} />
        <About dict={dict.about} />
        <FAQ />
        <Contact />
      </main>
      <Footer dict={dict.footer} />
      <WhatsAppButton />
    </>
  );
}
