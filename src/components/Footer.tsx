const navItems = [
  { label: "소개", href: "#about" },
  { label: "객실", href: "#rooms" },
  { label: "안내사항", href: "#info" },
  { label: "오시는 길", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-400">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-3xl tracking-[0.15em] text-white font-logo mb-3">
              PIERRE
            </p>
            <div className="w-8 h-px bg-warm-700 mb-5" />
            <p className="text-sm leading-[1.8] text-warm-500 max-w-xs">
              자연 속에서 느끼는 여유와 휴식.
              <br />
              서울 근교 용인의 프라이빗 풀빌라 스테이.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-600 mb-5">Menu</p>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-warm-500 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-600 mb-5">Contact</p>
            <div className="space-y-2.5 text-sm">
              <p className="text-warm-500">경기도 용인시 처인구 모현읍 매산리 517-17</p>
              <a href="tel:010-3542-8138" className="block text-warm-400 hover:text-white transition-colors">
                010-3542-8138
              </a>
              <a href="mailto:mocacia@naver.com" className="block text-warm-400 hover:text-white transition-colors">
                mocacia@naver.com
              </a>
            </div>

            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-600 mt-8 mb-4">Follow</p>
            <a
              href="https://www.instagram.com/pierre__stay/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-warm-400 hover:text-white transition-colors group"
              aria-label="PIERRE 인스타그램"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @pierre__stay
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-warm-800/40">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-[10px] text-warm-700 tracking-wide">
            &copy; {new Date().getFullYear()} PIERRE. All rights reserved.
          </p>
          <p className="text-[10px] text-warm-700 tracking-wide">
            Private Pool Villa &middot; Yongin, Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
