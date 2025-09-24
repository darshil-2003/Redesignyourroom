"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#000319] min-h-[50px] flex items-start pt-8 md:pt-10 justify-center overflow-hidden w-full max-w-full">
      {/* Background Rays - Responsive sizes */}
      <div className="absolute -left-[50px] md:-left-[100px] -top-[50px] md:-top-[100px] w-[400px] md:w-[600px] lg:w-[1038px] h-[400px] md:h-[600px] lg:h-[1021px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -right-[50px] md:-right-[100px] -top-[50px] md:-top-[100px] w-[400px] md:w-[600px] lg:w-[1038px] h-[400px] md:h-[600px] lg:h-[1021px] bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 lg:gap-7 max-w-[806px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Trust Badge */}
        <div className="bg-[rgba(53,59,102,0.3)] border border-white/10 rounded-[24px] md:rounded-[32px] px-3 md:px-4 py-2 flex items-center gap-2">
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
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-normal font-['Lexend'] text-white/90 text-center leading-[40px] sm:leading-[48px] md:leading-[60px] lg:leading-[80px]">
          AI Interior Design
        </h1>

        {/* Description */}
        <p className="text-[#898999] text-[14px] sm:text-[15px] md:text-[16px] font-normal font-['Manrope'] text-center leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[806px]">
          Transform empty or furnished spaces into stunning interiors with
          Canva. Upload a picture of your room, choose a design style, and
          reimagine your interior space with AI.
        </p>
        <div className="mt-3 md:mt-4 lg:mt-5">
          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[rgba(53,59,102,1)] via-[rgba(39,44,75,1)] to-[rgba(25,28,48,1)] text-white text-[14px] sm:text-[15px] md:text-[16px] font-medium font-['Lexend'] px-4 md:px-6 py-2 md:py-3 rounded-[10px] md:rounded-[12px] hover:opacity-90 transition-opacity">
            Try AI For Interior Design
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
