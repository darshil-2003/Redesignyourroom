import React from "react";

interface ImageCardProps {
  imageUrl: string;
  hasUpscaler?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  hasUpscaler = false,
}) => {
  return (
    <div className="h-[200px] sm:h-[280px] lg:h-[346px] relative rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shrink-0 w-[280px] sm:w-[350px] lg:w-[420px]">
      {/* Main Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
        <img
          alt="Generated interior design"
          className="absolute h-full left-[-0.42%] max-w-none top-0 w-[123.7%] object-cover"
          src={imageUrl}
        />
      </div>

      {/* Image Upscaler Overlay (if enabled) */}
      {hasUpscaler && (
        <div className="h-[200px] sm:h-[280px] lg:h-[346px] overflow-clip relative w-[280px] sm:w-[350px] lg:w-[420px]">
          <div className="absolute h-[200px] sm:h-[280px] lg:h-[346px] left-[140px] sm:left-[175px] lg:left-[210px] pointer-events-none top-0 w-[140px] sm:w-[175px] lg:w-[210px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Upscaled version"
                className="absolute h-full left-[-124.07%] max-w-none top-0 w-[248.14%] object-cover"
                src={imageUrl}
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
        className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]"
      />
    </div>
  );
};

export default ImageCard;
