import { useEffect, useState, useRef } from "react";
import { RACCOON_BODY, RACCOON_HEAD, RACCOON_EYES } from "@/assets";

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
  const eyesRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleTimeoutRef = useRef<number | null>(null);
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
    };
  }, []);

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * raccoonQuotes.length);
    return raccoonQuotes[randomIndex];
  };

  // Handle raccoon click
  const handleRaccoonClick = () => {
    // Clear existing timeout if there is one
    if (bubbleTimeoutRef.current) {
      window.clearTimeout(bubbleTimeoutRef.current);
    }

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
      }, 300); // Match the fadeOut animation duration
    }, 5000);
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
        return "bottom-full right-0 mb-4";
      case "bottom-right":
        return "top-0 right-0 mt-[-100px]";
      case "bottom-left":
        return "top-0 left-0 mt-[-100px]";
      case "top-left":
        return "bottom-full left-0 mb-4";
      default:
        return "top-0 right-0 mt-[-100px]";
    }
  };

  // Speech bubble pointer direction based on raccoon position
  const getBubblePointerPosition = () => {
    switch (position) {
      case "top-right":
      case "top-left":
        return "bottom-full left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white";
      case "bottom-right":
      case "bottom-left":
        return "top-full left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white";
      default:
        return "top-full left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white";
    }
  };
  
  return (
    <div 
      className={`raccoon-container ${positionStyles[position]} cursor-pointer`}
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
      
      <div className="relative w-40">
        {/* Body layer */}
        <img 
          src={RACCOON_BODY} 
          alt="Raccoon Body" 
          className="w-full h-auto relative z-10"
        />
        
        {/* Head layer - using fixed pixel values instead of percentages */}
        <div className="absolute" style={{ top: '-18px', left: '6px', zIndex: 20 }}>
          <div className="animate-bobble">
            <img 
              src={RACCOON_HEAD} 
              alt="Raccoon Head" 
              className="w-36 h-auto"
            />
            
            {/* Eyes layer - using fixed position relative to head */}
            <div className="absolute" style={{ top: '38%', left: '50%', transform: 'translateX(-50%)', zIndex: 30 }}>
              <img 
                ref={eyesRef}
                src={RACCOON_EYES} 
                alt="Raccoon Eyes" 
                className={`w-28 h-auto transition-transform duration-300 ${isMobile ? 'animate-wander' : ''}`}
                style={
                  !isMobile 
                    ? { transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }
                    : {}
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaccoonMascot;
