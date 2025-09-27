import React, { useState } from "react";
import { RightArrowIcon } from "../../../../icons";
import { UsePlaygroundReturn } from "../../../../hooks";

interface DesignTypeSelectorProps {
  playgroundState: UsePlaygroundReturn;
}

const DesignTypeSelector: React.FC<DesignTypeSelectorProps> = ({
  playgroundState,
}) => {
  const { settings, updateSetting, openDropdown, setOpenDropdown } =
    playgroundState;

  const designTypes = ["Drawing", "Photo", "Sketch"];

  const handleToggle = () => {
    setOpenDropdown(openDropdown === "designType" ? null : "designType");
  };

  const handleSelect = (designType: string) => {
    updateSetting("designType", designType);
    setOpenDropdown(null);
  };

  return (
    <div className="relative">
      <div
        className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center p-[14px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200"
        onClick={handleToggle}
      >
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
              <p className="leading-[20px] whitespace-pre">Design Type</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
            <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
              <p className="leading-[20px] whitespace-pre">
                {settings.designType}
              </p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div
                className={`relative size-[16px] transition-transform duration-200 ${
                  openDropdown === "designType" ? "rotate-90" : ""
                }`}
              >
                <RightArrowIcon className="size-[16px] text-[rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {openDropdown === "designType" && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#000319] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-[8px] z-50">
          {designTypes.map((designType) => (
            <button
              key={designType}
              onClick={() => handleSelect(designType)}
              className={`w-full px-4 py-3 text-left text-[14px] font-['Manrope:Medium',_sans-serif] font-medium transition-colors duration-200 first:rounded-t-[8px] last:rounded-b-[8px] ${
                settings.designType === designType
                  ? "text-white bg-white/10"
                  : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
              }`}
            >
              {designType}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesignTypeSelector;
