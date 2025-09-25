import React from "react";

interface ImageCardProps {
  imageUrl: string;
  hasUpscaler?: boolean;
  upscalerOverlay?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  hasUpscaler = false,
  upscalerOverlay,
}) => {
  return (
    <div className="h-[150px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[346px] relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px] shrink-0 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[420px]">
      {/* Main Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px]">
        <img
          alt="Generated interior design"
          className="absolute h-full left-[-0.42%] max-w-none top-0 w-[123.7%] object-cover"
          src={imageUrl}
        />
      </div>

      {/* Image Upscaler Overlay (if enabled) */}
      {hasUpscaler && (
        <div className="h-[150px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[346px] overflow-clip relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[420px]">
          <div className="absolute h-[150px] sm:h-[200px] md:h-[240px] lg:h-[280px] xl:h-[346px] left-[100px] sm:left-[125px] md:left-[150px] lg:left-[175px] xl:left-[210px] pointer-events-none top-0 w-[100px] sm:w-[125px] md:w-[150px] lg:w-[175px] xl:w-[210px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Upscaled version"
                className="absolute h-full left-[-124.07%] max-w-none top-0 w-[248.14%] object-cover"
                src={upscalerOverlay || "/images/upscaler-overlay.png"}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute border-[0px_0px_0px_2px] border-[rgba(255,255,255,0.5)] border-solid inset-0"
            />
          </div>
        </div>
      )}

      {/* Border */}
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[20px] xl:rounded-[24px]"
      />
    </div>
  );
};

export default ImageCard;
