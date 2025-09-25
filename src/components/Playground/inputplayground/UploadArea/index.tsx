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
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-xl shrink-0 w-full hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200 h-48 md:h-56 lg:h-64 animate-fade-in-up hover-lift">
      {imagePreview ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <img
            src={imagePreview}
            alt="Uploaded preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={clearImage}
            className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors text-lg font-bold"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-6 relative size-full">
          <div className="flex flex-col gap-4 items-center relative shrink-0">
            <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14">
              <UploadAreaIcon className="w-full h-full text-[rgba(255,255,255,0.6)]" />
            </div>
            <div className="flex flex-col font-['Manrope'] font-medium justify-center leading-none relative shrink-0 text-base text-[rgba(255,255,255,0.6)] text-center text-nowrap">
              <p className="leading-none whitespace-pre">
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
        className="absolute border border-[rgba(255,255,255,0.1)] border-dashed inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
};

export default UploadArea;
