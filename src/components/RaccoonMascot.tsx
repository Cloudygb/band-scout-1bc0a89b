
import { useEffect, useState, useRef } from "react";
import { RACCOON_BODY, RACCOON_HEAD, RACCOON_EYES } from "@/assets";

interface RaccoonMascotProps {
  position?: "top-right" | "bottom-right" | "bottom-left" | "top-left";
}

const RaccoonMascot = ({ position = "bottom-right" }: RaccoonMascotProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
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
  
  // Position styles
  const positionStyles = {
    "top-right": "top-0 right-0 pt-20 pr-4",
    "bottom-right": "bottom-0 right-0 pb-4 pr-4",
    "bottom-left": "bottom-0 left-0 pb-4 pl-4",
    "top-left": "top-0 left-0 pt-20 pl-4"
  };
  
  return (
    <div 
      className={`raccoon-container ${positionStyles[position]}`}
      ref={containerRef}
    >
      <div className="relative w-40">
        {/* Body layer */}
        <img 
          src={RACCOON_BODY} 
          alt="Raccoon Body" 
          className="w-full h-auto relative z-10"
        />
        
        {/* Head layer with bobble animation - properly positioned on the body */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 z-20 animate-bobble">
          <img 
            src={RACCOON_HEAD} 
            alt="Raccoon Head" 
            className="w-36 h-auto"
          />
          
          {/* Eyes layer that follows mouse or wanders randomly - properly positioned on the head */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-30">
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
  );
};

export default RaccoonMascot;
