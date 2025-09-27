import React from "react";

const Inspirations = () => {
  const inspirationImages = [
    {
      id: "inspiration-1",
      src: "/images/inspiration-1.png",
      alt: "Modern living room",
    },
    {
      id: "inspiration-2",
      src: "/images/inspiration-2.png",
      alt: "Cozy bedroom",
    },
    {
      id: "inspiration-3",
      src: "/images/inspiration-3.png",
      alt: "Contemporary kitchen",
    },
    {
      id: "inspiration-4",
      src: "/images/inspiration-4.png",
      alt: "Elegant dining room",
    },
    {
      id: "inspiration-5",
      src: "/images/inspiration-5.png",
      alt: "Minimalist office",
    },
    {
      id: "inspiration-6",
      src: "/images/inspiration-6.png",
      alt: "Luxury bathroom",
    },
    {
      id: "inspiration-7",
      src: "/images/inspiration-7.png",
      alt: "Scandinavian living room",
    },
    {
      id: "inspiration-8",
      src: "/images/inspiration-8.png",
      alt: "Industrial loft",
    },
    {
      id: "inspiration-9",
      src: "/images/inspiration-9.png",
      alt: "Bohemian bedroom",
    },
    {
      id: "inspiration-10",
      src: "/images/inspiration-10.png",
      alt: "Traditional kitchen",
    },
    {
      id: "inspiration-11",
      src: "/images/inspiration-11.png",
      alt: "Spa-like bathroom",
    },
  ];

  // Create 12-loop system like index.tsx
  const row1Images = inspirationImages; // Row1: All 11 images
  const row2Images = [
    ...inspirationImages.slice(6, 11),
    ...inspirationImages.slice(0, 6),
  ]; // Row2: 7-11, then 1-6 (offset by 6)

  return (
    <section className="bg-[#000319] py-8 md:py-17 ">
      {/* Header */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[222px] mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <div className="text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[52px] font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
            Design Ideas Made Simple
          </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#B8BCC8] max-w-[1150px] mx-auto leading-relaxed">
            Explore curated design styles, color palettes, and layouts tailored
            to your room. Get inspired with ready-to-use concepts you can
            preview instantly.
          </p>
        </div>
      </div>

      {/* Full Width Flowing Image Gallery - 12-Loop System */}
      <div className="w-full overflow-hidden max-w-full">
        {/* First Row - Left to Right scroll */}
        <div className="relative w-full overflow-hidden mb-3 sm:mb-4 md:mb-6">
          <div
            className="flex gap-2 sm:gap-4 md:gap-6 animate-scroll-left will-change-transform"
            style={{ width: "600%" }}
          >
            {/* Original Set - Loops 1, 2, 3 */}
            {row1Images.map((image, index) => (
              <div
                key={`left-original-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-original-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-original-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

            {/* Duplicate Set - Loops 4, 5, 6 */}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate-1-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

            {/* Second Duplicate Set - Loops 7, 8, 9 */}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate2-1-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate2-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate2-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

            {/* Third Duplicate Set - Loops 10, 11, 12 */}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate3-1-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate3-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row1Images.map((image, index) => (
              <div
                key={`left-duplicate3-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left scroll */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-2 sm:gap-4 md:gap-6 animate-scroll-right will-change-transform"
            style={{ width: "600%" }}
          >
            {/* Third Duplicate Set - Loops 12, 11, 10 (offset by 6 to avoid same image) */}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate3-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate3-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate3-1-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

            {/* Second Duplicate Set - Loops 9, 8, 7 (offset by 6 to avoid same image) */}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate2-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate2-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate2-1-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

            {/* Duplicate Set - Loops 6, 5, 4 (offset by 6 to avoid same image) */}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-duplicate-1-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}

            {/* Original Set - Loops 3, 2, 1 (offset by 6 to avoid same image) */}
            {row2Images.map((image, index) => (
              <div
                key={`right-original-3-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-original-2-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            {row2Images.map((image, index) => (
              <div
                key={`right-original-${index}`}
                className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-[120px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[320px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(206,212,252,0.08)] hover:border-white/20 transition-colors cursor-pointer group relative"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
