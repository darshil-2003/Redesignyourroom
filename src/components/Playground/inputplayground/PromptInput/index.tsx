import React from "react";
import { UsePlaygroundReturn } from "../../../../hooks";

interface PromptInputProps {
  playgroundState: UsePlaygroundReturn;
}

const PromptInput: React.FC<PromptInputProps> = ({ playgroundState }) => {
  const { settings, updateSetting } = playgroundState;

  const handlePromptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateSetting("prompt", event.target.value);
  };

  return (
    <div className="backdrop-blur-[3px] backdrop-filter content-stretch flex flex-col gap-[8px] h-[180px] sm:h-[200px] lg:h-[220px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full max-w-[292px]">
      <div className="flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] justify-center leading-[0] relative shrink-0 text-[#f9fbfc] text-[14px] text-nowrap">
        <p className="leading-[26px] whitespace-pre">Additional Prompt</p>
      </div>
      <div className="basis-0 bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px p-[12px] relative rounded-[6px] shrink-0 w-full">
        <textarea
          value={settings.prompt}
          onChange={handlePromptChange}
          placeholder="Please describe your creative ideas for the image..."
          className="flex flex-col font-['Manrope:Regular',_sans-serif] font-normal h-[44px] justify-center leading-[0] relative shrink-0 text-[#5e6266] text-[16px] w-full bg-transparent border-none outline-none resize-none"
          style={{ lineHeight: "1.4" }}
        />
      </div>
    </div>
  );
};

export default PromptInput;
