
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { CLOUDS_IMAGE, FENCE_IMAGE, MOUNTAINS_IMAGE, TREES_IMAGE } from "@/assets/parallaxImages";

const Welcome = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Info sections for the modals that appear as user scrolls
  const infoSections = [
    {
      title: "Find Your Perfect Band",
      description: "Band-it connects venues and event planners with talented musicians. No more endless searching or unreliable bookings!",
      triggerPosition: 0.2, // Show when page is scrolled 20%
    },
    {
      title: "Easy Booking Process",
      description: "Browse bands by genre, location, and availability. Compare pricing and packages in one place.",
      triggerPosition: 0.4, // Show when page is scrolled 40%
    },
    {
      title: "Reliable Performance",
      description: "All bands are vetted for quality and reliability. Read reviews from other clients before booking.",
      triggerPosition: 0.6, // Show when page is scrolled 60%
    }
  ];

  // Only initialize the page
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Prevent scrolling initially
    setTimeout(() => {
      document.body.style.overflow = "auto"; // Enable scrolling after a brief intro moment
    }, 1500);
    
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is restored on unmount
    };
  }, []);

  // Handle scroll events for parallax and showing modals
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = pageRef.current.scrollHeight;
        const scrollPercentage = scrollTop / (documentHeight - windowHeight);
        
        setScrollPosition(scrollPercentage);
        
        // Determine which modal to show based on scroll position
        infoSections.forEach((section, index) => {
          if (scrollPercentage >= section.triggerPosition && 
              scrollPercentage < (index < infoSections.length - 1 ? infoSections[index + 1].triggerPosition : 0.8)) {
            setActiveModal(index);
          }
        });
        
        // Show final modal when reaching the bottom
        if (scrollPercentage > 0.8) {
          setShowFinalModal(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [infoSections]);
  
  // Handle the "Go to Home Page" button click
  const handleContinue = () => {
    localStorage.setItem("hasVisitedBefore", "true");
    navigate("/");
  };

  return (
    <div ref={pageRef} className="overflow-x-hidden h-[400vh] relative">
      {/* Parallax container */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        {/* Sky/Clouds Layer - animated from right to left */}
        <div 
          className="absolute top-0 left-0 w-[200%] h-full bg-sky-100" 
          style={{ 
            backgroundImage: `url('${CLOUDS_IMAGE}')`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            zIndex: 1,
            animation: "cloudScroll 60s linear infinite"
          }}
        />
        
        {/* Mountains Layer */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[60%]"
          style={{ 
            backgroundImage: `url('${MOUNTAINS_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollPosition * 200}%)`, // Slowest movement - 15px per "second"
            zIndex: 2
          }}
        />
        
        {/* Trees Layer */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[40%]"
          style={{ 
            backgroundImage: `url('${TREES_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollPosition * 300}%)`, // Medium movement - 10px per "second"
            zIndex: 3
          }}
        />
        
        {/* Fence Layer */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[20%]"
          style={{ 
            backgroundImage: `url('${FENCE_IMAGE}')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollPosition * 400}%)`, // Fastest movement - 5px per "second"
            zIndex: 4
          }}
        />
        
        {/* Title text that fades as user scrolls */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - scrollPosition * 5) }}
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
        
        {/* Information modals that appear while scrolling */}
        {infoSections.map((section, index) => (
          <Dialog key={index} open={activeModal === index} onOpenChange={() => setActiveModal(null)}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{section.title}</DialogTitle>
                <DialogDescription>
                  {section.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end">
                <Button onClick={() => setActiveModal(null)}>
                  Continue
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
        
        {/* Final section with Go to Home button */}
        {showFinalModal && (
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
        )}
      </div>
    </div>
  );
};

export default Welcome;
