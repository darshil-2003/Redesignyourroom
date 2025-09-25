import React, { useRef } from "react";
import { UploadAreaIcon } from "../../../../icons";
import { useImageUpload } from "../../../../hooks";

const UploadArea: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { imagePreview, isUploading, uploadImage, clearImage } =
    useImageUpload();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.08)] grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200 h-[150px] sm:h-[120px] lg:h-[250px]">
      {imagePreview ? (
        <div className="relative w-full h-full rounded-[8px] overflow-hidden">
          <img
            src={imagePreview}
            alt="Uploaded preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[12px] sm:p-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[8px] sm:gap-[12px] items-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px] sm:size-[32px]">
              <UploadAreaIcon className="size-full text-[rgba(255,255,255,0.6)]" />
            </div>
            <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] sm:text-[14px] text-[rgba(255,255,255,0.6)] text-center text-nowrap">
              <p className="leading-[16px] sm:leading-[20px] whitespace-pre">
                {isUploading ? "Uploading..." : "Upload image"}
              </p>
            </div>
          </div>
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={handleUploadClick}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-dashed inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
};

export default UploadArea;
