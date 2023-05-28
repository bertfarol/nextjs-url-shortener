import { useState } from "react";

export default function LinkBox({ url, title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="mt-4 ">
      <span className="text-white font-semibold text-sm">{title}</span>
      <div className="px-4 py-3 bg-white rounded-md flex justify-between">
        <a
          href={`https://${url}`}
          className="text-xl text-blue-600"
          target="_blank"
        >
          {url}
        </a>
        <button
          onClick={() => handleCopy(url)}
          className="px-2 py-1 ml-4 text-sm font-semibold text-blue-600 duration-300 border border-gray-300 rounded-md hover:ring-2"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
