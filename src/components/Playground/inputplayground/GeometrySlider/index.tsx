import React from "react";

const GeometrySlider = () => {
  return (
    <div className="backdrop-blur-[3px] backdrop-filter content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-[292px]">
      <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[24px] items-center p-[14px] relative rounded-[8px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Geometry</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">45%</p>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="h-[14px] relative shrink-0 w-[264px]">
            <div className="relative w-full h-full">
              {/* Background Track */}
              <div className="absolute top-[4px] left-0 w-full h-[6px] bg-[rgba(255,255,255,0.1)] rounded-full"></div>
              {/* Progress Track */}
              <div className="absolute top-[4px] left-0 w-[106px] h-[6px] bg-white rounded-full"></div>
              {/* Thumb */}
              <div className="absolute top-[0px] left-[93.5px] w-[14px] h-[14px] bg-white rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometrySlider;
