import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-bold text-foreground tracking-wider">OP</span>
            </motion.div>
            <motion.div
              className="hidden sm:block"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h1 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Om Patel
              </h1>
            </motion.div>
          </Link>

          {/* Right side - Theme Toggle */}
          {/* <div className="flex items-center gap-4">
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 