import React from "react";

const GenerateButton = () => {
  return (
    <div className="backdrop-blur-[15px] backdrop-filter bg-white box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[10px] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col font-['Lexend:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Generate</p>
      </div>
    </div>
  );
};

export default GenerateButton;
