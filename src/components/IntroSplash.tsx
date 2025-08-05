import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSplashProps {
  onComplete: () => void;
}

const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after 0.5 seconds
    const textTimer = setTimeout(() => setShowText(true), 500);
    
    // Complete after 2 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-background z-50 flex items-center justify-center"
      >
        <div className="text-center">
          {/* Logo/Initials */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              {/* Glowing background circle */}
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(147, 51, 234, 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* OP initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-foreground tracking-wider">
                  OP
                </span>
              </div>
            </div>
          </motion.div>

          {/* Website URL */}
          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-center">
                  <p className="text-lg text-muted-foreground font-light tracking-wide">
                    ompatel.dev
                  </p>
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-muted-foreground/50 to-transparent mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroSplash; 