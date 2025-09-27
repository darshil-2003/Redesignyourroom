import React from "react";
import PlaygroundHeader from "./inputPlayground/Header";
import UploadArea from "./inputPlayground/UploadArea";
import PromptInput from "./inputPlayground/PromptInput";
import RoomSettings from "./inputPlayground/RoomSettings";
import DesignTypeSelector from "./inputPlayground/DesignTypeSelector";
import GeometrySlider from "./inputPlayground/GeometrySlider";
import GenerateButton from "./inputPlayground/GenerateButton";
import ImageGrid from "./rightPlayground/ImageGrid";
import { usePlayground } from "../../hooks";

interface PlaygroundProps {
  onOpenPlayground?: () => void;
}

const Playground: React.FC<PlaygroundProps> = ({ onOpenPlayground }) => {
  const playgroundState = usePlayground();
  return (
    <div className="min-h-screen bg-[#000319] flex flex-col">
      {/* Fixed Header */}
      <PlaygroundHeader />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row pt-16 md:pt-18 pb-20">
        {/* Left Side - Controls with Scrollable Content */}
        <div
          className="w-full lg:w-full xl:w-full 2xl:w-80 lg:h-[calc(100vh-80px)] bg-[rgba(0,0,0,0.1)] backdrop-blur-[8px] border-r-0 2xl:border-r border-[rgba(255,255,255,0.05)] flex flex-col"
          id="inputPlayground"
        >
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 h-screen">
            <div className="mb-6">
              <p className="text-white text-lg md:text-xl font-['Lexend'] font-medium">
                Redesign your room
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 w-full">
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-[14px] font-['Lexend'] font-medium">
                  Upload your Room Image
                </h3>
                <UploadArea />
              </div>
              <PromptInput playgroundState={playgroundState} />
              <DesignTypeSelector playgroundState={playgroundState} />
              <RoomSettings playgroundState={playgroundState} />
              <GeometrySlider playgroundState={playgroundState} />
            </div>
          </div>
        </div>

        {/* Right Side - Images - Hidden on mobile, tablet, and 1024px-1584px range */}
        <div className="hidden lg:hidden xl:hidden 2xl:flex flex-1 items-center justify-center p-8 bg-[#000319]">
          <ImageGrid />
        </div>
      </div>

      {/* Fixed Generate Button at Bottom of Screen */}
      <div className="fixed bottom-0 left-0 w-full lg:w-full xl:w-full 2xl:w-80 bg-[rgba(0,0,0,0.1)] backdrop-blur-[8px] border-t border-[rgba(255,255,255,0.05)] p-4 md:p-6 z-40">
        <div className="w-full">
          <GenerateButton playgroundState={playgroundState} />
        </div>
      </div>
    </div>
  );
};

export default Playground;
