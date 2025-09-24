import { useState, useCallback, useRef } from "react";

interface ImageFile {
  file: File;
  preview: string;
  id: string;
}

interface UseImageUploadOptions {
  maxSize?: number; // in MB
  acceptedTypes?: string[];
  maxFiles?: number;
}

interface UseImageUploadReturn {
  images: ImageFile[];
  isUploading: boolean;
  error: string | null;
  inputRef: React.RefObject<HTMLInputElement>;
  handleFileSelect: (files: FileList | null) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleDragOver: (e: React.DragEvent) => void;
  removeImage: (id: string) => void;
  clearImages: () => void;
  openFileDialog: () => void;
}

/**
 * Custom hook for handling image uploads with drag & drop support
 * Includes validation, preview generation, and file management
 */
export const useImageUpload = (
  options: UseImageUploadOptions = {}
): UseImageUploadReturn => {
  const {
    maxSize = 10, // 10MB default
    acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
    maxFiles = 1,
  } = options;

  const [images, setImages] = useState<ImageFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback(
    (file: File): string | null => {
      if (!acceptedTypes.includes(file.type)) {
        return `File type ${
          file.type
        } is not supported. Please use ${acceptedTypes.join(", ")}.`;
      }

      if (file.size > maxSize * 1024 * 1024) {
        return `File size must be less than ${maxSize}MB.`;
      }

      return null;
    },
    [acceptedTypes, maxSize]
  );

  const createImagePreview = useCallback((file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, []);

  const processFiles = useCallback(
    async (files: FileList) => {
      setIsUploading(true);
      setError(null);

      try {
        const fileArray = Array.from(files);

        if (images.length + fileArray.length > maxFiles) {
          throw new Error(`Maximum ${maxFiles} files allowed.`);
        }

        const validFiles: File[] = [];
        const errors: string[] = [];

        // Validate files
        for (const file of fileArray) {
          const validationError = validateFile(file);
          if (validationError) {
            errors.push(`${file.name}: ${validationError}`);
          } else {
            validFiles.push(file);
          }
        }

        if (errors.length > 0) {
          throw new Error(errors.join("\n"));
        }

        // Process valid files
        const newImages: ImageFile[] = [];
        for (const file of validFiles) {
          const preview = await createImagePreview(file);
          newImages.push({
            file,
            preview,
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          });
        }

        setImages((prev) => [...prev, ...newImages]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setIsUploading(false);
      }
    },
    [images.length, maxFiles, validateFile, createImagePreview]
  );

  const handleFileSelect = useCallback(
    (files: FileList | null) => {
      if (files && files.length > 0) {
        processFiles(files);
      }
    },
    [processFiles]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      handleFileSelect(files);
    },
    [handleFileSelect]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }, []);

  const clearImages = useCallback(() => {
    setImages([]);
    setError(null);
  }, []);

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  return {
    images,
    isUploading,
    error,
    inputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    removeImage,
    clearImages,
    openFileDialog,
  };
};
