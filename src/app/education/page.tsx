import Image from "next/image";

function EducationPage() {
  return (
    <div className="px-4 py-6 flex flex-col gap-8">
      {/* Container for both education boxes */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* University Education Box */}
        <div className="bg-white shadow-md p-4 flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full lg:w-1/2">
          {/* University Image */}
          <div className="w-full lg:w-1/3">
            <Image
              src="/university.jpg" // Replace with your image path
              alt="University"
              width={400}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* University Education Content */}
          <div className="flex flex-col w-full lg:w-2/3">
            <h3 className="text-xl font-semibold text-gray-900">
              B.Sc in Software Engineering
            </h3>
            <span className="text-gray-500">
              Shahjalal University of Science and Technology, Sylhet, Bangladesh 
            </span>
            <span className="text-gray-500">Jan 2018 — Mar 2023</span>
            <span className="text-gray-500"> CGPA: 3.60 / 4.00</span>
            <ul className="list-disc ml-4 text-gray-500 mt-4 flex flex-col gap-4">
              <li>Ranked among top 10 performers in my batch</li>
              <li>
                Maintained a CGPA of 3.85+ over the last four semesters, achieving 1st place
                in the 7th semester and 2nd place in the 8th semester
              </li>
            </ul>
          </div>
        </div>

        {/* Pre-University Education Box */}
        <div className="bg-white shadow-md p-4 flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full lg:w-1/2">
          {/* Pre-University Image */}
          <div className="w-full lg:w-1/3">
            <Image
              src="/college.jpg" // Replace with your image path
              alt="Pre-University"
              width={400}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Pre-University Education Content */}
          <div className="flex flex-col w-full lg:w-2/3">
            <h3 className="text-xl font-semibold text-gray-900">Higher Secondary School Certificate in Science</h3>
            <span className="text-gray-500">
              MC College, Sylhet, Bangladesh
            </span>
            <span className="text-gray-500">July 2014 — August 2016</span>
            <span className="text-gray-500"> GPA: 5.00 / 5.00</span>
            <ul className="list-disc ml-4 text-gray-500 mt-4 flex flex-col gap-4">
              <li>Scored above 85% in Higher Secondary School Certificate exams and received government scholarships.</li>
              <li>Achieved a perfect score of GPA 5.00/5.00 in both the Secondary School Certificate and Junior School Certificate exams, receiving government scholarships for both.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
