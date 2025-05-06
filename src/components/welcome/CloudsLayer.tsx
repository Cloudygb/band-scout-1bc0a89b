
import React from "react";
import { CLOUDS_IMAGE } from "@/assets/parallaxImages";

const CloudsLayer: React.FC = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-[200%] h-full bg-sky-100" 
      style={{ 
        backgroundImage: `url('${CLOUDS_IMAGE}')`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-x",
        zIndex: 1,
        animation: "cloudScroll 60s linear infinite"
      }}
    />
  );
};

export default CloudsLayer;
