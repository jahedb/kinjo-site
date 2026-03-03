"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sections = ["features", "trust", "founding", "waitlist"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const linkClass = (id: string) =>
    `transition ${
      active === id ? "text-[#A3B18A] font-medium" : "hover:text-[#A3B18A]"
    }`;

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
        <Link href="/" onClick={closeMenu}>
          <img
            src={scrolled ? "/logo.svg" : "/logo-white.svg"}
            alt="Kinjo"
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#344E41]">
          <a href="#features" className={linkClass("features")}>
            Features
          </a>
          <a href="#trust" className={linkClass("trust")}>
            Trust
          </a>
          <a href="#founding" className={linkClass("founding")}>
            Founding
          </a>
          <a href="#waitlist" className={linkClass("waitlist")}>
            Waitlist
          </a>

          <a
            href="#waitlist"
            className="ml-4 px-4 py-2 rounded bg-[#A3B18A] text-[#344E41] hover:opacity-90 transition font-medium"
          >
            Request Access
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-[#344E41]" />
          <span className="w-6 h-[2px] bg-[#344E41]" />
          <span className="w-6 h-[2px] bg-[#344E41]" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[#A3B18A]/20`}
      >
        <div className="flex flex-col px-6 py-6 gap-6 text-[#344E41] text-sm">

          <a href="#features" onClick={closeMenu} className={linkClass("features")}>
            Features
          </a>

          <a href="#trust" onClick={closeMenu} className={linkClass("trust")}>
            Trust
          </a>

          <a href="#founding" onClick={closeMenu} className={linkClass("founding")}>
            Founding
          </a>

          <a href="#waitlist" onClick={closeMenu} className={linkClass("waitlist")}>
            Waitlist
          </a>

          <a
            href="#waitlist"
            onClick={closeMenu}
            className="mt-2 px-4 py-3 rounded bg-[#A3B18A] text-[#344E41] text-center font-medium"
          >
            Request Access
          </a>
        </div>
      </div>
    </nav>
  );
}