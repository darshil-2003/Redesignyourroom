"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[#000319] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Rays */}
      <div
        className="absolute -left-[100px] -top-[100px] w-[1038px] h-[1021px] bg-cover bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/ray-bg-1.png')" }}
      ></div>
      <div
        className="absolute -right-[100px] -top-[100px] w-[1038px] h-[1021px] bg-cover bg-no-repeat opacity-30 transform scale-x-[-1]"
        style={{ backgroundImage: "url('/images/ray-bg-1.png')" }}
      ></div>

      <div className="relative z-10 flex flex-col items-center gap-10 max-w-[806px] mx-auto px-4">
        {/* Trust Badge */}
        <div className="bg-[rgba(53,59,102,0.3)] border border-white/10 rounded-[32px] px-4 py-2 flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full border border-white/30 overflow-hidden">
              <img
                src="/images/avatar-1.png"
                alt="User 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border border-white/30 overflow-hidden">
              <img
                src="/images/avatar-2.png"
                alt="User 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border border-white/30 overflow-hidden">
              <img
                src="/images/avatar-3.png"
                alt="User 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border border-white/30 overflow-hidden">
              <img
                src="/images/avatar-4.png"
                alt="User 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-[#898999] text-[16px] font-medium font-['Lexend']">
            1000+ Happy Peoples
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-[64px] font-normal font-['Lexend'] text-white/90 text-center leading-[80px]">
          AI Interior Design
        </h1>

        {/* Description */}
        <p className="text-[#898999] text-[16px] font-normal font-['Manrope'] text-center leading-[28px] max-w-[806px]">
          Transform empty or furnished spaces into stunning interiors with
          Canva. Upload a picture of your room, choose a design style, and
          reimagine your interior space with AI.
        </p>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[rgba(53,59,102,1)] via-[rgba(39,44,75,1)] to-[rgba(25,28,48,1)] text-white text-[16px] font-medium font-['Lexend'] px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
          Try AI For Interior Design
        </button>
      </div>
    </section>
  );
};

export default Hero;
