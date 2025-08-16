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
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <motion.div
          className="mt-10 flex flex-col gap-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's Connect
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Interested in connecting for a discussion? Feel free to reach out through email or any
              of the social links below.
            </motion.p>
          </motion.div>

          {/* Email CTA */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <Link href="mailto:jagonmoydey1997@gmail.com" className="font-medium">
                jagonmoydey1997@gmail.com
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center space-x-6" variants={itemVariants}>
            {navigation.social.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`text-muted-foreground ${item.color} transition-colors duration-300 p-3 rounded-full focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                  target="_blank"
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            &copy; 2024 Jagonmoy Dey. Made with{' '}
            <Heart className="inline w-4 h-4 text-red-500 animate-pulse" /> and modern web
            technologies.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
