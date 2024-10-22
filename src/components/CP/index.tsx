'use client';

import data from 'data/data.json';
import CodeforcesIcon from 'icons/Codeforces';
import LeetcodeIcon from 'icons/Leetcode';
import StopStalkIcon from 'icons/StopStalk';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function CP() {
  const searchParams = useSearchParams();

  const type = searchParams.get('type');

  useEffect(() => {
    if (type === 'competitive-programming') {
      const competitiveProgrammingElement = document.getElementById('competitive-programming');
      if (competitiveProgrammingElement) {
        competitiveProgrammingElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });

        setTimeout(() => {
          competitiveProgrammingElement.focus();
        }, 500); // Adjust delay if needed
      }
    }
  }, [type]);

  const { showcase } = data;
  const { competitiveProgramming } = showcase;

  const cpProfiles = [
    {
      link: competitiveProgramming.stopstalkLink,
      icon: <StopStalkIcon />,
      name: 'StopStalk',
    },
    {
      link: competitiveProgramming.cfLink,
      icon: <CodeforcesIcon />,
      name: 'Codeforces',
    },
    {
      link: competitiveProgramming.leetCodeLink,
      icon: <LeetcodeIcon />,
      name: 'LeetCode',
    },
  ];

  return (
    <ol
      id="competitive-programming"
      tabIndex={0}
      className="relaive bg-white p-4 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 className="text-center font-bold text-gray-900 text-xl lg:text-2xl">
        {competitiveProgramming.heading}
      </h1>
      <div className="flex flex-col gap-y-4 mb-10 pl-6">
        <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
          {competitiveProgramming.bulletPoints.map((point) => (
            <li key={point} className="break-words text-sm lg:text-base">
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-10 gap-y-5 items-center">
          {cpProfiles.map((profile) => (
            <Link
              href={profile.link}
              key={profile.link}
              className="flex flex-col items-center gap-y-1"
              target="_blank"
            >
              <span className="h-10 w-10">{profile.icon}</span>
              <span className="text-gray-500 text-sm lg:text-base font-semibold">
                {profile.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </ol>
  );
}

export default CP;
