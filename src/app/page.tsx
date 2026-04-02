import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { IconPool, IconBed, IconStone, IconArrowRight } from "@/components/Icons";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute! inset-0 placeholder-image [&::after]:content-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />

      {/* Decorative frame */}
      <div className="absolute inset-8 md:inset-16 border border-white/[.08] pointer-events-none" />
      <div className="absolute top-8 md:top-16 left-8 md:left-16 w-6 h-6 border-l-2 border-t-2 border-white/30" />
      <div className="absolute bottom-8 md:bottom-16 right-8 md:right-16 w-6 h-6 border-r-2 border-b-2 border-white/30" />

      <div className="relative z-10 text-center text-white px-6">
        <div className="hero-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <p className="text-[10px] md:text-[11px] tracking-[0.7em] uppercase mb-10 font-light text-white/60">
            Private Pool Villa &middot; Yongin
          </p>
        </div>

        <div className="hero-fade-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.25em] mb-4 leading-none">
            PIERRE
          </h1>
        </div>

        <div className="hero-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-12 h-px bg-white/30" />
            <div className="w-1.5 h-1.5 rotate-45 border border-white/40" />
            <div className="w-12 h-px bg-white/30" />
          </div>
          <p className="text-sm md:text-base font-extralight tracking-[0.2em] text-white/70">
            자연 속에서 느끼는 여유와 휴식
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center hero-fade-in"
        style={{ animationDelay: "2s", opacity: 0 }}
      >
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-1.5 mb-3">
          <div className="w-0.5 h-2 bg-white/60 rounded-full hero-pulse" />
        </div>
        <p className="text-[9px] tracking-[0.5em] uppercase text-white/40">Scroll</p>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function Stats() {
  const stats = [
    { number: "82", unit: "㎡", label: "객실 면적" },
    { number: "4", unit: "계절", label: "온수풀 운영" },
    { number: "15", unit: "분", label: "에버랜드 거리" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 border-b border-warm-200">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i + 1} className="text-center">
            <p className="text-4xl md:text-5xl font-extralight text-warm-900 mb-1">
              {s.number}
              <span className="text-lg md:text-xl text-warm-400 ml-1">{s.unit}</span>
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-warm-400">{s.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Highlights ─── */
function Highlights() {
  const items = [
    {
      icon: <IconPool className="w-8 h-8" />,
      title: "프라이빗 온수풀",
      desc: "사계절 온수풀과 선베드가 갖춰진 1층 전용 야외 수영장에서 프라이빗한 물놀이를 즐기세요.",
    },
    {
      icon: <IconStone className="w-8 h-8" />,
      title: "포인트존",
      desc: "암석을 모티브로 디자인된 공간. 거친 듯 자연스러운 돌의 질감이 시선을 사로잡습니다.",
    },
    {
      icon: <IconBed className="w-8 h-8" />,
      title: "두 가지 공간",
      desc: "원룸형 풀빌라와 블랙&화이트 복층. 취향에 맞는 공간을 선택할 수 있습니다.",
    },
  ];

  return (
    <section className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <SectionTitle label="Experience" title="특별한 경험" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i + 1}>
              <div className="group text-center p-10 rounded-sm border border-transparent hover:border-warm-200 hover:bg-white transition-all duration-500">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-warm-100 flex items-center justify-center text-warm-500 group-hover:bg-warm-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-base font-medium tracking-wide mb-4">{item.title}</h3>
                <p className="text-[13px] text-warm-500 leading-[1.8]">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Room preview ─── */
function RoomPreview() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 bg-warm-900 text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-20 md:mb-24">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">Rooms</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide mb-6">
            두 가지 공간
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-warm-700" />
            <div className="w-1.5 h-1.5 rotate-45 border border-warm-600" />
            <div className="w-16 h-px bg-warm-700" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* A타입 */}
          <ScrollReveal variant="left">
            <Link href="/rooms" className="group block">
              <div className="relative overflow-hidden rounded-sm">
                <div className="img-zoom">
                  <PlaceholderImage className="w-full h-72 md:h-96" label="A타입" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">
                    Type A · 1F
                  </p>
                  <h3 className="text-2xl font-extralight tracking-wide mb-2">
                    풀빌라 원룸
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    프라이빗 수영장 · 기준 2인 · 82㎡
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-extralight">
                      350,000<span className="text-xs text-white/40 ml-1">원~</span>
                    </p>
                    <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors">
                      View
                      <IconArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* B타입 */}
          <ScrollReveal variant="right">
            <Link href="/rooms" className="group block">
              <div className="relative overflow-hidden rounded-sm">
                <div className="img-zoom">
                  <PlaceholderImage className="w-full h-72 md:h-96" label="B타입" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">
                    Type B · 2F/3F
                  </p>
                  <h3 className="text-2xl font-extralight tracking-wide mb-2">
                    블랙&화이트 복층
                  </h3>
                  <p className="text-sm text-white/60 mb-4">
                    빔프로젝터 · 기준 4인 · 각 82㎡
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-extralight">
                      500,000<span className="text-xs text-white/40 ml-1">원~</span>
                    </p>
                    <span className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/40 group-hover:text-white transition-colors">
                      View
                      <IconArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── About preview ─── */
function AboutPreview() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <ScrollReveal variant="left" className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="img-zoom rounded-sm">
                <PlaceholderImage className="w-full aspect-3/4" label="소개 1" />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="img-zoom rounded-sm">
                <PlaceholderImage className="w-full aspect-square" label="소개 2" />
              </div>
              <div className="img-zoom rounded-sm">
                <PlaceholderImage className="w-full aspect-video" label="소개 3" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" className="lg:col-span-7 lg:pl-8">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-4">
            About Pierre
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-3">
            돌이 전하는 안식
          </h2>
          <p className="text-sm text-warm-400 tracking-wide mb-8">
            Stone, Water, Sunlight
          </p>
          <div className="w-10 h-px bg-warm-300 mb-8" />
          <p className="text-[13px] text-warm-600 leading-[2] mb-6">
            PIERRE는 프랑스어로 &lsquo;돌&rsquo;을 뜻합니다. 단단하면서도
            자연스러운 돌처럼, 견고함과 편안함을 공간에 담았습니다. 암석
            모티브의 포인트존과 프라이빗 수영장이 어우러져 몸과 마음이 자연과
            하나 되는 경험을 선사합니다.
          </p>
          <p className="text-[13px] text-warm-600 leading-[2] mb-10">
            햇살과 그림자가 포인트존 위를 스칠 때마다,
            자연 속에서 시간이 멈춘 듯한 여유를 느끼실 수 있습니다.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-warm-900 border-b border-warm-300 pb-2 hover:border-warm-900 transition-colors duration-300"
          >
            더 알아보기
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
function CTABanner() {
  return (
    <section className="relative py-36 md:py-44 px-6 md:px-12 overflow-hidden">
      <div className="absolute! inset-0 placeholder-image [&::after]:content-none" />
      <div className="absolute inset-0 bg-warm-900/85" />

      {/* Decorative frame */}
      <div className="absolute inset-10 md:inset-20 border border-white/[.06] pointer-events-none" />

      <ScrollReveal className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <p className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-6">
          Reservation
        </p>
        <h2 className="text-3xl md:text-5xl font-extralight tracking-wide mb-4">
          예약 및 문의
        </h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-10 h-px bg-white/20" />
          <div className="w-1.5 h-1.5 rotate-45 border border-white/30" />
          <div className="w-10 h-px bg-white/20" />
        </div>
        <p className="text-sm text-white/50 leading-relaxed mb-12">
          전화 또는 이메일로 예약하실 수 있습니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:010-3542-8138"
            className="group px-10 py-4 bg-white text-warm-900 text-[11px] tracking-[0.2em] uppercase hover:bg-warm-100 transition-all duration-300"
          >
            010-3542-8138
          </a>
          <Link
            href="/location"
            className="px-10 py-4 border border-white/25 text-white text-[11px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
          >
            오시는 길
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Highlights />
      <RoomPreview />
      <AboutPreview />
      <CTABanner />
    </>
  );
}
