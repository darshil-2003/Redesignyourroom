import { useState, useCallback } from "react";

interface UseAccordionOptions {
  allowMultiple?: boolean;
  defaultOpen?: number[];
}

interface UseAccordionReturn {
  openItems: Set<number>;
  toggleItem: (index: number) => void;
  openItem: (index: number) => void;
  closeItem: (index: number) => void;
  closeAll: () => void;
  openAll: () => void;
  isOpen: (index: number) => boolean;
}

/**
 * Custom hook for managing accordion/collapsible content state
 * Supports single or multiple open items
 */
export const useAccordion = (
  totalItems: number,
  options: UseAccordionOptions = {}
): UseAccordionReturn => {
  const { allowMultiple = true, defaultOpen = [] } = options;

  const [openItems, setOpenItems] = useState<Set<number>>(new Set(defaultOpen));

  const toggleItem = useCallback(
    (index: number) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);

        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          if (!allowMultiple) {
            newSet.clear();
          }
          newSet.add(index);
        }

        return newSet;
      });
    },
    [allowMultiple]
  );

  const openItem = useCallback(
    (index: number) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev);
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
        return newSet;
      });
    },
    [allowMultiple]
  );

  const closeItem = useCallback((index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  }, []);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  const openAll = useCallback(() => {
    const allIndices = Array.from({ length: totalItems }, (_, i) => i);
    setOpenItems(new Set(allIndices));
  }, [totalItems]);

  const isOpen = useCallback(
    (index: number) => {
      return openItems.has(index);
    },
    [openItems]
  );

  return {
    openItems,
    toggleItem,
    openItem,
    closeItem,
    closeAll,
    openAll,
    isOpen,
  };
};
