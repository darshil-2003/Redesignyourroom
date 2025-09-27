import React, { useState } from "react";
import { PlusIcon, MinusIcon, RightArrowIcon } from "../../../../icons";
import { UsePlaygroundReturn } from "../../../../hooks";

interface RoomSettingsProps {
  playgroundState: UsePlaygroundReturn;
}

const RoomSettings: React.FC<RoomSettingsProps> = ({ playgroundState }) => {
  const { settings, updateSetting, openDropdown, setOpenDropdown } =
    playgroundState;

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

  const handleToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelect = (setting: string, value: string) => {
    updateSetting(setting as keyof typeof settings, value);
    setOpenDropdown(null);
  };

  return (
    <div className="flex flex-col gap-px items-start relative rounded-[8px] w-full">
      {/* Room Type */}
      <div className="relative w-full">
        <div
          className="bg-[rgba(255,255,255,0.08)] box-border flex flex-col gap-[20px] items-center overflow-clip p-[14px] relative rounded-tl-[8px] rounded-tr-[8px] w-full cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200"
          onClick={() => handleToggle("roomType")}
        >
          <div className="flex items-center justify-between relative w-full">
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
                <div
                  className={`relative size-[16px] transition-transform duration-200 ${
                    openDropdown === "roomType" ? "rotate-90" : ""
                  }`}
                >
                  <RightArrowIcon className="size-[16px] text-[rgba(255,255,255,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Type Dropdown */}
        {openDropdown === "roomType" && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#000319] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-[8px] z-50">
            {roomTypes.map((roomType) => (
              <button
                key={roomType}
                onClick={() => handleSelect("roomType", roomType)}
                className={`w-full px-4 py-3 text-left text-[14px] font-['Manrope:Medium',_sans-serif] font-medium transition-colors duration-200 first:rounded-t-[8px] last:rounded-b-[8px] ${
                  settings.roomType === roomType
                    ? "text-white bg-white/5"
                    : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {roomType}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Room Style */}
      <div className="relative w-full">
        <div
          className="bg-[rgba(255,255,255,0.08)] box-border flex flex-col gap-[20px] items-center overflow-clip p-[14px] relative w-full cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200"
          onClick={() => handleToggle("roomStyle")}
        >
          <div className="flex flex-col gap-[9px] items-start relative w-full">
            <div className="flex items-center justify-between relative w-full">
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
                  <div
                    className={`relative size-[16px] transition-transform duration-200 ${
                      openDropdown === "roomStyle" ? "rotate-90" : ""
                    }`}
                  >
                    <RightArrowIcon className="size-[16px] text-[rgba(255,255,255,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Style Dropdown */}
        {openDropdown === "roomStyle" && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#000319] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-[8px] z-50">
            {roomStyles.map((roomStyle) => (
              <button
                key={roomStyle}
                onClick={() => handleSelect("roomStyle", roomStyle)}
                className={`w-full px-4 py-3 text-left text-[14px] font-['Manrope:Medium',_sans-serif] font-medium transition-colors duration-200 first:rounded-t-[8px] last:rounded-b-[8px] ${
                  settings.roomStyle === roomStyle
                    ? "text-white bg-white/10"
                    : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {roomStyle}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Styles */}
      <div className="relative w-full">
        <div
          className="bg-[rgba(255,255,255,0.08)] box-border flex flex-col gap-[20px] items-center overflow-clip p-[14px] relative w-full cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200"
          onClick={() => handleToggle("styles")}
        >
          <div className="flex items-center justify-between relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Styles</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">
                  {settings.styles}
                </p>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div
                  className={`relative size-[16px] transition-transform duration-200 ${
                    openDropdown === "styles" ? "rotate-90" : ""
                  }`}
                >
                  <RightArrowIcon className="size-[16px] text-[rgba(255,255,255,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styles Dropdown */}
        {openDropdown === "styles" && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#000319] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-[8px] z-50">
            {styleOptions.map((style) => (
              <button
                key={style}
                onClick={() => handleSelect("styles", style)}
                className={`w-full px-4 py-3 text-left text-[14px] font-['Manrope:Medium',_sans-serif] font-medium transition-colors duration-200 first:rounded-t-[8px] last:rounded-b-[8px] ${
                  settings.styles === style
                    ? "text-white bg-white/10"
                    : "text-[rgba(255,255,255,0.7)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Images */}
      <div className="backdrop-blur-[3px] backdrop-filter flex flex-col gap-[9px] items-start overflow-clip relative w-full">
        <div className="bg-[rgba(255,255,255,0.08)] box-border flex flex-col gap-[20px] items-center p-[14px] relative rounded-bl-[8px] rounded-br-[8px] w-full hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200">
          <div className="flex items-center justify-between relative w-full">
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
                className="flex items-center justify-center size-[24px] rounded-[4px] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-200"
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
                className="flex items-center justify-center size-[24px] rounded-[4px] bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors duration-200"
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
