import {
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  return (
    <div className="px-4 md:px-6 p-28 bg-[#dff0fd] mt-[-70px]">
      <h2 className="pt-20 mb-8 text-5xl font-black text-center text-gray-800">
        Enhance Link Management
      </h2>
      <p className="max-w-md mx-auto mb-24 text-lg text-center text-gray-600">
        Discover the Benefits of our URL Shortening Service's Advanced
        Functionality
      </p>
      <div className="grid max-w-5xl grid-cols-3 mx-auto gap-x-7">
        <div className="relative px-8 pt-16 pb-8 bg-white rounded-md">
          <div className="absolute p-4 rounded-full w-fit bg-blue-600 top-[-40px] left-8">
            <WrenchScrewdriverIcon className="text-white h-9" />
          </div>
          <div className="pb-5 text-xl font-semibold text-gray-800 ">
            Customize Your Links
          </div>
          <div className="text-base text-gray-600">
            Personalize your shortened links with meaningful keywords to create
            memorable and branded URLs.
          </div>
        </div>
        <div className="relative px-8 pt-16 pb-8 bg-white rounded-md">
          <div className="absolute p-4 rounded-full w-fit bg-blue-600 top-[-40px] left-8">
            <LockClosedIcon className="text-white h-9" />
          </div>
          <div className="pb-5 text-xl font-semibold text-gray-800 ">
            Secure and Reliable
          </div>
          <div className="text-base text-gray-600">
            Rest assured knowing that your links are safe and secure. Our
            platform prioritizes data privacy and offers reliable link
            redirection for a seamless user experience.
          </div>
        </div>
        <div className="relative px-8 pt-16 pb-8 bg-white rounded-md">
          <div className="absolute p-4 rounded-full w-fit bg-blue-600 top-[-40px] left-8">
            <Cog6ToothIcon className="text-white h-9" />
          </div>
          <div className="pb-5 text-xl font-semibold text-gray-800 ">
            API Integration
          </div>
          <div className="text-base text-gray-600">
            Integrate our URL shortening service into your own applications or
            websites with ease using our robust API. Extend the functionality
            and convenience of our platform to your users.
          </div>
        </div>
      </div>
    </div>
  );
}
