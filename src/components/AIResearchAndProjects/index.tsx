'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Github, Play, ExternalLink } from 'lucide-react';

function AIResearchAndProjects() {
  const { experience } = data;
  const { artificial_intelligence } = experience;

  const aiResearchData = [
    {
      title: artificial_intelligence.research1.title,
      description: artificial_intelligence.research1.description,
      organization: artificial_intelligence.research1.orgnaization,
      technologies: artificial_intelligence.research1.technologies,
      bulletPoints: artificial_intelligence.research1.bulletPoints,
      type: 'AI Research',
      color: 'from-blue-500 to-cyan-600',
      hasDownload: false,
      githublink: (artificial_intelligence.research1 as any).githublink || '',
      videoDemo: (artificial_intelligence.research1 as any).videoDemo || '',
      warning: artificial_intelligence.research1.warning || '',
    },
    {
      title: artificial_intelligence.research2.title,
      description: artificial_intelligence.research2.description,
      organization: artificial_intelligence.research2.orgnaization,
      technologies: artificial_intelligence.research2.technologies,
      bulletPoints: artificial_intelligence.research2.bulletPoints,
      type: 'AI Project',
      color: 'from-green-500 to-emerald-600',
      hasDownload: false,
      githublink: artificial_intelligence.research2.githublink || '',
      videoDemo: artificial_intelligence.research2.videoDemo || '',
      warning: artificial_intelligence.research2.warning || '',
    },
    {
      title: artificial_intelligence.research3.title,
      description: artificial_intelligence.research3.description,
      organization: artificial_intelligence.research3.orgnaization,
      technologies: artificial_intelligence.research3.technologies,
      bulletPoints: artificial_intelligence.research3.bulletPoints,
      type: 'AI Project',
      color: 'from-orange-500 to-yellow-600',
      hasDownload: false,
      githublink: artificial_intelligence.research3.githublink || '',
      videoDemo: artificial_intelligence.research3.videoDemo || '',
      liveDemo: (artificial_intelligence.research3 as any).liveDemo || '',
      warning: (artificial_intelligence.research3 as any).warning || '',
    },
    {
      title: artificial_intelligence.research4.title,
      description: artificial_intelligence.research4.description,
      organization: artificial_intelligence.research4.orgnaization,
      technologies: artificial_intelligence.research4.technologies,
      bulletPoints: artificial_intelligence.research4.bulletPoints,
      type: 'AI Project',
      color: 'from-red-500 to-pink-600',
      hasDownload: false,
      githublink: (artificial_intelligence.research4 as any).GithubLink || '',
      videoDemo: artificial_intelligence.research4.videoDemo || '',
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
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {artificial_intelligence.heading}
          </h2>
        </motion.div>

        {/* AI Research & Projects Items */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aiResearchData.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Research Type Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <span className="px-2 py-1 sm:px-3 text-xs font-medium bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full shadow-lg">
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
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors duration-300 break-words leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-primary-600 mb-1 break-words">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 sm:px-3 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech.trim()}
                      </span>
                    ))}
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

                {/* Warning Message */}
                {item.warning && (
                  <motion.div
                    className="my-4 p-3 sm:p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">!</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                          {item.warning}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                {(item.githublink || item.videoDemo || item.liveDemo) && (
                  <motion.div
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:space-x-3 mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {item.githublink && (
                      <motion.button
                        type="button"
                        className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (item.githublink) {
                            window.open(item.githublink, '_blank');
                          }
                        }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Github</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.button>
                    )}

                    {item.videoDemo && (
                      <motion.button
                        type="button"
                        className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 active:bg-secondary/90 transition-all duration-200 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-background text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (item.videoDemo) {
                            window.open(item.videoDemo, '_blank');
                          }
                        }}
                      >
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">Watch Demo</span>
                      </motion.button>
                    )}

                    {item.liveDemo && (
                      <motion.button
                        type="button"
                        className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 active:from-green-700 active:to-emerald-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background text-sm font-medium shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (item.liveDemo) {
                            window.open(item.liveDemo, '_blank');
                          }
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AIResearchAndProjects;
