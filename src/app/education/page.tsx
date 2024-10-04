import Image from "next/image";
import { FaUniversity } from "react-icons/fa";

function EducationPage() {
  return (
    <ol className="relaive bg-white p-4 shadow-lg rounded-md">
      <li className="mb-10 flex gap-x-4 items-start">
        <FaUniversity className="text-2xl flex-shrink-0 mt-1" />
        <div className="flex-grow">
          <h3 className="mb-1 text-lg font-semibold text-gray-900">
            B.Sc in Software Engineering
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-500">
            Shahjalal University of Science and Technology
          </span>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            January 2018 - February 2023
          </time>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-500">
            CGPA 3.60 / 4.00
          </span>
          <ul className="list-disc ml-2 text-gray-500 mt-4 space-y-1">
            <li style={{ wordWrap: "break-word" }}>Ranked among top 10 performers in my batch</li>
            <li style={{ wordWrap: "break-word" }}>Maintained a CGPA of 3.85+ over the last four semesters, achieving 1st place in the 7th semester and 2nd place in the 8th semester</li>
            <li style={{ wordWrap: "break-word" }}> Cousework: Data Structures, Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, Computer Networking, Distributed Systems, Software Architecture and Design Patterns, Software Requirement Engineering, Software Verification and Validation, Software Metrics, Linear and Abstract Algebra, Data Science, Machine Learning, Artifical Intelligence .
            </li>
          </ul>
        </div>
      </li>

      <li className="mb-10 flex gap-x-4 items-start">
        <FaUniversity className="text-2xl flex-shrink-0 mt-1" />
        <div className="flex-grow">
          <h3 className="mb-1 text-lg font-semibold text-gray-900">
            Higher Secondary School Certificate in Science
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-500">
            MC College, Sylhet, Bangladesh
          </span>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            July 2014 — August 2016
          </time>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-500">
            GPA 5.00 / 5.00
          </span>
          <ul className="list-disc ml-2 text-gray-500 mt-4 space-y-1">
            <li style={{ wordWrap: "break-word" }}>Scored above 85% in Higher Secondary School Certificate exams and received government scholarships.</li>
            <li style={{ wordWrap: "break-word" }}>Achieved a perfect score of GPA 5.00/5.00 in both the Secondary School Certificate and Junior School Certificate exams, receiving government scholarships for both.</li>
          </ul>
        </div>
      </li>
    </ol>

  );
}

export default EducationPage;
