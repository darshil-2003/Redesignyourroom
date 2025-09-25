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
    <div className="min-h-screen bg-[#000319] overflow-x-hidden relative h-full ">
      <Header onOpenPlayground={handleOpenPlayground} />
      <main className="w-full">
        <Hero onOpenPlayground={handleOpenPlayground} />
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
