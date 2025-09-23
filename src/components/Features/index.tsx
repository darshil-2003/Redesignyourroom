"use client";

import React from "react";
import { FeatureIcon } from "../../icons";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "AI-Powered Design Analysis",
      description:
        "Our advanced AI analyzes your room's dimensions, lighting, and existing elements to create realistic design transformations.",
      image: "/images/feature-1.png",
    },
    {
      id: 2,
      title: "Multiple Style Options",
      description:
        "Choose from dozens of curated design styles including modern, minimalist, bohemian, industrial, and more.",
      image: "/images/feature-2.png",
    },
    {
      id: 3,
      title: "Realistic Lighting & Proportions",
      description:
        "Our AI maintains accurate lighting conditions and furniture proportions for photorealistic results.",
      image: "/images/feature-1.png",
    },
    {
      id: 4,
      title: "Instant Preview",
      description:
        "See your room transformation in seconds. No waiting, no complicated software - just upload and preview.",
      image: "/images/feature-1.png",
    },
  ];

  return (
    <section className="bg-[#000319] py-32 px-[222px] relative">
      {/* Background Ray - Removed image, using gradient instead */}
      <div className="absolute -left-[100px] -top-[220px] w-[830px] h-[816px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-[1476px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-normal font-['Lexend'] text-white leading-[66px] mb-4">
            Everything You Need to Redesign
          </h2>
          <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px] max-w-[1070px] mx-auto">
            Our AI makes redesigning effortless by analyzing your room with
            precision and realism. Explore styles, colors, and furniture options
            to preview a space tailored perfectly to your taste.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-6">
          {/* First Row */}
          <div className="flex gap-6">
            <div className="bg-white/10 border border-white/10 rounded-[24px] p-3 flex gap-6 items-center w-[976px]">
              <div className="w-[476px] h-[296px] rounded-[20px] overflow-hidden">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div className="bg-white/10 border border-white/20 rounded-[20px] w-[60px] h-[60px] flex items-center justify-center">
                  <FeatureIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[28px] font-normal font-['Lexend'] text-white leading-[38px]">
                    {features[0].title}
                  </h3>
                  <p className="text-[16px] font-normal font-['Manrope'] text-white/50 leading-[24px] tracking-[0.32px]">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-[24px] p-6 flex flex-col gap-6 w-[476px]">
              <div className="bg-white/10 border border-white/20 rounded-[20px] w-[60px] h-[60px] flex items-center justify-center">
                <FeatureIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-normal font-['Lexend'] text-white leading-[38px]">
                  {features[1].title}
                </h3>
                <p className="text-[16px] font-normal font-['Manrope'] text-white/50 leading-[24px] tracking-[0.32px]">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-6">
            <div className="bg-white/10 border border-white/10 rounded-[24px] p-6 flex flex-col gap-6 w-[476px]">
              <div className="bg-white/10 border border-white/20 rounded-[20px] w-[60px] h-[60px] flex items-center justify-center">
                <FeatureIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] font-normal font-['Lexend'] text-white leading-[38px]">
                  {features[2].title}
                </h3>
                <p className="text-[16px] font-normal font-['Manrope'] text-white/50 leading-[24px] tracking-[0.32px]">
                  {features[2].description}
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-[24px] p-3 flex gap-6 items-center w-[976px]">
              <div className="w-[476px] h-[296px] rounded-[20px] overflow-hidden">
                <img
                  src={features[3].image}
                  alt={features[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div className="bg-white/10 border border-white/20 rounded-[20px] w-[60px] h-[60px] flex items-center justify-center">
                  <FeatureIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[28px] font-normal font-['Lexend'] text-white leading-[38px]">
                    {features[3].title}
                  </h3>
                  <p className="text-[16px] font-normal font-['Manrope'] text-white/50 leading-[24px] tracking-[0.32px]">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
