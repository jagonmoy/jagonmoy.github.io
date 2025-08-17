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
import JavaScriptIcon from 'icons/JavaScript'; // ← ensure file name & path casing matches
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
import PyTorchIcon from 'icons/PyTorch'; // ← ensure file name & path casing matches
import ReactIcon from 'icons/React';
import SanityIcon from 'icons/Sanity';
import ScikitLearnIcon from 'icons/Scikit-learn';
import SwaggerIcon from 'icons/Swagger';
import TailwindIcon from 'icons/Tailwind';
import TensorFlowIcon from 'icons/TensorFlow';
import TypeScriptIcon from 'icons/TypeScript';
import { Code } from 'lucide-react';
import React from 'react';

// Icon wrapper component for better iOS compatibility
const IconWrapper = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  const iconRef = React.useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Force SVG icons to be visible on iOS
    if (iconRef.current) {
      const svgElement = iconRef.current.querySelector('svg');
      if (svgElement) {
        // Force iOS Safari to render the SVG
        svgElement.style.display = 'block';
        svgElement.style.width = '100%';
        svgElement.style.height = '100%';
        svgElement.style.minWidth = '32px';
        svgElement.style.minHeight = '32px';

        // Force all SVG children to be visible
        const svgChildren = svgElement.querySelectorAll('*');
        svgChildren.forEach((child) => {
          if (child instanceof SVGElement) {
            child.style.display = 'block';
            child.style.visibility = 'visible';
            child.style.opacity = '1';
          }
        });

        // Mark as loaded
        setIsLoaded(true);
      }
    }
  }, []);

  return (
    <div
      ref={iconRef}
      className="p-2 rounded-lg bg-primary-500/20 flex items-center justify-center h-20 w-20 overflow-hidden icon-wrapper relative"
    >
      {/* Main SVG Icon */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitPerspective: '1000px',
          perspective: '1000px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
      </div>

      {/* Fallback text icon for iOS - shows if SVG not loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary-600 bg-primary-500/10 rounded-lg">
          {name.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

function TechnicalSkills() {
  const { showcase } = data;
  const { technicalSkills } = showcase;

  const skillCategories: { skills: { icon: React.ReactNode; name: string; category: string }[] }[] =
    [
      {
        skills: [
          {
            icon: <JavaScriptIcon />,
            name: technicalSkills.languages.js,
            category: 'Language',
          },
          { icon: <TypeScriptIcon />, name: technicalSkills.languages.ts, category: 'Language' },
          { icon: <PythonIcon />, name: technicalSkills.languages.python, category: 'Language' },
          { icon: <CIcon />, name: technicalSkills.languages.c, category: 'Language' },
          { icon: <HTMLIcon />, name: technicalSkills.languages.html, category: 'Language' },
          { icon: <CSSIcon />, name: technicalSkills.languages.css, category: 'Language' },
        ],
      },
      {
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
        skills: [
          {
            icon: <PyTorchIcon />,
            name: technicalSkills.mlTools.pytorch,
            category: 'ML Tool',
          },
          {
            icon: <TensorFlowIcon />,
            name: technicalSkills.mlTools.tensorflow,
            category: 'ML Tool',
          },
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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
            <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
            {technicalSkills.heading}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="space-y-8 sm:space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} className="space-y-4 sm:space-y-6">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
                variants={itemVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <IconWrapper icon={skill.icon} name={skill.name} />
                        <h4 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary-600 transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-primary-500/10 text-primary-600 rounded-full">
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
