"use client";

import React, { useState } from "react";
import { LogoIcon } from "../../icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-[4.75px] bg-[rgba(7,6,16,0.2)] border-b border-[rgba(224,222,254,0)] px-4 sm:px-8 lg:px-[222px] py-4 sm:py-[22px] w-full max-w-full overflow-x-hidden">
      <div className="flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-8 h-8 sm:w-[42px] sm:h-[42px]" />
          <span className="text-white text-lg sm:text-xl lg:text-[26px] font-semibold font-['Epilogue'] leading-tight">
            Redesignyourroom
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex backdrop-blur-[22px] items-center gap-[75px] rounded-[999px]">
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
          <nav className="flex flex-col space-y-4 pt-4">
            <a
              href="#home"
              className="text-white text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button className="bg-gradient-to-r from-[rgba(53,59,102,1)] via-[rgba(39,44,75,1)] to-[rgba(25,28,48,1)] text-white text-[16px] font-medium font-['Lexend'] px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity w-fit">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
