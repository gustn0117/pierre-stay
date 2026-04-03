"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import PlaceholderImage from "./PlaceholderImage";

interface Props {
  items: string[];
  itemWidth: number;
  itemHeight: number;
  gap?: number;
  sidePadding?: number;
}

export default function ScrollGallery({
  items,
  itemWidth,
  itemHeight,
  gap = 40,
  sidePadding = 260,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const amount = itemWidth + gap;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative group/gallery">
      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${
          canLeft ? "opacity-0 group-hover/gallery:opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="이전"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${
          canRight ? "opacity-0 group-hover/gallery:opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="다음"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Scrollable area */}
      <div
        ref={ref}
        className="overflow-x-scroll gallery-scroll"
        style={{ overflowY: "hidden" }}
      >
        <div
          className="flex"
          style={{ gap, padding: `0 ${sidePadding}px`, width: "max-content" }}
        >
          {items.map((label, i) => (
            <div key={i} className="shrink-0" style={{ width: itemWidth, height: itemHeight }}>
              <PlaceholderImage className="w-full h-full" label={label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
