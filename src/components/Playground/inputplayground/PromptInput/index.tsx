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
    <div className="backdrop-blur-[3px] backdrop-filter flex flex-col gap-3 h-48 md:h-52 lg:h-56 items-start overflow-clip relative rounded-xl shrink-0 w-full animate-fade-in-up animate-delay-100 hover-lift">
      <div className="flex flex-col font-['Lexend'] font-medium justify-center leading-none relative shrink-0 text-white text-sm md:text-base text-nowrap">
        <p className="leading-none whitespace-pre">Additional Prompt</p>
      </div>
      <div className="bg-[rgba(255,255,255,0.08)] flex flex-col gap-3 grow items-start min-h-0 min-w-0 p-4 relative rounded-lg shrink-0 w-full">
        <textarea
          value={settings.prompt}
          onChange={handlePromptChange}
          placeholder="Please describe your creative ideas for the image..."
          className="flex flex-col font-['Manrope'] font-normal h-24 md:h-28 lg:h-32 justify-start leading-relaxed relative shrink-0 text-[#5e6266] text-sm md:text-base w-full bg-transparent border-none outline-none resize-none"
          style={{ lineHeight: "1.5" }}
        />
      </div>
    </div>
  );
};

export default PromptInput;
