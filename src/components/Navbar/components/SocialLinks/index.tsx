import data from 'data/data.json';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  const { profileIntro } = data;

  const socialLinks = [
    {
      name: 'GitHub',
      href: profileIntro.githubLink,
      icon: Github,
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      delay: 0.1,
    },
    {
      name: 'LinkedIn',
      href: profileIntro.linkedinLink,
      icon: Linkedin,
      color: 'hover:text-blue-600',
      delay: 0.2,
    },
    {
      name: 'Email',
      href: profileIntro.emailLink,
      icon: Mail,
      color: 'hover:text-red-500',
      delay: 0.3,
    },
  ];

  return (
    <div className="flex justify-end space-x-4 py-4 pr-8">
      {socialLinks.map((social) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: social.delay, duration: 0.5 }}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={social.href}
            target={social.name === 'Email' ? undefined : '_blank'}
            className={`p-2 rounded-lg transition-all duration-300 ${social.color} focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
