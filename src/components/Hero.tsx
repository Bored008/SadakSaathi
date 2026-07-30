import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="w-full py-8 md:py-14 bg-white overflow-hidden">
      <div className="max-w-[1409px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Top Row: Left Image + Center Content + Right Image */}
        <div className="w-full flex items-center justify-between gap-6 lg:gap-[85px]">
          {/* Left Pothole Image */}
          <div className="hidden xl:block shrink-0 w-[250px] h-[370px] relative rounded-[32px] overflow-hidden shadow-sm transition-transform hover:scale-[1.02] duration-300">
            <Image
              src="/Hero section images/Perspective 1 · 3d.png"
              alt="Road Hazard Detection"
              fill
              className="object-cover"
              sizes="250px"
              priority
            />
          </div>

          {/* Center Content Container (Designed width ~739px) */}
          <div className="flex-1 max-w-[739px] mx-auto flex flex-col items-center text-center">
            {/* Main Heading */}
            <h1 className="font-sans text-[32px] sm:text-[48px] md:text-[58px] lg:text-[66px] xl:text-[70px] font-normal leading-[1.15] tracking-[-0.05em] text-[#848484]">
              {/* Line 1: Every Pothole Detected */}
              <span className="block sm:whitespace-nowrap">
                <span>Every </span>
                <span className="relative inline-block text-[#FF5C22] font-medium">
                  <span
                    className="absolute inset-0 text-[#FF5C22]/70 blur-xl pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    Pothole
                  </span>
                  <span className="relative">Pothole</span>
                </span>
                <span> Detected</span>
              </span>

              {/* Line 2: Before It Costs a Life */}
              <span className="block sm:whitespace-nowrap mt-1">
                <span>Before It </span>
                <span className="relative inline-block text-[#FF5C22] font-medium">
                  <span
                    className="absolute inset-0 text-[#FF5C22]/70 blur-xl pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    Costs a Life
                  </span>
                  <span className="relative">Costs a Life</span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-[15px] sm:text-[16px] text-black/75 font-sans font-normal leading-relaxed max-w-[620px]">
              SadakSaathi uses AI to detect, prioritize, and verify road repairs — turning scattered complaints into a live, data-driven maintenance system for cities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              {/* Filled Install Button */}
              <Link
                href="#install"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5C22] hover:bg-[#e04b16] text-white text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] transition-all duration-200 shadow-sm"
              >
                <span>Install SadadkSaathi</span>
                <Image
                  src="/icon/download.svg"
                  alt="Download Icon"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                />
              </Link>

              {/* Outline See How It Works Button */}
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-50 border border-[#848484] text-black/75 hover:text-black text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] transition-all duration-200"
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

          {/* Right Pothole Image */}
          <div className="hidden xl:block shrink-0 w-[250px] h-[369px] relative rounded-[32px] overflow-hidden shadow-sm transition-transform hover:scale-[1.02] duration-300">
            <Image
              src="/Hero section images/Perspective 1 · 3d-1.png"
              alt="Road Condition Inspection"
              fill
              className="object-cover"
              sizes="250px"
              priority
            />
          </div>
        </div>

        {/* Bottom Phone Mockups Image (Designed Width 1116px, Height 356px) */}
        <div className="w-full max-w-[1116px] mt-10 md:mt-14 flex justify-center">
          <Image
            src="/Hero section images/image 3.png"
            alt="SadakSaathi Mobile App Interface Preview"
            width={1116}
            height={356}
            priority
            className="w-full h-auto max-w-[1116px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
