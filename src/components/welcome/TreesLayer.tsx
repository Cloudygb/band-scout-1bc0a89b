
import React from "react";
import { TREES_IMAGE } from "@/assets/parallaxImages";

interface TreesLayerProps {
  scrollPosition: number;
}

const TreesLayer: React.FC<TreesLayerProps> = ({ scrollPosition }) => {
  // Trees appear after mountains are partially visible (around 20% scroll)
  const startPosition = 0.2; // When trees start appearing
  const translateY = Math.min(100, Math.max(0, (1 - Math.max(0, (scrollPosition - startPosition) * 0.1)) * 100));
  const opacity = Math.min(1, Math.max(0, (scrollPosition - startPosition) * 2));
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${TREES_IMAGE}')`,
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "40vh",
        transform: `translateY(${translateY}%)`,
        opacity,
        zIndex: 3,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
      }}
    />
  );
};

export default TreesLayer;
