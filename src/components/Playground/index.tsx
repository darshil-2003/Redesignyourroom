import React from "react";

// Input Side Components
import Header from "./inputplayground/Header";
import UploadArea from "./inputplayground/UploadArea";
import PromptInput from "./inputplayground/PromptInput";
import DesignTypeSelector from "./inputplayground/DesignTypeSelector";
import RoomSettings from "./inputplayground/RoomSettings";
import GeometrySlider from "./inputplayground/GeometrySlider";
import GenerateButton from "./inputplayground/GenerateButton";

// Right Side Components
import ImageGrid from "./rightsideplayground/ImageGrid";

// Hooks
import { usePlaygroundSettings } from "../../hooks";

interface PlaygroundProps {
  onClose: () => void;
}

const Playground: React.FC<PlaygroundProps> = ({ onClose }) => {
  const { settings, updateSetting, isGenerating, setGenerating } =
    usePlaygroundSettings();
  return (
    <div className="min-h-screen bg-[#000319] flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex flex-col items-start justify-center overflow-clip p-[12px] sm:p-[16px] md:p-[20px] lg:p-[24px] relative rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] w-full max-w-[1920px] h-[100vh] sm:h-[95vh] md:h-[90vh] lg:h-[1080px]">
        <div
          className="basis-0 bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] shrink-0 w-full"
          style={{ gap: "5.68434e-14px" }}
        >
          {/* Header */}
          <Header onClose={onClose} />

          {/* Main Content Area */}
          <div className="basis-0 content-stretch flex flex-col xl:flex-row grow items-start justify-between min-h-px min-w-px relative rounded-bl-[8px] sm:rounded-bl-[10px] lg:rounded-bl-[12px] shrink-0 w-full overflow-y-auto">
            {/* Input Side */}
            <div className="backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.1)] h-full relative rounded-bl-[8px] sm:rounded-bl-[10px] lg:rounded-bl-[12px] shrink-0 w-full xl:w-[324px] mb-4 xl:mb-0 xl:mr-4">
              <div className="box-border content-stretch flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] h-full items-start overflow-clip p-[12px] sm:p-[14px] md:p-[16px] relative w-full xl:w-[324px]">
                {/* Interior Design Title */}
                <div className="box-border content-stretch flex gap-[4px] sm:gap-[6px] items-center overflow-clip relative rounded-[4px] sm:rounded-[6px] shadow-[0px_8px_12px_0px_rgba(68,68,70,0.1),0px_2px_8px_-2px_rgba(68,68,70,0.05),0px_1px_4px_-1px_rgba(68,68,70,0.05)] shrink-0">
                  <div className="flex flex-col font-['Lexend:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[normal] whitespace-pre">
                      Interior Design
                    </p>
                  </div>
                </div>

                {/* Input Components */}
                <div className="basis-0 content-stretch flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
                  <UploadArea />
                  <PromptInput />
                  <DesignTypeSelector />
                  <RoomSettings />
                  <GeometrySlider />
                </div>

                {/* Generate Button */}
                <GenerateButton />
              </div>
              <div
                aria-hidden="true"
                className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[8px] sm:rounded-bl-[10px] lg:rounded-bl-[12px]"
              />
            </div>

            {/* Right Side - Image Grid */}
            <div className="flex-1 w-full xl:w-auto">
              <ImageGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
