"use client";

import React from "react";
import { useIntersectionObserver } from "../../hooks";
import { ImageUploadIcon } from "../../icons";

const Features = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

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
      image: "/images/feature-2.png",
    },
  ];

  return (
    <section
      ref={ref}
      className={`bg-[#000319] section-responsive relative transition-all duration-1000  ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Ray - Responsive sizes */}
      <div className="absolute -left-[50px] md:-left-[100px] -top-[110px] md:-top-[220px] w-[400px] md:w-[600px] lg:w-[830px] h-[400px] md:h-[600px] lg:h-[816px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30 b" />

      <div className="container-responsive relative z-10 -top-20 ">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Lexend'] text-white leading-tight mb-6 animate-fade-in-up">
            Everything You Need to Redesign
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal font-['Manrope'] text-white/50 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            Our AI makes redesigning effortless by analyzing your room with
            precision and realism. Explore styles, colors, and furniture options
            to preview a space tailored perfectly to your taste.
          </p>
        </div>

        {/* Features Grid - Responsive */}
        <div className="flex flex-col gap-6 md:gap-8 px-[222px]">
          {/* Feature 1 */}
          <div className="flex flex-row gap-6 md:gap-8 ">
            <div className="bg-white/10 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-center   duration-300 animate-fade-in-left animate-delay-300  ">
              <div className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-full h-full object-fit"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                <div className="bg-white/10 border border-white/20 rounded-xl md:rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <ImageUploadIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-['Lexend'] text-white leading-tight">
                    {features[0].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal font-['Manrope'] text-white/50 leading-relaxed">
                    {features[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-4 md:gap-6 group hover:bg-white/15 transition-all duration-300 animate-fade-in-right animate-delay-400 hover-lift lg:w-[800px]">
              <div className="bg-white/10 border border-white/20 rounded-xl md:rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <ImageUploadIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-['Lexend'] text-white leading-tight">
                  {features[1].title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal font-['Manrope'] text-white/50 leading-relaxed">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 md:gap-8">
            {/* Feature 3 */}
            <div className="bg-white/10 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-4 md:gap-6 group hover:bg-white/15 transition-all duration-300 animate-fade-in-left animate-delay-500 hover-lift lg:w-[476px]">
              <div className="bg-white/10 border border-white/20 rounded-xl md:rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                <ImageUploadIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-['Lexend'] text-white leading-tight">
                  {features[2].title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal font-['Manrope'] text-white/50 leading-relaxed">
                  {features[2].description}
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-center group hover:bg-white/15 transition-all duration-300 animate-fade-in-right animate-delay-500 hover-lift">
              <div className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src={features[3].image}
                  alt={features[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                <div className="bg-white/10 border border-white/20 rounded-xl md:rounded-2xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <ImageUploadIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-normal font-['Lexend'] text-white leading-tight">
                    {features[3].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-normal font-['Manrope'] text-white/50 leading-relaxed">
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
