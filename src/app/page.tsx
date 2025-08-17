'use client';

import AboutMe from 'components/AboutMe';
import AIResearchAndProjects from 'components/AIResearchAndProjects';
import CP from 'components/CP';
import Education from 'components/Education';
import LanguageProficiency from 'components/LanguageProficiency';
import MentorshipExperience from 'components/MentorshipExperience';
import Projects from 'components/Projects';
import SoftwareDevelopment from 'components/SoftwareDevelopment';
import TechnicalSkills from 'components/TechnicalSkills';
import VolunteeringExperience from 'components/VolunteeringExperience';
import { motion } from 'framer-motion';

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-y-8 sm:gap-y-12 lg:gap-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div id="about-me" variants={sectionVariants}>
        <AboutMe />
      </motion.div>

      <motion.div id="education" variants={sectionVariants}>
        <Education />
      </motion.div>

      <motion.div id="ai-research-projects" variants={sectionVariants}>
        <AIResearchAndProjects />
      </motion.div>

      <motion.div id="software-development" variants={sectionVariants}>
        <SoftwareDevelopment />
      </motion.div>

      <motion.div id="mentorship-experience" variants={sectionVariants}>
        <MentorshipExperience />
      </motion.div>

      <motion.div id="volunteering-experience" variants={sectionVariants}>
        <VolunteeringExperience />
      </motion.div>

      <motion.div id="projects" variants={sectionVariants}>
        <Projects />
      </motion.div>

      <motion.div id="technical-skills" variants={sectionVariants}>
        <TechnicalSkills />
      </motion.div>

      <motion.div id="competitive-programming" variants={sectionVariants}>
        <CP />
      </motion.div>

      <motion.div id="language-proficiency" variants={sectionVariants}>
        <LanguageProficiency />
      </motion.div>
    </motion.div>
  );
}

export default Home;
