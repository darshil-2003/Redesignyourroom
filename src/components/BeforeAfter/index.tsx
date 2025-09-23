"use client";

import React from "react";

const BeforeAfter = () => {
  const images = [
    {
      id: 1,
      src: "/images/before-after-1.png",
      alt: "Before: Empty room sketch",
    },
    {
      id: 2,
      src: "/images/before-after-2.png",
      alt: "After: Modern living room",
    },
    {
      id: 3,
      src: "/images/before-after-3.png",
      alt: "AI generated bedroom design",
    },
    {
      id: 4,
      src: "/images/before-after-4.png",
      alt: "Fantasy interior design",
    },
    {
      id: 5,
      src: "/images/before-after-5.png",
      alt: "Another AI generated design",
    },
  ];

  return (
    <section className="bg-[#000319] py-20">
      <div className="max-w-[1920px] mx-auto px-4">
        <div className="flex gap-6 items-center justify-center h-[320px] relative">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative w-[400px] h-[320px] rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          ))}

          {/* Vertical Line Separator */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-[334px] bg-gradient-to-b from-transparent via-[rgba(235,240,255,0.24)] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
