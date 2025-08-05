import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Intersection Observer for navigation dots
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    document.addEventListener('click', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleScroll);
      observer.disconnect();
    };
  }, []);

  const sections = ['hero', 'projects', 'about', 'skills', 'awards', 'contact'];

  return (
    <motion.div 
      className="min-h-screen bg-background overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Header />

      {/* Navigation dots - fixed position */}
      <motion.nav 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="space-y-3">
          {sections.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`Navigate to ${section}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.nav>

      {/* Main content */}
      <main>
        <motion.section 
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.section>
        
        <motion.section 
          id="projects" 
          className="bg-gradient-subtle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectsSection />
        </motion.section>
        
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AboutSection />
        </motion.section>
        
        <motion.section 
          id="skills" 
          className="bg-gradient-subtle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SkillsSection />
        </motion.section>
        
        <motion.section 
          id="awards"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AwardsSection />
        </motion.section>
        
        <motion.section 
          id="contact" 
          className="bg-gradient-subtle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContactSection />
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="py-8 text-center border-t border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-muted-foreground">
          © 2025 Om Patel. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Index;
