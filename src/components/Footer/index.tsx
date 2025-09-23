"use client";

import React from "react";
import { FooterLogoIcon } from "../../icons";

const Footer = () => {
  return (
    <footer className="bg-[#000319] border-t border-white/12 py-6 px-[222px]">
      <div className="max-w-[1476px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <FooterLogoIcon className="w-8 h-8" />
          <span className="text-white text-[26px] font-semibold font-['Epilogue'] leading-[30px]">
            Interior AI
          </span>
        </div>

        {/* Navigation and Copyright */}
        <div className="flex items-center justify-between">
          {/* Navigation */}
          <nav className="backdrop-blur-[22px] flex items-center gap-[75px] rounded-[999px]">
            <a
              href="#home"
              className="text-white text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <div className="backdrop-blur-[22px] rounded-[999px]">
            <p className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px]">
              Copyright 2025 © Interior AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
