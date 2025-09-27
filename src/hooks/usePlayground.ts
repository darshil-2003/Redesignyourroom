import { useState, useCallback } from "react";

interface PlaygroundSettings {
  designType: string;
  roomType: string;
  roomStyle: string;
  styles: string;
  images: number;
  geometry: number;
  prompt: string;
}

export interface UsePlaygroundReturn {
  settings: PlaygroundSettings;
  updateSetting: <K extends keyof PlaygroundSettings>(
    key: K,
    value: PlaygroundSettings[K]
  ) => void;
  resetSettings: () => void;
  isGenerating: boolean;
  setGenerating: (generating: boolean) => void;
  openDropdown: string | null;
  setOpenDropdown: (dropdown: string | null) => void;
}

const defaultSettings: PlaygroundSettings = {
  designType: "Drawing",
  roomType: "Living Room",
  roomStyle: "Modern",
  styles: "Realistic",
  images: 2,
  geometry: 45,
  prompt: "",
};

export const usePlayground = (): UsePlaygroundReturn => {
  const [settings, setSettings] = useState<PlaygroundSettings>(defaultSettings);
  const [isGenerating, setIsGenerating] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const updateSetting = useCallback(
    <K extends keyof PlaygroundSettings>(
      key: K,
      value: PlaygroundSettings[K]
    ) => {
      setSettings((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
  }, []);

  const setGenerating = useCallback((generating: boolean) => {
    setIsGenerating(generating);
  }, []);

  return {
    settings,
    updateSetting,
    resetSettings,
    isGenerating,
    setGenerating,
    openDropdown,
    setOpenDropdown,
  };
};
