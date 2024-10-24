import data from 'data/data.json';
import { FaSchool, FaUniversity } from 'react-icons/fa';

function Education() {
  const { education } = data;

  return (
    <div
      tabIndex={0}
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1 id="education" className="text-center font-bold text-gray-900 text-2xl lg:text-3xl">
        {education.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaUniversity className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {education.university.degree}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {education.university.name}
            </span>
            <time className="text-md lg:text-lg text-gray-500 break-words">
              {education.university.duration}
            </time>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {education.university.result}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {education.university.bulletPoints.map((point) => (
                <li key={point} className="break-words text-md lg:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <li className="flex gap-x-4 items-start">
          <FaSchool className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {education.college.degree}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {education.college.name}
            </span>
            <time className="text-md lg:text-lg text-gray-500 break-words">
              {education.college.duration}
            </time>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {education.college.result}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {education.college.bulletPoints.map((point) => (
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

export default Education;
