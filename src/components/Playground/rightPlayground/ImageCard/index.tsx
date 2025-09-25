import React from "react";

interface ImageCardProps {
  src: string;
  upscaledSrc: string;
  alt: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  upscaledSrc,
  alt,
  className = "",
}) => {
  return (
    <div
      className={`h-[200px] sm:h-[280px] lg:h-[346px] relative rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] shrink-0 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] group hover:scale-[1.02] transition-transform duration-300 ${className}`}
    >
      {/* Main Image Container - matching Figma design */}
      <img
        alt={alt}
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] size-full"
        src={src}
      />

      {/* Split View Container - matching Figma design */}
      <div className="h-full overflow-clip relative w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
        <div className="absolute h-full left-1/2 pointer-events-none top-0 w-1/2 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]">
            <img
              alt="Upscaled version"
              className="absolute h-[121.39%] left-[-100%] max-w-none top-[-10.69%] w-[200%] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]"
              src={upscaledSrc}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0px_2px] border-[rgba(255,255,255,0.5)] border-solid inset-0 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]"
          />
        </div>
      </div>

      {/* Border */}
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] group-hover:border-[rgba(255,255,255,0.2)] transition-colors duration-300"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] pointer-events-none" />
    </div>
  );
};

export default ImageCard;
