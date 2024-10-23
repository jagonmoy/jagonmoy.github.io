import data from 'data/data.json';
import Image from 'next/image';

import ProfileSocialLinks from './ProfileSocialLinks';

function ProfileAndIntro() {
  const { profileIntro } = data;
  return (
    <div className="flex flex-col gap-y-4">
      <div className="rounded-full overflow-hidden border-2 border-white shadow-xl">
        <Image src="/proPic.jpeg" alt="Profile" height={400} width={800} priority />
      </div>
      <div className="w-full p-4">
        <h1 className="font-bold text-gray-900 text-xl lg:text-2xl">{profileIntro.name}</h1>
        <div className="text-gray-500 text-md lg:text-lg">{profileIntro.pronouns}</div>
        <div className="text-gray-500 mt-2 break-words text-md lg:text-lg">{profileIntro.bio}</div>
        <div className="hidden md:block">
          <ProfileSocialLinks />
        </div>
      </div>
    </div>
  );
}

export default ProfileAndIntro;
