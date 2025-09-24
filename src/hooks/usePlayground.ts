import { useState, useCallback } from "react";

interface UsePlaygroundReturn {
  isOpen: boolean;
  openPlayground: () => void;
  closePlayground: () => void;
  togglePlayground: () => void;
}

/**
 * Custom hook for managing playground modal state
 * Provides methods to open, close, and toggle the playground
 */
export const usePlayground = (): UsePlaygroundReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const openPlayground = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePlayground = useCallback(() => {
    setIsOpen(false);
  }, []);

  const togglePlayground = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    openPlayground,
    closePlayground,
    togglePlayground,
  };
};
