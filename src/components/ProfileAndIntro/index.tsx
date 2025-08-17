'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

import ProfileSocialLinks from './ProfileSocialLinks';

function ProfileAndIntro() {
  const { profileIntro } = data;

  const handleDownloadCV = () => {
    const pdfUrl = 'Jagonmoy_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Jagonmoy_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Image */}
      <motion.div
        className="relative group"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 p-1">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src="/proPic.jpeg"
            alt="Profile"
            height={400}
            width={800}
            priority
            className="rounded-lg sm:rounded-xl w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Profile Info */}
      <motion.div
        className="w-full p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-effect dark:glass-effect-dark"
        variants={itemVariants}
      >
        <motion.h1
          className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {profileIntro.name}
        </motion.h1>

        <motion.div
          className="text-muted-foreground text-base sm:text-lg mb-3 sm:mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {profileIntro.pronouns}
        </motion.div>

        <motion.div
          className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {profileIntro.bio}
        </motion.div>

        {/* Quick Info */}
        <motion.div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6" variants={itemVariants}>
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary-500" />
            <span>Bangladesh</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary-500" />
            <span>Open to opportunities</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="w-full button-primary mb-4 sm:mb-6 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={handleDownloadCV}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
        >
          <Download className="w-4 h-4 mr-2 inline" />
          Download CV
        </motion.button>

        {/* Social Links */}
        <motion.div className="hidden md:block" variants={itemVariants}>
          <ProfileSocialLinks />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProfileAndIntro;
