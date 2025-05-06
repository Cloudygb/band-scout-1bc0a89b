
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
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

  // Check if user has visited the site before
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (hasVisited) {
      setHasVisitedBefore(true);
      navigate("/");
    } else {
      document.body.style.overflow = "hidden"; // Prevent scrolling initially
      setTimeout(() => {
        document.body.style.overflow = "auto"; // Enable scrolling after a brief intro moment
      }, 1500);
    }
    
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is restored on unmount
    };
  }, [navigate]);

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
        
        // Show final modal and raccoon when reaching the bottom
        if (scrollPercentage > 0.8) {
          setShowFinalModal(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [infoSections]);
  
  // Handle the "Continue to Home" button click
  const handleContinue = () => {
    localStorage.setItem("hasVisitedBefore", "true");
    navigate("/");
  };
  
  // If user has visited before, redirect to home page
  if (hasVisitedBefore) {
    return null;
  }

  return (
    <div ref={pageRef} className="overflow-x-hidden h-[400vh] relative">
      {/* Parallax container */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
        {/* Sky/Clouds Layer - moves slowest */}
        <div 
          className="absolute top-0 left-0 w-[200%] h-full bg-sky-200" 
          style={{ 
            backgroundImage: `url('/lovable-uploads/93cf873b-02d6-4da8-99a9-09c557416601.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat-x",
            transform: `translateX(-${scrollPosition * 20}%)`,
            zIndex: 1
          }}
        />
        
        {/* Mountains Layer */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backgroundImage: `url('/lovable-uploads/9c4388d6-aa9f-488e-b113-e26968aa433b.png')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "repeat-x",
            bottom: `-${10 + scrollPosition * 20}%`,
            transform: `translateY(${scrollPosition * 30}%)`,
            zIndex: 2
          }}
        />
        
        {/* Trees Layer */}
        <div 
          className="absolute w-full h-full"
          style={{ 
            backgroundImage: `url('/lovable-uploads/8927b987-ce53-4280-809a-69c112ef47a9.png')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "repeat-x",
            bottom: `-${20 + scrollPosition * 30}%`,
            transform: `translateY(${scrollPosition * 50}%)`,
            zIndex: 3
          }}
        />
        
        {/* Fence Layer - moves fastest */}
        <div 
          className="absolute w-full h-1/2"
          style={{ 
            backgroundImage: `url('/lovable-uploads/fdc3fb76-7813-40c7-8a71-d5625d22fbb7.png')`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "repeat-x",
            bottom: `-${30 + scrollPosition * 40}%`,
            transform: `translateY(${scrollPosition * 70}%)`,
            zIndex: 4
          }}
        />
        
        {/* Title text that fades as user scrolls */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
          style={{ opacity: Math.max(0, 1 - scrollPosition * 5) }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
            Welcome to Band-it
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md max-w-2xl text-center px-4">
            Scroll down to discover how we can help you find the perfect band for your next event
          </p>
          <div className="animate-bounce mt-12 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
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
                <Button variant="outline" onClick={() => setActiveModal(null)}>
                  Continue Scrolling
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
        
        {/* Final section with raccoon and button */}
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
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
