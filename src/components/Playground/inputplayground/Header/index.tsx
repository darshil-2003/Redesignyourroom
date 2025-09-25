import React from "react";
import { useRouter } from "next/navigation";
import { HistoryIcon } from "../../../../icons";
const PlaygroundHeader: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(0,0,0,0.1)] box-border content-stretch flex h-[64px] items-center justify-between px-[12px] sm:px-[16px] py-0 relative rounded-tl-[12px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px]"
      />
      <button
        onClick={handleBackClick}
        className="box-border content-stretch flex gap-[4px] sm:gap-[6px] items-center overflow-clip px-0 py-[12px] relative rounded-[6px] shadow-[0px_8px_12px_0px_rgba(68,68,70,0.1),0px_2px_8px_-2px_rgba(68,68,70,0.05),0px_1px_4px_-1px_rgba(68,68,70,0.05)] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="relative shrink-0 size-[18px]">
          <div className="absolute contents inset-0">
            <svg
              className="block max-w-none size-full"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11.25 13.5L6.75 9L11.25 4.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] sm:gap-[20px] items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Lexend:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[16px] text-center text-nowrap text-white">
            <p className="leading-[16px] whitespace-pre">Back</p>
          </div>
        </div>
      </button>
      <div className="bg-[#353b66] box-border content-stretch flex gap-[6px] sm:gap-[8px] h-[44px] items-center px-[12px] sm:px-[16px] py-[12px] relative rounded-[12px] shrink-0">
        <div className="relative shrink-0 size-[20px] sm:size-[24px]">
          <HistoryIcon className="w-5 h-5" />
        </div>
        <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] sm:text-[16px] text-center text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre">History</p>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundHeader;
