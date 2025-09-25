import React from "react";
import { UsePlaygroundReturn } from "../../../../hooks";

interface GenerateButtonProps {
  playgroundState: UsePlaygroundReturn;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ playgroundState }) => {
  const { settings, isGenerating, setGenerating } = playgroundState;

  const handleGenerate = () => {
    setGenerating(true);

    // Log all current settings for debugging
    console.log("Generate button clicked with settings:", settings);

    // Simulate API call
    setTimeout(() => {
      setGenerating(false);
      console.log("Generation complete!");
    }, 3000);
  };

  return (
    <div
      className={`backdrop-blur-[15px] backdrop-filter box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[10px] relative rounded-[8px] shrink-0 w-full transition-colors duration-200 ${
        isGenerating
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-white cursor-pointer hover:bg-gray-100"
      }`}
      onClick={isGenerating ? undefined : handleGenerate}
    >
      <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">
          {isGenerating ? "Generating..." : "Generate"}
        </p>
      </div>
    </div>
  );
};

export default GenerateButton;
