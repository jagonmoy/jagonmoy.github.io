'use client'
import {motion} from 'framer-motion' ;
import { FaHandPaper } from 'react-icons/fa';

const Summary = () => {
    return (
      <motion.div initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ delay: 0.75, ease: 'easeInOut' }}
      >
        <div className="bg-white p-4 shadow-md">
        <div className="flex-col space-y-4">
          {/* Content for the right column */}
          <div className="flex flex-col text-gray-700">
            <span>Hi, This is</span><span className="text-gray-900 text-2xl font-bold">Jagonmoy Dey</span> 
          </div>
          <div className="text-gray-500" style={{ wordWrap: "break-word" }}>
            I am an Associate Software Engineer at Cefalo . I have experience in
            working with JavaScript, TypeScript, React.js, Next.js, Redux,
            Node.js, Express.js, Jest, Playwright, MySQL, and MongoDB.
            <br /> <br />
            In my academic career, I have actively engaged in problem-solving
            through various online judges like LightOJ, UVA, Codeforces, and
            LeetCode. I have also created resources to learn and practice
            different data structures and algorithms, including Number Theory,
            Graph Theory, and Dynamic Programming.
            <br /> <br />
            During my undergrad thesis, I worked in the field of Natural
            Language Processing titled Speaker Diarization with Speech
            Recognition in Bangla. For learning Deep Learning I practiced
            several Deep learning Terminologies Deep-Learning-Exercises.
          </div>
        </div>
      </div>
      </motion.div>
    )
}

export default Summary;