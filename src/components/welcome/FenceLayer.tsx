
import React from "react";
import { FENCE_IMAGE } from "@/assets/parallaxImages";

interface FenceLayerProps {
  scrollPosition: number;
}

const FenceLayer: React.FC<FenceLayerProps> = ({ scrollPosition }) => {
  // Simplified - just make fence visible with minimal movement
  const opacity = 1; // Always visible
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${FENCE_IMAGE}')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        opacity,
        zIndex: 4,
      }}
    />
  );
};

export default FenceLayer;
