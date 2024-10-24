import data from 'data/data.json';
import { FaBong } from 'react-icons/fa';

function ResearchExperience() {
  const { experience } = data;
  const { research } = experience;

  return (
    <div
      tabIndex={0}
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1
        id="research-experience"
        className="text-center font-bold text-gray-900 text-2xl lg:text-3xl"
      >
        {research.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaBong className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {research.research1.title}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {research.research1.university}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {research.research1.superviser}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {research.research1.duration}
            </span>
            <ul className="list-disc ml-2 text-gray-500 mt-2 space-y-1">
              {research.research1.bulletPoints.map((point) => (
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

export default ResearchExperience;
