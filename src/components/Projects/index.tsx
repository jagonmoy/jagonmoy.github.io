import data from 'data/data.json';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

function Projects() {
  const { showcase } = data;
  const { projects } = showcase;

  return (
    <div
      tabIndex={0}
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 id="projects" className="text-center font-bold text-gray-900 text-2xl lg:text-3xl">
        {projects.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <Link
              href={projects.project1.link}
              className="text-lg lg:text-xl font-semibold text-gray-900"
              target="_blank"
            >
              {projects.project1.name}
            </Link>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {projects.project1.technologies}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {projects.project1.description}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <Link
              href={projects.project2.link}
              className="text-lg lg:text-xl font-semibold text-gray-900"
              target="_blank"
            >
              {projects.project2.name}
            </Link>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {projects.project2.technologies}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {projects.project2.description}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <Link
              href={projects.project3.link}
              className="text-lg lg:text-xl font-semibold text-gray-900"
              target="_blank"
            >
              {projects.project3.name}
            </Link>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {projects.project3.technologies}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {projects.project3.description}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaCode className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <Link
                href={projects.project4.link1}
                className="text-lg lg:text-xl font-semibold text-gray-900"
                target="_blank"
              >
                {projects.project4.name1}
              </Link>
              <span className="text-lg lg:text-xl text-gray-500">and</span>
              <Link
                href={projects.project4.link2}
                className="text-lg lg:text-xl font-semibold text-gray-900"
                target="_blank"
              >
                {projects.project4.name2}
              </Link>
            </div>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {projects.project4.technologies}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {projects.project4.description}
            </span>
          </div>
        </li>
      </div>
    </div>
  );
}

export default Projects;
