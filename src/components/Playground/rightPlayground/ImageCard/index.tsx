import React, { useRef, useCallback, useState, useEffect } from "react";
import { HandlerIcon } from "../../../../icons";

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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add event listeners for mouse and touch events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <div
      ref={containerRef}
      className={`h-[180px] lg:h-[200px] xl:h-[250px] 2xl:h-[346px] relative rounded-xl lg:rounded-2xl xl:rounded-3xl shrink-0 w-[200px] lg:w-[240px] xl:w-[280px] 2xl:w-[400px] animate-scale-in select-none ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{
        cursor: isDragging ? "col-resize" : "pointer",
      }}
    >
      <div className="w-full h-full relative">
        {/* Before Image (Full Background) */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            alt={alt}
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-xl lg:rounded-2xl xl:rounded-3xl size-full"
            src={src}
          />
        </div>

        {/* After Image (Clipped to slider position) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: isDragging ? "none" : "clip-path 0.1s ease-out",
          }}
        >
          <img
            alt="Upscaled version"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-xl lg:rounded-2xl xl:rounded-3xl size-full"
            src={upscaledSrc}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
          style={{
            left: `${sliderPosition}%`,
            transition: isDragging ? "none" : "left 0.1s ease-out",
          }}
        />

        {/* Slider Handler */}
        <div
          className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-col-resize ${
            isDragging ? "scale-110" : "scale-100"
          }`}
          style={{
            left: `${sliderPosition}%`,
            transition: isDragging
              ? "none"
              : "left 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          <HandlerIcon className="w-[20px] sm:w-[22px] md:w-[27px] lg:w-[36px] h-full" />
        </div>

        {/* Clickable overlay for better UX */}
        <div
          className="absolute inset-0 z-5 cursor-col-resize"
          onClick={(e) => {
            if (!isDragging) {
              // Click to position slider
              const rect = containerRef.current?.getBoundingClientRect();
              if (rect) {
                const x = e.clientX - rect.left;
                const percentage = Math.max(
                  0,
                  Math.min(100, (x / rect.width) * 100)
                );
                setSliderPosition(percentage);
              }
            }
          }}
        />

        {/* Border */}
        <div
          aria-hidden="true"
          className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-xl lg:rounded-2xl xl:rounded-3xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 rounded-xl lg:rounded-2xl xl:rounded-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default ImageCard;
