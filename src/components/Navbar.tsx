"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLenis } from "lenis/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    if (navLinks.some(link => link.href === href)) {
      setActiveSection(targetId);
    }
    
    if (lenis) {
      lenis.scrollTo(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white sticky top-0 z-50 py-4">
      <div className="max-w-[794px] w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[53px]">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/icon/logo.png"
              alt="SadakSaathi Logo"
              width={123}
              height={57}
              priority
              className="w-[123px] h-[57px] object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-[18px]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-sans text-[16px] transition-colors ${
                    isActive
                      ? "font-medium text-black underline underline-offset-4 decoration-black"
                      : "font-normal text-black/75 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Watch Demo Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#demo"
              onClick={(e) => handleNavClick(e, "#demo")}
              className="inline-flex items-center justify-center gap-[4px] bg-[#1A1A1A] hover:bg-[#333333] text-white text-[14px] font-sans font-normal py-[7px] px-[14px] rounded-[23px] transition-all duration-200 shadow-sm"
            >
              <span>Watch Demo</span>
              <Image
                src="/icon/toprightarrow.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <Image
                src="/icon/menu.svg"
                alt="Menu Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 pt-3 pb-6 flex flex-col gap-4 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-[16px] py-1 transition-colors ${
                  isActive
                    ? "font-medium text-black underline underline-offset-4 decoration-black"
                    : "font-normal text-black/75 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="#demo"
            onClick={(e) => handleNavClick(e, "#demo")}
            className="inline-flex items-center justify-center gap-[4px] bg-[#1A1A1A] text-white text-[14px] font-sans font-normal py-[10px] px-[16px] rounded-[23px] mt-2"
          >
            <span>Watch Demo</span>
            <Image
              src="/icon/toprightarrow.svg"
              alt="Arrow"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </Link>
        </div>
      )}
    </header>
  );
}
