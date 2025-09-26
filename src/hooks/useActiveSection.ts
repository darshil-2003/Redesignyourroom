"use client";

import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "how-it-works", "features", "faq"];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport
      let currentSection = "home";

      // Find the section that contains the middle of the viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if the middle of viewport is within this section
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = sectionId;
            break;
          }

          // If we're above the section, this is the current section
          if (scrollPosition < elementTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial check
    updateActiveSection();

    // Listen to scroll events
    const handleScroll = () => {
      updateActiveSection();
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
};
