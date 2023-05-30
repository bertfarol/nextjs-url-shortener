import { useState } from "react";
import LinkBox from "./LinkBox";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { primaryButtonStyle } from "@/components/common/utils/style.guide";


export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      setShortUrl(data.result.short_link2);
      setShareUrl(data.result.share_link);
      setLoading(false);
    } catch (error) {
      console.error(`URL Shortener API: ${error.message}`);
    }
  };

  return (
    <div
      id="url-short"
      className="sm:max-w-lg relative z-10 xl:bg-[url('./bg-short-1.svg')] bg-no-repeat bg-cover xl:max-w-5xl px-4 py-6 mx-auto sm:rounded-lg md:max-w-2xl bg-blue-950 md:p-10 lg:py-14"
    >
      <div className="max-w-3xl mx-auto ">
        <div className="flex flex-col md:flex-row">
          <input
            className="px-4 py-2 mb-3 text-base bg-white border rounded-md outline-none md:mb-0 md:text-xl md:mr-3 grow focus:ring-2"
            value={url}
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter link here..."
          />
          <button
            disabled={!url.length > 0}
            onClick={fetchData}
            className={primaryButtonStyle}
          >
            {isLoading && (
              <span className="mr-2">
                <ArrowPathIcon className="h-6 animate-spin" />
              </span>
            )}
            Shorten it!
          </button>
        </div>
        {shortUrl && shareUrl && (
          <>
            <LinkBox url={shortUrl} title="Short Link" />
            <LinkBox url={shareUrl} title="Share Link" />
          </>
        )}
      </div>
    </div>
  );
}
