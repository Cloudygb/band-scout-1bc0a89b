
import React from "react";
import { CLOUDS_IMAGE } from "@/assets/parallaxImages";

const CloudsLayer: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-screen pointer-events-none" 
      style={{ 
        backgroundImage: `url('${CLOUDS_IMAGE}')`,
        backgroundSize: "1500px auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-x",
        animation: "cloudScroll 60s linear infinite",
        zIndex: 1,
      }}
    />
  );
};

export default CloudsLayer;
