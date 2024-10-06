'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaBars } from 'react-icons/fa';

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

  return (
    <div className="flex items-center py-4 pl-4 space-x-4">
      <div className="text-gray-500 dark:text-gray-400">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2 hidden md:block relative">
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
          <li className="mr-2 hidden md:block relative">
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
          <li className="mr-2 hidden md:block relative">
            <button
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  ${
                activeTab === 'experience' && 'font-bold text-black border-black'
              }`}
              onClick={() => handleTabClickForExperience()}
            >
              Experience
            </button>
            {dropdownForExperience && (
              <div className="absolute top-9 left-0 bg-white shadow-md py-4 px-2 w-[250px] border-b z-10">
                <div className="flex flex-col gap-y-2">
                  <Link
                    href="/experience"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForExperience()}
                  >
                    Industry
                  </Link>
                  <Link
                    href="/experience?type=research"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForExperience()}
                  >
                    Research
                  </Link>
                  <Link
                    href="/experience?type=mentorship"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForExperience()}
                  >
                    Mentorship
                  </Link>
                  <Link
                    href="/experience?type=volunteering"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForExperience()}
                  >
                    Volunteering
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li className="mr-2 hidden md:block relative">
            <button
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  ${
                activeTab === 'showcase' && 'font-bold text-black border-black'
              }`}
              onClick={() => handleTabClickForShowcase()}
            >
              Showcase
            </button>
            {dropdownForShowcase && (
              <div className="absolute top-9 left-0 bg-white shadow-md py-4 px-2 w-[250px] border-b z-10">
                <div className="flex flex-col gap-y-2">
                  <Link
                    href="/showcase"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForShowcase()}
                  >
                    Technical Skills
                  </Link>
                  <Link
                    href="/showcase?type=projects"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForShowcase()}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/showcase?type=competitive-programming"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForShowcase()}
                  >
                    Competitive Programming
                  </Link>
                  <Link
                    href="/showcase?type=language-proficiency"
                    className="block px-4 rounded-t-lg hover:text-gray-600 "
                    onClick={() => handleTabClickForShowcase()}
                  >
                    Language Proficiency
                  </Link>
                </div>
              </div>
            )}
          </li>
          <div className="mr-2 md:hidden relative">
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
                    className={`inline-block text-left -ml-1 rounded-t-lg hover:text-gray-600 ${
                      activeTab === 'experience' && 'font-bold text-black border-black'
                    }`}
                    onClick={() => {
                      handleTabClickForExperience();
                    }}
                  >
                    <span className="flex gap-1 items-center">
                      {dropdownForExperience ? <FaAngleDown /> : <FaAngleRight />}
                      <span>Experience</span>
                    </span>
                  </button>
                  {dropdownForExperience && (
                    <div className="pl-4 bg-white px-2 w-full">
                      <div className="flex flex-col gap-y-2">
                        <Link
                          href="/experience?type=industry"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForExperience();
                            handleDropdownToggle();
                          }}
                        >
                          Industry
                        </Link>
                        <Link
                          href="/experience?type=research"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForExperience();
                            handleDropdownToggle();
                          }}
                        >
                          Research
                        </Link>
                        <Link
                          href="/experience?type=mentorship"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForExperience();
                            handleDropdownToggle();
                          }}
                        >
                          Mentorship
                        </Link>
                        <Link
                          href="/experience?type=volunteering"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForExperience();
                            handleDropdownToggle();
                          }}
                        >
                          Volunteering
                        </Link>
                      </div>
                    </div>
                  )}
                  <button
                    className={`inline-block text-left -ml-1 rounded-t-lg hover:text-gray-600 ${
                      activeTab === 'showcase' && 'font-bold text-black border-black'
                    }`}
                    onClick={() => handleTabClickForShowcase()}
                  >
                    <span className="flex gap-1 items-center">
                      {dropdownForShowcase ? <FaAngleDown /> : <FaAngleRight />}
                      <span>Showcase</span>
                    </span>
                  </button>
                  {dropdownForShowcase && (
                    <div className="pl-4 bg-white px-2 w-full">
                      <div className="flex flex-col gap-y-2">
                        <Link
                          href="/showcase?type=technical-skills"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForShowcase();
                            handleDropdownToggle();
                          }}
                        >
                          Technical Skills
                        </Link>
                        <Link
                          href="/showcase?type=projects"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForShowcase();
                            handleDropdownToggle();
                          }}
                        >
                          Projects
                        </Link>
                        <Link
                          href="/showcase?type=competitive-programming"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForShowcase();
                            handleDropdownToggle();
                          }}
                        >
                          Competitive Programming
                        </Link>
                        <Link
                          href="/showcase?type=language-proficiency"
                          className="block px-4 rounded-t-lg hover:text-gray-600"
                          onClick={() => {
                            handleTabClickForShowcase();
                            handleDropdownToggle();
                          }}
                        >
                          Language Proficiency
                        </Link>
                      </div>
                    </div>
                  )}
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
