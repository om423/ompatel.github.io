import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, FileText, MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "opatel@gatech.edu",
      href: "mailto:opatel@gatech.edu",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/omhpatel",
      href: "https://linkedin.com/in/omhpatel/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/om423",
      href: "https://github.com/om423"
    },
    {
      icon: ExternalLink,
      label: "FollowUp AI Demo",
      value: "followupai.netlify.app",
      href: "https://followupai.netlify.app/"
    }
  ];

  const interests = [
    "AI/ML Engineering",
    "Quantitative Finance", 
    "Healthcare Tech",
    "Aerospace Controls",
    "Startup Opportunities",
    "Technical Leadership"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Interested in collaboration? Let's build something amazing together.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Large Get In Touch Box - Left */}
        <motion.div 
          className="lg:col-span-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="glass border-border/30 overflow-hidden h-full">
        <CardContent className="p-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
            {/* Contact info */}
                <motion.div className="space-y-6" variants={itemVariants}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                      {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                          <motion.div 
                            key={method.label} 
                            className="flex items-center gap-3"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <motion.div 
                              className={`p-2 rounded-lg ${method.primary ? 'bg-primary/10' : 'bg-secondary/10'}`}
                              whileHover={{ 
                                scale: 1.1,
                                rotate: 5,
                                transition: { type: "spring", stiffness: 400 }
                              }}
                            >
                          <IconComponent className={`w-5 h-5 ${method.primary ? 'text-primary' : 'text-secondary-foreground'}`} />
                            </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{method.label}</p>
                              <motion.a 
                            href={method.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                whileHover={{ color: "hsl(var(--primary))" }}
                                transition={{ duration: 0.2 }}
                          >
                            {method.value}
                              </motion.a>
                        </div>
                          </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                    <motion.div 
                      className="flex items-center gap-3 mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div 
                        className="p-2 bg-accent/10 rounded-lg"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                      >
                    <MapPin className="w-5 h-5 text-accent" />
                      </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Atlanta, GA</p>
                        <p className="text-xs text-muted-foreground mt-1">Willing to relocate</p>
                  </div>
                    </motion.div>
                  </div>
                </motion.div>

            {/* Quick contact */}
                <motion.div className="space-y-6" variants={itemVariants}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're a recruiter, founder, or fellow engineer, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                       <Button
                         className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground"
                         asChild
                       >
                         <a href="mailto:opatel@gatech.edu">
                           <Mail className="w-4 h-4 mr-2" />
                           Send me an email
                         </a>
                       </Button>
                     </motion.div>

                     <motion.div
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                       <Button
                         variant="outline"
                         className="w-full justify-start hover:bg-primary/10 hover:border-primary"
                         asChild
                       >
                         <a href="https://linkedin.com/in/omhpatel/" target="_blank" rel="noopener noreferrer">
                           <Linkedin className="w-4 h-4 mr-2" />
                           Connect on LinkedIn
                         </a>
                       </Button>
                     </motion.div>

                     <motion.div
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                       <Button
                         variant="outline"
                         className="w-full justify-start hover:bg-accent/10 hover:border-accent"
                         asChild
                       >
                         <a href="https://followupai.netlify.app/" target="_blank" rel="noopener noreferrer">
                           <ExternalLink className="w-4 h-4 mr-2" />
                           View FollowUp AI Demo
                         </a>
                       </Button>
                     </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column - Two Stacked Boxes */}
        <motion.div 
          className="space-y-6"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Focus Areas Box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Card className="glass border-border/30 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Focus Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-center">
                        <span className="text-sm font-medium text-primary">{interest}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Systems & AI Box */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Card className="glass border-border/30 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Systems & AI</h3>
                <div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="p-2 bg-accent/10 rounded-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      <MapPin className="w-5 h-5 text-accent" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Focus Areas</p>
                      <p className="text-foreground font-medium">Machine Learning, Healthcare Tech, Aerospace Engineering</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="p-2 bg-primary/10 rounded-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      <Clock className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-muted-foreground">Response time</p>
                      <p className="text-foreground font-medium">Within 24 hours</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;