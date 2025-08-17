'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Sparkles, Code, Brain, Target, Users, Github, Linkedin, Mail } from 'lucide-react';

function AboutMe() {
  const { aboutMeParagraphs } = data;

  // Map areas of interest to appropriate icons
  const getIconForInterest = (interest: string) => {
    if (interest.includes('Software Engineering')) return Code;
    if (interest.includes('LLM') || interest.includes('Software Development')) return Brain;
    if (interest.includes('real-world problems')) return Target;
    if (interest.includes('Natural Language Processing')) return Brain;
    if (interest.includes('HCI') || interest.includes('Interaction')) return Users;
    return Code; // Default icon for Software Engineering focus
  };

  const interests = aboutMeParagraphs.areasOfInterest.map((interest) => ({
    icon: getIconForInterest(interest),
    label: interest,
  }));

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jagonmoy',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/jagonmoy',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:jagonmoy@example.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="w-full glass-effect dark:glass-effect-dark p-4 sm:p-6 lg:p-8 xl:p-10 rounded-2xl sm:rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {aboutMeParagraphs.heading}
          </h2>
        </motion.div>

        {/* About Me Content */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Description */}
          <motion.div className="text-center max-w-4xl mx-auto" variants={itemVariants}>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {aboutMeParagraphs.paragraph1}
            </p>
            {/* <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mt-4">
              {aboutMeParagraphs.paragraph2}
            </p> */}
          </motion.div>

          {/* Areas of Interest Title */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-6 sm:mb-8">
              Areas of Interest
            </h3>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={itemVariants}
          >
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 sm:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary-600 transition-colors duration-300">
                      {interest.label}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Let's Connect Section */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-3 sm:mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let&apos;s Connect
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              If you want to collaborate for AI research or Software development, feel free to reach
              out through any of the platforms below.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${link.color} transition-colors duration-300 p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
