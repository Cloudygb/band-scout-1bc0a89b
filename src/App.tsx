
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import BandProfileSetup from "./pages/BandProfileSetup";
import ClientProfileSetup from "./pages/ClientProfileSetup";
import BandsListing from "./pages/BandsListing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import BookingSuccess from "./components/BookingSuccess";
import RaccoonMascot from "./components/RaccoonMascot";
import Welcome from "./pages/Welcome";

const queryClient = new QueryClient();

const App = () => {
  const [position, setPosition] = useState<"top-right" | "bottom-right" | "bottom-left" | "top-left">("bottom-right");
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);
  
  // Check if user has visited before and hide raccoon on welcome page
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    setHasVisitedBefore(!!hasVisited);
  }, []);
  
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
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              {/* Only show raccoon if not on welcome page */}
              {window.location.pathname !== "/welcome" && <RaccoonMascot position={position} />}
              <Routes>
                {/* Welcome page is its own standalone route */}
                <Route path="/welcome" element={<Welcome />} />
                
                {/* Root path - redirect to welcome if first visit, otherwise show home */}
                <Route path="/" element={
                  !hasVisitedBefore ? <Navigate to="/welcome" /> : (
                    <Layout>
                      <Index />
                    </Layout>
                  )
                } />
                
                {/* All other routes within layout */}
                <Route path="/about" element={
                  <Layout>
                    <About />
                  </Layout>
                } />
                <Route path="/how-it-works" element={
                  <Layout>
                    <HowItWorks />
                  </Layout>
                } />
                <Route path="/bands" element={
                  <Layout>
                    <BandsListing />
                  </Layout>
                } />
                <Route path="/signup" element={
                  <Layout>
                    <SignUp />
                  </Layout>
                } />
                <Route path="/login" element={
                  <Layout>
                    <Login />
                  </Layout>
                } />
                <Route path="/band-profile-setup" element={
                  <Layout>
                    <BandProfileSetup />
                  </Layout>
                } />
                <Route path="/client-profile-setup" element={
                  <Layout>
                    <ClientProfileSetup />
                  </Layout>
                } />
                <Route path="/privacy-policy" element={
                  <Layout>
                    <PrivacyPolicy />
                  </Layout>
                } />
                <Route path="/booking-success" element={
                  <Layout>
                    <BookingSuccess />
                  </Layout>
                } />
                
                {/* 404 page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
