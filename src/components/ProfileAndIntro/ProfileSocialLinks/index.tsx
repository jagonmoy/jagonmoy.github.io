import Link from 'next/link';
import { FaBuilding, FaGithub, FaLinkedin, FaPhoneAlt, FaUniversity } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function ProfileSocialLinks() {
  return (
    <div className="w-full bg-white mt-4 rounded-md shadow-xl flex flex-col p-4 gap-y-3">
      <div className="flex gap-x-3 items-center">
        <FaBuilding className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href="https://www.cefalo.com/en/" target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-words">
            Cefalo Bangladesh Limited
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaUniversity className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href="https://www.sust.edu/" target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-words">
            Shahjalal University of Science and Technology
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <MdMail className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href="mailto:jagonmoydey1997@gmail.com" target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            jagonmoydey1997@gmail.com
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaPhoneAlt className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href="tel:+8801932880727" target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            (+880) 1932 880 727
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaGithub className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href="https://github.com/jagonmoy" target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            github.com/jagonmoy
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaLinkedin className="text-xl lg:text-2xl flex-shrink" />
        <Link href="https://www.linkedin.com/in/jagonmoy/" target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            linkedin.com/jagonmoy
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSocialLinks;
