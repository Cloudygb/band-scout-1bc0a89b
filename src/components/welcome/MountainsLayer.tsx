
import React from "react";
import { MOUNTAINS_IMAGE } from "@/assets/parallaxImages";

interface MountainsLayerProps {
  scrollPosition: number;
}

const MountainsLayer: React.FC<MountainsLayerProps> = ({ scrollPosition }) => {
  // Simplified - just make mountains visible with minimal movement
  const opacity = 1; // Always visible
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${MOUNTAINS_IMAGE}')`,
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        opacity,
        zIndex: 2,
      }}
    />
  );
};

export default MountainsLayer;
