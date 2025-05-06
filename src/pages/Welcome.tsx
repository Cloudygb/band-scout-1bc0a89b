
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
      title: "The Great Band Hunt",
      description: "Once upon a midnight gig, an event planner was drowning in flyers and endless phone tags. Every band search felt like chasing a unicorn in the fog. Then I uncovered Band-It — a magic treasure map that connects you to top musicians nearby. No more wild goose chases! Sign up on Band-It and let the music find you.",
      appearPosition: 0.25, // Start appearing earlier at 25%
      disappearPosition: 0.42, // Disappear by 42%
    },
    {
      title: "Taming the Schedule Circus",
      description: "In a planner's lair, calendars were bursting and panic was high. Two bands booked for the same slot — pure madness! Then I whipped out Band-It — in a blink you can filter bands by date, venue, genre, even budget. Voilà, no more juggling gigs. Sign up now and let Band-It play stage manager for you.",
      appearPosition: 0.50, // Start appearing at 50%
      disappearPosition: 0.67, // Disappear by 67%
    },
    {
      title: "The Grand Finale Guarantee",
      description: "One hour before showtime, I found a planner pacing behind the curtains. \"Will the band show—or bomb?\" the planner wondered. No sweat—Band-It is here: every act on our site is vetted and rated by real event pros. Trust me, you'll never book a dud. Sign up now and let Band-It make your event a hit!",
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
