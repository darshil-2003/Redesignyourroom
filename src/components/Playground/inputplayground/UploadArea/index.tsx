import React from "react";
import { useImageUpload } from "../../../../hooks";

const UploadArea = () => {
  const {
    images,
    isUploading,
    error,
    inputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    removeImage,
    openFileDialog,
  } = useImageUpload({
    maxSize: 10,
    acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
    maxFiles: 1,
  });

  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.08)] grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.12)] transition-colors"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={openFileDialog}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFileSelect(e.target.files)}
        className="hidden"
      />
      <div className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative size-full">
        <div
          className="absolute content-stretch flex flex-col gap-[10px] items-center translate-x-[-50%] translate-y-[-50%]"
          style={{ top: "calc(50% - 0.299px)", left: "calc(50% + 0.197px)" }}
        >
          {/* Upload Icon */}
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 13H8"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17H8"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9H8"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Upload Text */}
          <div className="flex flex-col font-['Manrope:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center text-nowrap">
            <p className="leading-[15px] whitespace-pre">Upload image</p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(255,255,255,0.1)] border-dashed inset-0 pointer-events-none rounded-[8px]"
      />

      {/* Error Message */}
      {error && (
        <div className="absolute bottom-2 left-2 right-2 bg-red-500/20 text-red-300 text-xs p-2 rounded">
          {error}
        </div>
      )}

      {/* Image Preview */}
      {images.length > 0 && (
        <div className="absolute inset-2 rounded overflow-hidden">
          <img
            src={images[0].preview}
            alt="Uploaded room"
            className="w-full h-full object-cover"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeImage(images[0].id);
            }}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
          >
            ×
          </button>
        </div>
      )}

      {/* Loading State */}
      {isUploading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white text-sm">Uploading...</div>
        </div>
      )}
    </div>
  );
};

export default UploadArea;
