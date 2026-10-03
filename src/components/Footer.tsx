import Image from "next/image";
import Link from "next/link";

/* ── Social icon button (outlined circle) ── */
function SocialIcon({
  href,
  iconSrc,
  alt,
}: {
  href: string;
  iconSrc: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-7 h-7 sm:w-[28px] sm:h-[28px] rounded-full border border-[#FF5C22] transition-opacity hover:opacity-80 shrink-0"
    >
      <Image
        src={iconSrc}
        alt={alt}
        width={18}
        height={18}
        className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
      />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full min-h-[460px] lg:h-[756px]"
    >
      {/* ── Background image (must be z-0 so it sits BEHIND the white panel) ── */}
      <div className="absolute inset-x-0 bottom-0 top-[220px] sm:top-[200px] lg:top-[162px] z-1 pointer-events-none">
        <Image
          src="/footer/footer.webp"
          alt=""
          fill
          className="object-cover object-top sm:object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-0 z-0 -top-5">
        <div className="relative w-full min-h-[351px] p-6 sm:p-8 lg:p-[44px_48px] flex flex-col justify-between gap-6 sm:gap-8 border border-[#848484]/30 border-b-0 rounded-4xl">
          
          {/* Blur layer with mask to blur only inside the SVG shape */}
          <div 
            className="absolute inset-0 -z-20 backdrop-blur-md "
            style={{
              maskImage: "url('/footer/footer%20layout.svg')",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskImage: "url('/footer/footer%20layout.svg')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
            }}
          />

          {/* SVG Background Layer for the orange glow and borders */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <Image
              src="/footer/footer layout.svg"
              alt="Footer Background Shape"
              fill
              className="object-cover sm:object-fill"
              priority
            />
          </div>

          {/* ── Main content row: Logo + Link columns ── */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-8 lg:gap-12">
            {/* Logo */}
            <div className="shrink-0">
              <Image
                src="/footer/logofooter.webp"
                alt="SadakSaathi Logo"
                width={155}
                height={72}
                className="w-[110px] sm:w-[130px] lg:w-[155px] h-auto object-contain"
              />
            </div>

            {/* Link columns */}
            <div className="w-full lg:w-auto flex flex-row justify-between sm:justify-start gap-4 sm:gap-8 lg:gap-[96px]">
              {/* Explore (Left Column on mobile) */}
              <div className="flex flex-col gap-2 sm:gap-3 w-[45%] sm:w-auto">
                <span className="font-sans font-medium text-[14px] sm:text-[16px] text-[#FF5C22]">
                  Explore
                </span>
                {["Home", "Problems", "Solutions", "Features"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-sans font-normal text-[13px] sm:text-[15px] lg:text-[16px] tracking-[-0.05em] text-[#848484] hover:text-[#FF5C22] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Right Columns: App + Legal Pages */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-[96px] w-[50%] sm:w-auto">
                {/* App */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="font-sans font-medium text-[14px] sm:text-[16px] text-[#FF5C22]">
                    App
                  </span>
                  <Link
                    href="#"
                    className="font-sans font-normal text-[13px] sm:text-[15px] lg:text-[16px] tracking-[-0.05em] text-[#848484] hover:text-[#FF5C22] transition-colors"
                  >
                    Download for android
                  </Link>
                </div>

                {/* Legal Pages */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="font-sans font-medium text-[14px] sm:text-[16px] text-[#FF5C22]">
                    Legal Pages
                  </span>
                  <Link
                    href="#"
                    className="font-sans font-normal text-[13px] sm:text-[15px] lg:text-[16px] tracking-[-0.05em] text-[#848484] hover:text-[#FF5C22] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="font-sans font-normal text-[13px] sm:text-[15px] lg:text-[16px] tracking-[-0.05em] text-[#848484] hover:text-[#FF5C22] transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Divider line ── */}
          <div className="w-full h-[0.8px] bg-[#848484]/20 my-1" />

          {/* ── Bottom bar: copyright + social icons ── */}
          <div className="relative w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
            {/* Copyright */}
            <div className="flex items-center justify-center gap-1.5 text-center">
              <Image
                src="/icon/copyright.svg"
                alt=""
                width={18}
                height={18}
                aria-hidden="true"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
              />
              <span className="font-sans font-normal text-[12px] sm:text-[14px] lg:text-[15px] tracking-[-0.05em] text-[#848484]">
                2026 SadakSaathi All Rights Reserved .
              </span>
            </div>

            {/* Social icons */}
            <div className="sm:absolute sm:right-0 flex items-center gap-3 sm:gap-4 shrink-0">
              <SocialIcon
                href="https://instagram.com"
                iconSrc="/icon/instagram.svg"
                alt="Instagram"
              />
              <SocialIcon
                href="https://linkedin.com"
                iconSrc="/icon/linkedin.svg"
                alt="LinkedIn"
              />
              <SocialIcon
                href="https://x.com"
                iconSrc="/icon/twitter.svg"
                alt="Twitter / X"
              />
              <SocialIcon
                href="https://whatsapp.com"
                iconSrc="/icon/whatsapp.svg"
                alt="WhatsApp"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
