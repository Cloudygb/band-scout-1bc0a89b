
import React, { useState, useEffect, useRef } from "react";
import {
  RACCOON_BODY,
  RACCOON_HEAD,
  RACCOON_EYES,
  MOUTH_NEUTRAL,
  MOUTH_HAPPY,
  MOUTH_EXCITED,
  MOUTH_CONFUSED,
  MOUTH_SAD,
  LEFT_ARM,
  RIGHT_ARM,
  TAIL
} from "@/assets/raccoonParts";

interface WelcomeRaccoonMascotProps {
  scrollPosition: number;
  activeTextIndex: number;
  showFinalModal: boolean;
}

// Define emotion types
type EmotionType = "neutral" | "happy" | "excited" | "confused" | "sad";

// Configuration object for the raccoon mascot
const raccoonConfig = {
  // When the raccoon should appear and disappear (scroll percentages)
  entry: {
    start: 0.22, // Just before first text appears
    end: 0.28    // Fully visible when first text is visible
  },
  // When the raccoon should exit
  exit: {
    start: 0.88, // Start exiting before the last text disappears
    end: 0.95    // Fully gone when the last text is gone
  },
  // Final appearance at the bottom
  finalAppearance: 0.98,
  // Duration of animations in milliseconds
  animations: {
    wave: 1000,
    transition: 300,
    bob: 3000
  },
  // Emotions to use for each text section
  textEmotions: ["excited", "happy", "confused"] as EmotionType[]
};

const WelcomeRaccoonMascot: React.FC<WelcomeRaccoonMascotProps> = ({
  scrollPosition,
  activeTextIndex,
  showFinalModal
}) => {
  const [visible, setVisible] = useState(false);
  const [emotion, setEmotion] = useState<EmotionType>("neutral");
  const [isWaving, setIsWaving] = useState(false);
  const [position, setPosition] = useState({ left: -200, bottom: 20 });
  
  // References for animations
  const waveTimerRef = useRef<number | null>(null);

  // Calculate visibility and position based on scroll
  useEffect(() => {
    // Check if we're in the entry range
    if (scrollPosition >= raccoonConfig.entry.start && scrollPosition <= raccoonConfig.exit.end) {
      setVisible(true);
      
      // Calculate position based on scroll percentage
      const entryProgress = Math.min(
        1,
        (scrollPosition - raccoonConfig.entry.start) / 
        (raccoonConfig.entry.end - raccoonConfig.entry.start)
      );
      
      // Start exiting when we reach the exit range
      if (scrollPosition >= raccoonConfig.exit.start) {
        const exitProgress = 
          (scrollPosition - raccoonConfig.exit.start) / 
          (raccoonConfig.exit.end - raccoonConfig.exit.start);
        
        setPosition({
          left: 20 - (exitProgress * 220), // Move from 20 to -200
          bottom: 20
        });
      } else {
        // During normal visibility
        setPosition({
          left: -200 + (entryProgress * 220), // Move from -200 to 20
          bottom: 20
        });
      }
    } else if (scrollPosition >= raccoonConfig.finalAppearance) {
      // Show at bottom right for final appearance
      setVisible(true);
      setPosition({ left: "auto", bottom: 20, right: 20 } as any);
    } else {
      setVisible(false);
    }

    // Determine emotion based on active text
    if (activeTextIndex >= 0 && activeTextIndex < raccoonConfig.textEmotions.length) {
      setEmotion(raccoonConfig.textEmotions[activeTextIndex]);
    } else {
      setEmotion("neutral");
    }
    
    // Wave when first appearing or at final modal
    if (
      (scrollPosition >= raccoonConfig.entry.start && 
        scrollPosition <= raccoonConfig.entry.start + 0.05) ||
      showFinalModal
    ) {
      startWaving();
    } else {
      stopWaving();
    }
  }, [scrollPosition, activeTextIndex, showFinalModal]);

  // Start waving animation
  const startWaving = () => {
    setIsWaving(true);
    
    // Stop waving after 3 seconds if still waving
    if (waveTimerRef.current) {
      window.clearTimeout(waveTimerRef.current);
    }
    waveTimerRef.current = window.setTimeout(() => {
      setIsWaving(false);
    }, 3000);
  };

  // Stop waving animation
  const stopWaving = () => {
    if (waveTimerRef.current) {
      window.clearTimeout(waveTimerRef.current);
      waveTimerRef.current = null;
    }
    setIsWaving(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (waveTimerRef.current) {
        window.clearTimeout(waveTimerRef.current);
      }
    };
  }, []);

  // Get the current mouth image based on emotion
  const getMouthImage = (emotion: EmotionType) => {
    switch (emotion) {
      case "happy":
        return MOUTH_HAPPY;
      case "excited":
        return MOUTH_EXCITED;
      case "confused":
        return MOUTH_CONFUSED;
      case "sad":
        return MOUTH_SAD;
      case "neutral":
      default:
        return MOUTH_NEUTRAL;
    }
  };

  if (!visible) return null;

  return (
    <div
      className="welcome-raccoon fixed z-50"
      style={{
        left: position.left,
        bottom: position.bottom,
        right: position.right,
        transition: "all 0.5s ease-in-out"
      }}
    >
      <div className="relative w-40">
        {/* Tail layer */}
        <img
          src={TAIL}
          alt="Raccoon Tail"
          className="absolute -left-10 bottom-0 w-16 h-auto z-10"
        />

        {/* Body layer */}
        <img
          src={RACCOON_BODY}
          alt="Raccoon Body"
          className="w-full h-auto relative z-20"
        />

        {/* Left arm layer */}
        <img
          src={LEFT_ARM}
          alt="Raccoon Left Arm"
          className="absolute left-0 top-1/2 w-10 h-auto z-30"
        />

        {/* Right arm layer - with wave animation */}
        <img
          src={RIGHT_ARM}
          alt="Raccoon Right Arm"
          className={`absolute right-0 top-1/2 w-10 h-auto z-30 origin-top ${
            isWaving ? "animate-wave" : ""
          }`}
        />

        {/* Head layer */}
        <div className="absolute" style={{ top: '-18px', left: '6px', zIndex: 40 }}>
          <div className="animate-bobble">
            <img
              src={RACCOON_HEAD}
              alt="Raccoon Head"
              className="w-36 h-auto"
            />

            {/* Eyes layer */}
            <div className="absolute" style={{ top: '38%', left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
              <img
                src={RACCOON_EYES}
                alt="Raccoon Eyes"
                className="w-28 h-auto animate-wander"
              />
            </div>

            {/* Mouth layer - changes based on emotion */}
            <div className="absolute" style={{ top: '65%', left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
              <img
                src={getMouthImage(emotion)}
                alt={`Raccoon ${emotion} mouth`}
                className="w-20 h-auto transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeRaccoonMascot;
