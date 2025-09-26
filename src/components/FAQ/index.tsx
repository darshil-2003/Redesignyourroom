"use client";

import React from "react";
import { DropDownIcon, FAQUpArrowIcon } from "../../icons";
import { useAccordion } from "../../hooks";

const FAQ = () => {
  const { openItems, toggleItem, isOpen } = useAccordion(8, {
    allowMultiple: true,
  });

  const faqs = [
    {
      question: "How does the AI interior design work?",
      answer:
        "Our AI analyzes your room photo, identifies key elements like furniture, lighting, and dimensions, then applies different design styles while maintaining realistic proportions and lighting conditions.",
    },
    {
      question: "What types of rooms can I redesign?",
      answer:
        "You can redesign any room including living rooms, bedrooms, kitchens, bathrooms, offices, and outdoor spaces. The AI works best with clear, well-lit photos of your space.",
    },
    {
      question: "How accurate are the AI-generated designs?",
      answer:
        "Our AI maintains realistic proportions, lighting, and spatial relationships. While the designs are stylized, they provide a realistic preview of how your space could look with different styles and furniture arrangements.",
    },
    {
      question: "Can I customize the design styles?",
      answer:
        "Yes! You can choose from multiple curated design styles and our AI will apply them to your space. We're constantly adding new styles and options based on current design trends.",
    },
    {
      question: "Is there a limit to how many designs I can generate?",
      answer:
        "With our free plan, you can generate up to 5 designs per month. Premium plans offer unlimited generations and access to exclusive design styles and features.",
    },
    {
      question: "How long does it take to generate a design?",
      answer:
        "Most designs are generated within 30-60 seconds. Complex rooms or high-resolution images may take slightly longer, but you'll typically see results in under a minute.",
    },
    {
      question: "Can I save and share my designs?",
      answer:
        "Absolutely! You can save your favorite designs to your account and share them with family, friends, or interior designers. You can also download high-resolution images for printing.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "If you're not happy with a design, you can try different styles or upload a new photo. We also offer a satisfaction guarantee - if you're not satisfied, we'll work with you to improve the results.",
    },
  ];

  return (
    <section className="bg-[#000319] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-[222px] relative">
      {/* Background Ray - Removed image, using gradient instead */}
      <div className="absolute -right-[50px] md:-right-[100px] -top-[50px] md:-top-[100px] w-[400px] md:w-[600px] lg:w-[830px] h-[400px] md:h-[600px] lg:h-[816px] bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-[800px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-normal font-['SF Pro'] text-white leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[66px] mb-4">
            We've Got You Covered
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.28px] sm:tracking-[0.32px] md:tracking-[0.36px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1070px] mx-auto">
            Whether you're just starting out or exploring advanced features, our
            FAQs provide the guidance you need to design with confidence.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[rgba(228,232,239,0.1)] overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left hover:opacity-80 transition-opacity duration-200 py-4 md:py-6"
              >
                <h3 className="text-white font-['SF_Pro'] text-[16px] font-medium leading-[28px] pr-2 sm:pr-4">
                  {faq.question}
                </h3>
                <div
                  className="flex-shrink-0 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isOpen(index)
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                >
                  <DropDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </button>

              {/* Content with proper accordion animation */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-0 pb-4 md:pb-6 pr-4 sm:pr-6 md:pr-8">
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] font-normal font-['Manrope'] text-white/70 leading-[20px] sm:leading-[22px] md:leading-[24px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
