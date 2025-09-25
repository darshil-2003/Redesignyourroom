import { useState, useCallback } from "react";

interface UseImageUploadReturn {
  uploadedImage: File | null;
  imagePreview: string | null;
  isUploading: boolean;
  uploadImage: (file: File) => void;
  clearImage: () => void;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = useCallback((file: File) => {
    setIsUploading(true);

    // Validate file type
    if (!file.type.startsWith("image/")) {
      console.error("Please select a valid image file");
      setIsUploading(false);
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      console.error("File size must be less than 10MB");
      setIsUploading(false);
      return;
    }

    setUploadedImage(file);

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  }, []);

  const clearImage = useCallback(() => {
    setUploadedImage(null);
    setImagePreview(null);
    setIsUploading(false);
  }, []);

  return {
    uploadedImage,
    imagePreview,
    isUploading,
    uploadImage,
    clearImage,
  };
};
