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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleOpenPlayground = () => {
    // Navigate to playground page
    router.push("/playground");
  };

  return (
    <div className="min-h-screen relative bg-[#000319] overflow-x-hidden  h-full ">
      <Header onOpenPlayground={handleOpenPlayground} />
      <main className="w-full pt-16 md:pt-20">
        <section id="home">
          <Hero onOpenPlayground={handleOpenPlayground} />
        </section>
        <BeforeAfter />
        <Reimagine />
        <section id="how-it-works ">
          <HowItWorks />
        </section>
        <section id="features">
          <Features />
        </section>
        <Inspirations />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <div className="py-8 md:py-17">
        <Footer />
      </div>
    </div>
  );
}
