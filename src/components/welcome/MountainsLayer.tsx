
import React from "react";
import { MOUNTAINS_IMAGE } from "@/assets/parallaxImages";

interface MountainsLayerProps {
  scrollPosition: number;
}

const MountainsLayer: React.FC<MountainsLayerProps> = ({ scrollPosition }) => {
  const opacity = 1;
  
  return (
    <div 
      className="absolute bottom-0 left-0 w-full" 
      style={{ 
        backgroundImage: `url('${MOUNTAINS_IMAGE}')`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        opacity,
        zIndex: 2,
      }}
    />
  );
};

export default MountainsLayer;
