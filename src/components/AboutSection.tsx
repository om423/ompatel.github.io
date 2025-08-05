import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, ChevronDown } from 'lucide-react';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <motion.p variants={itemVariants}>
              Hi, I'm Om Patel. I'm a CS major at Georgia Tech focused on building robust systems 
              that translate real data into real-world outcomes.
            </motion.p>
            <motion.p variants={itemVariants}>
              From predictive pipelines to AI-driven healthcare tools to rockets, I lead projects 
              that demand reliability, resilience, and collaboration. My work spans machine learning, 
              healthcare technology, and aerospace engineering.
            </motion.p>
            <motion.p variants={itemVariants}>
              I believe in systems that not only work perfectly in theory but perform flawlessly 
              under real-world pressure—whether that's in a hospital, in orbit, or on the command line.
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="glass border-border/30 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {/* GT Logo */}
                <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/gt.jpg"
                    alt="Georgia Tech"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">Georgia Institute of Technology</h3>
                  <p className="text-muted-foreground">B.S. Computer Science + Math</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-foreground text-sm">May 2027</span>
                  <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 hover:bg-primary/10 rounded transition-colors"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-foreground" />
                  </motion.button>
                </div>
              </div>
              
              {/* Expandable content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isExpanded ? "auto" : 0, 
                  opacity: isExpanded ? 1 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-2">Relevant Courses:</p>
                  <div className="grid grid-cols-1 gap-1">
                    <span className="text-sm text-foreground">Data Structures & Algorithms</span>
                    <span className="text-sm text-foreground">Combinatorics</span>
                    <span className="text-sm text-foreground">Discrete Math</span>
                    <span className="text-sm text-foreground">Computing for Data Analysis</span>
                </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;