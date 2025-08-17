'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const TabNavigation = () => {
  const pathname = usePathname();
  const sectionName = pathname.split('/').pop();

  const [activeTab, setActiveTab] = useState(sectionName || 'about-me');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownForExperience, setDropdownForExperience] = useState(false);
  const [dropdownForShowcase, setDropdownForShowcase] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setDropdownForExperience(false);
    setDropdownForShowcase(false);
  };

  const handleTabClickForExperience = () => {
    setActiveTab('experience');
    setDropdownForExperience(!dropdownForExperience);
    setDropdownForShowcase(false);
  };

  const handleTabClickForShowcase = () => {
    setActiveTab('showcase');
    setDropdownForShowcase(!dropdownForShowcase);
    setDropdownForExperience(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navItems = [
    { id: 'about-me', label: 'About Me', href: '#about-me' },
    { id: 'education', label: 'Education', href: '#education' },
    {
      id: 'experience',
      label: 'Experience',
      type: 'dropdown',
      items: [
        {
          id: 'ai-research-projects',
          label: 'AI Research & Projects',
          href: '#ai-research-projects',
        },
        {
          id: 'software-development',
          label: 'Software Development',
          href: '#software-development',
        },
        { id: 'mentorship-experience', label: 'Mentorship', href: '#mentorship-experience' },
        { id: 'volunteering-experience', label: 'Volunteering', href: '#volunteering-experience' },
      ],
    },
    {
      id: 'showcase',
      label: 'Showcase',
      type: 'dropdown',
      items: [
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'technical-skills', label: 'Technical Skills', href: '#technical-skills' },
        {
          id: 'competitive-programming',
          label: 'Competitive Programming',
          href: '#competitive-programming',
        },
        {
          id: 'language-proficiency',
          label: 'Language Proficiency',
          href: '#language-proficiency',
        },
      ],
    },
  ];

  const renderNavItem = (item: any) => {
    if (item.type === 'dropdown') {
      return (
        <motion.li key={item.id} className="relative" layout>
          <motion.button
            className={`inline-flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeTab === item.id
                ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
            onClick={
              item.id === 'experience' ? handleTabClickForExperience : handleTabClickForShowcase
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{item.label}</span>
            <motion.div
              animate={{
                rotate: (item.id === 'experience' ? dropdownForExperience : dropdownForShowcase)
                  ? 180
                  : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {(item.id === 'experience' ? dropdownForExperience : dropdownForShowcase) && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-50"
              >
                <div className="p-2 space-y-1">
                  {item.items.map((subItem: any) => (
                    <motion.div
                      key={subItem.id}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={subItem.href}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                          activeTab === subItem.id
                            ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                        onClick={() => {
                          handleTabClick(subItem.id);
                          if (item.id === 'experience') setDropdownForExperience(false);
                          if (item.id === 'showcase') setDropdownForShowcase(false);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.li>
      );
    }

    return (
      <motion.li key={item.id} layout>
        <Link
          href={item.href}
          className={`inline-block px-4 py-2 rounded-lg transition-all duration-200 ${
            activeTab === item.id
              ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
          onClick={() => handleTabClick(item.id)}
        >
          {item.label}
        </Link>
      </motion.li>
    );
  };

  return (
    <div className="flex items-center py-1.5 md:py-2 lg:py-2.5 pl-4 space-x-4">
      <div className="text-foreground">
        <ul className="flex flex-wrap items-center space-x-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">{navItems.map(renderNavItem)}</div>

          {/* Mobile Navigation */}
          <div className="md:hidden relative">
            <motion.button
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={handleDropdownToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dropdownOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-50"
                >
                  <div className="p-4 space-y-3">
                    {navItems.map((item) => {
                      if (item.type === 'dropdown') {
                        return (
                          <div key={item.id} className="space-y-2">
                            <div className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                              {item.label}
                            </div>
                            <div className="pl-4 space-y-1">
                              {item.items.map((subItem: any) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.href}
                                  className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                    activeTab === subItem.id
                                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                  }`}
                                  onClick={() => {
                                    handleTabClick(subItem.id);
                                    handleDropdownToggle();
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={item.id}
                          href={item.href || '#'}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            activeTab === item.id
                              ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                          onClick={() => {
                            handleTabClick(item.id);
                            handleDropdownToggle();
                          }}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TabNavigation;
