
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import BandProfileSetup from "./pages/BandProfileSetup";
import BandsListing from "./pages/BandsListing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import BookingSuccess from "./components/BookingSuccess";
import RaccoonMascot from "./components/RaccoonMascot";
import WelcomeStory from "./components/WelcomeStory";

const queryClient = new QueryClient();

const App = () => {
  const [position, setPosition] = useState<"top-right" | "bottom-right" | "bottom-left" | "top-left">("bottom-right");
  
  // Change raccoon position based on route
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      
      if (path === "/") {
        setPosition("bottom-right");
      } else if (path.includes("/bands")) {
        setPosition("top-right");
      } else if (path.includes("/signup") || path.includes("/login")) {
        setPosition("bottom-left");
      } else {
        setPosition("bottom-right");
      }
    };
    
    // Initial check
    handleRouteChange();
    
    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange);
    
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <WelcomeStory />
            <RaccoonMascot position={position} />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/bands" element={<BandsListing />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/band-profile-setup" element={<BandProfileSetup />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/booking-success" element={<BookingSuccess />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
