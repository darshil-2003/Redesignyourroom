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
      className={`h-[180px] lg:h-[200px] xl:h-[250px] 2xl:h-[346px] relative rounded-xl lg:rounded-2xl xl:rounded-3xl shrink-0 w-[200px] lg:w-[240px] xl:w-[280px] 2xl:w-[400px] group hover:scale-[1.02] transition-transform duration-300 animate-scale-in hover-lift ${className}`}
    >
      {/* Main Image Container - matching Figma design */}
      <img
        alt={alt}
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-xl lg:rounded-2xl xl:rounded-3xl size-full"
        src={src}
      />

      {/* Split View Container - matching Figma design */}
      <div className="h-full overflow-clip relative w-full rounded-xl lg:rounded-2xl xl:rounded-3xl">
        <div className="absolute h-full left-1/2 pointer-events-none top-0 w-1/2 rounded-xl lg:rounded-2xl xl:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 overflow-hidden rounded-xl lg:rounded-2xl xl:rounded-3xl">
            <img
              alt="Upscaled version"
              className="absolute h-[121.39%] left-[-100%] max-w-none top-[-10.69%] w-[200%] rounded-xl lg:rounded-2xl xl:rounded-3xl"
              src={upscaledSrc}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute border-[0px_0px_0px_2px] border-[rgba(255,255,255,0.5)] border-solid inset-0 rounded-xl lg:rounded-2xl xl:rounded-3xl"
          />
        </div>
      </div>

      {/* Border */}
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-xl lg:rounded-2xl xl:rounded-3xl group-hover:border-[rgba(255,255,255,0.2)] transition-colors duration-300"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl lg:rounded-2xl xl:rounded-3xl pointer-events-none" />
    </div>
  );
};

export default ImageCard;
