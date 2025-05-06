
import React from "react";
import { CLOUDS_IMAGE } from "@/assets/parallaxImages";

const CloudsLayer: React.FC = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full" 
      style={{ 
        backgroundImage: `url('${CLOUDS_IMAGE}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        zIndex: 1,
        animation: "cloudScroll 60s linear infinite"
      }}
    />
  );
};

export default CloudsLayer;
