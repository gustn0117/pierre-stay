"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "소개", href: "#about" },
  { label: "객실", href: "#rooms" },
  { label: "안내사항", href: "#info" },
  { label: "오시는 길", href: "#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-warm-50/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className={`text-xl tracking-[0.15em] font-logo font-normal transition-colors duration-700 ${
              scrolled ? "text-warm-900" : "text-white"
            }`}
          >
            PIERRE
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  scrolled
                    ? "text-warm-500 hover:text-warm-900"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="메뉴"
          >
            <span
              className={`block w-5 h-px transition-all duration-500 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              } ${scrolled ? "bg-warm-900" : "bg-white"}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-500 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              } ${scrolled ? "bg-warm-900" : "bg-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-warm-50/95 backdrop-blur-xl ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-warm-500 hover:text-warm-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
