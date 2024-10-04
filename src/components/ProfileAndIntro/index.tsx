import Image from 'next/image';

import ProfileSocialLinks from './ProfileSocialLinks';

function ProfileAndCover() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="rounded-full overflow-hidden border-2 border-white shadow-xl">
        <Image src="/proPic.jpeg" alt="Profile" height={400} width={800} priority />
      </div>
      <div className="w-full p-4">
        <h1 className="font-bold text-gray-900 text-xl lg:text-2xl">Jagonmoy Dey</h1>
        <div className="text-gray-500 text-sm lg:text-base">he/him</div>
        <div className="text-gray-500 mt-2 break-words text-sm lg:text-base">
          Software Engineer @ Cefalo | Full-Stack Developer | Machine Learning Enthusiast
        </div>
        <div className="hidden sm:block">
          <ProfileSocialLinks />
        </div>
      </div>
    </div>
  );
}

export default ProfileAndCover;
