import Link from "next/link";
import { FaBuilding, FaGithub, FaLinkedin, FaPhoneAlt, FaUniversity } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function ProfileSocialLinks() {
    return( 
    <div className="w-full bg-white mt-4 rounded-md shadow-lg flex flex-col p-4 gap-y-2">
        <div className="flex gap-x-3 items-center">
            <FaBuilding className="text-2xl" />
            <Link
            href="https://www.cefalo.com/en/"
            target="_blank"
            className="text-gray-500"
            >
            Cefalo Bangladesh Limited
            </Link>
        </div>
        <div className="flex gap-x-3 items-center">
            <FaUniversity className="text-2xl flex-shrink-0" />
            <Link
            href="https://www.sust.edu/"
            target="_blank"
            className="text-gray-500 flex-grow"
            >
            Shahjalal University of Science and Technology
            </Link>
        </div>
        <div className="flex gap-x-3 items-center">
            <MdMail className="text-2xl" />
            <Link
            href="mailto:jagonmoydey1997@gmail.com"
            target="_blank"
            className="text-gray-500"
            >
            jagonmoydey1997@gmail.com
            </Link>
        </div>
        <div className="flex gap-x-3 items-center">
            <FaPhoneAlt className="text-2xl" />
            <Link
            href="tel:+8801932880727"
            target="_blank"
            className="text-gray-500"
            >
            (+880) 1932 880 727
            </Link>
        </div>
        <div className="flex gap-x-3 items-center">
            <FaGithub className="text-2xl" />
            <Link
            href="https://github.com/jagonmoy"
            target="_blank"
            className="text-gray-500"
            >
            github.com/jagonmoy
            </Link>
        </div>
        <div className="flex gap-x-3 items-center">
            <FaLinkedin className="text-2xl" />
            <Link
            href="https://www.linkedin.com/in/jagonmoy/"
            target="_blank"
            className="text-gray-500"
            >
            linkedin.com/jagonmoy
            </Link>
        </div>
    </div>
    )

}

export default ProfileSocialLinks;