import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full pt-6 md:pt-10 lg:pt-12 pb-0 bg-white overflow-hidden">
      {/* Background road texture with gradient mask matching Figma node #759:2200 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1441px] h-[560px] sm:h-[660px] md:h-[740px] lg:h-[790px] pointer-events-none select-none z-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
        <Image
          src="/Hero section images/hero-bg-masked.webp"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1441px) 100vw, 1441px"
        />
        {/* Soft edge blend for screens wider than 1441px */}
        <div className="absolute inset-0 hidden 2xl:block pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-[1409px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Center Content Container (Designed width 739px) */}
        <div className="w-full max-w-[739px] mx-auto flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="relative font-[Inter] text-[34px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-medium leading-[1.14] tracking-[-0.05em] text-[#848484]">
            {/* Line 1: Every Pothole Detected */}
            <span className="relative block sm:whitespace-nowrap">
              <span>Every </span>
              <span className="relative inline-block text-[#FF5C22]">
                {/* Glow layer underneath "Pothole" */}
                <span
                  className="absolute inset-0 translate-y-1 scale-105 blur-[20px] md:blur-[26px] opacity-80 pointer-events-none select-none text-[#FF5C22]"
                  aria-hidden="true"
                >
                  Pothole
                </span>
                <span className="relative z-10">Pothole</span>
              </span>
              <span> Detected</span>
            </span>

            {/* Line 2: Before It Costs a Life */}
            <span className="relative block sm:whitespace-nowrap mt-1">
              <span>Before It </span>
              <span className="relative inline-block text-[#FF5C22]">
                {/* Glow layer underneath "Costs a Life" */}
                <span
                  className="absolute inset-0 translate-y-1 scale-105 blur-[20px] md:blur-[26px] opacity-80 pointer-events-none select-none text-[#FF5C22]"
                  aria-hidden="true"
                >
                  Costs a Life
                </span>
                <span className="relative z-10">Costs a Life</span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-[17px] text-[15px] sm:text-[16px] text-black/75 font-sans font-normal leading-relaxed max-w-[620px]">
            SadakSaathi uses AI to detect, prioritize, and verify road repairs — turning scattered complaints into a live, data-driven maintenance system for cities.
          </p>

          {/* CTA Buttons Container */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Filled Install Button */}
            <Link
              href="#install"
              className="inline-flex items-center justify-center gap-2 bg-[#FF5C22] hover:bg-[#e04b16] text-white text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Install SadakSaathi</span>
              <Image
                src="/icon/download.svg"
                alt=""
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            </Link>

            {/* Secondary Outline / Frosted See How It Works Button */}
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/50 hover:bg-white/90 backdrop-blur-sm border border-[#848484] text-black/75 hover:text-black text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] transition-all duration-200 shadow-sm"
            >
              <span>See How It Works</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px]"
              >
                <path
                  d="M2.25 9H15.375"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 14.25L15.75 9L10.5 3.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Phone Mockups Image (Designed Width 1116px, Height 356px) */}
        <div className="w-full max-w-[1116px] mt-10 md:mt-16 lg:mt-[85px] flex justify-center">
          <Image
            src="/Hero section images/hero-dashboard.webp"
            alt="SadakSaathi Mobile App Interface Preview"
            width={1116}
            height={356}
            priority
            className="w-full h-auto max-w-[1116px] object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
