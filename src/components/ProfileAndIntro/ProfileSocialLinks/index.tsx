import data from 'data/data.json';
import Link from 'next/link';
import {
  FaBuilding,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUniversity,
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

function ProfileSocialLinks() {
  const { profileIntro } = data;

  return (
    <div className="w-full bg-white mt-4 rounded-md shadow-xl flex flex-col p-4 gap-y-4">
      <div className="flex gap-x-3 items-center">
        <FaMapMarkerAlt className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href={profileIntro.locationLink} target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-words">
            {profileIntro.location}
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaBuilding className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href={profileIntro.companyLink} target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-words">
            {profileIntro.company}
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaUniversity className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href={profileIntro.universityLink} target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-words">
            {profileIntro.university}
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <MdMail className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href={profileIntro.emailLink}>
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            {profileIntro.emailText}
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaPhoneAlt className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href={profileIntro.phoneLink}>
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            {profileIntro.phoneText}
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaGithub className="text-xl lg:text-2xl flex-shrink-0" />
        <Link href={profileIntro.githubLink} target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            {profileIntro.githubLinkText}
          </p>
        </Link>
      </div>
      <div className="flex gap-x-3 items-center">
        <FaLinkedin className="text-xl lg:text-2xl flex-shrink" />
        <Link href={profileIntro.linkedinLink} target="_blank">
          <p className="text-gray-500 flex-grow text-sm lg:text-base break-all">
            {profileIntro.linkedinLinkText}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileSocialLinks;
