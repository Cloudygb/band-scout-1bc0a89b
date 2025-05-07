
import { useEffect, useState } from 'react';

export type RaccoonEmotion = "neutral" | "happy" | "excited" | "confused" | "sad";

export interface RaccoonConfig {
  // When the raccoon should appear and disappear (scroll percentages)
  entry: {
    start: number;
    end: number;
  };
  // When the raccoon should exit
  exit: {
    start: number;
    end: number;
  };
  // Final appearance trigger point
  finalAppearance: number;
  // Duration of animations in milliseconds
  animations: {
    wave: number;
    transition: number;
    bob: number;
  };
  // Position configuration
  position: {
    initial: { left: number; bottom: number };
    final: { right: number; bottom: number };
  };
  // Emotions to use for different scenarios
  emotions: {
    default: RaccoonEmotion;
    textBased: RaccoonEmotion[];
    onHover: RaccoonEmotion;
    onFinalScreen: RaccoonEmotion;
  };
}

const defaultConfig: RaccoonConfig = {
  entry: {
    start: 0.22,
    end: 0.28
  },
  exit: {
    start: 0.88,
    end: 0.95
  },
  finalAppearance: 0.98,
  animations: {
    wave: 1000,
    transition: 300,
    bob: 3000
  },
  position: {
    initial: { left: -400, bottom: 20 },
    final: { right: 20, bottom: 20 }
  },
  emotions: {
    default: "neutral",
    textBased: ["excited", "happy", "confused"],
    onHover: "excited",
    onFinalScreen: "happy"
  }
};

export const useRaccoonConfig = (customConfig?: Partial<RaccoonConfig>) => {
  const [config, setConfig] = useState<RaccoonConfig>(defaultConfig);
  
  useEffect(() => {
    if (customConfig) {
      setConfig({
        ...defaultConfig,
        ...customConfig,
        entry: { ...defaultConfig.entry, ...customConfig?.entry },
        exit: { ...defaultConfig.exit, ...customConfig?.exit },
        animations: { ...defaultConfig.animations, ...customConfig?.animations },
        position: { ...defaultConfig.position, ...customConfig?.position },
        emotions: { ...defaultConfig.emotions, ...customConfig?.emotions }
      });
    }
  }, [customConfig]);
  
  return config;
};
