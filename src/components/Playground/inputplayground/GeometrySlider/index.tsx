import React, { useRef, useCallback, useState, useEffect } from "react";
import { UsePlaygroundReturn } from "../../../../hooks";

interface GeometrySliderProps {
  playgroundState: UsePlaygroundReturn;
}

const GeometrySlider: React.FC<GeometrySliderProps> = ({ playgroundState }) => {
  const { settings, updateSetting } = playgroundState;
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Use requestAnimationFrame for smoother updates
      animationFrameRef.current = requestAnimationFrame(() => {
        const rect = containerRef.current!.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        updateSetting("geometry", Math.round(percentage));
      });
    },
    [updateSetting]
  );

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

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="backdrop-blur-[3px] backdrop-filter content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[24px] items-center p-[14px] relative rounded-[8px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Geometry</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">
                  {settings.geometry}%
                </p>
              </div>
            </div>
          </div>
          <div
            ref={containerRef}
            className="h-[14px] relative shrink-0 w-full max-w-[264px] select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
              cursor: "pointer",
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-full h-[6px] top-[4px]"></div>
              <div
                className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-white rounded-full h-[6px] top-[4px]"
                style={{
                  width: `${settings.geometry}%`,
                  transition: isDragging ? "none" : "width 0.1s ease-out",
                }}
              ></div>
              <div
                className="absolute bg-white rounded-full w-[14px] h-[14px] top-0 shadow-lg hover:shadow-xl hover:scale-110 pointer-events-none"
                style={{
                  left: `calc(${settings.geometry}% - 7px)`,
                  transition: isDragging
                    ? "none"
                    : "left 0.1s ease-out, transform 0.1s ease-out, box-shadow 0.1s ease-out",
                  cursor: "pointer",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometrySlider;
