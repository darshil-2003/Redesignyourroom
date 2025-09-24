import React from "react";

const RoomSettings = () => {
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
                <p className="leading-[20px] whitespace-pre">Living Room</p>
              </div>
              <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
                <div className="flex-none rotate-[270deg]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Style */}
      <div className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-col gap-[20px] items-center overflow-clip p-[14px] relative shrink-0 w-full">
        <div className="backdrop-blur-[3px] backdrop-filter content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e1e7ef] text-[14px] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Room Style</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">Modern</p>
              </div>
              <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
                <div className="flex-none rotate-[270deg]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
              <p className="leading-[20px] whitespace-pre">Realistic</p>
            </div>
            <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
              <div className="flex-none rotate-[270deg]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 8L8 6L12 10L14 8"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap">
                <p className="leading-[20px] whitespace-pre">2</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[20px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 8L8 6L12 10L14 8"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSettings;
