"use client";

import React from "react";
import { ArrowIcon } from "../../icons";

interface HeroProps {
  onOpenPlayground: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPlayground }) => {
  return (
    <section className="relative bg-[#000319] flex items-center justify-center overflow-hidden w-full max-w-full">
      {/* Background Rays - Responsive sizes */}
      <div className="absolute -left-[50px] md:-left-[100px] -top-[50px] md:-top-[100px] w-[400px] md:w-[600px] lg:w-[1038px] h-[400px] md:h-[600px] lg:h-[1021px] bg-gradient-to-br bg-[#000319] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -right-[50px] md:-right-[100px] -top-[50px] md:-top-[100px] w-[400px] md:w-[600px] lg:w-[1038px] h-[400px] md:h-[600px] lg:h-[1021px] bg-[#000319] rounded-full blur-3xl opacity-30"></div>

      <div className="container-responsive">
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto text-center top-20">
          {/* Trust Badge */}
          <div className="bg-[rgba(53,59,102,0.3)] border border-white/10 rounded-[24px] md:rounded-[32px] px-3 md:px-4 py-2 flex items-center gap-2 animate-fade-in-up animate-delay-100">
            <div className="flex -space-x-1 md:-space-x-2">
              <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border border-white/30 overflow-hidden">
                <img
                  src="/images/avatar-1.png"
                  alt="User 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border border-white/30 overflow-hidden">
                <img
                  src="/images/avatar-2.png"
                  alt="User 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border border-white/30 overflow-hidden">
                <img
                  src="/images/avatar-3.png"
                  alt="User 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border border-white/30 overflow-hidden">
                <img
                  src="/images/avatar-4.png"
                  alt="User 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-[#898999] text-[12px] sm:text-[14px] md:text-[16px] font-medium font-['Lexend']">
              1000+ Happy Peoples
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal font-['Lexend'] text-white/90 leading-tight animate-fade-in-up animate-delay-200">
            AI Interior Design
          </h1>

          {/* Description */}
          <p className="text-[#898999] text-base sm:text-lg md:text-xl font-normal font-['Manrope'] leading-relaxed max-w-2xl animate-fade-in-up animate-delay-300">
            Transform empty or furnished spaces into stunning interiors with AI.
            Upload a picture of your room, choose a design style, and reimagine
            your interior space instantly.
          </p>

          {/* CTA Button */}
          <button
            onClick={onOpenPlayground}
            className="bg-white text-black text-base sm:text-lg font-medium font-['Lexend'] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-scale-in animate-delay-400 hover-lift flex items-center gap-2"
          >
            Try AI For Interior Design
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
