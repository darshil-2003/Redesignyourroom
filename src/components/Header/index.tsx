"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogoIcon } from "../../icons";

interface HeaderProps {
  onOpenPlayground: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPlayground }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isPlaygroundPage = pathname === "/playground";

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // Handle anchor links
      if (isPlaygroundPage) {
        router.push(`/${href}`);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-[4.75px] bg-[rgba(7,6,16,0.2)] border-b border-[rgba(224,222,254,0)] w-full max-w-full overflow-x-hidden sticky top-0 z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3 sm:py-4 md:py-5 lg:py-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <LogoIcon className="w-8 h-8 sm:w-[42px] sm:h-[42px]" />
            <span className="text-white text-lg sm:text-xl lg:text-[26px] font-semibold font-['Epilogue'] leading-tight">
              Redesignyourroom
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden  lg:flex backdrop-blur-[22px] items-center gap-[75px] rounded-[999px]">
            <button
              onClick={() => handleNavigation(isPlaygroundPage ? "/" : "#home")}
              className="text-white text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() =>
                handleNavigation(
                  isPlaygroundPage ? "/#how-it-works" : "#how-it-works"
                )
              }
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() =>
                handleNavigation(isPlaygroundPage ? "/#features" : "#features")
              }
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() =>
                handleNavigation(isPlaygroundPage ? "/#faq" : "#faq")
              }
              className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors"
            >
              FAQ
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenPlayground}
              className="bg-gradient-to-r from-[rgba(53,59,102,1)] via-[rgba(39,44,75,1)] to-[rgba(25,28,48,1)] text-white text-[16px] font-medium font-['Lexend'] px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity"
            >
              {isPlaygroundPage ? "Back to Home" : "Get Started"}
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden  absolute left-0 w-full border-t border-white/10 bg-[rgba(7,6,16,0.3)] backdrop-blur-[4.75px] ">
          <div className="container-responsive">
            <nav className="flex flex-col space-y-4 py-4">
              <button
                onClick={() =>
                  handleNavigation(isPlaygroundPage ? "/" : "#home")
                }
                className="text-white text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() =>
                  handleNavigation(
                    isPlaygroundPage ? "/#how-it-works" : "#how-it-works"
                  )
                }
                className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() =>
                  handleNavigation(
                    isPlaygroundPage ? "/#features" : "#features"
                  )
                }
                className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() =>
                  handleNavigation(isPlaygroundPage ? "/#faq" : "#faq")
                }
                className="text-white/60 text-[18px] font-normal font-['Lexend'] leading-[22px] hover:text-white/80 transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={onOpenPlayground}
                className="bg-gradient-to-r from-[rgba(53,59,102,1)] via-[rgba(39,44,75,1)] to-[rgba(25,28,48,1)] text-white text-[16px] font-medium font-['Lexend'] px-6 py-3 rounded-[12px] hover:opacity-90 transition-opacity w-fit"
              >
                {isPlaygroundPage ? "Back to Home" : "Get Started"}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
