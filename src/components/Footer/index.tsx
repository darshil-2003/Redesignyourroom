"use client";

import React from "react";
import { FooterLogoIcon } from "../../icons";

const Footer = () => {
  return (
    <footer className="bg-[#000319] border-t border-white/12 py-6 px-4 sm:px-6 md:px-12 lg:px-[222px]">
      <div className="max-w-[1476px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <FooterLogoIcon className="w-6 h-6 md:w-8 md:h-8" />
          <span className="text-white text-[20px] sm:text-[22px] md:text-[26px] font-semibold font-['Epilogue'] leading-[24px] sm:leading-[26px] md:leading-[30px]">
            Interior AI
          </span>
        </div>

        {/* Navigation and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Navigation */}
          <nav className="backdrop-blur-[22px] flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-[50px] lg:gap-[75px] rounded-[999px] px-4 py-2">
            <a
              href="#home"
              className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Lexend'] leading-[18px] sm:leading-[20px] md:leading-[22px] hover:text-white/80 transition-colors"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-white/60 text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Lexend'] leading-[18px] sm:leading-[20px] md:leading-[22px] hover:text-white/80 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-white/60 text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Lexend'] leading-[18px] sm:leading-[20px] md:leading-[22px] hover:text-white/80 transition-colors"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-white/60 text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Lexend'] leading-[18px] sm:leading-[20px] md:leading-[22px] hover:text-white/80 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <div className="backdrop-blur-[22px] rounded-[999px] px-4 py-2">
            <p className="text-white/60 text-[12px] sm:text-[14px] md:text-[18px] font-normal font-['Lexend'] leading-[16px] sm:leading-[18px] md:leading-[22px] text-center sm:text-left">
              Copyright 2025 © Interior AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
