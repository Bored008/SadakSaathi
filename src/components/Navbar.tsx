"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link
              href="#home"
              className="font-sans font-medium text-[16px] text-black underline underline-offset-4 decoration-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="#problem"
              className="font-sans font-normal text-[16px] text-black/75 hover:text-black transition-colors"
            >
              Problem
            </Link>
            <Link
              href="#solution"
              className="font-sans font-normal text-[16px] text-black/75 hover:text-black transition-colors"
            >
              Solution
            </Link>
            <Link
              href="#features"
              className="font-sans font-normal text-[16px] text-black/75 hover:text-black transition-colors"
            >
              Features
            </Link>
          </nav>

          {/* Desktop CTA Watch Demo Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#demo"
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
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-medium text-[16px] text-black underline underline-offset-4 decoration-black py-1"
          >
            Home
          </Link>
          <Link
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-normal text-[16px] text-black/75 hover:text-black py-1"
          >
            Problem
          </Link>
          <Link
            href="#solution"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-normal text-[16px] text-black/75 hover:text-black py-1"
          >
            Solution
          </Link>
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="font-sans font-normal text-[16px] text-black/75 hover:text-black py-1"
          >
            Features
          </Link>
          <Link
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
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
