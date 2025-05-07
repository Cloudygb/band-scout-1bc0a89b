
import React, { useState, useEffect, useRef } from "react";
import { useRaccoonConfig, RaccoonEmotion } from "@/hooks/useRaccoonConfig";
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

// Updated position type to include optional 'right' property
interface PositionState {
  left?: number;
  bottom: number;
  right?: number;
}

const WelcomeRaccoonMascot: React.FC<WelcomeRaccoonMascotProps> = ({
  scrollPosition,
  activeTextIndex,
  showFinalModal
}) => {
  const [visible, setVisible] = useState(false);
  const [emotion, setEmotion] = useState<RaccoonEmotion>("neutral");
  const [isWaving, setIsWaving] = useState(false);
  const [position, setPosition] = useState<PositionState>({ left: -200, bottom: 20 });
  
  // Get configuration from our raccoon config hook
  const config = useRaccoonConfig();
  
  // References for animations
  const waveTimerRef = useRef<number | null>(null);

  // Calculate visibility and position based on scroll
  useEffect(() => {
    // Check if we're in the entry range
    if (scrollPosition >= config.entry.start && scrollPosition <= config.exit.end) {
      setVisible(true);
      
      // Calculate position based on scroll percentage
      const entryProgress = Math.min(
        1,
        (scrollPosition - config.entry.start) / 
        (config.entry.end - config.entry.start)
      );
      
      // Start exiting when we reach the exit range
      if (scrollPosition >= config.exit.start) {
        const exitProgress = 
          (scrollPosition - config.exit.start) / 
          (config.exit.end - config.exit.start);
        
        setPosition({
          left: config.position.initial.left + ((1 - exitProgress) * (config.position.initial.left * -1 + 20)), // Move back to initial position
          bottom: config.position.initial.bottom
        });
      } else {
        // During normal visibility
        setPosition({
          left: config.position.initial.left + (entryProgress * (config.position.initial.left * -1 + 20)), // Move from initial to visible
          bottom: config.position.initial.bottom
        });
      }
    } else if (scrollPosition >= config.finalAppearance) {
      // Show at bottom right for final appearance
      setVisible(true);
      // Here we're explicitly setting right instead of left for final position
      setPosition({ 
        bottom: config.position.final.bottom,
        right: config.position.final.right
      });
    } else {
      setVisible(false);
    }

    // Determine emotion based on active text
    if (activeTextIndex >= 0 && activeTextIndex < config.emotions.textBased.length) {
      setEmotion(config.emotions.textBased[activeTextIndex]);
    } else {
      setEmotion(config.emotions.default);
    }
    
    // Wave when first appearing or at final modal
    if (
      (scrollPosition >= config.entry.start && 
        scrollPosition <= config.entry.start + 0.05) ||
      showFinalModal
    ) {
      startWaving();
    } else {
      stopWaving();
    }
  }, [scrollPosition, activeTextIndex, showFinalModal, config]);

  // Start waving animation
  const startWaving = () => {
    setIsWaving(true);
    setEmotion(config.emotions.onHover);
    
    // Stop waving after the configured duration
    if (waveTimerRef.current) {
      window.clearTimeout(waveTimerRef.current);
    }
    waveTimerRef.current = window.setTimeout(() => {
      setIsWaving(false);
    }, config.animations.wave);
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
  const getMouthImage = (emotion: RaccoonEmotion) => {
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
        transition: `all ${config.animations.transition}ms ease-in-out`
      }}
    >
      <div className="relative w-196">
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
          style={{
            animation: isWaving ? `wave ${config.animations.bob}ms infinite ease-in-out` : "none"
          }}
        />

        {/* Head layer */}
        <div className="absolute" style={{ top: '-18px', left: '6px', zIndex: 40 }}>
          <div className="animate-bobble" style={{ animation: `bobble ${config.animations.bob}ms infinite ease-in-out` }}>
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
