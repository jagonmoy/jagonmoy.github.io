'use client';

import data from 'data/data.json';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { FaLanguage } from 'react-icons/fa';

function LanguageProficiency() {
  const searchParams = useSearchParams();

  const type = searchParams.get('type');

  useEffect(() => {
    if (type === 'language-proficiency') document.getElementById('language-proficiency')?.focus();
  }, [type]);

  const { showcase } = data;
  const { languageProficiency } = showcase;

  return (
    <ol
      id="language-proficiency"
      tabIndex={0}
      className="relaive bg-white p-4 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 className="text-center font-bold text-gray-900 text-xl lg:text-2xl">
        {languageProficiency.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaLanguage className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-md lg:text-lg font-semibold text-gray-900">
              {languageProficiency.english}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {languageProficiency.englishDescription}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaLanguage className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-md lg:text-lg font-semibold text-gray-900">
              {languageProficiency.bengali}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {languageProficiency.bengaliDescription}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaLanguage className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-md lg:text-lg font-semibold text-gray-900">
              {languageProficiency.hindi}
            </span>
            <span className="text-sm lg:text-base text-gray-500 break-words">
              {languageProficiency.hindiDescription}
            </span>
          </div>
        </li>
      </div>
    </ol>
  );
}

export default LanguageProficiency;
