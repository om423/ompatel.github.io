import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, DollarSign, Star, Trophy } from 'lucide-react';

const AwardsSection = () => {
  const achievements = [
    {
      title: "Eagle Scout",
      description: "Highest rank in Boy Scouts of America",
      icon: Trophy,
      color: "primary",
      year: "2021"
    },
    {
      title: "$25K+ Engineering Sponsorships",
      description: "Raised external funding for Yellow Jacket Space Program",
      icon: DollarSign,
      color: "accent",
      year: "2024"
    },
    {
      title: "National Merit Scholar",
      description: "Top 1% of PSAT/NMSQT test takers nationwide",
      icon: Star,
      color: "primary",
      year: "2022"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary';
      case 'accent':
        return 'text-accent';
      case 'secondary':
        return 'text-secondary-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10';
      case 'accent':
        return 'bg-accent/10';
      case 'secondary':
        return 'bg-secondary/10';
      default:
        return 'bg-muted/10';
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
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
          Awards & Recognition
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Recognition for academic excellence, leadership, and technical achievements
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          
          return (
            <motion.div
              key={achievement.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="glass border-border/30 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                  <motion.div 
                    className={`w-16 h-16 ${getBgColor(achievement.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                  <IconComponent className={`w-8 h-8 ${getIconColor(achievement.color)}`} />
                  </motion.div>
                
                <div className="flex items-center justify-center gap-2 mb-2">
                    <motion.h3 
                      className="font-semibold text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ color: "hsl(var(--primary))" }}
                      transition={{ duration: 0.2 }}
                    >
                      {achievement.title}
                    </motion.h3>
                  <Badge variant="outline" className="text-xs text-foreground">
                    {achievement.year}
                  </Badge>
                </div>
                
                  <motion.p 
                    className="text-sm text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                  {achievement.description}
                  </motion.p>
              </CardContent>
            </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default AwardsSection;