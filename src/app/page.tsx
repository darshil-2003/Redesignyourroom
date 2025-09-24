"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import BeforeAfter from "../components/BeforeAfter";
import Reimagine from "../components/Reimagine";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Inspirations from "../components/Inspirations";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Playground from "../components/Playground";
import { usePlayground } from "../hooks";

export default function Home() {
  const { isOpen, openPlayground, closePlayground } = usePlayground();

  if (isOpen) {
    return (
      <div className="min-h-screen bg-[#000319] overflow-x-hidden">
        <Playground onClose={closePlayground} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#000319] overflow-x-hidden">
      <Header onOpenPlayground={openPlayground} />
      <main className="space-y-5 overflow-x-hidden">
        <Hero onOpenPlayground={openPlayground} />
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
