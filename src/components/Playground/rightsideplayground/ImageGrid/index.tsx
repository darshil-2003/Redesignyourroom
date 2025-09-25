import React from "react";
import ImageCard from "../ImageCard";

const ImageGrid = () => {
  // Generated AI interior design images with their specific upscaler overlays
  const images = [
    {
      main: "/images/generated-1.png",
      upscaler: "/images/upscaler-overlay.png",
    },
    {
      main: "/images/generated-2.png",
      upscaler: "/images/upscaler-overlay-1.png",
    },
    {
      main: "/images/generated-3.png",
      upscaler: "/images/upscaler-overlay-2.png",
    },
    {
      main: "/images/generated-4.png",
      upscaler: "/images/upscaler-overlay-3.png",
    },
    {
      main: "/images/generated-5.png",
      upscaler: "/images/upscaler-overlay-4.png",
    },
    {
      main: "/images/generated-6.png",
      upscaler: "/images/upscaler-overlay-5.png",
    },
  ];

  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[38px] grow h-full items-center justify-center min-h-px min-w-px px-[8px] sm:px-[12px] md:px-[20px] lg:px-[40px] xl:px-[60px] py-0 relative shrink-0 overflow-y-auto">
      <div className="content-stretch flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[24px] items-center relative shrink-0 w-full">
        {/* First Row */}
        <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[24px] items-center justify-center relative shrink-0 w-full">
          <ImageCard
            imageUrl={images[0].main}
            hasUpscaler={true}
            upscalerOverlay={images[0].upscaler}
          />
          <ImageCard
            imageUrl={images[1].main}
            hasUpscaler={true}
            upscalerOverlay={images[1].upscaler}
          />
          <ImageCard
            imageUrl={images[2].main}
            hasUpscaler={true}
            upscalerOverlay={images[2].upscaler}
          />
        </div>

        {/* Second Row */}
        <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[24px] items-center justify-center relative shrink-0 w-full">
          <ImageCard
            imageUrl={images[3].main}
            hasUpscaler={true}
            upscalerOverlay={images[3].upscaler}
          />
          <ImageCard
            imageUrl={images[4].main}
            hasUpscaler={true}
            upscalerOverlay={images[4].upscaler}
          />
          <ImageCard
            imageUrl={images[5].main}
            hasUpscaler={true}
            upscalerOverlay={images[5].upscaler}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
