import Link from "next/link";

const navItems = [
  { label: "객실", href: "/rooms" },
  { label: "소개", href: "/about" },
  { label: "안내사항", href: "/info" },
  { label: "오시는 길", href: "/location" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-400">
      {/* Top */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="text-4xl tracking-[0.4em] text-white font-extralight mb-4">
              PIERRE
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-warm-700" />
              <div className="w-1 h-1 rotate-45 border border-warm-700" />
            </div>
            <p className="text-sm leading-[1.8] text-warm-500 max-w-xs">
              자연 속에서 느끼는 여유와 휴식.
              <br />
              서울 근교 용인의 프라이빗 풀빌라 스테이.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.4em] uppercase text-warm-600 mb-6">
              Menu
            </p>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-warm-500 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-warm-600 mb-6">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <p className="text-warm-500">
                경기도 용인시 처인구 모현읍 매산리 517-17
              </p>
              <a
                href="tel:010-3542-8138"
                className="block text-warm-400 hover:text-white transition-colors duration-300"
              >
                010-3542-8138
              </a>
              <a
                href="mailto:mocacia@naver.com"
                className="block text-warm-400 hover:text-white transition-colors duration-300"
              >
                mocacia@naver.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-warm-800/40">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
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
