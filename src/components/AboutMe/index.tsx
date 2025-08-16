'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Sparkles, Target, Code, Brain } from 'lucide-react';

function AboutMe() {
  const { aboutMeParagraphs } = data;

  const interests = [
    { icon: Code, label: 'Software Engineering' },
    { icon: Brain, label: 'Machine Learning' },
    { icon: Target, label: 'AI Research' },
  ];

  return (
    <motion.div
      className="w-full glass-effect dark:glass-effect-dark p-8 lg:p-10 rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="space-y-8">
        {/* Header with animated icon */}
        <motion.div
          className="flex items-center space-x-4 mb-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">About Me</h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-muted-foreground">{aboutMeParagraphs.paragraph1}</p>
          <p className="text-muted-foreground">{aboutMeParagraphs.paragraph2}</p>
        </motion.div>

        {/* Areas of Interest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            {aboutMeParagraphs.areasOfInterestHeading}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 border border-primary/10"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <interest.icon className="w-5 h-5 text-primary-600" />
                <span className="text-foreground font-medium">{interest.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
