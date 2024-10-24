import data from 'data/data.json';
import { FaLanguage } from 'react-icons/fa';

function LanguageProficiency() {
  const { showcase } = data;
  const { languageProficiency } = showcase;

  return (
    <div
      tabIndex={0}
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1
        id="language-proficiency"
        className="text-center font-bold text-gray-900 text-2xl lg:text-3xl"
      >
        {languageProficiency.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaLanguage className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {languageProficiency.english}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {languageProficiency.englishDescription}
            </span>
          </div>
        </li>
        <li className="flex gap-x-4 items-start">
          <FaLanguage className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {languageProficiency.bengali}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {languageProficiency.bengaliDescription}
            </span>
          </div>
        </li>
      </div>
    </div>
  );
}

export default LanguageProficiency;
