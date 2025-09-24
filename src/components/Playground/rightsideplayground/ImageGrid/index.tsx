import React from "react";
import ImageCard from "../ImageCard";

const ImageGrid = () => {
  // Sample image URLs - replace with actual generated images
  const images = [
    "http://localhost:3845/assets/b10b643a496acfcde694a1dc393f41e1bde3f778.png",
    "http://localhost:3845/assets/eaab829bac87c1c9372148d281240fe3e12a198b.png",
    "http://localhost:3845/assets/8a69be43765bf2a907a2d1128ce3a788495b6c7f.png",
    "http://localhost:3845/assets/79f12964b6988996a5d7d661dd19ab7f5de5aaab.png",
    "http://localhost:3845/assets/5a618e438dc7c7f1b8ff004b68f3174b414f5f55.png",
    "http://localhost:3845/assets/a47ee61d3a4b4dea63207eb88896f16513e20171.png",
  ];

  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[20px] sm:gap-[38px] grow h-full items-center justify-center min-h-px min-w-px px-[20px] sm:px-[60px] lg:px-[120px] py-0 relative shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-center relative shrink-0 w-full">
        {/* First Row */}
        <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-center justify-center relative shrink-0 w-full">
          <ImageCard imageUrl={images[0]} hasUpscaler={true} />
          <ImageCard imageUrl={images[1]} hasUpscaler={true} />
          <ImageCard imageUrl={images[2]} hasUpscaler={true} />
        </div>

        {/* Second Row */}
        <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-center justify-center relative shrink-0 w-full">
          <ImageCard imageUrl={images[3]} hasUpscaler={true} />
          <ImageCard imageUrl={images[4]} hasUpscaler={true} />
          <ImageCard imageUrl={images[5]} hasUpscaler={true} />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
