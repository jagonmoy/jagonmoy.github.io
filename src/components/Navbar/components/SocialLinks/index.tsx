import data from 'data/data.json';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const SocialLinks = () => {
  const { profileIntro } = data;

  return (
    <div className="flex justify-end space-x-8 py-4 pr-8">
      <Link href={profileIntro.githubLink} target="_blank">
        <FaGithub className="text-2xl" />
      </Link>
      <Link href={profileIntro.linkedinLink} target="_blank">
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link href={profileIntro.emailLink}>
        <MdMail className="text-2xl" />
      </Link>
    </div>
  );
};
export default SocialLinks;
