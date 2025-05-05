
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RACCOON_HEAD } from "@/assets";
import { Music, Users, CalendarClock, Check } from "lucide-react";

const WelcomeStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // Check if it's the first visit
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("banditWelcomeShown");
    
    if (!hasVisitedBefore) {
      setIsVisible(true);
      localStorage.setItem("banditWelcomeShown", "true");
    }
  }, []);
  
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      setProgress((currentStep + 1) * 33.33);
    } else {
      setIsVisible(false);
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="story-overlay animate-fade-in">
      <div className="story-content">
        <div className="absolute top-4 right-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsVisible(false)}
            className="text-bandit-brown-dark hover:text-bandit-brown"
          >
            Skip
          </Button>
        </div>
        
        <div className="relative px-2 py-8 sm:p-8 flex flex-col items-center min-h-[400px]">
          {/* Step 1: The Problem */}
          <div className={`story-section ${currentStep === 0 ? 'active' : 'hidden'}`}>
            <div className="flex justify-center mb-4">
              <img src={RACCOON_HEAD} alt="Band-it Mascot" className="w-32 h-32 animate-bobble" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-bandit-brown-dark mb-4">
              Finding the right band shouldn't be a heist!
            </h2>
            <p className="text-center mb-6 text-bandit-brown max-w-xl mx-auto">
              Planning an event is stressful enough without having to search high and low for the perfect musical talent. Most event planners waste hours searching, calling, and negotiating with bands.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-bandit-muted p-4 rounded-lg text-center">
                <p className="font-medium text-bandit-brown-dark">Time Consuming</p>
              </div>
              <div className="bg-bandit-muted p-4 rounded-lg text-center">
                <p className="font-medium text-bandit-brown-dark">Unreliable Options</p>
              </div>
              <div className="bg-bandit-muted p-4 rounded-lg text-center">
                <p className="font-medium text-bandit-brown-dark">Price Uncertainty</p>
              </div>
            </div>
          </div>
          
          {/* Step 2: Our Solution */}
          <div className={`story-section ${currentStep === 1 ? 'active' : 'hidden'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-bandit-green-dark mb-4">
              Meet Band-it: Your musical matchmaker!
            </h2>
            <p className="text-center mb-8 text-bandit-brown max-w-xl mx-auto">
              We've created the easiest way to find and book talented musicians for any event. No more endless searching or unreliable bookings!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-bandit-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="text-bandit-green" />
                </div>
                <h3 className="font-semibold mb-2">Browse & Listen</h3>
                <p className="text-sm text-bandit-brown">Explore local talent and hear samples before booking</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-bandit-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-bandit-green" />
                </div>
                <h3 className="font-semibold mb-2">Verified Artists</h3>
                <p className="text-sm text-bandit-brown">All bands are vetted for quality and reliability</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-bandit-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarClock className="text-bandit-green" />
                </div>
                <h3 className="font-semibold mb-2">Easy Booking</h3>
                <p className="text-sm text-bandit-brown">Secure your date with just a few clicks</p>
              </div>
            </div>
          </div>
          
          {/* Step 3: User Benefits */}
          <div className={`story-section ${currentStep === 2 ? 'active' : 'hidden'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-bandit-green-dark mb-4">
              How Band-it saves your day
            </h2>
            <p className="text-center mb-8 text-bandit-brown max-w-xl mx-auto">
              We take the stress out of finding the perfect musical match for your event.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-bandit-green/20 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-bandit-green" />
                </div>
                <div>
                  <h3 className="font-medium">Save Time</h3>
                  <p className="text-sm text-bandit-brown">Find the perfect band in minutes, not hours or days</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-bandit-green/20 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-bandit-green" />
                </div>
                <div>
                  <h3 className="font-medium">Transparent Pricing</h3>
                  <p className="text-sm text-bandit-brown">Clear rates with no hidden fees or surprises</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-bandit-green/20 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-bandit-green" />
                </div>
                <div>
                  <h3 className="font-medium">Peace of Mind</h3>
                  <p className="text-sm text-bandit-brown">Reliable musicians with reviews and performance history</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-bandit-green/20 p-1 rounded-full mt-1">
                  <Check className="h-4 w-4 text-bandit-green" />
                </div>
                <div>
                  <h3 className="font-medium">Perfect Match</h3>
                  <p className="text-sm text-bandit-brown">Find exactly the style and vibe your event needs</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4: Call to Action */}
          <div className={`story-section ${currentStep === 3 ? 'active' : 'hidden'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-bandit-brown-dark mb-4">
              Ready to make your event unforgettable?
            </h2>
            <div className="flex justify-center my-8">
              <img src={RACCOON_HEAD} alt="Band-it Mascot" className="w-40 h-40 animate-bobble" />
            </div>
            <div className="text-center">
              <Button 
                onClick={() => setIsVisible(false)}
                className="bg-bandit-green hover:bg-bandit-green-dark text-white px-8 py-6 text-lg rounded-full"
              >
                Start Exploring
              </Button>
              <p className="mt-4 text-bandit-brown text-sm">
                Let Band-it help you find the perfect musical match!
              </p>
            </div>
          </div>
          
          {/* Progress bar and next button */}
          <div className="mt-auto pt-8 w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-bandit-brown-dark">
                {currentStep + 1} of 4
              </span>
            </div>
            
            <Button 
              onClick={handleNextStep}
              className="bg-bandit-brown hover:bg-bandit-brown-dark text-white"
            >
              {currentStep < 3 ? "Next" : "Get Started"}
            </Button>
          </div>
        </div>
        
        <div className="story-progress">
          <div 
            className="story-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeStory;
