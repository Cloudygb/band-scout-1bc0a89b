
import { useEffect, useState, useRef } from "react";
import {
  RACCOON_BODY,
  RACCOON_HEAD,
  RACCOON_EYES,
  MOUTH_NEUTRAL,
  MOUTH_HAPPY,
  MOUTH_EXCITED,
  MOUTH_CONFUSED,
  MOUTH_SAD,
  MOUTH_ANGRY,
  MOUTH_SURPRISED,
  LEFT_ARM,
  RIGHT_ARM,
  TAIL
} from "@/assets/raccoonParts";

type RaccoonEmotion = "neutral" | "happy" | "excited" | "confused" | "sad" | "angry" | "surprised";

interface RaccoonMascotProps {
  position?: "top-right" | "bottom-right" | "bottom-left" | "top-left";
}

// All the canned raccoon responses
const raccoonQuotes = [
  "I only loot in major keys.",
  "Breaking into hearts with nothing but vibes.",
  "I don't steal songs—I liberate them.",
  "Caught red-pawed… building your playlist.",
  "Every banger deserves a getaway plan.",
  "Sniffed out the groove. Left the door open.",
  "Some gather nuts—I gather hidden gems.",
  "I scale rooftops and octaves.",
  "I crash genres like I crash trash cans.",
  "Slick paws. Smoother transitions.",
  "I only pull off clean getaways and cleaner beats.",
  "Unmasking undiscovered artists—literally and figuratively.",
  "The only thing I swipe is your attention.",
  "I don't sneak in—I fade in.",
  "Playlist full of treasures, and not a jewel in sight.",
  "Just a masked critter with impeccable taste.",
  "I burgle boredom and leave behind bops.",
  "One paw in the underground. One paw on the aux.",
  "It's not a heist—it's a rescue mission for forgotten tunes.",
  "All I hoard is harmony."
];

