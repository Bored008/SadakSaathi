import Image from "next/image";

export default function Problem() {
  const problemCards = [
    {
      id: 1,
      stat: "23,056",
      label: "Pothole-related accidents recorded in 5 years .",
      image: "/problem images/white-car-in-a-giant-dirty-pothole-on-road-vector-30242933 1.png",
      alt: "Pothole accident illustration",
    },
    {
      id: 2,
      stat: "19,956",
      label: "People injured — nearly half classified as grievous .",
      image: "/problem images/image 11.png",
      alt: "Injured in road accident due to pothole",
    },
    {
      id: 3,
      stat: "54%",
      label: "Of all pothole deaths concentrated in just one state (UP) .",
      image: "/problem images/Untitled 1.png",
      alt: "Concentrated pothole fatalities",
    },
    {
      id: 4,
      stat: "₹65,000 Cr",
      label: "Spent on highway maintenance in the same period .",
      image: "/problem images/image 12.png",
      alt: "Highway maintenance expenditure",
    },
  ];

  return (
    <section id="problem" className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Gradient - matches Figma node #38:116: full-width at y:362 in 689px section (52.5% from top) */}
      {/* Left gradient sweep */}
      <div className="absolute left-0 top-[52%] -translate-y-1/2 pointer-events-none z-0 w-[60%]">
        <Image
          src="/problem images/Frame 8.svg"
          alt=""
          width={862}
          height={205}
          className="w-full h-auto object-contain object-left"
          priority
        />
      </div>

      {/* Right gradient sweep */}
      <div className="absolute right-0 top-[52%] -translate-y-1/2 pointer-events-none z-0 w-[60%]">
        <Image
          src="/problem images/Frame 9.svg"
          alt=""
          width={862}
          height={205}
          className="w-full h-auto object-contain object-right"
          priority
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Top Section Header */}
        <div className="max-w-[791px] mx-auto flex flex-col items-center text-center">
          {/* Section Pill Badge */}
          <div className="inline-flex items-center justify-center bg-[#1A1A1A] text-white text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] shadow-sm mb-4">
            <span>Problems</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[36px] sm:text-[48px] lg:text-[60px] font-semibold tracking-[-0.05em] leading-[1.15] text-[#1A1A1A]">
            <span>India Is </span>
            <span className="relative inline-block text-[#FF5C22]">
              {/* Ambient Glow */}
              <span
                className="absolute inset-0 text-[#FF5C22]/70 blur-xl pointer-events-none select-none"
                aria-hidden="true"
              >
                Losing Lives
              </span>
              <span className="relative">Losing Lives</span>
            </span>
            <span> to Roads We Never Saw Coming</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[15px] sm:text-[16px] text-black/75 font-sans font-normal leading-relaxed max-w-[590px]">
            Potholes aren't a maintenance inconvenience — they're a growing cause of death. And despite record spending on repairs, the numbers keep climbing.
          </p>
        </div>

        {/* 4 Statistics Cards Outer Container (Figma spec: padding 9px 4px, gap 14px, rounded 26px, translucent fill) */}
        <div className="w-full max-w-[1200px] mt-10 md:mt-14 bg-white/20 backdrop-blur-md border border-[#E4E4E7]/50 rounded-[26px] py-[9px] px-[4px] sm:px-[8px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {problemCards.map((card) => (
              <div
                key={card.id}
                className="bg-white/30 backdrop-blur-sm border border-[#E4E4E7]/50 rounded-[22px] py-[14px] px-[16px] flex flex-col gap-[18px] transition-all duration-300 hover:border-[#FF5C22]/40 hover:bg-white/40"
              >
                {/* Number Stat (Figma spec: 44px SemiBold, line-height 34px, tracking -0.05em) */}
                <h3 className="font-sans text-[44px] font-semibold text-[#FF5C22] tracking-[-0.05em] leading-[34px]">
                  {card.stat}
                </h3>

                {/* Description Label (Figma spec: 17px Regular, line-height 22px, tracking -0.05em) */}
                <p className="font-sans text-[17px] font-normal text-black/65 tracking-[-0.05em] leading-[22px]">
                  {card.label}
                </p>

                {/* Card Image (Figma spec: height 142px, rounded 16px) */}
                <div className="w-full h-[142px] relative rounded-[16px] overflow-hidden shrink-0 bg-neutral-100/50">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 285px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Quote */}
        <p className="mt-14 text-[15px] sm:text-[16px] text-black/75 font-sans font-normal text-center leading-relaxed max-w-[996px]">
          &quot;The problem isn't a lack of funding - it's a lack of visibility. Governments react to complaints after damage is done, with no way to know which roads are most dangerous, or whether repairs actually worked.&quot;
        </p>
      </div>
    </section>
  );
}
