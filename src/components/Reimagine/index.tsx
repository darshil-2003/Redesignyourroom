"use client";

import React from "react";
import { HandlerIcon } from "../../icons";

const Reimagine = () => {
  const features = [
    "Upload your room photo and preview design styles instantly.",
    "Our AI keeps proportions and lighting accurate for realistic results.",
    "Choose from multiple design styles and color palettes.",
    "Preview changes before making any real-world modifications.",
  ];

  return (
    <section className="bg-[#000319] py-32 px-[222px]">
      <div className="max-w-[1476px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-normal font-['Lexend'] text-white leading-[66px] mb-4">
            Try Different Styles Risk-Free Before You Redecorate
          </h2>
          <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px] max-w-[1070px] mx-auto">
            Upload your room photo and preview design styles instantly. Our AI
            keeps proportions and lighting accurate, so you can pick colors,
            furniture, and layouts with confidence.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex gap-[100px] items-start">
          {/* Before/After Image */}
          <div className="w-[616px] h-[600px] rounded-[24px] overflow-hidden relative">
            <div className="w-full h-full relative">
              {/* Before Image (Left Side) */}
              <div className="absolute left-0 top-0 w-1/2 h-full">
                <img
                  src="/images/reimagine-before.png"
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* After Image (Right Side) */}
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <img
                  src="/images/reimagine-after.png"
                  alt="After"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider Handler */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <HandlerIcon className="w-[49px] h-[600px]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-[760px] mt-30">
            {/* Step Content */}
            <div className="flex flex-col gap-8">
              {/* Main Content */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-normal font-['Lexend'] text-white leading-[42px]">
                    Try Different Styles Risk-Free Before You Redecorate
                  </h3>
                  <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px]">
                    Upload your room photo and preview design styles instantly.
                    Our AI keeps proportions and lighting accurate, so you can
                    pick colors, furniture, and layouts with confidence.
                  </p>
                </div>

                {/* Feature List */}
                <div className="flex flex-col gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px]">
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
