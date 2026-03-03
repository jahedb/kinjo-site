"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#A3B18A]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Kinjo"
            className="h-7 w-auto"
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#344E41]">
          <a href="#features" className="hover:text-[#A3B18A] transition">
            Features
          </a>
          <a href="#trust" className="hover:text-[#A3B18A] transition">
            Trust
          </a>
          <a href="#founding" className="hover:text-[#A3B18A] transition">
            Founding
          </a>
          <a href="#waitlist" className="hover:text-[#A3B18A] transition">
            Waitlist
          </a>

          {/* CTA */}
          <a
            href="#waitlist"
            className="ml-4 px-4 py-2 rounded bg-[#A3B18A] text-[#344E41] hover:opacity-90 transition font-medium"
          >
            Request Access
          </a>
        </div>
      </div>
    </nav>
  );
}