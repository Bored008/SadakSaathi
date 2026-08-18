"use client";

import { useState } from "react";

/* ── FAQ data: two columns, first item in each column starts expanded ── */
const leftFaqs = [
  {
    q: "What exactly does SadakSaathi do?",
    a: "It turns a pothole photo into a tracked, prioritized repair — detecting the damage, ranking how urgent it is, routing it to the right team, and confirming the fix actually happened.",
  },
  {
    q: "What happens if multiple people report the same pothole?",
    a: "Duplicate reports are automatically clustered by location. The system merges them into a single case, boosting its priority score — so more reports means faster action, not more noise.",
  },
  {
    q: "Does it work without a strong internet connection?",
    a: "Yes. The AI model runs on-device for detection and severity scoring. Reports queue locally and sync automatically once connectivity is restored.",
  },
  {
    q: "Is it free to use?",
    a: "For citizens, absolutely. The app is free to download and use. Municipal dashboards are licensed separately based on city size and integration needs.",
  },
];

const rightFaqs = [
  {
    q: "How accurate is the AI detection?",
    a: "It runs an on-device model trained on real road-damage datasets to spot potholes and score their severity. Like any vision model, accuracy improves as it sees more local road conditions — this isn't claimed as perfect, just far faster than manual inspection.",
  },
  {
    q: "Does SadakSaathi fix the roads itself?",
    a: "No — it's the intelligence layer. SadakSaathi detects, prioritizes, and routes repair requests to the right municipal team, then verifies the fix. The actual repair still happens through existing city crews.",
  },
  {
    q: "How do you know a repair was actually done?",
    a: "Once a fix is reported, the system requests a follow-up photo. Computer vision compares before and after images to verify the repair — no manual sign-off needed.",
  },
  {
    q: "Is this a live product or a prototype?",
    a: "It's a working prototype with a functional AI pipeline. Core detection, scoring, and verification flows are built. Municipal integration and city-scale deployment are the next milestones.",
  },
];

/* ── Plus icon (dark circle) ── */
function PlusIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="16" fill="#1A1A1A" />
      <path
        d="M16 10V22M10 16H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Minus icon (dark circle) ── */
function MinusIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="16" fill="#1A1A1A" />
      <path
        d="M10 16H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Single FAQ column ── */
function FaqColumn({
  faqs,
  openIndex,
  onToggle,
}: {
  faqs: { q: string; a: string }[];
  openIndex: number | null;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="w-full lg:w-1/2 flex-1 min-w-0 flex flex-col gap-4 sm:gap-5">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <button
            key={i}
            onClick={() => onToggle(i)}
            className={`text-left w-full transition-all duration-300 rounded-[18px] p-4 sm:p-6 border-0 cursor-pointer flex flex-col items-stretch ${
              isOpen
                ? "bg-[#FF5C22] text-white gap-3 sm:gap-4 shadow-sm"
                : "bg-[#F9F3EE] text-[#1A1A1A] gap-0 hover:bg-[#F2E8E0]"
            }`}
          >
            {/* Question row: text + icon */}
            <div className="flex items-center justify-between gap-3">
              <span
                className={`font-sans font-medium text-[16px] sm:text-[18px] tracking-[-0.05em] ${
                  isOpen ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {faq.q}
              </span>
              {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>

            {/* Answer — animated expand/collapse */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p className="font-sans font-normal text-[14px] sm:text-[16px] tracking-[-0.05em] leading-relaxed text-white/80 m-0">
                {faq.a}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ── Main FAQ section ── */
export default function Faq() {
  const [leftOpen, setLeftOpen] = useState<number | null>(0);
  const [rightOpen, setRightOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-10 md:gap-[58px]">
        {/* ─── Header ─── */}
        <div className="flex flex-col items-center gap-3 w-full text-center">
          {/* FAQ pill badge */}
          <span className="inline-flex items-center justify-center bg-[#1A1A1A] text-white text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] shadow-sm">
            FAQ
          </span>

          {/* Heading: Questions, Answered Straight */}
          <h2 className="text-[32px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.05em] text-center leading-[1.15] text-[#1A1A1A] max-w-[782px]">
            <span className="text-[#848484]">Questions,</span>{" "}
            <span className="relative inline-block text-[#FF5C22]">
              <span
                className="absolute inset-0 text-[#FF5C22]/75 blur-xl pointer-events-none select-none"
                aria-hidden="true"
              >
                Answered
              </span>
              <span className="relative">Answered</span>
            </span>{" "}
            <span className="text-[#1A1A1A]">Straight</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[16px] text-black/75 font-sans font-normal leading-relaxed text-center max-w-[585px] m-0">
            Got Questions? Say less, We&apos;ve got answers!
          </p>
        </div>

        {/* ─── FAQ cards (1 Column on Mobile, 2 Columns on Desktop) ─── */}
        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 items-stretch lg:items-start justify-between">
          <FaqColumn
            faqs={leftFaqs}
            openIndex={leftOpen}
            onToggle={(i) => setLeftOpen(leftOpen === i ? null : i)}
          />
          <FaqColumn
            faqs={rightFaqs}
            openIndex={rightOpen}
            onToggle={(i) => setRightOpen(rightOpen === i ? null : i)}
          />
        </div>
      </div>
    </section>
  );
}
