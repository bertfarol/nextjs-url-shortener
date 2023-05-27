import { useState } from "react";

export default function UrlShortener(second) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shareUrl, setShareUrl] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      console.log(data.result);
      setShortUrl(data.result.short_link2);
      setShareUrl(data.result.share_link);
    } catch (error) {
      console.error(`URL Shortener API: ${error.message}`);
    }
  };

  const handleCopy = () => {
    console.log("copied!");
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex">
        <input
          className="px-4 py-3 mr-3 text-xl bg-white border rounded-md outline-none grow focus:ring-2"
          value={url}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Make your link shorter..."
        />
        <button
          onClick={fetchData}
          className="px-2 px-4 py-3 text-xl text-white duration-300 bg-blue-600 rounded-md hover:ring-4"
        >
          Shorten it!
        </button>
      </div>
      {shortUrl && shareUrl && (
        <>
          <div className="mt-4">
            Short Link:{" "}
            <a
              href={`https://${shortUrl}`}
              className="text-xl text-blue-600"
              target="_blank"
            >
              {shortUrl}
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(shortUrl)}
              className="px-2 py-1 ml-4 text-sm font-semibold text-blue-600 duration-300 border border-gray-300 rounded-md hover:ring-2"
            >
              Copy
            </button>
          </div>
          <div className="mx-auto mt-2">
            Share Link:{" "}
            <a
              href={`https://${shareUrl}`}
              className="text-xl text-blue-600"
              target="_blank"
            >
              {shareUrl}
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(shareUrl)}
              className="px-2 py-1 ml-4 text-sm font-semibold text-blue-600 duration-300 border border-gray-300 rounded-md hover:ring-2"
            >
              Copy
            </button>
          </div>
        </>
      )}
    </div>
  );
}
