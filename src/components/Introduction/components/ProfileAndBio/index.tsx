"use client";
import Image from "next/image";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCode,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ProfileAndBio = () => {
  return (
    <div className="md:w-1/2 lg:w-1/4 w-full md:pr-4 space-y-4">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{ delay: 0.25, ease: "easeInOut" }}
      >
        <div className="bg-white shadow-md">
          <div className="flex justify-center items-center">
          <div className="sm:hidden p-2">
              <Image
                src="/proPic.jpeg"
                width={500}
                height={150}
                alt="profilePic"
              />
            </div>
            <div className="hidden sm:block p-2">
              <Image
                src="/proPic.jpeg"
                width={700}
                height={200}
                alt="profilePic"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{ delay: 0.5, ease: "easeInOut" }}
      >
        <div className="bg-white p-4 shadow-md mb-4">
          <div className="text-gray-600 space-y-4">
            <div className="flex items-center">
              <FaBriefcase size={16} className="mr-2" />
              <span>Associate Software Engineer</span>
            </div>
            <div className="flex items-center">
              <FaBuilding size={16} className="mr-2" />
              <span>Cefalo Bangladesh Limited</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt size={16} className="mr-2" />
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size={16} className="mr-2" />
              <span>+880-1932880727</span>
            </div>
            <div className="flex items-center">
              <FaCode size={16} className="mr-2" />
              <span>TypeScript, ReactJs, NextJs</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileAndBio;
