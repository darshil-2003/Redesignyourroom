import React from "react";

interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(0,0,0,0.1)] box-border content-stretch flex h-[48px] sm:h-[56px] md:h-[64px] items-center justify-between px-[12px] sm:px-[14px] md:px-[16px] py-0 relative rounded-tl-[8px] sm:rounded-tl-[10px] lg:rounded-tl-[12px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[8px] sm:rounded-tl-[10px] lg:rounded-tl-[12px]"
      />

      {/* Back Button */}
      <button
        onClick={onClose}
        className="box-border content-stretch flex gap-[4px] sm:gap-[6px] items-center overflow-clip px-0 py-[8px] sm:py-[10px] md:py-[12px] relative rounded-[4px] sm:rounded-[6px] shadow-[0px_8px_12px_0px_rgba(68,68,70,0.1),0px_2px_8px_-2px_rgba(68,68,70,0.05),0px_1px_4px_-1px_rgba(68,68,70,0.05)] shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
      >
        <div className="relative shrink-0 size-[14px] sm:size-[16px] md:size-[18px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
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
        <div className="content-stretch flex gap-[8px] sm:gap-[12px] md:gap-[20px] items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Lexend:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Back</p>
          </div>
        </div>
      </button>

      {/* My Creations Button */}
      <div className="content-stretch flex gap-[8px] sm:gap-[10px] md:gap-[12px] items-center justify-end relative shrink-0 w-[120px] sm:w-[140px] md:w-[159px]">
        <div className="bg-[#353b66] box-border content-stretch flex h-[32px] sm:h-[38px] md:h-[44px] items-center px-[12px] sm:px-[16px] md:px-[24px] py-[8px] sm:py-[10px] md:py-[12px] relative rounded-[8px] sm:rounded-[10px] md:rounded-[12px] shrink-0">
          <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">My Creations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
