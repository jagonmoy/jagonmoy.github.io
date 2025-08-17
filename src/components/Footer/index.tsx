'use client';

import data from 'data/data.json';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { profileIntro } = data;

  const navigation = {
    social: [
      {
        name: 'LinkedIn',
        href: profileIntro.linkedinLink,
        icon: Linkedin,
        color: 'hover:text-blue-600',
      },
      {
        name: 'GitHub',
        href: profileIntro.githubLink,
        icon: Github,
        color: 'hover:text-gray-800 dark:hover:text-gray-200',
      },
      {
        name: 'Instagram',
        href: profileIntro.instagramLink,
        icon: Instagram,
        color: 'hover:text-pink-600',
      },
      {
        name: 'Facebook',
        href: profileIntro.facebookLink,
        icon: Facebook,
        color: 'hover:text-blue-600',
      },
    ],
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.footer
      className="relative glass-effect dark:glass-effect-dark mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-10 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-muted-foreground text-sm">
              &copy; 2025 Jagonmoy Dey. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center space-x-4" variants={itemVariants}>
            {navigation.social.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`text-muted-foreground ${item.color} transition-colors duration-300 p-2 rounded-full focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  target="_blank"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
