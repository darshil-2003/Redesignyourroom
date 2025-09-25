"use client";

import React from "react";
import { FooterLogoIcon } from "../../icons";

const Footer = () => {
  return (
    <footer className="bg-[#000319] border-t border-white/12 py-8 md:py-12">
      <div className="container-responsive">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <FooterLogoIcon className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-white text-2xl md:text-3xl font-semibold font-['Epilogue']">
            Interior AI
          </span>
        </div>

        {/* Navigation and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Navigation */}
          <nav className="backdrop-blur-[22px] flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 rounded-full px-6 py-3">
            <a
              href="#home"
              className="text-white text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-white/60 text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-white/60 text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-white/60 text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <div className="backdrop-blur-[22px] rounded-full px-6 py-3">
            <p className="text-white/60 text-sm md:text-base font-normal font-['Lexend'] text-center md:text-left">
              Copyright 2025 © Interior AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
