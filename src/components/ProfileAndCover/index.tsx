import Image from "next/image";

function ProfileAndCover() {
  return (
    <div className="w-full pb-16 sm:pb-8 md:pb-12 lg:pb-28">
      <div className="relative w-full">
        {/* Cover Picture */}
        <div className="w-full bg-cover bg-center">
          <Image
            className="object-cover h-48 sm:h-72 md:h-96 lg:h-[400px] w-full"
            src="/coverPortfolio.png"
            height={460}
            width={1500}
            alt="cover"
          />
        </div>

        {/* Profile Picture */}
        <div className="absolute top-28 sm:top-48 md:top-60 lg:top-64 left-1/2 transform -translate-x-1/2">
          <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/proPic.jpeg"
              alt="Profile"
              width={150}
              height={150}
              className="object-cover sm:w-30 sm:h-30 md:w-48 md:h-48 lg:w-64 lg:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAndCover;
