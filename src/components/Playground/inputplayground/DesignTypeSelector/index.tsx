import React from "react";

const DesignTypeSelector = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center p-[14px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Design Type</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
          <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Drawing</p>
          </div>
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
            <div className="flex-none rotate-[270deg]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTypeSelector;
