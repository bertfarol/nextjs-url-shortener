export default function Hero() {
  return (
    <section className="px-4 py-20 mx-auto max-w-7xl md:py-28 md:px-6">
      <div className="flex justify-between">
        <div className="text-center sm:text-left">
          <h1 className="max-w-2xl mb-4 font-black text-4xl md:text-6xl xl:text-7xl xl:leading-[5rem] text-gray-800">
            Simplify Sharing with{" "}
            <span className="text-[#EBAF26] ">Short Links</span>
          </h1>
          <p className="mb-12 text-xl text-gray-700">
            Transform Long URLs into Short and Memorable Links
          </p>
          <a
            href="#url-short"
            className="px-5 py-4 text-xl text-white duration-300 bg-blue-600 rounded-md hover:bg-blue-600/80"
          >
            Get Started
          </a>
        </div>
        <img
          className="hidden h-72 xl:h-96 lg:block"
          src="/undraw_2.svg"
          alt=""
        />
      </div>
    </section>
  );
}
