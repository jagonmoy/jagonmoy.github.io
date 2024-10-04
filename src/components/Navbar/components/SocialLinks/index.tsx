import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const SocialLinks = () => {
  return (
    <div className="flex justify-end space-x-8 py-4 pr-8">
      <Link href="https://github.com/jagonmoy" target="_blank">
        <FaGithub className="text-2xl" />
      </Link>
      <Link href="https://www.linkedin.com/in/jagonmoy/" target="_blank">
        <FaLinkedin className="text-2xl" />
      </Link>
      <Link href="mailto:jagonmoydey1997@gmail.com" target="_blank">
        <MdMail className="text-2xl" />
      </Link>
    </div>
  );
};
export default SocialLinks;
