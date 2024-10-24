import data from 'data/data.json';
import { FaHandsHelping } from 'react-icons/fa';

function VolunteeringExperience() {
  const { experience } = data;
  const { volunteering } = experience;

  return (
    <div
      tabIndex={0}
      className="relaive bg-white p-4 lg:p-8 shadow-xl rounded-md flex flex-col space-y-4"
    >
      <h1
        id="volunteering-experience"
        className="text-center font-bold text-gray-900 text-2xl lg:text-3xl"
      >
        {volunteering.heading}
      </h1>
      <div className="flex flex-col gap-y-10 mb-10">
        <li className="flex gap-x-4 items-start">
          <FaHandsHelping className="text-3xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {volunteering.volunteering1.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {volunteering.volunteering1.event}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {volunteering.volunteering1.duration}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {volunteering.volunteering1.description}
            </span>
          </div>
        </li>

        <li className="flex gap-x-4 items-start">
          <FaHandsHelping className="text-2xl flex-shrink-0" />
          <div className="flex-grow flex flex-col gap-y-2 lg:gap-y-1">
            <span className="text-lg lg:text-xl font-semibold text-gray-900">
              {volunteering.volunteering2.position}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {volunteering.volunteering2.event}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words">
              {volunteering.volunteering2.duration}
            </span>
            <span className="text-md lg:text-lg text-gray-500 break-words mt-2">
              {volunteering.volunteering2.description}
            </span>
          </div>
        </li>
      </div>
    </div>
  );
}

export default VolunteeringExperience;
