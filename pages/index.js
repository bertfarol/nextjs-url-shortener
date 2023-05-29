import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
      <Hero />
      <UrlShortener />
      <Features />
      <CTA />
    </main>
  );
}
