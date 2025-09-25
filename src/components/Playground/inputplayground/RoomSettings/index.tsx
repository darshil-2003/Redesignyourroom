import React from "react";
import { PlusIcon, MinusIcon, RightArrowIcon } from "../../../../icons";
import { UsePlaygroundReturn } from "../../../../hooks";

interface RoomSettingsProps {
  playgroundState: UsePlaygroundReturn;
}

const RoomSettings: React.FC<RoomSettingsProps> = ({ playgroundState }) => {
  const { settings, updateSetting } = playgroundState;

  const roomTypes = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Office"];
  const roomStyles = [
    "Modern",
    "Traditional",
    "Minimalist",
    "Industrial",
    "Scandinavian",
  ];
  const styleOptions = ["Realistic", "Artistic", "Sketch", "Watercolor"];
  const imageCounts = [1, 2, 3, 4];

  return (
    <div className="content-stretch flex flex-col gap-px items-start relative rounded-[8px] shrink-0 w-full">
      {/* Room Type */}
      <div className="backdrop-blur-[3px] backdrop-filter content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-full">
        <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center p-[14px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Room Type</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">
                  {settings.roomType}
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
      </div>

      {/* Room Style */}
      <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center overflow-clip p-[14px] relative shrink-0 w-full">
        <div className=" content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Room Style</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">
                  {settings.roomStyle}
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
      </div>

      {/* Styles */}
      <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center overflow-clip p-[14px] relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
              <p className="leading-[20px] whitespace-pre">Styles</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
            <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
              <p className="leading-[20px] whitespace-pre">{settings.styles}</p>
            </div>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="relative size-[16px]">
                <RightArrowIcon className="size-[16px] text-[rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="backdrop-blur-[3px] backdrop-filter content-stretch flex flex-col gap-[9px] items-start overflow-clip relative shrink-0 w-full">
        <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center p-[14px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Images</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <button
                onClick={() =>
                  updateSetting("images", Math.max(1, settings.images - 1))
                }
                disabled={settings.images <= 1}
                className="flex items-center justify-center size-[24px] rounded-[4px] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <MinusIcon className="size-[16px] text-[rgba(255,255,255,0.6)]" />
              </button>
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-center text-nowrap min-w-[24px]">
                <p className="leading-[20px] whitespace-pre">
                  {settings.images}
                </p>
              </div>
              <button
                onClick={() =>
                  updateSetting("images", Math.min(4, settings.images + 1))
                }
                disabled={settings.images >= 4}
                className="flex items-center justify-center size-[24px] rounded-[4px] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <PlusIcon className="size-[16px] text-[rgba(255,255,255,0.6)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSettings;
