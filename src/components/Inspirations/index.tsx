"use client";

import React from "react";

const Inspirations = () => {
  const inspirationImages = [
    {
      id: 1,
      src: "/images/inspiration-1.png",
      alt: "Modern living room design",
    },
    {
      id: 2,
      src: "/images/inspiration-2.png",
      alt: "Minimalist bedroom design",
    },
    {
      id: 3,
      src: "/images/inspiration-3.png",
      alt: "Bohemian style interior",
    },
    {
      id: 4,
      src: "/images/inspiration-4.png",
      alt: "Industrial loft design",
    },
    {
      id: 5,
      src: "/images/inspiration-5.png",
      alt: "Scandinavian living space",
    },
    {
      id: 6,
      src: "/images/inspiration-6.png",
      alt: "Contemporary kitchen design",
    },
    {
      id: 7,
      src: "/images/inspiration-7.png",
      alt: "Luxury bedroom suite",
    },
    {
      id: 8,
      src: "/images/inspiration-8.png",
      alt: "Modern office space",
    },
    {
      id: 9,
      src: "/images/inspiration-9.png",
      alt: "Cozy reading nook",
    },
    {
      id: 10,
      src: "/images/inspiration-10.png",
      alt: "Elegant dining room",
    },
    {
      id: 11,
      src: "/images/inspiration-11.png",
      alt: "Spa-like bathroom",
    },
    {
      id: 12,
      src: "/images/inspiration-1.png",
      alt: "Outdoor living space",
    },
  ];

  return (
    <section className="bg-[#000319] py-32">
      {/* Header */}
      <div className="max-w-[1920px] mx-auto px-[222px] mb-20">
        <div className="text-center">
          <h2 className="text-[52px] font-normal font-['Lexend'] text-white leading-[66px] mb-4">
            Design Ideas Made Simple
          </h2>
          <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px] max-w-[1070px] mx-auto">
            Explore curated design styles, color palettes, and layouts tailored
            to your room. Get inspired with ready-to-use concepts you can
            preview instantly.
          </p>
        </div>
      </div>

      {/* Full Width Flowing Image Gallery */}
      <div className="w-full overflow-hidden max-w-full">
        {/* First Row - Left to Right */}
        <div className="flex animate-scroll-left mb-6">
          {/* All images + duplicates for seamless loop */}
          {[...inspirationImages, ...inspirationImages].map((image, index) => (
            <div
              key={`row1-${image.id}-${index}`}
              className="flex-shrink-0 mr-6 w-[400px] h-[320px] rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex animate-scroll-right">
          {/* All images + duplicates for seamless loop */}
          {[...inspirationImages, ...inspirationImages].map((image, index) => (
            <div
              key={`row2-${image.id}-${index}`}
              className="flex-shrink-0 mr-6 w-[400px] h-[320px] rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
