"use client";

import React, { useState, useEffect, useRef } from "react";

const SeamlessCarousel = () => {
  const [leftScrollPosition, setLeftScrollPosition] = useState(0);
  const [rightScrollPosition, setRightScrollPosition] = useState(0);

  // Separate arrays for before and after images (5 each)
  const beforeImages = [
    { id: 1, src: "/images/Before 1.png", alt: "Before 1" },
    { id: 2, src: "/images/Before 2.png", alt: "Before 2" },
    { id: 3, src: "/images/Before 3.png", alt: "Before 3" },
    { id: 4, src: "/images/Before 4.png", alt: "Before 4" },
    { id: 5, src: "/images/Before 5.png", alt: "Before 5" },
  ];

  const afterImages = [
    { id: 1, src: "/images/After 1.png", alt: "After 1" },
    { id: 2, src: "/images/After 2.png", alt: "After 2" },
    { id: 3, src: "/images/After 3.png", alt: "After 3" },
    { id: 4, src: "/images/After 4.png", alt: "After 4" },
    { id: 5, src: "/images/After 5.png", alt: "After 5" },
  ];

  // Auto-scroll effect for both carousels - REVERSED FLOW
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftScrollPosition((prev) => {
        // Left carousel: images flow from blue line toward left (reversed)
        const scrollIncrement = 2;
        const maxScroll = 2000;
        return (prev - scrollIncrement + maxScroll) % maxScroll;
      });

      setRightScrollPosition((prev) => {
        // Right carousel: images flow from right toward blue line (reversed)
        const scrollIncrement = 2;
        const maxScroll = 2000;
        return (prev - scrollIncrement + maxScroll) % maxScroll;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-[320px] relative overflow-hidden">
      {/* Dual Carousel Container - Full Screen */}
      <div className="relative w-full h-full overflow-hidden">
        {/* White Line Separator in Center */}
        <div
          className="absolute left-1/2 top-[50%] bg-white z-30 pointer-events-none "
          style={{
            width: "2px",
            height: "320px",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Left Carousel - Before Images */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${leftScrollPosition}px)`,
              transition: "none",
            }}
          >
            <div className="  relative w-full h-[320px] bg-red-500 "> </div>
            {/* Create multiple sets for seamless loop */}
            {[
              ...beforeImages,
              ...beforeImages,
              ...beforeImages,
              ...beforeImages,
              ...beforeImages,
            ].map((image, index) => (
              <div
                key={`before-${index}`}
                className="flex-shrink-0 relative"
                style={{ marginRight: "20px" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover rounded-lg"
                  style={{
                    width: "400px",
                    height: "320px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Carousel - After Images */}

        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${rightScrollPosition}px)`,
              transition: "none",
            }}
          >
            {/* Create multiple sets for seamless loop */}
            {[
              ...afterImages,
              ...afterImages,
              ...afterImages,
              ...afterImages,
              ...afterImages,
            ].map((image, index) => (
              <div
                key={`after-${index}`}
                className="flex-shrink-0 relative"
                style={{ marginLeft: "20px" }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover rounded-lg"
                  style={{
                    width: "400px",
                    height: "320px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default SeamlessCarousel;
