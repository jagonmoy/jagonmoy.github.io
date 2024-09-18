"use client";
import { useState } from "react";

import { FaBars } from 'react-icons/fa';

import Link from "next/link";
import { usePathname } from "next/navigation";

const TabNavigation = () => {
  const pathname = usePathname();
  const sectionName = pathname.split("/").pop();

  const [activeTab, setActiveTab] = useState(sectionName || "about-me"); // Initialize the active tab
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="flex items-center py-4 pl-4 space-x-4">
      <div className="text-gray-500 dark:text-gray-400 ">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2 hidden lg:block">
            <Link
              href="/"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600  dark:hover:text-gray-300 ${
                activeTab === "about-me" && "font-bold text-black border-black"
              }`}
              onClick={() => handleTabClick("about-me")}
            >
              About Me
            </Link>
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/education"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "education" && "font-bold text-black border-black"
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </Link>
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/experience"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "experience" && "font-bold text-black border-black"
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </Link>
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/projects-and-ps"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "projectsAndPs" && "font-bold text-black border-black"
              }`}
              onClick={() => handleTabClick("projectsAndPs")}
            >
              Projects & Problem Solving
            </Link>
          </li>
          <li className="mr-2 lg:hidden relative">
            <div
              className="inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
              onClick={handleDropdownToggle}
            >
              <FaBars className="text-2xl"/>
            </div>
            {/* Dropdown content */}
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md py-4 px-2 w-[250px] border-b">
                <div className="flex flex-col gap-y-2">
                  <Link
                    href="/about-me"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                      activeTab === "about-me" &&
                      "font-bold text-black border-black"
                    }`}
                    onClick={() => {
                      handleTabClick("about-me");
                      handleDropdownToggle();
                    }}
                  >
                    About Me
                  </Link>
                  <Link
                    href="/education"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                      activeTab === "education" && "font-bold text-black border-black"
                    }`}
                    onClick={() => {
                      handleTabClick("education");
                      handleDropdownToggle();
                    }}
                  >
                    Education
                  </Link>
                  <Link
                    href="/experience"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                      activeTab === "experience" && "font-bold text-black border-black"
                    }`}
                    onClick={() => {
                      handleTabClick("experience");
                      handleDropdownToggle();
                    }}
                  >
                    Experience
                  </Link>
                  <Link
                    href="/projects-and-ps"
                    className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                      activeTab === "projectsAndPs" &&
                      "font-bold text-black border-black"
                    }`}
                    onClick={() => {
                      handleTabClick("projectsAndPs");
                      handleDropdownToggle();
                    }}
                  >
                    Projects & Problem Solving
                  </Link>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TabNavigation;
