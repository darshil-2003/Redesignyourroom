"use client";

import React from "react";
import { LineIcon } from "../../icons";

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
    <section className="bg-[#000319] section-responsive">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Lexend'] text-white leading-tight mb-6 animate-fade-in-up">
            How AI Transforms Your Room Design
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal font-['Manrope'] text-white/50 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            Turn any room photo into a stunning transformation in 3 easy steps.
            Our AI blends smart analysis with design expertise to show you
            exactly how updates will look.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center text-center group animate-fade-in-up animate-delay-${
                (index + 1) * 100
              } hover-lift`}
            >
              {/* Step Number */}
              <div className="bg-white/10 border border-white/20 rounded-xl md:rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white/15 transition-all duration-300">
                <span className="text-white text-2xl md:text-3xl font-medium font-['Lexend']">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium font-['Lexend'] text-white leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal font-['Manrope'] text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Separator Arrow - Hidden on mobile, visible on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <svg
                    className="w-6 h-6 text-white/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
