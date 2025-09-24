"use client";

import React, { useState, useRef, useCallback } from "react";
import { HandlerIcon } from "../../icons";

const Reimagine = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Percentage from left
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const features = [
    "Upload your room photo and preview design styles instantly.",
    "Our AI keeps proportions and lighting accurate for realistic results.",
    "Choose from multiple design styles and color palettes.",
    "Preview changes before making any real-world modifications.",
  ];

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    // Cancel any pending animation frame
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Use requestAnimationFrame for smoother updates
    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    });
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updateSliderPosition(e.clientX);
    },
    [updateSliderPosition]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updateSliderPosition(e.touches[0].clientX);
    },
    [updateSliderPosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add event listeners for mouse and touch events
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);

      // Clean up animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <section className="bg-[#000319] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-[222px]">
      <div className="max-w-[1476px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal font-['Lexend'] text-white leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[66px] mb-4">
            Try Different Styles Risk-Free Before You Redecorate
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.28px] sm:tracking-[0.32px] md:tracking-[0.36px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1070px] mx-auto">
            Upload your room photo and preview design styles instantly. Our AI
            keeps proportions and lighting accurate, so you can pick colors,
            furniture, and layouts with confidence.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[100px] items-start">
          {/* Before/After Image */}
          <div
            ref={containerRef}
            className="w-full max-w-[616px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden relative cursor-col-resize select-none mx-auto lg:mx-0"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="w-full h-full relative">
              {/* Before Image (Full Background) */}
              <div className="absolute inset-0">
                <img
                  src="/images/reimagine-before.png"
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* After Image (Clipped to slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  transition: isDragging ? "none" : "clip-path 0.1s ease-out",
                }}
              >
                <img
                  src="/images/reimagine-after.png"
                  alt="After"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
                style={{
                  left: `${sliderPosition}%`,
                  transition: isDragging ? "none" : "left 0.1s ease-out",
                }}
              />

              {/* Slider Handler */}
              <div
                className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-col-resize ${
                  isDragging ? "scale-110" : "scale-100"
                }`}
                style={{
                  left: `${sliderPosition}%`,
                  transition: isDragging
                    ? "none"
                    : "left 0.1s ease-out, transform 0.1s ease-out",
                }}
              >
                <HandlerIcon className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[49px] h-full" />
              </div>

              {/* Clickable overlay for better UX */}
              <div
                className="absolute inset-0 z-5 cursor-col-resize"
                onClick={(e) => {
                  if (!isDragging) {
                    // Add a small delay for smooth click animation
                    setTimeout(() => {
                      updateSliderPosition(e.clientX);
                    }, 10);
                  }
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-[760px] mt-0 lg:mt-30">
            {/* Step Content */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Main Content */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal font-['Lexend'] text-white leading-[32px] sm:leading-[36px] md:leading-[42px]">
                    Try Different Styles Risk-Free Before You Redecorate
                  </h3>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.28px] sm:tracking-[0.32px] md:tracking-[0.36px]">
                    Upload your room photo and preview design styles instantly.
                    Our AI keeps proportions and lighting accurate, so you can
                    pick colors, furniture, and layouts with confidence.
                  </p>
                </div>

                {/* Feature List */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 md:gap-3"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.28px] sm:tracking-[0.32px] md:tracking-[0.36px]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reimagine;
