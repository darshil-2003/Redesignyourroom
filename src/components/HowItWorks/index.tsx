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
    <section className="bg-[#000319] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-[222px]">
      <div className="max-w-[1476px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal font-['Lexend'] text-white leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[66px] mb-4">
            How AI Transforms Your Room Design
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.28px] sm:tracking-[0.32px] md:tracking-[0.36px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1070px] mx-auto">
            Turn any room photo into a stunning transformation in 3 easy steps.
            Our AI blends smart analysis with design expertise to show you
            exactly how updates will look.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start justify-center lg:h-[246px] relative gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 flex flex-col items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-[60px]">
                {/* Step Number */}
                <div className="bg-white/10 border border-black/10 rounded-[6px] md:rounded-[8px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center">
                  <span className="text-white text-[20px] md:text-[28px] font-medium font-['Mona_Sans'] tracking-[0.5px] md:tracking-[0.75px]">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium font-['Lexend'] text-white leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] mb-2 md:mb-3 capitalize">
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Manrope'] text-white/50 leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Separator Line - Hidden on mobile, visible on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center h-full">
                  <div className="w-px h-[246px] bg-gradient-to-b from-transparent via-[rgba(235,240,255,0.24)] to-transparent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
