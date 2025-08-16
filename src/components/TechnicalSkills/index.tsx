'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import CIcon from 'icons/C';
import CSSIcon from 'icons/CSS';
import DockerIcon from 'icons/Docker';
import ExpressJsIcon from 'icons/ExpressJs';
import GitIcon from 'icons/Git';
import GitHubIcon from 'icons/GitHub';
import HTMLIcon from 'icons/HTML';
import JavaScriptIcon from 'icons/JavaScript';
import JestIcon from 'icons/Jest';
import JupyterIcon from 'icons/Jupyter';
import LinuxIcon from 'icons/Linux';
import NestJsIcon from 'icons/NestJs';
import NextJsIcon from 'icons/NextJs';
import NodeJsIcon from 'icons/NodeJs';
import NumPyIcon from 'icons/NumPy';
import PandasIcon from 'icons/Pandas';
import PlaywrightIcon from 'icons/Playwright';
import PostGreSQLIcon from 'icons/PostGreSQL';
import PostmanIcon from 'icons/Postman';
import PythonIcon from 'icons/Python';
import PyTorchIcon from 'icons/PyTorch';
import ReactIcon from 'icons/React';
import SanityIcon from 'icons/Sanity';
import ScikitLearnIcon from 'icons/Scikit-learn';
import SwaggerIcon from 'icons/Swagger';
import TailwindIcon from 'icons/Tailwind';
import TensorFlowIcon from 'icons/TensorFlow';
import TypeScriptIcon from 'icons/TypeScript';

function TechnicalSkills() {
  const { showcase } = data;
  const { technicalSkills } = showcase;

  const skillCategories = [
    {
      title: technicalSkills.languagesHeading,
      skills: [
        { icon: <JavaScriptIcon />, name: technicalSkills.languages.js, category: 'Language' },
        { icon: <TypeScriptIcon />, name: technicalSkills.languages.ts, category: 'Language' },
        { icon: <PythonIcon />, name: technicalSkills.languages.python, category: 'Language' },
        { icon: <CIcon />, name: technicalSkills.languages.c, category: 'Language' },
        { icon: <HTMLIcon />, name: technicalSkills.languages.html, category: 'Language' },
        { icon: <CSSIcon />, name: technicalSkills.languages.css, category: 'Language' },
      ],
    },
    {
      title: technicalSkills.frameworksHeading,
      skills: [
        { icon: <NextJsIcon />, name: technicalSkills.frameworks.next, category: 'Framework' },
        { icon: <ReactIcon />, name: technicalSkills.frameworks.react, category: 'Framework' },
        { icon: <NodeJsIcon />, name: technicalSkills.frameworks.node, category: 'Framework' },
        { icon: <NestJsIcon />, name: technicalSkills.frameworks.nest, category: 'Framework' },
        {
          icon: <ExpressJsIcon />,
          name: technicalSkills.frameworks.express,
          category: 'Framework',
        },
        {
          icon: <TailwindIcon />,
          name: technicalSkills.frameworks.tailwind,
          category: 'Framework',
        },
        { icon: <JestIcon />, name: technicalSkills.frameworks.jest, category: 'Framework' },
        {
          icon: <PlaywrightIcon />,
          name: technicalSkills.frameworks.playwright,
          category: 'Framework',
        },
        {
          icon: <PostGreSQLIcon />,
          name: technicalSkills.frameworks.postgres,
          category: 'Framework',
        },
        { icon: <SanityIcon />, name: technicalSkills.frameworks.sanity, category: 'Framework' },
      ],
    },
    {
      title: technicalSkills.developerToolsHeading,
      skills: [
        { icon: <GitIcon />, name: technicalSkills.developerTools.git, category: 'Tool' },
        { icon: <GitHubIcon />, name: technicalSkills.developerTools.github, category: 'Tool' },
        { icon: <LinuxIcon />, name: technicalSkills.developerTools.linux, category: 'Tool' },
        { icon: <DockerIcon />, name: technicalSkills.developerTools.docker, category: 'Tool' },
        { icon: <SwaggerIcon />, name: technicalSkills.developerTools.swagger, category: 'Tool' },
        { icon: <PostmanIcon />, name: technicalSkills.developerTools.postman, category: 'Tool' },
        { icon: <JupyterIcon />, name: technicalSkills.developerTools.jupyter, category: 'Tool' },
      ],
    },
    {
      title: technicalSkills.mlToolsHeading,
      skills: [
        { icon: <PyTorchIcon />, name: technicalSkills.mlTools.pytorch, category: 'ML Tool' },
        { icon: <TensorFlowIcon />, name: technicalSkills.mlTools.tensorflow, category: 'ML Tool' },
        { icon: <NumPyIcon />, name: technicalSkills.mlTools.numpy, category: 'ML Tool' },
        { icon: <PandasIcon />, name: technicalSkills.mlTools.pandas, category: 'ML Tool' },
        { icon: <ScikitLearnIcon />, name: technicalSkills.mlTools.scikit, category: 'ML Tool' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
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
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary-600 font-bold text-lg">⚡</span>
            </div>
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">
            {technicalSkills.heading}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} className="space-y-6" variants={categoryVariants}>
              <motion.h3
                className="text-2xl font-bold text-foreground border-b-2 border-primary/20 pb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {category.title}
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    variants={skillVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                      <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground text-center leading-tight">
                        {skill.name}
                      </span>

                      {/* Category Badge */}
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-700 dark:text-primary-300 rounded-full">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TechnicalSkills;
