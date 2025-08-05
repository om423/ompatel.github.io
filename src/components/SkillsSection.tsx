import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"],
      color: "primary"
    },
    {
      title: "Frameworks",
      skills: ["React", "React Native", "Node.js", "FastAPI", "LangChain", "CrewAI"],
      color: "accent"
    },
    {
      title: "AI/ML",
      skills: ["LLaMA 3", "VectorDBs", "scikit-learn", "pandas", "TensorFlow", "PyTorch"],
      color: "secondary"
    },
    {
      title: "Infrastructure",
      skills: ["AWS Lambda", "API Gateway", "Cognito", "S3", "DynamoDB", "SNS", "GCP", "PostgreSQL"],
      color: "primary"
    },
    {
      title: "Tools",
      skills: ["GitHub", "Docker", "Postman", "Amplify", "VSCode", "Linux"],
      color: "accent"
    },
    {
      title: "Hardware/Simulation",
      skills: ["ANSYS", "SolidWorks", "MATLAB", "Real-time Systems", "Signal Processing"],
      color: "muted"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20';
      case 'accent':
        return 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary-foreground border-secondary/20 hover:bg-secondary/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20 hover:bg-muted/20';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tools and technologies I use to build robust, scalable systems
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <Card className="glass border-border/30 hover:border-primary/30 transition-all duration-300">
            <CardHeader className="pb-4">
                <motion.h3 
                  className="text-lg font-semibold text-foreground"
                  whileHover={{ color: "hsl(var(--primary))" }}
                  transition={{ duration: 0.2 }}
                >
                  {category.title}
                </motion.h3>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                  <Badge
                    variant="outline"
                        className={`transition-all duration-200 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </Badge>
                    </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;