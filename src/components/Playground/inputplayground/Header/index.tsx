import React from "react";
import { useRouter } from "next/navigation";
import { HistoryIcon } from "../../../../icons";
const PlaygroundHeader: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(0,0,0,0.1)] flex h-16 md:h-20 items-center justify-between px-4 md:px-6 py-0 relative rounded-tl-xl shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-b border-[rgba(255,255,255,0.05)] inset-0 pointer-events-none rounded-tl-xl"
      />
      <button
        onClick={handleBackClick}
        className="flex gap-2 items-center px-0 py-3 relative rounded-lg shrink-0 cursor-pointer hover:opacity-80 transition-opacity group"
      >
        <div className="relative shrink-0 w-5 h-5">
          <svg
            className="block w-full h-full"
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
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex flex-col font-['Lexend'] font-normal justify-center leading-none relative shrink-0 text-base text-center text-nowrap text-white">
            <p className="leading-none whitespace-pre">Back</p>
          </div>
        </div>
      </button>
      <div className="bg-[#353b66] flex gap-2 h-11 md:h-12 items-center px-4 py-3 relative rounded-xl shrink-0">
        <div className="relative shrink-0 w-6 h-6">
          <HistoryIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-col font-['Lexend'] font-medium justify-center leading-none relative shrink-0 text-base text-center text-nowrap text-white">
          <p className="leading-none whitespace-pre">History</p>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundHeader;
