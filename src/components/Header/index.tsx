"use client";

import React from "react";
import { LogoIcon } from "../../icons";

const Header = () => {
  return (
    <header className="backdrop-blur-[4.75px] bg-[rgba(7,6,16,0.2)] border-b border-[rgba(224,222,254,0)] px-[222px] py-[22px] w-full max-w-full overflow-x-hidden">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-[42px] h-[42px]" />
          <span className="text-white text-[26px] font-semibold font-['Epilogue'] leading-[30px]">
            Redesignyourroom
          </span>
        </div>

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

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[rgba(53,59,102,1)] via-[rgba(39,44,75,1)] to-[rgba(25,28,48,1)] text-white text-[16px] font-medium font-['Lexend'] px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
