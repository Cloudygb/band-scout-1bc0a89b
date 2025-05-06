
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ParallaxContainer from "@/components/welcome/ParallaxContainer";
import InfoModal, { InfoSection } from "@/components/welcome/InfoModal";

const Welcome = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Info sections for the modals that appear as user scrolls
  const infoSections: InfoSection[] = [
    {
      title: "Find Your Perfect Band",
      description: "Band-it connects venues and event planners with talented musicians. No more endless searching or unreliable bookings!",
      triggerPosition: 0.25, // Show when page is scrolled 25%
    },
    {
      title: "Easy Booking Process",
      description: "Browse bands by genre, location, and availability. Compare pricing and packages in one place.",
      triggerPosition: 0.50, // Show when page is scrolled 50%
    },
    {
      title: "Reliable Performance",
      description: "All bands are vetted for quality and reliability. Read reviews from other clients before booking.",
      triggerPosition: 0.75, // Show when page is scrolled 75%
    }
  ];

  // Initialize the page
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
              scrollPercentage < (index < infoSections.length - 1 ? infoSections[index + 1].triggerPosition : 0.95)) {
            setActiveModal(index);
          }
        });
        
        // Show final modal ONLY when reaching the very bottom (98+%)
        // This ensures all images are fully visible and user has scrolled all the way down
        if (scrollPercentage > 0.98) {
          setShowFinalModal(true);
        } else {
          setShowFinalModal(false);
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
    <div ref={pageRef} className="overflow-x-hidden h-[500vh] relative">
      {/* Increased height to 500vh to allow for proper scrolling */}
      <ParallaxContainer 
        scrollPosition={scrollPosition}
        showFinalModal={showFinalModal}
        handleContinue={handleContinue}
      />
      
      {/* Information modals that appear while scrolling */}
      {infoSections.map((section, index) => (
        <InfoModal
          key={index}
          infoSection={section}
          isOpen={activeModal === index}
          onClose={() => setActiveModal(null)}
        />
      ))}
    </div>
  );
};

export default Welcome;
