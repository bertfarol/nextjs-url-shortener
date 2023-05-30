import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bg-[#080e1f] px-4 py-12 lg:py-16">
      <div className="items-start max-w-5xl mx-auto lg:grid grid-cols-footer">
        <Link href="/" className="text-3xl font-black">
          <span className="text-blue-600">_</span>
          <span className="text-white uppercase">URL</span>
        </Link>
        <div className="grid grid-cols-2 py-12 text-white gap-11 sm:gap-24 sm:grid-cols-3 lg:py-0">
          <div>
            <h5 className="font-semibold mb-7">Features</h5>
            <ul className="leading-7 text-white/70 font-base">
              <li className="cursor-pointer hover:text-white">
                Link Shortening
              </li>
              <li className="cursor-pointer hover:text-white">Branded Link</li>
              <li className="cursor-pointer hover:text-white">Analytics</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-7">Resources</h5>
            <ul className="leading-7 text-white/70 font-base">
              <li className="cursor-pointer hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-white">Developers</li>
              <li className="cursor-pointer hover:text-white">Support</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-7">Company</h5>
            <ul className="leading-7 text-white/70 font-base">
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Our Team</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>
        </div>
        <ul className="flex gap-x-5">
          <li>
            <Image
              width={24}
              height={24}
              src="./icon-facebook.svg"
              alt="facebook"
            />
          </li>
          <li>
            <Image
              width={24}
              height={24}
              src="./icon-twitter.svg"
              alt="twitter"
            />
          </li>
          <li>
            <Image
              width={24}
              height={24}
              src="./icon-pinterest.svg"
              alt="pinterest"
            />
          </li>
          <li>
            <Image
              width={24}
              height={24}
              src="./icon-instagram.svg"
              alt="instagram"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
