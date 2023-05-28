import { useState } from "react";
import LinkBox from "./LinkBox";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

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
    <div id="url-short" className="bg-blue-950 py-6 lg:py-14 px-4">
      <div className="max-w-3xl mx-auto ">
        <div className="flex">
          <input
            className="px-4 py-3 mr-3 text-xl bg-white border rounded-md outline-none grow focus:ring-2"
            value={url}
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter link here..."
          />
          <button
            disabled={!url.length > 0}
            onClick={fetchData}
            className="flex items-center px-4 py-3 text-xl text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-600/70"
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
