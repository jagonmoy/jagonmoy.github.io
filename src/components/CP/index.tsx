'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Trophy, Code, Target, TrendingUp, Brain } from 'lucide-react';

function CP() {
  const { showcase } = data;
  const { competitiveProgramming } = showcase;

  const cpProfiles = [
    {
      link: competitiveProgramming.cfLink,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      name: 'Codeforces',
    },
    {
      link: competitiveProgramming.leetCodeLink,
      icon: <Brain className="w-6 h-6 text-white" />,
      name: 'LeetCode',
    },
    {
      link: competitiveProgramming.uhuntLink,
      icon: <Code className="w-6 h-6 text-white" />,
      name: 'UVa',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {competitiveProgramming.heading}
          </h2>
        </motion.div>

        {/* CP Content */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Key Highlights */}
          <motion.div
            className="glass-effect dark:glass-effect-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Key Highlights</h3>
            </div>
            <div className="space-y-3">
              {competitiveProgramming.bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Online Profiles */}
          <motion.div
            className="glass-effect dark:glass-effect-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Online Profiles</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cpProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{profile.icon}</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary-600 transition-colors duration-300">
                      {profile.name}
                    </h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CP;
