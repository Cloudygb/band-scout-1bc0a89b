
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCallToActionProps {
  handleContinue: () => void;
}

const FinalCallToAction: React.FC<FinalCallToActionProps> = ({ handleContinue }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/20 to-transparent p-8 z-20 flex flex-col items-center">
      <div className="animate-bounce mb-4">
        <div className="relative">
          <img 
            src="/lovable-uploads/04e8d05e-ecd0-4b2d-b616-f3261ce37016.png" 
            alt="Raccoon mascot" 
            className="w-24 h-auto"
          />
          <div className="absolute top-0 right-0 bg-white p-2 rounded-full rounded-bl-none">
            <p className="text-sm font-medium">Ready to rock?</p>
          </div>
        </div>
      </div>
      <Button 
        onClick={handleContinue}
        className="animate-pulse mt-4"
        size="lg"
      >
        Go to Home Page <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default FinalCallToAction;
