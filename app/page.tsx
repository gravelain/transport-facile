import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustBar />
        <AppPreview />
        <HowItWorks />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
