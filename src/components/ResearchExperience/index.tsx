'use client';

import data from 'data/data.json';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FaBong } from 'react-icons/fa';

function ResearchExperience() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  useEffect(() => {
    if (type === 'research') document.getElementById('research')?.focus();
  }, [type]);

  const { experience } = data;
  const { research } = experience;

  return (
    <ol
      id="research"
      tabIndex={0}
      className="relaive bg-white p-4 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 className="text-center font-bold text-gray-900 text-xl lg:text-2xl">
        {research.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaBong className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-md lg:text-lg font-semibold text-gray-900">
              {research.research1.title}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {research.research1.university}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {research.research1.superviser}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {research.research1.duration}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {research.research1.bulletPoints.map((point) => (
                <li key={point} className="break-words text-sm lg:text-base">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>
      </div>
    </ol>
  );
}

export default ResearchExperience;