const RaccoonMascot = ({ position = "bottom-right" }: RaccoonMascotProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [currentQuote, setCurrentQuote] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [emotion, setEmotion] = useState<RaccoonEmotion>("neutral");
  const [isWaving, setIsWaving] = useState(false);
  const eyesRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleTimeoutRef = useRef<number | null>(null);
  const waveTimerRef = useRef<number | null>(null);
  const maxEyeMovement = 5; // Maximum pixels eyes can move
  
  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  // Handle mouse movement
  useEffect(() => {
    if (isMobile) return; // Skip for mobile devices
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
      
      // Calculate normalized direction vector from container center to mouse
      const directionX = (e.clientX - containerCenterX) / window.innerWidth;
      const directionY = (e.clientY - containerCenterY) / window.innerHeight;
      
      // Apply movement with limits
      setMousePosition({
        x: directionX * maxEyeMovement,
        y: directionY * maxEyeMovement
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);
  
  // Handle cleanup for quote timeout
  useEffect(() => {
    return () => {
      if (bubbleTimeoutRef.current) {
        window.clearTimeout(bubbleTimeoutRef.current);
      }
      if (waveTimerRef.current) {
        window.clearTimeout(waveTimerRef.current);
      }
    };
  }, []);

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * raccoonQuotes.length);
    return raccoonQuotes[randomIndex];
  };

  // Start waving animation
  const startWaving = () => {
    setIsWaving(true);
    setEmotion("excited");
    
    // Stop waving after a duration
    if (waveTimerRef.current) {
      window.clearTimeout(waveTimerRef.current);
    }
    
    waveTimerRef.current = window.setTimeout(() => {
      setIsWaving(false);
      setEmotion("neutral");
    }, 2000);
  };

  // Handle raccoon click
  const handleRaccoonClick = () => {
    // Clear existing timeout if there is one
    if (bubbleTimeoutRef.current) {
      window.clearTimeout(bubbleTimeoutRef.current);
    }

    // Change emotion based on current emotion or randomly
    if (emotion === "neutral" || emotion === "happy") {
      setEmotion("excited");
    } else if (emotion === "excited") {
      setEmotion("happy");
    } else {
      setEmotion("neutral");
    }

    // Start waving
    startWaving();

    // If the bubble is already showing, cycle to a new quote
    if (showBubble) {
      // Get a new random quote different from the current one if possible
      if (raccoonQuotes.length > 1) {
        let newQuote;
        do {
          newQuote = getRandomQuote();
        } while (newQuote === currentQuote && raccoonQuotes.length > 1);
        setCurrentQuote(newQuote);
      } else {
        setCurrentQuote(getRandomQuote());
      }
    } else {
      // Otherwise, show the bubble with a new quote
      setCurrentQuote(getRandomQuote());
      setShowBubble(true);
      setIsFadingOut(false);
    }

    // Set timeout to hide bubble after 5 seconds
    bubbleTimeoutRef.current = window.setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade out animation to complete before hiding
      setTimeout(() => {
        setShowBubble(false);
        setIsFadingOut(false);
        setEmotion("neutral"); // Return to neutral emotion
      }, 300); // Match the fadeOut animation duration
    }, 5000);
  };
  
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
      case "angry":
        return MOUTH_ANGRY;
      case "surprised":
        return MOUTH_SURPRISED;
      case "neutral":
      default:
        return MOUTH_NEUTRAL;
    }
  };
  
  // Position styles
  const positionStyles = {
    "top-right": "top-0 right-0 pt-20 pr-4",
    "bottom-right": "bottom-0 right-0 pb-4 pr-4",
    "bottom-left": "bottom-0 left-0 pb-4 pl-4",
    "top-left": "top-0 left-0 pt-20 pl-4"
  };

  // Speech bubble positioning based on raccoon position
  const getBubblePosition = () => {
    switch (position) {
      case "top-right":
        return "bottom-full right-0 mb-4 mr-8 -translate-x-4";
      case "bottom-right":
        return "bottom-[110%] right-0 mr-8 -translate-x-4"; // Anchor to bottom, 110% to ensure it's above the raccoon
      case "bottom-left":
        return "bottom-[110%] left-0 ml-8 translate-x-4"; // Anchor to bottom, shift right a bit
      case "top-left":
        return "bottom-full left-0 mb-4 ml-8 translate-x-4";
      default:
        return "bottom-[110%] right-0 mr-8 -translate-x-4";
    }
  };

  // Speech bubble pointer direction based on raccoon position
  const getBubblePointerPosition = () => {
    switch (position) {
      case "top-right":
      case "top-left":
        return "bottom-[-8px] left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white";
      case "bottom-right":
      case "bottom-left":
        return "bottom-[-8px] left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white";
      default:
        return "bottom-[-8px] left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white";
    }
  };
  
  return (
    <div 
      className={`raccoon-container ${positionStyles[position]} cursor-pointer z-50 fixed`}
      ref={containerRef}
      onClick={handleRaccoonClick}
    >
      {/* Speech bubble */}
      {showBubble && (
        <div className={`absolute z-40 ${getBubblePosition()} max-w-[200px] ${isFadingOut ? 'speech-bubble-disappear' : 'speech-bubble-appear'}`}>
          <div className="bg-white p-3 rounded-xl shadow-md relative">
            <p className="font-bubblegum text-sm text-bandit-brown-dark">{currentQuote}</p>
            <div className={`absolute h-0 w-0 ${getBubblePointerPosition()}`}></div>
          </div>
        </div>
      )}
      
      <div className="relative" style={{ width: "250px" }}>
        {/* Tail layer */}
        <img
          src={TAIL}
          alt="Raccoon Tail"
          style={{ 
            position: "absolute",
            left: "-38px", 
            bottom: "0", 
            width: "180px", 
            height: "auto", 
            zIndex: 10 
          }}
        />

        {/* Body layer */}
        <img 
          src={RACCOON_BODY} 
          alt="Raccoon Body" 
          style={{ 
            width: "100%", 
            height: "auto", 
            position: "relative", 
            zIndex: 20 
          }}
        />
        
        {/* Left arm layer */}
        <img
          src={LEFT_ARM}
          alt="Raccoon Left Arm"
          style={{ 
            position: "absolute",
            left: "-20px", 
            top: "50%", 
            width: "120px", 
            height: "auto", 
            zIndex: 30 
          }}
        />

        {/* Right arm layer - with wave animation */}
        <img
          src={RIGHT_ARM}
          alt="Raccoon Right Arm"
          className={isWaving ? "animate-wave" : ""}
          style={{ 
            position: "absolute",
            right: "-20px", 
            top: "50%", 
            width: "120px", 
            height: "auto", 
            zIndex: 30,
            transformOrigin: "top center",
            animation: isWaving ? "wave 2000ms infinite ease-in-out" : "none" 
          }}
        />
        
        {/* Head layer - using fixed pixel values instead of percentages */}
        <div style={{ 
          position: "absolute", 
          top: '-70px', 
          left: '2px', 
          zIndex: 40,
          width: "250px" 
        }}>
          <div className="animate-bobble">
            <img 
              src={RACCOON_HEAD} 
              alt="Raccoon Head" 
              style={{
                width: "100%",
                height: "auto"
              }}
            />
            
            {/* Eyes layer - using fixed position relative to head */}
            <div style={{ 
              position: "absolute",
              top: '38%', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              zIndex: 50,
              width: "100%" 
            }}>
              <img 
                ref={eyesRef}
                src={RACCOON_EYES} 
                alt="Raccoon Eyes" 
                className={isMobile ? "animate-wander" : ""}
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 300ms ease",
                  transform: !isMobile ? `translate(${mousePosition.x}px, ${mousePosition.y}px)` : 'none'
                }}
              />
            </div>
            
            {/* Mouth layer - changes based on emotion */}
            <div style={{ 
              position: "absolute", 
              top: "65%", 
              left: "50%", 
              transform: "translateX(-50%)", 
              zIndex: 50, 
              width: "100%" 
            }}>
              <img
                src={getMouthImage(emotion)}
                alt={`Raccoon ${emotion} mouth`}
                style={{ 
                  width: "100%", 
                  height: "auto",
                  transition: "opacity 300ms" 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaccoonMascot;
