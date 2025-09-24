"use client";

import React from "react";
import SeamlessCarousel from "../SeamlessCarousel";

const BeforeAfter = () => {
  return (
    <section className="bg-[#000319] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1920px] ">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal font-['Lexend'] text-white leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[66px] mb-4">
            Before & After Transformations
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.28px] sm:tracking-[0.32px] md:tracking-[0.36px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1070px] mx-auto">
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
