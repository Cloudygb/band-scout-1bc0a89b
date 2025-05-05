
import { useEffect, useState, useRef } from "react";
import { RACCOON_BODY, RACCOON_HEAD, RACCOON_EYES } from "@/assets";

interface RaccoonMascotProps {
  position?: "top-right" | "bottom-right" | "bottom-left" | "top-left";
}

const raccoonResponses = [
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
  const [currentResponseIndex, setCurrentResponseIndex] = useState(0);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const eyesRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
  
  const handleRaccoonClick = () => {
    setShowSpeechBubble(true);
    // Cycle to next response
    setCurrentResponseIndex((prevIndex) => 
      prevIndex === raccoonResponses.length - 1 ? 0 : prevIndex + 1
    );
    
    // Auto-hide speech bubble after 5 seconds
    setTimeout(() => {
      setShowSpeechBubble(false);
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
  const speechBubblePosition = {
    "top-right": { top: '-40px', left: '-60px' },
    "bottom-right": { top: '-40px', left: '-60px' },
    "bottom-left": { top: '-40px', right: '-60px' },
    "top-left": { top: '-40px', right: '-60px' }
  };
  
  return (
    <div 
      className={`raccoon-container ${positionStyles[position]}`}
      ref={containerRef}
    >
      <div className="relative w-40 cursor-pointer" onClick={handleRaccoonClick}>
        {/* Speech Bubble */}
        {showSpeechBubble && (
          <div className="absolute speech-bubble bg-white p-3 rounded-lg shadow-md z-30 min-w-[180px] max-w-[220px]" 
               style={{ 
                 top: speechBubblePosition[position].top, 
                 ...(speechBubblePosition[position].left ? { left: speechBubblePosition[position].left } : {}),
                 ...(speechBubblePosition[position].right ? { right: speechBubblePosition[position].right } : {})
               }}>
            <div className="font-bandit-speech text-bandit-brown-dark text-sm">
              {raccoonResponses[currentResponseIndex]}
            </div>
            <div className="absolute w-4 h-4 bg-white transform rotate-45 -bottom-1 left-[calc(50%-8px)]"></div>
          </div>
        )}
        
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
