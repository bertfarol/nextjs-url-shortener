"clien-side";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="flex items-center p-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex mr-10">
          <Link href="/" className="-m-1.5 p-1.5 text-3xl font-black">
            <span className="text-blue-600">_</span>
            <span className="text-gray-800 uppercase">URL</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 ">
          <Link
            href="/features"
            className="text-sm font-semibold leading-6 text-gray-500"
          >
            Features
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-500">
            About Us
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-base font-bold text-blue-600 ">
            Log in
          </a>
        </div>
      </nav>
    </header>
  );
}
