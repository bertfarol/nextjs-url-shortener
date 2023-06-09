import { primaryButtonStyle, h1Style } from "@/components/common/utils/style.guide";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="px-4 py-16 mx-auto lg:max-w-7xl md:py-28 md:px-6 sm:max-w-lg md:max-w-3xl">
      <div className="flex justify-between">
        <div className="max-w-2xl">
          <h1 className={h1Style + " lg:leading-tight"}>
            Simplify Sharing with{" "}
            <span className="text-blue-600 ">Short Links.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 ">
            Transform long URLs into short and memorable links.
          </p>

          <a href="#url-short" className={primaryButtonStyle + " mt-6"}>
            Get Started
          </a>
        </div>
        <div className="relative hidden duration-300 h-80 xl:h-96 lg:block">
          <Image
            width={560}
            height={382}
            src="./undraw_2.svg" // edit this when deploy on hosting
            alt="short link"
          />
        </div>
      </div>
    </section>
  );
}
