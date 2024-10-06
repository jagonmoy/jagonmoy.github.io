import data from 'data/data.json';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const { profileIntro } = data;

  const navigation = {
    social: [
      {
        name: 'LinkedIn',
        href: profileIntro.linkedinLink,
        icon: <FaLinkedinIn />,
      },
      {
        name: 'GitHub',
        href: profileIntro.githubLink,
        icon: <FaGithub />,
      },
      {
        name: 'Instagram',
        href: profileIntro.instagramLink,
        icon: <FaInstagram />,
      },
      {
        name: 'Facebook',
        href: profileIntro.facebookLink,
        icon: <FaFacebook />,
      },
    ],
  };

  return (
    <footer className="relative bg-white shadow-2xl rounded-md">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex flex-col gap-y-6">
          <span className="text-gray-400 text-lg lg:text-xl font-bold text-center">
            {' '}
            {"Let's Connect"}
          </span>
          <div className="flex flex-col">
            <div className="text-gray-400 break-words text-center text-sm lg:text-base">
              Interested in connecting for a discussion? Feel free to email me at&nbsp;
              <Link
                href="mailto:jagonmoydey1997@gmail.com"
                className="underline text-gray-400 font-semibold text-sm lg:text-base underline-offset-4"
              >
                jagonmoydey1997@gmail.com
              </Link>
            </div>

            <div className="text-gray-400 break-words text-center text-sm lg:text-base">
              or reach out through any of the social links below.
            </div>
          </div>

          <div className="flex justify-center space-x-5">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
              >
                <span className="sr-only">{item.name}</span>
                <div aria-hidden="true" className="h-6 w-6">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; 2024 Jagonmoy Dey, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
