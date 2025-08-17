'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Languages, Globe, MessageCircle } from 'lucide-react';

function LanguageProficiency() {
  const { showcase } = data;
  const { languageProficiency } = showcase;

  const languageData = [
    {
      language: languageProficiency.english,
      description: languageProficiency.englishDescription,
      icon: Globe,
      color: 'from-blue-500 to-cyan-600',
      level: 'Professional',
    },
    {
      language: languageProficiency.bengali,
      description: languageProficiency.bengaliDescription,
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      level: 'Native',
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
            <Languages className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {languageProficiency.heading}
          </h2>
        </motion.div>

        {/* Language Items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {languageData.map((language, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 sm:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <language.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {language.language}
                </h3>
                <div className="mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${language.color}`}>
                    {language.level}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {language.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LanguageProficiency;
