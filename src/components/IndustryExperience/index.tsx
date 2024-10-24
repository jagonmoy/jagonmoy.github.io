'use client';

import data from 'data/data.json';
import { FaIndustry } from 'react-icons/fa';

function IndustryExperience() {
  const { experience } = data;
  const { industry } = experience;

  return (
    <div
      tabIndex={0}
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1
        id="industry-experience"
        className="text-center font-bold text-gray-900 text-2xl lg:text-3xl"
      >
        {industry.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaIndustry className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {industry.experience1.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {industry.experience1.company}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {industry.experience1.duration}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {industry.experience1.bulletPoints.map((point) => (
                <li key={point} className="break-words text-md lg:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="flex gap-x-4 items-start">
          <FaIndustry className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {industry.experience2.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {industry.experience2.company}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {industry.experience2.duration}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {industry.experience2.bulletPoints.map((point) => (
                <li key={point} className="break-words text-md lg:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="flex gap-x-4 items-start">
          <FaIndustry className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {industry.experience3.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {industry.experience3.company}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {industry.experience3.duration}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {industry.experience3.bulletPoints.map((point) => (
                <li key={point} className="break-words text-md lg:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </div>
    </div>
  );
}

export default IndustryExperience;
