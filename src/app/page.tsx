'use client';

import data from 'data/data.json';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.getElementById('about-me')?.focus();
  }, []);

  const { aboutMeParagraphs } = data;

  return (
    <div id="about-me" tabIndex={0} className="w-full bg-white p-4 shadow-xl rounded-md">
      <div className="flex-col space-y-4">
        <h1 className="text-center font-bold text-gray-900 text-xl lg:text-2xl">
          {aboutMeParagraphs.heading}
        </h1>
        <div className="text-gray-500 break-words text-sm lg:text-base">
          {aboutMeParagraphs.paragraph1}
          <br /> <br />
          {aboutMeParagraphs.paragraph2}
          <br /> <br />
          {aboutMeParagraphs.paragraph3}
        </div>
        <h1 className="font-semibold text-gray-900 text-md lg:text-lg">
          {aboutMeParagraphs.areasOfInterestHeading}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutMeParagraphs.areasOfInterest.map((interest, index) => (
            <div key={index} className="flex items-start">
              <ul className="list-disc ml-4">
                <li className="text-gray-500 text-sm lg:text-base">{interest}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
