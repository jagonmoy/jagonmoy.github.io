'use client';

import { useTheme } from 'contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import * as React from 'react';

import SocialLinks from './components/SocialLinks';
import TabNavigation from './components/TabNavigation';

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <motion.div
      className="pb-6 md:pb-8 lg:pb-12"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 glass-effect dark:glass-effect-dark"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex justify-between items-center px-6 py-2 md:py-3 lg:py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-lg md:text-xl font-bold gradient-text">Jagonmoy</h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            <TabNavigation />
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <Sun className="w-5 h-5 text-primary-400" />
              )}
            </motion.button>

            <div className="hidden md:block">
              <SocialLinks />
            </div>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              ) : (
                <Menu className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={isMobileMenuOpen ? 'open' : 'closed'}
          variants={{
            open: { height: 'auto', opacity: 1 },
            closed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="px-6 pb-4 space-y-4">
            <TabNavigation />
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
