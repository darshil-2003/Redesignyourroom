import React from "react";
import ImageCard from "../ImageCard";

const ImageGrid: React.FC = () => {
  // Figma design images - matching the exact design
  const images = [
    {
      src: "/images/figma-generated-1.png",
      upscaledSrc: "/images/figma-upscaled-1.png",
      alt: "Generated interior design 1",
    },
    {
      src: "/images/figma-generated-2.png",
      upscaledSrc: "/images/figma-upscaled-2.png",
      alt: "Generated interior design 2",
    },
    {
      src: "/images/figma-generated-3.png",
      upscaledSrc: "/images/figma-upscaled-3.png",
      alt: "Generated interior design 3",
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-[#000319] p-[8px] sm:p-[12px] rounded-[16px] sm:rounded-[24px] content-stretch flex flex-col sm:flex-row gap-[12px] sm:gap-[24px] items-center justify-center relative shrink-0 w-full">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            upscaledSrc={image.upscaledSrc}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
