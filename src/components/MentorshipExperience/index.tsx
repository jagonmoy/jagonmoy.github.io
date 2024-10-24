'use client';

import data from 'data/data.json';
import { FaChalkboardTeacher } from 'react-icons/fa';

function MentorshipExperience() {
  const { experience } = data;
  const { mentorship } = experience;

  return (
    <div tabIndex={0} className="bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4">
      <h1
        id="mentorship-experience"
        className="text-center font-bold text-gray-900 text-2xl lg:text-3xl"
      >
        {mentorship.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaChalkboardTeacher className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {mentorship.mentorship1.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {mentorship.mentorship1.institue}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {mentorship.mentorship1.duration}
            </span>
            <span className="text-md lg:text-lg mt-2 text-gray-500 break-words mt-2">
              {mentorship.mentorship1.description}
            </span>
          </div>
        </li>

        <li className="flex gap-x-4 items-start">
          <FaChalkboardTeacher className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {mentorship.mentorship2.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {mentorship.mentorship2.institue}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {mentorship.mentorship2.duration}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {mentorship.mentorship2.description}
            </span>
          </div>
        </li>
      </div>
    </div>
  );
}

export default MentorshipExperience;
