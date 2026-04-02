"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "객실", href: "/rooms" },
  { label: "소개", href: "/about" },
  { label: "안내사항", href: "/info" },
  { label: "오시는 길", href: "/location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        showTransparent
          ? "bg-transparent"
          : "bg-warm-50/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className={`text-xl md:text-2xl tracking-[0.35em] font-extralight transition-colors duration-700 ${
              showTransparent ? "text-white" : "text-warm-900"
            }`}
          >
            PIERRE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] tracking-[0.25em] uppercase transition-all duration-500 ${
                  pathname === item.href
                    ? showTransparent
                      ? "text-white"
                      : "text-warm-900"
                    : showTransparent
                    ? "text-white/70 hover:text-white"
                    : "text-warm-500 hover:text-warm-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.25 p-2"
            aria-label="메뉴"
          >
            <span
              className={`block w-5 h-px transition-all duration-500 origin-center ${
                menuOpen ? "rotate-45 translate-y-0.75" : ""
              } ${showTransparent ? "bg-white" : "bg-warm-900"}`}
            />
            <span
              className={`block w-5 h-px transition-all duration-500 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-0.75" : ""
              } ${showTransparent ? "bg-white" : "bg-warm-900"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out bg-warm-50/95 backdrop-blur-xl ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-8 pt-4 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[11px] tracking-[0.25em] uppercase transition-colors ${
                pathname === item.href
                  ? "text-warm-900"
                  : "text-warm-500 hover:text-warm-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
