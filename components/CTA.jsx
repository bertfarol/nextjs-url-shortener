import { primaryButtonStyle, h2Style } from "./common/utils/style.guide";



export default function CTA() {
    return (
      <div className="px-4 flex flex-col items-center justify-center bg-blue-950 p-14 bg-[url('/bg-short-2.svg')] bg-no-repeat bg-cover">
        <h2 className="mb-12 text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl">
          Boost your links today
        </h2>
        <button className={primaryButtonStyle}>Get Started</button>
      </div>
    );
}