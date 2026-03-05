"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Users } from "lucide-react";

const sections = ["features", "trust", "founding", "waitlist"];

export default function Nav() {
const [scrolled, setScrolled] = useState(false);
const [open, setOpen] = useState(false);
const [active, setActive] = useState("features");
const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

/* detect scroll + active section */
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

/* load waitlist count */
useEffect(() => {
async function loadCount() {
try {
const res = await fetch("/api/suburb-count");
const data = await res.json();

    if (data?.count !== undefined) {
      setWaitlistCount(data.count);
    }
  } catch (err) {
    console.error(err);
  }
}

loadCount();

}, []);

const closeMenu = () => setOpen(false);

return (
<nav
className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB]"
          : "bg-transparent"
      }`}
> <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <Link href="/" onClick={closeMenu}>
      <img
        src="/logo.svg"
        alt="Kinjo"
        className={`transition-all duration-300 ${
          scrolled ? "h-9" : "h-11"
        }`}
      />
    </Link>

    {/* Desktop nav */}
    <div className="hidden md:flex items-center gap-2 bg-[#F4F7F2] rounded-full px-2 py-1 border border-[#E5E7EB]">

      {sections.map((id) => {
        const isActive = active === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`px-4 py-2 text-sm rounded-full transition ${
              isActive
                ? "bg-[#A3B18A] text-[#344E41] font-medium"
                : "text-[#344E41] hover:bg-[#E8EFE3]"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        );
      })}

      {/* CTA */}
      <a
        href="#waitlist"
        className="ml-2 flex items-center gap-2 px-5 py-2 rounded-full bg-[#344E41] text-white hover:bg-[#2f4438] transition font-medium"
      >
        Request Access

        {waitlistCount !== null && (
          <span className="flex items-center gap-1 text-xs bg-white/20 px-2 py-[2px] rounded-full">
            <Users size={12} />
            {waitlistCount}
          </span>
        )}
      </a>
    </div>

    {/* Mobile button */}
    <button
      className="md:hidden text-[#344E41]"
      onClick={() => setOpen(!open)}
    >
      <Menu size={26} />
    </button>
  </div>

  {/* Mobile menu */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ${
      open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    } bg-white border-t border-[#A3B18A]/20`}
  >
    <div className="flex flex-col px-6 py-6 gap-6 text-[#344E41] text-sm">

      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={closeMenu}
          className={`transition ${
            active === id
              ? "text-[#A3B18A] font-medium"
              : "hover:text-[#A3B18A]"
          }`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}

      <a
        href="#waitlist"
        onClick={closeMenu}
        className="mt-2 px-4 py-3 rounded bg-[#A3B18A] text-[#344E41] text-center font-medium flex items-center justify-center gap-2"
      >
        Request Access

        {waitlistCount !== null && (
          <span className="text-xs bg-[#344E41]/10 px-2 py-[2px] rounded-full flex items-center gap-1">
            <Users size={12} />
            {waitlistCount}
          </span>
        )}
      </a>

    </div>
  </div>
</nav>

);
}
