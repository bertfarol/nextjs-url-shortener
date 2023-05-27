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
      <div className="mx-auto max-w-7xl py-[100px]">
        <div className="text-center">
          <h1 className="max-w-2xl mx-auto mb-6 font-black lg:text-7xl lg:leading-[5.6rem] text-gray-900">
            Shorten Your <span className="text-[#EBAF26] ">Links</span> and
            Simplify Sharing
          </h1>
          <p className="mb-8 text-2xl text-gray-700">
            Transform Long URLs into Short and Memorable Links
          </p>
        </div>
          <UrlShortener />
      </div>
    </main>
  );
}
