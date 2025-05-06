
import React from "react";

export interface TextSection {
  title: string;
  description: string;
  appearPosition: number;
  disappearPosition: number;
}

interface ScrollingTextContainerProps {
  textSection: TextSection;
  scrollPosition: number;
}

const ScrollingTextContainer: React.FC<ScrollingTextContainerProps> = ({ 
  textSection, 
  scrollPosition 
}) => {
  // Calculate opacity based on scroll position
  const calculateOpacity = () => {
    const { appearPosition, disappearPosition } = textSection;
    
    // Total range for this section
    const totalRange = disappearPosition - appearPosition;
    
    // Reserve 60% of the total range for full opacity (in the middle)
    // First 20% of the range is for fading in
    const fadeInEnd = appearPosition + totalRange * 0.2; 
    // Last 20% of the range is for fading out
    const fadeOutStart = disappearPosition - totalRange * 0.2; 
    
    if (scrollPosition < appearPosition) {
      return 0; // Not yet visible
    } else if (scrollPosition > disappearPosition) {
      return 0; // No longer visible
    } else if (scrollPosition >= fadeInEnd && scrollPosition <= fadeOutStart) {
      return 1; // Full opacity in the middle ~60% of the range
    } else if (scrollPosition < fadeInEnd) {
      // Fade in during the first 20% of the range
      return (scrollPosition - appearPosition) / (fadeInEnd - appearPosition);
    } else {
      // Fade out during the last 20% of the range
      return 1 - (scrollPosition - fadeOutStart) / (disappearPosition - fadeOutStart);
    }
  };

  const opacity = calculateOpacity();
  
  // Don't render at all if completely transparent
  if (opacity <= 0) {
    return null;
  }

  return (
    <div 
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl w-full text-center px-4 z-20 pointer-events-none"
      style={{ opacity }}
    >
      <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-primary mb-2">{textSection.title}</h2>
        <p className="text-lg">{textSection.description}</p>
      </div>
    </div>
  );
};

export default ScrollingTextContainer;
