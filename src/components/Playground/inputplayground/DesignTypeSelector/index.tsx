import React from "react";
import { RightArrowIcon } from "../../../../icons";
import { UsePlaygroundReturn } from "../../../../hooks";

interface DesignTypeSelectorProps {
  playgroundState: UsePlaygroundReturn;
}

const DesignTypeSelector: React.FC<DesignTypeSelectorProps> = ({
  playgroundState,
}) => {
  const { settings } = playgroundState;

  const designTypes = ["Drawing", "Photo", "Sketch"];

  return (
    <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center p-[14px] relative rounded-[8px] shrink-0 w-full max-w-[292px]">
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
            <div className="relative size-[16px]">
              <RightArrowIcon className="size-[16px] text-[rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTypeSelector;
