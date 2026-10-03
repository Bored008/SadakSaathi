"use client";

import { useState } from "react";
import Image from "next/image";

// SVG files from Figma — each includes gradient mask + clipping baked in
// Active (step 1): 46×69, white fill  |  Inactive (steps 2-4): 33×42, orange fill
const steps = [
  {
    id: 1,
    title: "Capture",
    shortDesc:
      "Every source feeds in automatically — no app download required for most of it.",
    detailTitle: "Capture",
    detailDesc:
      "A model trained on real road-damage data scans every image on-device, marks the pothole, and estimates its severity — width, depth, and surface area — before it ever reaches a human.",
    numberSvg: "/Solution/Frame 2085662627.svg",
    numberW: 46,
    numberH: 69,
  },
  {
    id: 2,
    title: "Detect",
    shortDesc:
      "AI scans every image in real time, identifying potholes and classifying severity automatically.",
    detailTitle: "Detect",
    detailDesc:
      "Our computer vision model, trained on thousands of real road-damage images, runs inference on-device — identifying potholes, cracks, and surface damage in under a second.",
    numberSvg: "/Solution/Frame 2085662627-1.svg",
    numberW: 33,
    numberH: 42,
  },
  {
    id: 3,
    title: "Prioritized",
    shortDesc:
      "Each report is ranked by severity, traffic volume, and proximity to critical infrastructure.",
    detailTitle: "Prioritized",
    detailDesc:
      "A smart scoring engine weighs severity, traffic density, road class, and proximity to schools or hospitals — so repair crews fix what matters first, not just what's reported loudest.",
    numberSvg: "/Solution/Frame 2085662627-2.svg",
    numberW: 33,
    numberH: 42,
  },
  {
    id: 4,
    title: "Verify",
    shortDesc:
      "Before-and-after image comparison confirms repairs are actually completed.",
    detailTitle: "Verify",
    detailDesc:
      "Once a repair is logged, the system requests a follow-up image. Computer vision compares before and after, verifying the fix and closing the loop — no manual sign-off needed.",
    numberSvg: "/Solution/Frame 2085662627-3.svg",
    numberW: 33,
    numberH: 42,
  },
];

