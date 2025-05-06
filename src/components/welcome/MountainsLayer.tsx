
import React from "react";
import { MOUNTAINS_IMAGE } from "@/assets/parallaxImages";

interface MountainsLayerProps {
  scrollPosition: number;
}

const MountainsLayer: React.FC<MountainsLayerProps> = ({ scrollPosition }) => {
  // Make mountains appear gradually from the bottom as the user starts scrolling
  const translateY = Math.min(100, Math.max(0, (1 - scrollPosition * 0.1) * 100));
  const opacity = Math.min(1, Math.max(0, scrollPosition * 2));
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${MOUNTAINS_IMAGE}')`,
        backgroundSize: "contain",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        transform: `translateY(${translateY}%)`,
        opacity,
        zIndex: 2,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
      }}
    />
  );
};

export default MountainsLayer;
