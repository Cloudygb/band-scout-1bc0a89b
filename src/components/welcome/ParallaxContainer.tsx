
import React from "react";
import CloudsLayer from "./CloudsLayer";
import MountainsLayer from "./MountainsLayer";
import TreesLayer from "./TreesLayer";
import FenceLayer from "./FenceLayer";
import TitleOverlay from "./TitleOverlay";
import FinalCallToAction from "./FinalCallToAction";

interface ParallaxContainerProps {
  scrollPosition: number;
  showFinalModal: boolean;
  handleContinue: () => void;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  scrollPosition, 
  showFinalModal, 
  handleContinue 
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
      {/* Sky/Clouds Layer */}
      <CloudsLayer />
      
      {/* Mountains Layer - appears first */}
      <MountainsLayer scrollPosition={scrollPosition} />
      
      {/* Trees Layer - appears after mountains */}
      <TreesLayer scrollPosition={scrollPosition} />
      
      {/* Fence Layer - appears last */}
      <FenceLayer scrollPosition={scrollPosition} />
      
      {/* Title text that fades as user scrolls */}
      <TitleOverlay 
        scrollPosition={scrollPosition} 
        handleContinue={handleContinue} 
      />
      
      {/* Final section with Go to Home button - only appears after all images are fully visible */}
      {showFinalModal && (
        <FinalCallToAction handleContinue={handleContinue} />
      )}
    </div>
  );
};

export default ParallaxContainer;