const StepNumberSVG = ({ stepId, isActive }: { stepId: number; isActive: boolean }) => {
  const w = isActive ? 46 : 33;
  const h = isActive ? 69 : 42;
  const color = isActive ? "white" : "#FF5C22";
  const opacity = isActive ? "0.54" : "1";

  if (stepId === 1) {
    return (
      <svg width={w} height={h} viewBox="0 0 46 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-2 pointer-events-none select-none transition-all duration-300">
        <mask id="mask1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="69">
          <rect width="46" height="69" fill="url(#paint0_linear_1)" fillOpacity="0.5"/>
        </mask>
        <g mask="url(#mask1)">
          <path d="M19.104 69V25.992H4.512V14.184C7.904 14.184 10.72 14.024 12.96 13.704C15.2 13.32 17.056 12.488 18.528 11.208C20.064 9.864 21.408 7.752 22.56 4.872H33.6V69H19.104Z" fill={color} fillOpacity={opacity} className="transition-colors duration-300"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_1" x1="23" y1="22.2722" x2="23.3814" y2="65.0707" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9D9D9"/>
            <stop offset="1" stopColor="#737373" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  const paths: Record<number, string> = {
    2: "M1.98678 41.2609V33.9565C7.12904 30.3336 11.2195 27.2755 14.2581 24.7823C17.2967 22.2501 19.4783 20.0296 20.8028 18.1207C22.1663 16.2118 22.848 14.4198 22.848 12.7447C22.848 11.2254 22.3026 10.0762 21.2118 9.29704C20.16 8.51791 18.9134 8.12834 17.472 8.12834C16.2643 8.12834 15.0762 8.47895 13.9075 9.18017C12.7388 9.84243 11.9402 11.089 11.5117 12.92L3.44765 9.99826C4.49948 7.2713 6.31096 5.18713 8.88209 3.74573C11.4532 2.26539 14.4529 1.52521 17.881 1.52521C20.5301 1.52521 22.9064 1.97321 25.0101 2.86921C27.1137 3.72626 28.7694 5.01182 29.977 6.72591C31.1847 8.40104 31.7885 10.4657 31.7885 12.92C31.7885 16.8546 30.1329 20.5165 26.8216 23.9057C23.5492 27.256 19.0497 30.6063 13.3231 33.9565H31.9638V41.2609H1.98678Z",
    3: "M17.0045 41.9623C14.823 41.9623 12.7193 41.6507 10.6936 41.0274C8.70678 40.4041 6.95374 39.4496 5.43443 38.1641C3.91513 36.8395 2.74643 35.1449 1.92835 33.0802L9.99235 30.1585C10.4988 32.0674 11.4337 33.4114 12.7972 34.1905C14.1607 34.9696 15.641 35.3592 17.2383 35.3592C19.0692 35.3592 20.5301 34.9112 21.6209 34.0152C22.7117 33.1192 23.257 31.8726 23.257 30.2754C23.257 28.6782 22.7506 27.451 21.7377 26.594C20.7249 25.698 19.3809 25.0942 17.7057 24.7825C16.0696 24.4319 14.2776 24.2566 12.3297 24.2566V18.0625C15.68 18.0625 18.2511 17.595 20.0431 16.6601C21.8741 15.7251 22.7896 14.4006 22.7896 12.6865C22.7896 11.1672 22.1663 10.0375 20.9197 9.29728C19.712 8.51815 18.3096 8.12859 16.7123 8.12859C15.271 8.12859 13.9464 8.4792 12.7388 9.18041C11.5311 9.88163 10.7325 11.1282 10.343 12.9202L2.33739 9.9985C3.11652 8.01172 4.26574 6.39502 5.78504 5.14841C7.30435 3.9018 9.05739 2.98633 11.0442 2.40198C13.031 1.81763 15.0957 1.52546 17.2383 1.52546C19.0303 1.52546 20.7833 1.72024 22.4974 2.1098C24.2115 2.49937 25.7503 3.12267 27.1137 3.97972C28.5162 4.7978 29.6264 5.84963 30.4445 7.13519C31.3016 8.3818 31.7301 9.88163 31.7301 11.6347C31.7301 13.7383 31.1652 15.5888 30.0355 17.186C28.9057 18.7442 27.6591 19.9129 26.2957 20.6921C27.5812 21.1595 28.672 21.8997 29.568 22.9126C30.503 23.9255 31.2042 25.0357 31.6717 26.2434C32.1391 27.451 32.3729 28.6587 32.3729 29.8663C32.3729 32.5933 31.6522 34.8528 30.2108 36.6448C28.7694 38.3978 26.88 39.7223 24.5426 40.6183C22.2052 41.5143 19.6925 41.9623 17.0045 41.9623Z",
    4: "M20.3353 41.261V33.0217H1.344V26.5354L20.3353 2.22655H29.2174V25.1914H34.5934V33.0217H29.2174V41.261H20.3353ZM10.9857 25.1914H20.3353V13.8551L10.9857 25.1914Z"
  };

  const pathD = paths[stepId];
  if (!pathD) return null;

  return (
    <svg width={w} height={h} viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-2 top-2 pointer-events-none select-none transition-all duration-300">
      <mask id={`mask_${stepId}`} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="42">
        <rect width="32.2609" height="42" fill={`url(#paint0_linear_${stepId})`} fillOpacity="0.5"/>
      </mask>
      <g mask={`url(#mask_${stepId})`}>
        <path d={pathD} fill={color} fillOpacity={opacity} className="transition-colors duration-300"/>
      </g>
      <defs>
        <linearGradient id={`paint0_linear_${stepId}`} x1="16.1304" y1="13.557" x2="16.332" y2="39.6087" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D9D9D9"/>
          <stop offset="1" stopColor="#737373" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const DetailPanel = ({ step }: { step: (typeof steps)[0] }) => (
  <div className="w-full shrink-0 flex flex-col justify-between gap-6 min-h-[340px] sm:min-h-[360px] lg:h-[400px] bg-[#F9F3EE]/60 lg:bg-transparent p-5 lg:p-0 rounded-[25px] lg:rounded-none">
    {/* Top: Solution label + detail text */}
    <div className="flex flex-col gap-3">
      <h4 className="font-sans font-semibold text-[24px] sm:text-[32px] tracking-[-0.05em] text-[#FF5C22] m-0">
        Solution :
      </h4>

      <div className="flex flex-col gap-1">
        <h5 className="font-sans font-medium text-[24px] sm:text-[32px] tracking-[-0.05em] text-[#1A1A1A] m-0">
          {step.detailTitle}
        </h5>
        <p className="font-sans text-[15px] sm:text-[16px] leading-relaxed tracking-[-0.05em] text-black/75 m-0">
          {step.detailDesc}
        </p>
      </div>
    </div>

    {/* Pothole Image */}
    <div className="relative w-full h-[200px] sm:h-[206px] rounded-[16px] overflow-hidden shrink-0">
      <Image
        src="/Solution/pthole.webp"
        alt="Pothole detection example"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 549px"
      />
    </div>
  </div>
);

export default function Solution() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="solution" className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10 md:gap-[55px]">
        {/* ─── Header Block ─── */}
        <div className="flex flex-col items-center gap-3 max-w-[717px] w-full text-center">
          {/* Solution Pill Badge */}
          <span className="inline-flex items-center justify-center bg-[#1A1A1A] text-white text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] shadow-sm">
            Solution
          </span>

          {/* Main Heading: Detected. Prioritized. Done. */}
          <h2 className="text-[32px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.05em] text-center leading-[1.15] text-[#1A1A1A]">
            <span className="text-[#848484]">Detected.</span>{" "}
            <span className="relative inline-block text-[#FF5C22]">
              <span
                className="absolute inset-0 text-[#FF5C22]/75 blur-xl pointer-events-none select-none"
                aria-hidden="true"
              >
                Prioritized.
              </span>
              <span className="relative">Prioritized.</span>
            </span>{" "}
            <span className="text-black">Done.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] text-black/75 font-sans font-normal leading-relaxed max-w-[585px] m-0">
            You already collect complaints. What&apos;s missing is a system that
            knows which ones actually matter. Tap a step to see how it works.
          </p>
        </div>

        {/* ─── Four Step Flow Section ─── */}
        <div className="w-full flex flex-col gap-6">
          {/* Section Title */}
          <h3 className="text-[24px] sm:text-[32px] font-semibold tracking-[-0.05em] text-black m-0">
            Four Step Flow :
          </h3>

          {/* Two-Column Layout (Responsive Desktop side-by-side, Mobile stacked per-card) */}
          <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-8 lg:gap-12">
            {/* ─── Left Column: Step Cards ─── */}
            <div className="w-full lg:w-[546px] shrink-0 flex flex-col gap-3">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div key={step.id} className="flex flex-col gap-3">
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`relative text-left w-full transition-all duration-300 ease-in-out rounded-[25px] p-4 sm:p-5 border-0 cursor-pointer overflow-hidden ${
                        isActive
                          ? "bg-[#FF5C22]/90 text-white shadow-md"
                          : "bg-[#F9F3EE] text-black hover:bg-[#F2E8E0]"
                      }`}
                    >
                      {/* Step Number SVG */}
                      <StepNumberSVG stepId={step.id} isActive={isActive} />

                      {/* Arrow Icon + Title Row */}
                      <div className="flex items-center gap-3 relative z-10">
                        {/* Arrow SVG */}
                        <svg
                          width="44"
                          height="44"
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`shrink-0 transition-transform duration-300 ${
                            isActive ? "rotate-90" : "rotate-0"
                          }`}
                        >
                          <path
                            d="M16.5 11L27.5 22L16.5 33"
                            stroke={isActive ? "#FFFFFF" : "#000000"}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        {/* Step Title */}
                        <span className="font-sans font-medium text-[24px] sm:text-[32px] tracking-[-0.05em]">
                          {step.title}
                        </span>
                      </div>

                      {/* Expanded Description (only for active step) */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isActive
                            ? "max-h-[200px] opacity-100 mt-3"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p className="font-sans text-[14px] sm:text-[16px] leading-relaxed tracking-[-0.05em] text-white/85 relative z-10 m-0">
                          {step.shortDesc}
                        </p>
                      </div>
                    </button>

                    {/* Mobile Detail Panel: Appears directly under the active card on mobile (< lg screens) */}
                    {isActive && (
                      <div className="block lg:hidden my-1 animate-in fade-in slide-in-from-top-2 duration-300">
                        <DetailPanel step={step} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ─── Right Column: Detail Panel (Desktop only) ─── */}
            <div className="hidden lg:flex lg:w-[549px] shrink-0">
              <DetailPanel step={steps[activeStep]} />
            </div>
          </div>
        </div>

        {/* ─── Bottom Quote ─── */}
        <p className="font-sans italic text-[15px] sm:text-[16px] tracking-[-0.05em] text-center text-[#848484] w-full m-0">
          &ldquo;If your city&apos;s potholes get logged but never ranked — this
          closes that gap.&rdquo;
        </p>
      </div>
    </section>
  );
}
