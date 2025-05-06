
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TitleOverlayProps {
  scrollPosition: number;
  handleContinue: () => void;
}

const TitleOverlay: React.FC<TitleOverlayProps> = ({ scrollPosition, handleContinue }) => {
  // Title fades out as user scrolls down
  const opacity = Math.max(0, 1 - scrollPosition * 5);
  
  return (
    <div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
      style={{ opacity }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-lg mb-4">
        Welcome to Band-it
      </h1>
      <p className="text-xl md:text-2xl text-foreground drop-shadow-md max-w-2xl text-center px-4">
        Scroll down to discover how we can help you find the perfect band for your next event
      </p>
      <div className="flex flex-col mt-12 gap-4 items-center">
        <div className="animate-bounce text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
        <Button 
          onClick={handleContinue}
          className="pointer-events-auto"
          variant="secondary"
        >
          Skip to Home <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default TitleOverlay;
