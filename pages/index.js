import UrlShortener from "@/components/UrlShortener";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>_URL</title>
        <meta
          name="description"
          content="Shorten Your Links and Simplify Sharing"
        />
        <meta name="keywords" content="URL, Shortener, Link, Shorten"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className="mx-auto max-w-7xl md:py-28 px-4 md:px-6 py-20">
        <div className="flex justify-between">
          <div className="text-center sm:text-left">
            <h1 className="max-w-2xl mb-4 font-semibold text-4xl md:text-6xl xl:text-7xl xl:leading-[5rem] text-gray-800">
              Simplify Sharing with{" "}
              <span className="text-[#EBAF26] ">Short Links</span>
            </h1>
            <p className="mb-12 text-xl text-gray-700">
              Transform Long URLs into Short and Memorable Links
            </p>
            <a
              href="#url-short"
              className="bg-blue-600 text-white py-3 px-4 text-xl rounded-md duration-300 hover:bg-blue-600/80"
            >
              Try for free
            </a>
          </div>
          <img
            className="h-72 xl:h-96 hidden lg:block"
            src="/undraw_2.svg"
            alt=""
          />
        </div>
      </section>
      <UrlShortener />
    </main>
  );
}
