"use client";

import React from "react";
import { LogoIcon } from "../../icons";
import { useActiveSection } from "../../hooks/useActiveSection";

const Footer = () => {
  const activeSection = useActiveSection();

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  };

  return (
    <footer className="bg-[#000319] border-t border-white/12 flex flex-col items-start gap-8 self-stretch py-6 px-4 sm:px-8 md:px-16 lg:px-[222px]">
      <div className="w-full">
        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start gap-[8px] mb-4 sm:mb-6">
          <LogoIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="text-white text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold font-['Epilogue']">
            Redesignyourroom
          </span>
        </div>

        {/* Navigation and Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          {/* Navigation */}
          <nav className="backdrop-blur-[22px] flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <button
              onClick={() => handleNavigation("#home")}
              className={`text-sm sm:text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors ${
                activeSection === "home" ? "text-white" : "text-white/60"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("#how-it-works")}
              className={`text-sm sm:text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors ${
                activeSection === "how-it-works"
                  ? "text-white"
                  : "text-white/60"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavigation("#features")}
              className={`text-sm sm:text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors ${
                activeSection === "features" ? "text-white" : "text-white/60"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("#faq")}
              className={`text-sm sm:text-base md:text-lg font-normal font-['Lexend'] hover:text-white/80 transition-colors ${
                activeSection === "faq" ? "text-white" : "text-white/60"
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Copyright */}
          <div className="backdrop-blur-[22px] rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <p className="text-white/60 text-xs sm:text-sm md:text-base font-normal font-['Lexend'] text-center lg:text-left">
              Copyright 2025 © Interior AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
