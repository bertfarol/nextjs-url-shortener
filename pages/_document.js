import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/logo-icon.ico" />
      </Head>
      <body className="text-slate-500">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
