'use client';

import data from 'data/data.json';
import { FaRegNewspaper } from 'react-icons/fa';

function AboutMe() {
  const { aboutMeParagraphs } = data;

  const handleDownloadCV = () => {
    const pdfUrl = 'Jagonmoy_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Jagonmoy_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div tabIndex={0} className="w-full bg-white p-4 lg:p-8 shadow-xl rounded-md">
      <div className="flex-col space-y-4">
        {/* <h1 id="about-me" className="text-center font-bold text-gray-900 text-2xl lg:text-3xl">
          {aboutMeParagraphs.heading}
        </h1> */}
        <div className="text-gray-500 break-words text-md lg:text-lg">
          {aboutMeParagraphs.paragraph1}
          <br />
          <br />
          {aboutMeParagraphs.paragraph2}
        </div>
        <h1 className="font-semibold text-gray-900 text-lg lg:text-xl">
          {aboutMeParagraphs.areasOfInterestHeading}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutMeParagraphs.areasOfInterest.map((interest, index) => (
            <div key={index} className="flex items-start">
              <ul className="list-disc ml-4">
                <li className="text-gray-500 text-md lg:text-lg">{interest}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <button
            className="bg-gray-900 text-white font-semibold text-md lg:text-lg rounded-md border-0"
            onClick={() => handleDownloadCV()}
          >
            <span className="flex items-center justify-center gap-x-2 px-4 py-2 ">
              {'Download CV'}
              <FaRegNewspaper />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
