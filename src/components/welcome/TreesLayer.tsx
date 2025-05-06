
import React from "react";
import { TREES_IMAGE } from "@/assets/parallaxImages";

interface TreesLayerProps {
  scrollPosition: number;
}

const TreesLayer: React.FC<TreesLayerProps> = ({ scrollPosition }) => {
  // Calculate transform based on scroll position
  const calculateTranslateY = () => {
    const start = 0.20;
    const end = 0.85;
    const progress = Math.max(0, Math.min(1, (scrollPosition - start) / (end - start)));
    // Interpolate from 100% (off-screen) to 0% (in position)
    return `${100 * (1 - progress)}%`;
  };
  
  return (
    <div 
      className="fixed bottom-0 left-0 w-full pointer-events-none" 
      style={{ 
        backgroundImage: `url('${TREES_IMAGE}')`,
        backgroundSize: "100% auto",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "auto",
        transform: `translateY(${calculateTranslateY()})`,
        zIndex: 3,
        minHeight: "100vh",
      }}
    />
  );
};

export default TreesLayer;
