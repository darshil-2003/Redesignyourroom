import Header from "../components/Header";
import Hero from "../components/Hero";
import BeforeAfter from "../components/BeforeAfter";
import Reimagine from "../components/Reimagine";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Inspirations from "../components/Inspirations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000319]">
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Reimagine />
        <HowItWorks />
        <Features />
        <Inspirations />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
