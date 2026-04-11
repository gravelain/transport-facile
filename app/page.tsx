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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Accroche + problème + promesse */}
        <Hero />

        {/* 2. Ce que vous perdez aujourd'hui — prise de conscience */}
        <LossSection />

        {/* 3. Deux solutions concrètes */}
        <Services />

        {/* 3. Preuves de confiance + moyens de paiement */}
        <TrustBar />

        {/* 4. Visuels plateforme (côté client + côté agence) */}
        <AppPreview />

        {/* 5. Comment ça marche — 3 étapes */}
        <HowItWorks />

        {/* 6. Tarifs + simulateur de revenus */}
        <Pricing />

        {/* 7. Preuve sociale — témoignages + chiffres */}
        <SocialProof />

        {/* 8. À propos — vision + valeurs */}
        <About />

        {/* 9. FAQ — kill objections + SEO rich snippets */}
        <FAQ />

        {/* 10. Contact */}
        <Contact />
      </main>
      <Footer />

      {/* Bouton WhatsApp flottant */}
      <WhatsAppButton />
    </>
  );
}
