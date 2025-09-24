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
  const { settings, updateSetting, isGenerating, setGenerating } = usePlaygroundSettings();
  return (
    <div className="min-h-screen bg-[#000319] flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex flex-col items-start justify-center overflow-clip p-[16px] sm:p-[24px] relative rounded-[12px] w-full max-w-[1920px] h-[800px] sm:h-[900px] lg:h-[1080px]">
        <div
          className="basis-0 bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[12px] shrink-0 w-full"
          style={{ gap: "5.68434e-14px" }}
        >
          {/* Header */}
          <Header onClose={onClose} />

          {/* Main Content Area */}
          <div className="basis-0 content-stretch flex flex-col lg:flex-row grow items-center justify-between min-h-px min-w-px relative rounded-bl-[12px] shrink-0 w-full">
            {/* Input Side */}
            <div className="backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.1)] h-full relative rounded-bl-[12px] shrink-0 w-full lg:w-[324px] mb-4 lg:mb-0">
              <div className="box-border content-stretch flex flex-col gap-[16px] h-full items-start overflow-clip p-[16px] relative w-full lg:w-[324px]">
                {/* Interior Design Title */}
                <div className="box-border content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[6px] shadow-[0px_8px_12px_0px_rgba(68,68,70,0.1),0px_2px_8px_-2px_rgba(68,68,70,0.05),0px_1px_4px_-1px_rgba(68,68,70,0.05)] shrink-0">
                  <div className="flex flex-col font-['Lexend:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-nowrap text-white">
                    <p className="leading-[normal] whitespace-pre">
                      Interior Design
                    </p>
                  </div>
                </div>

                       {/* Input Components */}
                       <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
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
                className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[12px]"
              />
            </div>

            {/* Right Side - Image Grid */}
            <ImageGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
