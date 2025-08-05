import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "FollowUp AI",
      role: "Technical Co-Founder",
      period: "2025–Present",
      description: "HIPAA-compliant post-op patient care platform with multi-agent LLM backend and real-time mobile frontend",
      technologies: ["LLaMA 3", "LangChain", "CrewAI", "AWS Lambda", "DynamoDB", "FastAPI", "React", "React Native", "Expo"],
      status: "active" as const,
      teamSize: 3,
      demoUrl: "https://followupai.netlify.app/",
      logo: "/followup.png",
      category: "Healthcare"
    },
    {
      title: "Stock Trend Prediction Pipeline",
      role: "ML Engineer",
      period: "Spring 2025",
      description: "Built full end-to-end ML pipeline using Random Forests to predict directional movement of S&P 500 stocks",
      technologies: ["Python", "PostgreSQL", "pandas", "yfinance", "scikit-learn", "Random Forest"],
      status: "completed" as const,
      githubUrl: "https://github.com/ompatel/stock-prediction",
      logo: "/python.jpg",
      category: "AI/ML"
    },
    {
      title: "Yellow Jacket Space Program",
      role: "Rocket Controls Lead",
      period: "2024–Present",
      description: "Led 12-person controls team to design software systems and test automation for liquid bipropellant rocket targeting 100 km altitude",
      technologies: ["C++", "Python", "MATLAB", "SolidWorks", "Real-time Systems"],
      status: "ongoing" as const,
      teamSize: 12,
      logo: "/yjsp.jpg",
      category: "Aerospace"
    },
    {
      title: "Ben T. Zinn Combustion Lab",
      role: "Research Assistant",
      period: "2024–2025",
      description: "Designed and tested custom combustion test rig to study high-altitude ignition for APUs (auxiliary power units)",
      technologies: ["SolidWorks", "MATLAB", "Data Acquisition", "Sensor Integration"],
      status: "completed" as const,
      logo: "/gt.jpg",
      category: "Aerospace"
    },
    {
      title: "GTRI Ramjet Facility Research",
      role: "Research Intern",
      period: "Summer 2023",
      description: "Designed experimental supersonic inlet test setup for solid-fueled ramjet under faculty mentorship",
      technologies: ["ANSYS", "CFD", "MATLAB", "Experimental Design"],
      status: "completed" as const,
      logo: "/gtri.jpg",
      category: "Aerospace"
    }
  ];

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Aerospace', 'Healthcare'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : activeFilter === 'Healthcare' 
      ? projects.filter(project => project.title === "FollowUp AI")
      : activeFilter === 'AI/ML'
        ? projects.filter(project => project.category === "AI/ML" || project.title === "FollowUp AI")
        : activeFilter === 'Full-Stack'
          ? projects.filter(project => project.title === "FollowUp AI")
          : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From AI-powered healthcare to rocket control systems, here's what I've been building
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {categories.map((category) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              data-filter={category}
              className={`transition-all duration-200 ${
                activeFilter === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-primary/10 hover:border-primary'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
            key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
            </motion.div>
        ))}
        </motion.div>
      </AnimatePresence>

      {/* No projects message */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground text-lg">
            No projects found in the "{activeFilter}" category.
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;