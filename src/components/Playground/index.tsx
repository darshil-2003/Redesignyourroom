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
      {/* Header */}
      <PlaygroundHeader />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Controls */}
        <div className="w-full lg:w-[324px] bg-[rgba(0,0,0,0.1)] backdrop-blur-[8px] border-r-0 lg:border-r border-[rgba(255,255,255,0.05)] p-4 lg:p-4 flex flex-col items-center lg:items-start">
          <div className="mb-4">
            <p className="text-white text-[16px] font-['Lexend']">
              Interior Design
            </p>
          </div>

          <div className="space-y-3 w-full max-w-[280px] lg:max-w-none">
            <UploadArea />
            <PromptInput playgroundState={playgroundState} />
            <DesignTypeSelector playgroundState={playgroundState} />
            <RoomSettings playgroundState={playgroundState} />
            <GeometrySlider playgroundState={playgroundState} />
            <GenerateButton playgroundState={playgroundState} />
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_100%)] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <ImageGrid />
        </div>
      </div>
    </div>
  );
};

export default Playground;
