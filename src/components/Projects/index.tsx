'use client';

import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Globe,
  Users,
  Code,
  Database,
  Bot,
  Smartphone,
  FolderOpen,
} from 'lucide-react';

import data from '../../data/data.json';

// Project type icon mapping
const getProjectIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'web app':
      return <Globe className="w-5 h-5 text-white" />;
    case 'collaboration':
      return <Users className="w-5 h-5 text-white" />;
    case 'api':
      return <Code className="w-5 h-5 text-white" />;
    case 'database':
      return <Database className="w-5 h-5 text-white" />;
    case 'bot':
      return <Bot className="w-5 h-5 text-white" />;
    case 'mobile':
      return <Smartphone className="w-5 h-5 text-white" />;
    case 'learning':
      return <Code className="w-5 h-5 text-white" />;
    default:
      return <Code className="w-5 h-5 text-white" />;
  }
};

function Projects() {
  const { showcase } = data;
  const { projects } = showcase;

  const projectData = [
    {
      name: projects.project1.name,
      description: projects.project1.description,
      technologies: projects.project1.technologies,
      link1: projects.project1.link,
      buttonTitle1: 'Github',
      type: 'Bot',
    },
    {
      name: `${projects.project2.name1} & ${projects.project2.name2}`,
      description: projects.project2.description,
      technologies: projects.project2.technologies,
      link1: projects.project2.link1,
      buttonTitle1: projects.project2.name1,
      link2: projects.project2.link2,
      buttonTitle2: projects.project2.name2,
      type: 'Learning',
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

  const cardVariants = {
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
      <div className="space-y-6 sm:space-y-8">
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
            <FolderOpen className="w-6 h-6 sm:w-8 sm:w-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {projects.heading}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Type Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                <span className="px-2 py-1 sm:px-3 text-xs font-medium bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full shadow-lg">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 pt-12 sm:pt-16 relative z-10">
                <div className="mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                    <motion.div
                      className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg self-start sm:self-auto"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {getProjectIcon(project.type)}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors duration-300 break-words leading-tight">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(', ').map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 sm:px-3 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  {/* GitHub Link Button */}
                  <motion.button
                    type="button"
                    className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (project.link1) {
                        window.open(project.link1, '_blank');
                      }
                    }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.buttonTitle1}</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.button>

                  {/* Second GitHub Link for projects that have it */}
                  {project.link2 && (
                    <motion.button
                      type="button"
                      className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 active:bg-secondary/90 transition-all duration-200 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 focus:ring-offset-background text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        if (project.link2) {
                          window.open(project.link2, '_blank');
                        }
                      }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.buttonTitle2}</span>
                    </motion.button>
                  )}
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

export default Projects;
