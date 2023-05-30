import {
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Card from "./common/Card/Card";
import { h2Style } from "@/components/common/utils/style.guide";

export default function Features() {
  return (
    <div className="px-4 md:px-6 p-28 bg-[#dff0fd] mt-[-70px]">
      <h2 className={h2Style + " mt-8 text-center"}>Enhance Link Management</h2>
      <p className="max-w-md mx-auto mt-6 mb-24 text-lg text-center">
        Discover the Benefits of our URL Shortening Service&apos;s Advanced
        Functionality
      </p>
      <div className="block max-w-5xl grid-cols-3 mx-auto lg:grid gap-x-7">
        <Card
          title="Customize Your Links"
          description="Personalize your shortened links with meaningful keywords to create
            memorable and branded URLs."
          Icon={WrenchScrewdriverIcon}
        />
        <Card
          Icon={LockClosedIcon}
          title="Secure and Reliable"
          description="Rest assured knowing that your links are safe and secure. Our
            platform prioritizes data privacy and offers reliable link
            redirection for a seamless user experience."
        />
        <Card
          Icon={Cog6ToothIcon}
          title="API Integration"
          description="Integrate our URL shortening service into your own applications or
            websites with ease using our robust API. Extend the functionality
            and convenience of our platform to your users."
        />
      </div>
    </div>
  );
}
