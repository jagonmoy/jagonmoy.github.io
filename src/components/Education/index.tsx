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
            <GraduationCap className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">{education.heading}</h2>
        </motion.div>

        {/* Education Items */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Education Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${item.color} text-white rounded-full shadow-lg`}
                >
                  {item.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 mb-1">
                      {item.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{item.duration}</span>
                      <span>•</span>
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
                      <p className="text-muted-foreground leading-relaxed">{point}</p>
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
