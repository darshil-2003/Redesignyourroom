"use client";

import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Your Room Photo",
      description:
        "Simply take a photo of your room or upload an existing image. Our AI will analyze the space, lighting, and existing elements.",
    },
    {
      number: "2",
      title: "Choose Your Style",
      description:
        "Select from our curated collection of design styles including modern, minimalist, bohemian, and more. Preview how each style transforms your space.",
    },
    {
      number: "3",
      title: "Get Your AI Design",
      description:
        "Our advanced AI generates a completely redesigned version of your room, maintaining realistic proportions and lighting while applying your chosen style.",
    },
  ];

  return (
    <section className="bg-[#000319] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal font-['Lexend'] text-white leading-tight mb-4 md:mb-6 animate-fade-in-up">
            How AI Transforms Your Room Design
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Manrope'] text-white/50 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            Turn any room photo into a stunning transformation in 3 easy steps.
            Our AI blends smart analysis with design expertise to show you
            exactly how updates will look.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center group animate-fade-in-up animate-delay-${
                (index + 1) * 100
              } hover-lift relative`}
            >
              {/* Step Number */}
              <div className="bg-white/10 border border-white/20 rounded-xl md:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:bg-white/15 transition-all duration-300">
                <span className="text-white text-xl sm:text-2xl md:text-3xl font-medium font-['Lexend']">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-sm">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-['Lexend'] text-white leading-tight text-center">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal font-['Manrope'] text-white/50 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>

              {/* Separator Line - Hidden on mobile, visible on tablet and desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-35 transform -translate-y-1/2 w-[246px] h-px -rotate-90 self-stretch bg-gradient-to-r from-transparent via-[rgba(235,240,255,0.24)] to-transparent "></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
