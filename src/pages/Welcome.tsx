
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ParallaxContainer from "@/components/welcome/ParallaxContainer";
import ScrollingTextContainer from "@/components/welcome/ScrollingTextContainer";

interface TextSection {
  title: string;
  description: string;
  appearPosition: number;
  disappearPosition: number;
}

const Welcome = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFinalModal, setShowFinalModal] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Text sections that appear and disappear as user scrolls
  const textSections: TextSection[] = [
    {
      title: "Find Your Perfect Band",
      description: "Band-it connects venues and event planners with talented musicians. No more endless searching or unreliable bookings!",
      appearPosition: 0.25, // Start appearing earlier at 25%
      disappearPosition: 0.42, // Disappear by 42%
    },
    {
      title: "Easy Booking Process",
      description: "Browse bands by genre, location, and availability. Compare pricing and packages in one place.",
      appearPosition: 0.50, // Start appearing at 50%
      disappearPosition: 0.67, // Disappear by 67%
    },
    {
      title: "Reliable Performance",
      description: "All bands are vetted for quality and reliability. Read reviews from other clients before booking.",
      appearPosition: 0.75, // Start appearing at 75%
      disappearPosition: 0.92, // Disappear by 92%
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

  // Handle scroll events for parallax and showing text sections
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = pageRef.current.scrollHeight;
        const scrollPercentage = scrollTop / (documentHeight - windowHeight);
        
        setScrollPosition(scrollPercentage);
        
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
  }, []);
  
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
      
      {/* Text sections that appear and fade while scrolling */}
      {textSections.map((section, index) => (
        <ScrollingTextContainer
          key={index}
          textSection={section}
          scrollPosition={scrollPosition}
        />
      ))}
    </div>
  );
};

export default Welcome;
