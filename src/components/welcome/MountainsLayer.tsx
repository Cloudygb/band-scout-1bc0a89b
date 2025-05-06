
import React from "react";
import { MOUNTAINS_IMAGE } from "@/assets/parallaxImages";

interface MountainsLayerProps {
  scrollPosition: number;
}

const MountainsLayer: React.FC<MountainsLayerProps> = ({ scrollPosition }) => {
  // Calculate transform based on scroll position
  const calculateTranslateY = () => {
    const start = 0.05;
    const end = 0.85;
    const progress = Math.max(0, Math.min(1, (scrollPosition - start) / (end - start)));
    // Interpolate from 100% (off-screen) to 0% (in position)
    return `${100 * (1 - progress)}%`;
  };
  
  return (
    <div 
      className="fixed bottom-0 left-0 w-full h-screen transition-transform duration-300" 
      style={{ 
        backgroundImage: `url('${MOUNTAINS_IMAGE}')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        transform: `translateY(${calculateTranslateY()})`,
        zIndex: 2,
      }}
    />
  );
};

export default MountainsLayer;
