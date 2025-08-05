import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import DynamicTitle from './DynamicTitle';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/om423",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/omhpatel/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:opatel@gatech.edu",
      label: "Email"
    }
  ];

  const rotatingTitles = [
    "Systems Builder",
    "AI Developer", 
    "Startup Co-Founder",
    "Rocket Engineer"
  ];

  const scrollToFollowUpProject = () => {
    // First scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      
      // After scrolling, set the filter to show FollowUp AI
      setTimeout(() => {
        // Find the filter button for AI/ML and click it
        const filterButtons = document.querySelectorAll('[data-filter]');
        const aiMlFilter = Array.from(filterButtons).find(button => 
          button.textContent?.includes('AI/ML')
        ) as HTMLElement;
        
        if (aiMlFilter) {
          aiMlFilter.click();
        }
      }, 800); // Wait for scroll to complete
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isAnimated ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">Om Patel</span>
            </motion.h1>
          
            {/* Dynamic rotating title */}
            <motion.div 
              className="text-2xl md:text-3xl text-muted-foreground"
              variants={itemVariants}
            >
              <DynamicTitle titles={rotatingTitles} />
            </motion.div>
            
            {/* Intro text */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
            I build intelligent systems that work—in orbit, in hospitals, and on command line.
              From AI-powered healthcare to rocket control systems, I lead projects that demand 
              reliability, resilience, and collaboration.
            </motion.p>

        {/* Social links */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
          {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
            <Button
              variant="outline"
              size="lg"
                    className="glass border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Icon size={20} />
                {label}
              </a>
            </Button>
                </motion.div>
          ))}
            </motion.div>

        {/* Status indicator */}
            <motion.div 
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full cursor-pointer hover:bg-primary/10 transition-colors"
              variants={itemVariants}
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(147, 51, 234, 0.7)",
                  "0 0 0 10px rgba(147, 51, 234, 0)",
                  "0 0 0 0 rgba(147, 51, 234, 0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={scrollToFollowUpProject}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
          <span className="text-sm text-foreground">Currently building FollowUp AI</span>
            </motion.div>
          </motion.div>

          {/* Right side - Headshot */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105" />
              
              {/* Headshot card */}
              <div className="relative bg-card border border-border/30 rounded-3xl p-6 shadow-2xl">
                <div className="w-80 h-80 rounded-2xl overflow-hidden">
                  <img
                    src="/headshot.jpg"
                    alt="Om Patel"
                    className="w-full h-full object-cover"
                  />
        </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;