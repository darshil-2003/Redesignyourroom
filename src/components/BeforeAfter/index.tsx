"use client";

import React from "react";
import SeamlessCarousel from "../SeamlessCarousel";

const BeforeAfter = () => {
  return (
    <section className="bg-[#000319] section-responsive">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Lexend'] text-white leading-tight mb-6">
            Before & After Transformations
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal font-['Manrope'] text-white/50 leading-relaxed max-w-4xl mx-auto">
            See how our AI transforms empty spaces into stunning interiors. From
            architectural sketches to photorealistic designs.
          </p>
        </div>

        {/* Seamless Carousel */}
        <SeamlessCarousel />
      </div>
    </section>
  );
};

export default BeforeAfter;
