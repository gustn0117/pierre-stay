import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IconMap, IconPhone, IconMail, IconCar, IconClock } from "@/components/Icons";

export const metadata: Metadata = { title: "오시는 길" };

function ContactInfo() {
  const contacts = [
    {
      icon: <IconMap className="w-5 h-5" />,
      label: "주소",
      value: "경기도 용인시 처인구 모현읍 매산리 517-17",
      sub: "도로명: 곡현로 485번길 31-7",
    },
    {
      icon: <IconPhone className="w-5 h-5" />,
      label: "전화",
      value: "010-3542-8138",
      href: "tel:010-3542-8138",
    },
    {
      icon: <IconMail className="w-5 h-5" />,
      label: "이메일",
      value: "mocacia@naver.com",
      href: "mailto:mocacia@naver.com",
    },
    {
      icon: <IconClock className="w-5 h-5" />,
      label: "체크인/아웃",
      value: "입실 15:00 / 퇴실 11:00",
    },
  ];

  return (
    <section className="py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Contact */}
        <ScrollReveal variant="left">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-4">
            연락처
          </h2>
          <div className="w-10 h-px bg-warm-300 mb-12" />

          <div className="space-y-0">
            {contacts.map((item) => (
              <div key={item.label} className="flex gap-5 py-6 border-b border-warm-100 group">
                <div className="w-12 h-12 rounded-full bg-warm-100 flex items-center justify-center text-warm-400 shrink-0 group-hover:bg-warm-900 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div className="pt-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-1.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-warm-800 hover:text-warm-500 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-warm-800">{item.value}</p>
                  )}
                  {"sub" in item && item.sub && (
                    <p className="text-[11px] text-warm-400 mt-1">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal variant="right" className="flex flex-col">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">Map</p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-4">
            지도
          </h2>
          <div className="w-10 h-px bg-warm-300 mb-12" />
          <div className="flex-1 min-h-[340px] placeholder-image rounded-sm" />
        </ScrollReveal>
      </div>
    </section>
  );
}

function Directions() {
  return (
    <section className="pb-28 md:pb-36 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">Directions</p>
          <h3 className="text-2xl md:text-3xl font-extralight tracking-wide mb-6">교통 안내</h3>
          <div className="flex items-center justify-center gap-4 ornament">
            <div className="w-1.5 h-1.5 rotate-45 border border-warm-300" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-sm p-8 md:p-12 shadow-[0_4px_60px_-15px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-warm-900 flex items-center justify-center text-white">
                <IconCar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-0.5">By Car</p>
                <h4 className="text-sm font-medium tracking-wide text-warm-800">자가용 이용 시</h4>
              </div>
            </div>

            <ol className="space-y-5 ml-1">
              {[
                "네비게이션에 '경기도 용인시 모현읍 곡현로 485번길 31-7' 검색",
                "용인 IC 또는 양지 IC에서 약 15~20분 소요",
                "주차 공간이 마련되어 있습니다",
              ].map((step, i) => (
                <li key={i} className="flex gap-5 text-[13px] text-warm-600 leading-relaxed">
                  <span className="w-7 h-7 rounded-full bg-warm-50 border border-warm-200 flex items-center justify-center text-[11px] text-warm-500 shrink-0 font-medium">
                    {i + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute! inset-0 placeholder-image [&::after]:content-none" />
      <div className="absolute inset-0 bg-warm-900/85" />
      <div className="absolute inset-10 md:inset-20 border border-white/5 pointer-events-none" />

      <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-center text-white">
        <p className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-6">Reservation</p>
        <h2 className="text-3xl md:text-5xl font-extralight tracking-wide mb-4">
          예약 문의
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
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-warm-900 text-[11px] tracking-[0.2em] uppercase hover:bg-warm-100 transition-all duration-300"
          >
            <IconPhone className="w-4 h-4" />
            전화 예약
          </a>
          <a
            href="mailto:mocacia@naver.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/25 text-white text-[11px] tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300"
          >
            <IconMail className="w-4 h-4" />
            이메일 문의
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function LocationPage() {
  return (
    <>
      <PageHero label="Location" title="오시는 길" subtitle="경기도 용인시 처인구 모현읍" />
      <ContactInfo />
      <Directions />
      <CTASection />
    </>
  );
}
