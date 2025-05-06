
import React from "react";
import { TREES_IMAGE } from "@/assets/parallaxImages";

interface TreesLayerProps {
  scrollPosition: number;
}

const TreesLayer: React.FC<TreesLayerProps> = ({ scrollPosition }) => {
  // Simplified - just make trees visible with minimal movement
  const opacity = 1; // Always visible
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${TREES_IMAGE}')`,
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "40vh",
        opacity,
        zIndex: 3,
      }}
    />
  );
};

export default TreesLayer;
