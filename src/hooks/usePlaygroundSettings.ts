import { useState, useCallback } from "react";

export interface PlaygroundSettings {
  designType: string;
  roomType: string;
  roomStyle: string;
  styles: string;
  images: number;
  geometry: number;
  additionalPrompt: string;
}

const defaultSettings: PlaygroundSettings = {
  designType: "Drawing",
  roomType: "Living Room",
  roomStyle: "Modern",
  styles: "Realistic",
  images: 2,
  geometry: 45,
  additionalPrompt: "",
};

interface UsePlaygroundSettingsReturn {
  settings: PlaygroundSettings;
  updateSetting: <K extends keyof PlaygroundSettings>(
    key: K,
    value: PlaygroundSettings[K]
  ) => void;
  updateSettings: (newSettings: Partial<PlaygroundSettings>) => void;
  resetSettings: () => void;
  isGenerating: boolean;
  setGenerating: (generating: boolean) => void;
}

/**
 * Custom hook for managing playground form settings and state
 * Handles all form inputs and generation state
 */
export const usePlaygroundSettings = (): UsePlaygroundSettingsReturn => {
  const [settings, setSettings] = useState<PlaygroundSettings>(defaultSettings);
  const [isGenerating, setIsGenerating] = useState(false);

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

  const updateSettings = useCallback(
    (newSettings: Partial<PlaygroundSettings>) => {
      setSettings((prev) => ({
        ...prev,
        ...newSettings,
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
    updateSettings,
    resetSettings,
    isGenerating,
    setGenerating,
  };
};
