function Summary () {
    return (
        <div className="bg-white p-4 shadow-md">
          <div className="flex-col space-y-4">
            {/* Content for the right column */}
            <h1 className="font-bold text-gray-900 text-2xl">About me</h1>
            <div className="text-gray-500" style={{ wordWrap: "break-word" }}>
            I am a Software Engineering graduate from Shahjalal University of Science and Technology, one of the leading institutions in Bangladesh for Computer Science and IT. With a CGPA of 3.60 and a strong upward trajectory (<span className="font-bold text-gray-900">averaging 3.85+ in last four semesters</span>), I have cultivated a deep foundation in both theory and practice.
            <br /> <br />
            In my academic journey, I conducted a Machine Learning thesis titled <span className="font-bold text-gray-900">Speaker Diarization with Speech Recognition in Bangla</span>, exploring cutting-edge technologies in natural language processing.
            <br /> <br />
            I am also passionate about competitive programming. During my academic career, I participated in numerous contests and earned notable achievements, reflecting my dedication and problem-solving skills.
            <br /> <br />
            I was offered an opportunity to work as a full-stack developer at Cefalo, a top Norway-based offshore software company with a presence in Bangladesh. Over the past 1.5 years, I have gained hands-on experience in building dynamic, scalable solutions.
            <br /> <br />
            I’m driven by curiosity and a commitment to exploring the intersection of software engineering and machine learning to create innovative solutions.
          </div>
        </div>
      </div>
    )
}

export default Summary;