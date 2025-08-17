'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

function Education() {
  const { education } = data;

  const educationData = [
    {
      icon: GraduationCap,
      degree: education.university.degree,
      institution: education.university.name,
      duration: education.university.duration,
      result: education.university.result,
      bulletPoints: education.university.bulletPoints,
      type: 'University',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: School,
      degree: education.college.degree,
      institution: education.college.name,
      duration: education.college.duration,
      result: education.college.result,
      bulletPoints: education.college.bulletPoints,
      type: 'College',
      color: 'from-green-500 to-blue-600',
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
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {education.heading}
          </h2>
        </motion.div>

        {/* Education Items */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Education Type Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span
                  className={`px-2 py-1 sm:px-3 text-xs font-medium bg-gradient-to-r ${item.color} text-white rounded-full shadow-lg`}
                >
                  {item.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 pt-12 sm:pt-16">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <motion.div
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} shadow-lg self-start sm:self-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors duration-300 break-words leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-primary-600 mb-1 break-words">
                      {item.institution}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-muted-foreground mb-3">
                      <span>{item.duration}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="font-medium text-primary-600">{item.result}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2">
                  {item.bulletPoints.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * pointIndex, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Education;
