"use client";

import React, { useState } from "react";
import { PlusIcon } from "../../icons";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#000319] py-32 px-[222px] relative">
      {/* Background Ray - Removed image, using gradient instead */}
      <div className="absolute -right-[100px] -top-[100px] w-[830px] h-[816px] bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-[800px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[52px] font-normal font-['Lexend'] text-white leading-[66px] mb-4">
            We've Got You Covered
          </h2>
          <p className="text-[18px] font-normal font-['Manrope'] text-white/50 leading-normal tracking-[0.36px] max-w-[1070px] mx-auto">
            Whether you're just starting out or exploring advanced features, our
            FAQs provide the guidance you need to design with confidence.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[rgba(228,232,239,0.1)] py-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-[16px] font-medium font-['SF_Pro'] text-white leading-[28px] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <PlusIcon
                    className={`w-5 h-5 text-white transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <div className="mt-4 pr-8">
                  <p className="text-[16px] font-normal font-['Manrope'] text-white/70 leading-[24px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
