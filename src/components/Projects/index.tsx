'use client';

import data from 'data/data.json';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FaCode } from 'react-icons/fa';

function Projects() {
  const searchParams = useSearchParams();

  const type = searchParams.get('type');

  useEffect(() => {
    if (type === 'projects') document.getElementById('projects')?.focus();
  }, [type]);

  const { showcase } = data;
  const { projects } = showcase;

  return (
    <ol
      id="projects"
      tabIndex={0}
      className="relaive bg-white p-4 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 className="text-center font-bold text-gray-900 text-xl lg:text-2xl">
        {projects.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <Link
              href={projects.project1.link}
              className="text-md lg:text-lg font-semibold text-gray-900"
              target="_blank"
            >
              {projects.project1.name}
            </Link>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {projects.project1.technologies}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words mt-2">
              {projects.project1.description}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <div className="flex gap-x-1 items-center">
              <Link
                href={projects.project2.link1}
                className="text-md lg:text-lg font-semibold text-gray-900"
                target="_blank"
              >
                {projects.project2.name1}
              </Link>
              <span className="text-md lg:text-lg text-gray-500">and</span>
              <Link
                href={projects.project2.link2}
                className="text-md lg:text-lg font-semibold text-gray-900"
                target="_blank"
              >
                {projects.project2.name2}
              </Link>
            </div>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {projects.project2.technologies}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words mt-2">
              {projects.project2.description}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <Link
              href={projects.project3.link}
              className="text-md lg:text-lg font-semibold text-gray-900"
              target="_blank"
            >
              {projects.project3.name}
            </Link>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {projects.project3.technologies}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words mt-2">
              {projects.project3.description}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <Link
              href={projects.project4.link}
              className="text-md lg:text-lg font-semibold text-gray-900"
              target="_blank"
            >
              {projects.project4.name}
            </Link>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {projects.project4.technologies}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words mt-2">
              {projects.project4.description}
            </span>
          </div>
        </li>
      </div>
    </ol>
  );
}

export default Projects;
