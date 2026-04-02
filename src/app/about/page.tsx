import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IconStone, IconWater, IconPool } from "@/components/Icons";

export const metadata: Metadata = { title: "소개" };

function Intro() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12">
      <ScrollReveal className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-10 rounded-full bg-warm-100 flex items-center justify-center text-warm-500">
          <IconStone className="w-7 h-7" />
        </div>
        <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">
          The Meaning of Pierre
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide mb-8 leading-snug">
          PIERRE — 이름에 담긴 의미
        </h2>
        <div className="flex items-center justify-center gap-4 mb-10 ornament">
          <div className="w-1.5 h-1.5 rotate-45 border border-warm-300" />
        </div>
        <p className="text-[13px] md:text-sm text-warm-600 leading-[2.2] max-w-xl mx-auto">
          PIERRE는 프랑스어로 &lsquo;돌&rsquo;을 뜻합니다.
          단단하면서도 자연스러운 형태를 가진 돌처럼,
          견고함과 편안함, 시간을 초월한 아름다움을 공간에 담았습니다.
        </p>
      </ScrollReveal>
    </section>
  );
}

function PointZone() {
  return (
    <section className="px-6 md:px-12 pb-32 md:pb-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <ScrollReveal variant="left" className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="img-zoom rounded-sm overflow-hidden">
                <PlaceholderImage className="w-full aspect-3/4" label="포인트존 1" />
              </div>
            </div>
            <div className="space-y-4 pt-14">
              <div className="img-zoom rounded-sm overflow-hidden">
                <PlaceholderImage className="w-full aspect-square" label="포인트존 2" />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden">
                <PlaceholderImage className="w-full aspect-video" label="포인트존 3" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" className="lg:col-span-6">
          <div className="lg:pl-4">
            <div className="w-10 h-10 mb-6 rounded-full bg-warm-100 flex items-center justify-center text-warm-500">
              <IconStone className="w-5 h-5" />
            </div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-warm-400 mb-3">
              Point Zone
            </p>
            <h3 className="text-2xl md:text-3xl font-extralight tracking-wide mb-6">
              암석이 만드는 풍경
            </h3>
            <div className="w-10 h-px bg-warm-300 mb-8" />
            <div className="space-y-5 text-[13px] text-warm-600 leading-[2]">
              <p>
                포인트존은 암석을 모티브로 디자인된 피에르의 상징적 공간입니다.
                거친 듯 자연스러운 돌의 질감이 강렬한 존재감을 주면서도
                마음을 차분하게 안정시킵니다.
              </p>
              <p>
                햇살과 그림자가 스칠 때마다 자연 속에서 시간이 멈춘 듯한
                여유를 느끼실 수 있습니다. 돌 위에 앉거나 기대어 있으면
                견고함이 주는 안정감과 함께 긴장이 풀립니다.
              </p>
            </div>
            <div className="mt-10 p-6 bg-warm-50 rounded-sm border-l-2 border-warm-400">
              <p className="text-[13px] text-warm-800 font-medium leading-relaxed">
                &ldquo;PIERRE는 단순한 숙소가 아닙니다.&rdquo;
              </p>
              <p className="text-[12px] text-warm-500 mt-2 leading-relaxed">
                자연과 돌, 물과 햇살이 만드는 조화 속에서
                휴식과 감성을 온전히 느끼는 공간입니다.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function PoolVilla() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Full-width bg */}
      <div className="absolute inset-0 bg-warm-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <ScrollReveal variant="left" className="lg:col-span-6 text-white order-2 lg:order-1">
          <div className="w-10 h-10 mb-6 rounded-full bg-white/10 flex items-center justify-center text-white/70">
            <IconWater className="w-5 h-5" />
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-3">
            Pool Villa
          </p>
          <h3 className="text-2xl md:text-3xl font-extralight tracking-wide mb-6">
            자연 속 프라이빗 풀빌라
          </h3>
          <div className="w-10 h-px bg-white/20 mb-8" />
          <div className="space-y-5 text-[13px] text-white/60 leading-[2]">
            <p>
              서울 근교 용인에 자리한 PIERRE. 1층 풀빌라 객실에서는
              프라이빗 수영장과 포인트존을 마음껏 즐길 수 있습니다.
              사계절 온수풀이 갖춰져 계절에 관계없이 이용 가능합니다.
            </p>
            <p>
              여유로운 햇살 아래 선베드에서 휴식을 즐기고,
              맑은 공기 속 수영장에서 특별한 경험을 누리세요.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="img-zoom rounded-sm overflow-hidden">
              <PlaceholderImage className="w-full aspect-square" label="풀빌라 1" />
            </div>
            <div className="img-zoom rounded-sm overflow-hidden mt-10">
              <PlaceholderImage className="w-full aspect-3/4" label="풀빌라 2" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Duplex() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <ScrollReveal variant="left" className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="img-zoom rounded-sm overflow-hidden">
              <PlaceholderImage className="w-full aspect-3/4" label="복층 1" />
            </div>
            <div className="space-y-4 pt-14">
              <div className="img-zoom rounded-sm overflow-hidden">
                <PlaceholderImage className="w-full aspect-square" label="복층 2" />
              </div>
              <div className="img-zoom rounded-sm overflow-hidden">
                <PlaceholderImage className="w-full aspect-video" label="복층 3" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" className="lg:col-span-6">
          <div className="lg:pl-4">
            <div className="w-10 h-10 mb-6 rounded-full bg-warm-100 flex items-center justify-center text-warm-500">
              <IconPool className="w-5 h-5" />
            </div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-warm-400 mb-3">
              Duplex
            </p>
            <h3 className="text-2xl md:text-3xl font-extralight tracking-wide mb-6">
              블랙 &amp; 화이트 복층
            </h3>
            <div className="w-10 h-px bg-warm-300 mb-8" />
            <div className="space-y-5 text-[13px] text-warm-600 leading-[2]">
              <p>
                2~3층 복층 객실은 블랙&화이트 컨셉으로 디자인되어
                1층 풀빌라와는 다른 묵직하고 세련된 감성을 선사합니다.
              </p>
              <p>
                복층 구조로 개인 공간과 휴식 공간이 자연스럽게 분리되어 있어
                연인, 친구, 가족 누구와 함께해도 편안합니다.
              </p>
              <p>
                넓은 창으로 스며드는 햇살과 깔끔한 라인이 어우러져
                도시적 감각과 자연의 여유를 동시에 즐길 수 있습니다.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function NearbyPlaces() {
  const places = [
    { name: "에버랜드 / 캐리비안베이", time: "10분", desc: "테마파크 & 워터파크" },
    { name: "한국민속촌", time: "30분", desc: "전통 문화 체험" },
    { name: "딥스테이션 다이빙", time: "10분", desc: "실내 스쿠버 다이빙" },
    { name: "곤지암 / 지산스키장", time: "25분", desc: "겨울 스키 & 보드" },
  ];

  return (
    <section className="px-6 md:px-12 py-32 md:py-40 bg-warm-100/40">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">
            Nearby
          </p>
          <h3 className="text-2xl md:text-3xl font-extralight tracking-wide mb-6">
            주변 추천 장소
          </h3>
          <div className="section-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {places.map((place, i) => (
            <ScrollReveal key={place.name} delay={i + 1}>
              <div className="card-luxury bg-white rounded-sm p-7 border border-warm-100">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-medium text-warm-800">{place.name}</h4>
                  <span className="text-[10px] tracking-[0.2em] text-warm-400 bg-warm-50 px-3 py-1 rounded-full shrink-0 ml-4">
                    차량 {place.time}
                  </span>
                </div>
                <p className="text-[12px] text-warm-500">{place.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero label="About" title="피에르 소개" subtitle="Stone, Water, Sunlight" />
      <Intro />
      <PointZone />
      <PoolVilla />
      <Duplex />
      <NearbyPlaces />
    </>
  );
}
