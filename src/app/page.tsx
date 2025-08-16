'use client';

import AboutMe from 'components/AboutMe';
import CP from 'components/CP';
import Education from 'components/Education';
import IndustryExperience from 'components/IndustryExperience';
import LanguageProficiency from 'components/LanguageProficiency';
import MentorshipExperience from 'components/MentorshipExperience';
import Projects from 'components/Projects';
import ResearchExperience from 'components/ResearchExperience';
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
      className="flex flex-col gap-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <AboutMe />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Education />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <ResearchExperience />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <IndustryExperience />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <MentorshipExperience />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <VolunteeringExperience />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Projects />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <TechnicalSkills />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CP />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <LanguageProficiency />
      </motion.div>
    </motion.div>
  );
}

export default Home;
