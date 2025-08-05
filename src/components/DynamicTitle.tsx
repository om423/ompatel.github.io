import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicTitleProps {
  titles: string[];
  speed?: number;
  delay?: number;
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({ 
  titles, 
  speed = 100, 
  delay = 2000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (isTyping) {
      if (currentText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, isDeleting, currentIndex, titles, speed, delay]);

  return (
    <div className="inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary font-medium"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-primary ml-1"
          />
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default DynamicTitle; 