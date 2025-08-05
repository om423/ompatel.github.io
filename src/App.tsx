import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import IntroSplash from './components/IntroSplash';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    // Initialize theme - default to light mode
    localStorage.setItem('ompatel-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');

    // Check if user has seen the intro in this session
    const hasSeen = sessionStorage.getItem('ompatel-intro-seen');
    if (!hasSeen) {
      setShowIntro(true);
      // Mark as seen after showing
      setTimeout(() => {
        sessionStorage.setItem('ompatel-intro-seen', 'true');
      }, 2000);
    } else {
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasSeenIntro(true);
  };

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <AnimatePresence mode="wait">
          {showIntro ? (
            <IntroSplash key="intro" onComplete={handleIntroComplete} />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
