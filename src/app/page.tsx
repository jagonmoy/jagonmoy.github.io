'use client';

import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.getElementById('about-me')?.focus();
  }, []);

  return (
    <div id="about-me" tabIndex={0} className="w-full bg-white p-4 shadow-xl rounded-md">
      <div className="flex-col space-y-4">
        <h1 className="text-center font-bold text-gray-900 text-xl lg:text-2xl">About me</h1>
        <div className="text-gray-500 break-words text-sm lg:text-base">
          I am a Software Engineering graduate from Shahjalal University of Science and Technology,
          with a CGPA of 3.60 out of 4.00 and a strong upward trend (3.85+ in my last four
          semesters). My academic journey culminated in a Machine Learning thesis titled Speaker
          Diarization with Speech Recognition in Bangla, where I explored advanced NLP technologies.
          During my studies, I also excelled in competitive programming, earning notable
          achievements that highlight my problem-solving skills.
          <br /> <br />
          For the past 1.5 years, I have worked as a full-stack developer at Cefalo, a Norway-based
          offshore software company, where I have gained valuable experience in building dynamic and
          scalable solutions.
          <br /> <br />
          Driven by curiosity and a passion for merging software engineering with machine learning,
          I am eager to apply my skills in a role that combines both fields. I aim to leverage my
          expertise to tackle complex challenges and drive innovation.
        </div>
      </div>
    </div>
  );
}
export default Home;
