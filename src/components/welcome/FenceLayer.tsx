
import React from "react";
import { FENCE_IMAGE } from "@/assets/parallaxImages";

interface FenceLayerProps {
  scrollPosition: number;
}

const FenceLayer: React.FC<FenceLayerProps> = ({ scrollPosition }) => {
  // Fence appears after trees are partially visible (around 40% scroll)
  const startPosition = 0.4; // When fence starts appearing
  const translateY = Math.min(100, Math.max(0, (1 - Math.max(0, (scrollPosition - startPosition) * 0.1)) * 100));
  const opacity = Math.min(1, Math.max(0, (scrollPosition - startPosition) * 2));
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${FENCE_IMAGE}')`,
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "20vh",
        transform: `translateY(${translateY}%)`,
        opacity,
        zIndex: 4,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
      }}
    />
  );
};

export default FenceLayer;
