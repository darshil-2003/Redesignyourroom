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
    <div className="w-full flex justify-center overflow-hidden h-full">
      <div className="bg-[#000319] p-3 lg:p-4 xl:p-6 2xl:p-8 rounded-2xl lg:rounded-3xl flex gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 items-center justify-center w-full max-w-full">
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
