import data from 'data/data.json';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building, Github, Linkedin, Mail, MapPin, Phone, University } from 'lucide-react';

function ProfileSocialLinks() {
  const { profileIntro } = data;

  const socialLinks = [
    {
      icon: MapPin,
      label: 'Location',
      value: profileIntro.location,
      href: profileIntro.locationLink,
      color: 'text-blue-500',
      delay: 0.1,
    },
    {
      icon: Building,
      label: 'Company',
      value: profileIntro.company,
      href: profileIntro.companyLink,
      color: 'text-green-500',
      delay: 0.2,
    },
    {
      icon: University,
      label: 'University',
      value: profileIntro.university,
      href: profileIntro.universityLink,
      color: 'text-purple-500',
      delay: 0.3,
    },
    {
      icon: Mail,
      label: 'Email',
      value: profileIntro.emailText,
      href: profileIntro.emailLink,
      color: 'text-red-500',
      delay: 0.4,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profileIntro.phoneText,
      href: profileIntro.phoneLink,
      color: 'text-orange-500',
      delay: 0.5,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: profileIntro.githubLinkText,
      href: profileIntro.githubLink,
      color: 'text-gray-800 dark:text-gray-200',
      delay: 0.6,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: profileIntro.linkedinLinkText,
      href: profileIntro.linkedinLink,
      color: 'text-blue-600',
      delay: 0.7,
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="w-full glass-effect dark:glass-effect-dark mt-6 rounded-2xl p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-4">
        {socialLinks.map((link) => (
          <motion.div
            key={link.label}
            className="group"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={link.href}
              target={link.label === 'Email' || link.label === 'Phone' ? undefined : '_blank'}
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-primary/20 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <motion.div
                className={`p-2 rounded-lg transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                  {link.label}
                </p>
                <p className="text-sm text-foreground break-words group-hover:text-primary-600 transition-colors duration-200">
                  {link.value}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ProfileSocialLinks;
