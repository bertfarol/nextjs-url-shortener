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
      <span className="text-sm font-semibold text-white">{title}</span>
      <div className="flex items-center justify-between px-4 py-3 bg-white rounded-md">
        <a
          href={`https://${url}`}
          className="text-base text-blue-600 lg:text-xl"
          target="_blank"
        >
          {url}
        </a>
        <button
          onClick={() => handleCopy(url)}
          className="px-2 py-1 ml-4 text-sm font-semibold text-blue-600 duration-300 border border-gray-300 rounded-md hover:ring-2"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
