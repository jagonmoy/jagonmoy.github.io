'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaAngleRight, FaBars } from 'react-icons/fa';

const TabNavigation = () => {
  const pathname = usePathname();
  const sectionName = pathname.split('/').pop();

  const [activeTab, setActiveTab] = useState(sectionName || 'about-me');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownForExperience, setDropdownForExperience] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setDropdownForExperience(tab === 'experience' ? !dropdownForExperience : false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center py-4 pl-4 space-x-4">
      <div className="text-gray-500 dark:text-gray-400">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2 hidden lg:block relative">
            <Link
              href="/"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  ${
                activeTab === 'about-me' && 'font-bold text-black border-black'
              }`}
              onClick={() => handleTabClick('about-me')}
            >
              About Me
            </Link>
          </li>
          <li className="mr-2 hidden lg:block relative">
            <Link
              href="/education"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  ${
                activeTab === 'education' && 'font-bold text-black border-black'
              }`}
              onClick={() => handleTabClick('education')}
            >
              Education
            </Link>
          </li>
          <li className="mr-2 hidden lg:block relative">
            <button
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  ${
                activeTab === 'experience' && 'font-bold text-black border-black'
              }`}
              onClick={() => handleTabClick('experience')}
            >
              Experience
            </button>
            {dropdownForExperience && (
              <div className="absolute top-9 left-0 bg-white shadow-md py-4 px-2 w-[250px] border-b z-10">
                <div className="flex flex-col gap-y-2">
                  <Link
                    href="/experience?type=work"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => setDropdownForExperience(false)}
                  >
                    Work
                  </Link>
                  <Link
                    href="/experience?type=research"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => setDropdownForExperience(false)}
                  >
                    Research
                  </Link>
                  <Link
                    href="/experience?type=mentorship"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => setDropdownForExperience(false)}
                  >
                    Mentorship
                  </Link>
                  <Link
                    href="/experience?type=volunteering"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => setDropdownForExperience(false)}
                  >
                    Volunteering
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/projects-and-ps"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  ${
                activeTab === 'projectsAndPs' && 'font-bold text-black border-black'
              }`}
              onClick={() => handleTabClick('projectsAndPs')}
            >
              Projects & Problem Solving
            </Link>
          </li>
          <div className="mr-2 lg:hidden relative">
            <div
              className="inline-block px-4 rounded-t-lg hover:text-gray-600 cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <FaBars className="text-2xl" />
            </div>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md py-4 px-2 w-[250px] border-b">
                <div className="flex flex-col gap-y-2">
                  <Link
                    href="/about-me"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 ${
                      activeTab === 'about-me' && 'font-bold text-black border-black'
                    }`}
                    onClick={() => {
                      handleTabClick('about-me');
                      handleDropdownToggle();
                    }}
                  >
                    About Me
                  </Link>
                  <Link
                    href="/education"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 ${
                      activeTab === 'education' && 'font-bold text-black border-black'
                    }`}
                    onClick={() => {
                      handleTabClick('education');
                      handleDropdownToggle();
                    }}
                  >
                    Education
                  </Link>
                  <button
                    className={`inline-block text-left px-4 rounded-t-lg hover:text-gray-600 ${
                      activeTab === 'experience' && 'font-bold text-black border-black'
                    }`}
                    onClick={() => {
                      handleTabClick('experience');
                    }}
                  >
                    Experience
                  </button>
                  {dropdownForExperience && (
                    <div className="pl-4 bg-white px-2 w-full">
                      <div className="flex flex-col gap-y-2">
                        <Link
                          href="/experience?type=work"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClick('experience');
                            setDropdownForExperience(false);
                            setDropdownOpen(false);
                          }}
                        >
                          <span className="flex gap-2 items-center">
                            <FaAngleRight /> <span>Work</span>
                          </span>
                        </Link>
                        <Link
                          href="/experience?type=research"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClick('experience');
                            setDropdownForExperience(false);
                            setDropdownOpen(false);
                          }}
                        >
                          <span className="flex gap-2 items-center">
                            <FaAngleRight /> <span>Research</span>
                          </span>
                        </Link>
                        <Link
                          href="/experience?type=mentorship"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClick('experience');
                            setDropdownForExperience(false);
                            setDropdownOpen(false);
                          }}
                        >
                          <span className="flex gap-2 items-center">
                            <FaAngleRight /> <span>Mentorship</span>
                          </span>
                        </Link>
                        <Link
                          href="/experience?type=volunteering"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClick('experience');
                            setDropdownForExperience(false);
                            setDropdownOpen(false);
                          }}
                        >
                          <span className="flex gap-2 items-center">
                            <FaAngleRight /> <span>Volunteering</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                  <Link
                    href="/projects-and-ps"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 ${
                      activeTab === 'projectsAndPs' && 'font-bold text-black border-black'
                    }`}
                    onClick={() => {
                      handleTabClick('projectsAndPs');
                      handleDropdownToggle();
                    }}
                  >
                    Projects & Problem Solving
                  </Link>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TabNavigation;
