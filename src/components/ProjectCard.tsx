import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  teamSize?: number;
  status?: 'active' | 'completed' | 'ongoing';
  logo?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  period,
  description,
  technologies,
  githubUrl,
  demoUrl,
  teamSize,
  status = 'completed',
  logo,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    active: 'bg-green-500/20 text-green-600 border-green-500/30',
    completed: 'bg-blue-500/20 text-blue-600 border-blue-500/30',
    ongoing: 'bg-orange-500/20 text-orange-600 border-orange-500/30'
  };

  const handleCardClick = () => {
    // On mobile, always expand/collapse instead of opening external links
    if (window.innerWidth <= 768) {
      setIsExpanded(!isExpanded);
    } else {
      // Desktop behavior - open external links if available
      if (githubUrl || demoUrl) {
        window.open(githubUrl || demoUrl, '_blank');
      } else {
        setIsExpanded(!isExpanded);
      }
    }
  };

  const shouldShowExpandButton = () => {
    // Show expand button on mobile for all projects, or on desktop for projects without external links
    return window.innerWidth <= 768 || (!githubUrl && !demoUrl);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <motion.div
        whileHover={{ 
          scale: window.innerWidth > 768 ? 1.02 : 1,
          y: window.innerWidth > 768 ? -4 : 0,
          transition: { type: "spring", stiffness: 400 }
        }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => window.innerWidth > 768 && setIsHovered(true)}
        onHoverEnd={() => window.innerWidth > 768 && setIsHovered(false)}
      >
    <Card 
          className={`project-card h-full cursor-pointer border-border/50 transition-all duration-300 overflow-hidden ${
            isHovered ? 'border-primary/50 shadow-lg' : ''
          }`}
          onClick={handleCardClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                {/* Project Logo */}
                {logo && (
                  <motion.div
                    className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src={logo}
                      alt={`${title} logo`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                
          <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors"
                  >
                    {title}
                  </motion.h3>
            <p className="text-primary font-medium">{role}</p>
          </div>
              </div>
              
              <Badge className={`${statusColors[status]} text-xs border`}>
            {status === 'active' ? 'Active' : status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {period}
          </div>
          {teamSize && (
            <div className="flex items-center gap-1">
              <Users size={14} />
              {teamSize} team members
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
            {/* Default state - short description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

            {/* Expandable content on hover (desktop) or when expanded (mobile) */}
            <AnimatePresence>
              {(isHovered || isExpanded) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
            <Badge 
              variant="secondary" 
              className="text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors"
            >
              {tech}
            </Badge>
                      </motion.div>
          ))}
        </div>

        {/* Action buttons - only show on desktop or when expanded on mobile */}
        {(window.innerWidth > 768 || isExpanded) && (
        <div className="flex gap-2">
          {githubUrl && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 hover:bg-primary/10 hover:border-primary"
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl, '_blank');
              }}
            >
              <Github size={14} />
              Code
            </Button>
                        </motion.div>
          )}
          {demoUrl && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 hover:bg-accent/10 hover:border-accent"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demoUrl, '_blank');
              }}
            >
              <ExternalLink size={14} />
              Demo
            </Button>
                        </motion.div>
          )}
        </div>
        )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Show more/less button - always show on mobile, conditional on desktop */}
            {shouldShowExpandButton() && (
              <motion.div 
                className="mt-3 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp size={14} />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={14} />
                      Show more
                    </>
                  )}
          </Button>
              </motion.div>
            )}
      </CardContent>
    </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;