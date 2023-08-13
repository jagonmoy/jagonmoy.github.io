"use client";
import { useState } from "react";

import { FaBars } from 'react-icons/fa';

import Link from "next/link";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("introduction"); // Initialize the active tab
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
                activeTab === "introduction" && "text-blue-600 border-blue-600"
              }`}
              onClick={() => handleTabClick("introduction")}
            >
              Introduction
            </Link>
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/experience"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "experience" && "text-blue-600 border-blue-600"
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </Link>
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/education"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "education" && "text-blue-600 border-blue-600"
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </Link>
          </li>
          <li className="mr-2 hidden lg:block">
            <Link
              href="/projects-and-ps"
              className={`inline-block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "projectsAndPs" && "text-blue-600 border-blue-600"
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
              <div className="absolute top-10 left-0 bg-white shadow-md p-2 w-[250px]">
                <Link
                  href="/"
                  className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                    activeTab === "introduction" &&
                    "text-blue-600 border-blue-600"
                  }`}
                  onClick={() => {
                    handleTabClick("introduction");
                    handleDropdownToggle();
                  }}
                >
                  Introduction
                </Link>
                <Link
                  href="/experience"
                  className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                    activeTab === "experience" && "text-blue-600 border-blue-600"
                  }`}
                  onClick={() => {
                    handleTabClick("experience");
                    handleDropdownToggle();
                  }}
                >
                  Experience
                </Link>
                <Link
                  href="/education"
                  className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                    activeTab === "education" && "text-blue-600 border-blue-600"
                  }`}
                  onClick={() => {
                    handleTabClick("education");
                    handleDropdownToggle();
                  }}
                >
                  Education
                </Link>
                <Link
                  href="/projects-and-ps"
                  className={`block px-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
                    activeTab === "projectsAndPs" &&
                    "text-blue-600 border-blue-600"
                  }`}
                  onClick={() => {
                    handleTabClick("projectsAndPs");
                    handleDropdownToggle();
                  }}
                >
                  Projects & Problem Solving
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TabNavigation;
