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
    <section className="bg-[#000319] py-32 px-[222px]">
      <div className="max-w-[1476px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-normal font-['Lexend'] text-white leading-[66px] mb-4">
            How AI Transforms Your Room Design
          </h2>
          <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px] max-w-[1070px] mx-auto">
            Turn any room photo into a stunning transformation in 3 easy steps.
            Our AI blends smart analysis with design expertise to show you
            exactly how updates will look.
          </p>
        </div>

        {/* Steps */}
        <div className="flex items-start justify-center h-[246px] relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 flex flex-col items-center gap-8 px-[60px]">
                {/* Step Number */}
                <div className="bg-white/10 border border-black/10 rounded-[8px] w-[60px] h-[60px] flex items-center justify-center">
                  <span className="text-white text-[28px] font-medium font-['Mona_Sans'] tracking-[0.75px]">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-[32px] font-medium font-['Lexend'] text-white leading-[40px] mb-3 capitalize">
                    {step.title}
                  </h3>
                  <p className="text-[16px] font-normal font-['Manrope'] text-white/50 leading-[26px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Separator Line */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center h-full">
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
