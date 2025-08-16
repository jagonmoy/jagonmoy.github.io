'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Trophy, Code, Target } from 'lucide-react';
import CodeforcesIcon from 'icons/Codeforces';
import LeetcodeIcon from 'icons/Leetcode';
import StopStalkIcon from 'icons/StopStalk';
import Link from 'next/link';

function CP() {
  const { showcase } = data;
  const { competitiveProgramming } = showcase;

  const cpProfiles = [
    {
      link: competitiveProgramming.stopstalkLink,
      icon: <StopStalkIcon />,
      name: 'StopStalk',
      color: 'from-purple-500 to-pink-600',
    },
    {
      link: competitiveProgramming.cfLink,
      icon: <CodeforcesIcon />,
      name: 'Codeforces',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      link: competitiveProgramming.leetCodeLink,
      icon: <LeetcodeIcon />,
      name: 'LeetCode',
      color: 'from-orange-500 to-yellow-600',
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
      className="w-full glass-effect dark:glass-effect-dark p-8 lg:p-10 rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="space-y-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl mb-4"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
            {competitiveProgramming.heading}
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Bullet Points */}
          <motion.div
            className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground">Key Highlights</h3>
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
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CP Profiles */}
          <motion.div
            className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="p-2 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Code className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground">Online Profiles</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cpProfiles.map((profile, index) => (
                <motion.div
                  key={profile.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <Link href={profile.link} target="_blank" className="group block">
                    <motion.div
                      className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-12 w-12 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {profile.icon}
                      </div>
                      <span className="text-foreground font-semibold group-hover:text-primary-600 transition-colors duration-300">
                        {profile.name}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CP;
