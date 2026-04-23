"use client";

import { useState } from "react";
import ScrollGallery from "@/components/ScrollGallery";

/* ─────────────────────────────
   1. Hero  (h:800, bg image, centered text + logo)
   ───────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-900 aspect-1066/1600 md:aspect-1393/907">
      <picture>
        <source media="(min-width: 768px)" srcSet="/hero.jpg" />
        <img src="/hero-mobile.jpg" alt="PIERRE 풀빌라" className="absolute inset-0 w-full h-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white px-6 md:-translate-y-[4cm]">
        <p className="mb-2" style={{ fontSize: "clamp(14px, 2.2vw, 18px)", fontWeight: 500 }}>
          Leisure and relaxation embraced by nature
        </p>
        <p className="mb-4 md:mb-16" style={{ fontSize: "clamp(18px, 3.2vw, 26px)", fontWeight: 500 }}>
          자연 속에서 느끼는 여유와 휴식
        </p>
        <div className="mx-auto flex items-center justify-center">
          <span className="font-logo tracking-[0.15em] text-white" style={{ fontSize: "clamp(32px, 6vw, 48px)" }}>PIERRE</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   2. Room Type Selector  (flex-row: left "객실타입" label + right cards)
   ───────────────────────────── */
function RoomTypeSelector() {
  return (
    <section id="rooms" className="max-w-[1280px] mx-auto py-24">
      <div className="flex flex-col md:flex-row" style={{ gap: 0 }}>
        {/* Left label */}
        <h4 className="shrink-0 text-base font-semibold text-black px-4 md:px-0 mb-4 md:mb-0" style={{ width: 83 }}>
          Type
        </h4>
        {/* Right cards */}
        <div className="flex-1 flex flex-col gap-10 px-4 md:px-0">
          {/* A타입 */}
          <a href="/rooms?type=a" className="border border-neutral-200 grid grid-cols-1 md:grid-cols-2 hover:border-neutral-400 transition-colors group">
            <div className="aspect-[16/9] md:aspect-auto">
              <img src="/photos/a/main.jpg" alt="A타입 풀빌라 원룸" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <p className="text-base font-semibold text-black mb-1">A타입</p>
                <p className="text-sm text-neutral-500">기준 2인(최대 6인)</p>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-sm text-neutral-400 line-through">450,000원</span>
                  <span className="text-xs px-2 py-0.5 bg-black text-white">오픈행사</span>
                </div>
                <p className="text-2xl font-light text-black mt-1">350,000<span className="text-sm text-neutral-400 ml-1">원</span><span className="text-xs text-neutral-400">/ 1박</span></p>
                <p className="text-xs text-neutral-400 mt-1">* 성수기 요금 별도</p>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-black transition-colors">
                자세히 보기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>
          </a>
          {/* B타입 - sold out */}
          <a href="/rooms?type=b" className="border border-neutral-200 grid grid-cols-1 md:grid-cols-2 relative hover:border-neutral-400 transition-colors group">
            {/* SOLD OUT overlay on image only */}
            <div className="relative aspect-[16/9] md:aspect-auto">
              <img src="/photos/b/main.jpg" alt="B타입 복층" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
                <span className="bg-neutral-600 text-white px-6 py-2 text-sm tracking-wider">SOLD OUT</span>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <p className="text-base font-semibold text-black mb-1">B타입</p>
                <p className="text-sm text-neutral-500">기준 4인(최대 8인)</p>
                <p className="text-2xl font-light text-black mt-4">500,000<span className="text-sm text-neutral-400 ml-1">원</span><span className="text-xs text-neutral-400">/ 1박</span></p>
                <p className="text-xs text-neutral-400 mt-1">* 성수기 요금 별도</p>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-400 group-hover:text-black transition-colors">
                자세히 보기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6" /></svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   3. Intro  (h4 24px/600 → full-width image h:700 → paragraph 16px/32px, gap:48px)
   ───────────────────────────── */
function IntroSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-0 pt-12">
      <div className="flex flex-col" style={{ gap: 48 }}>
        <h4 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px" }} className="text-black">
          자연의 결을 담은 쉼, PIERRE
        </h4>
        <picture>
          <source media="(min-width: 768px)" srcSet="/photos/intro.jpg" />
          <img src="/photos/intro-mobile.jpg" alt="자연의 결을 담은 쉼" className="w-full object-cover md:h-[700px] h-[540px]" />
        </picture>
        <p style={{ fontSize: 16, lineHeight: "32px" }} className="text-black">
          PIERRE는 프랑스어로 &lsquo;돌&rsquo; 또는 &lsquo;암석&rsquo;을 의미합니다.
          단단하면서도 자연스러운 형태를 가진 돌처럼 저희 피에르는 견고함과 편안함, 그리고
          시간을 초월한 아름다움을 공간에 담고자 하였습니다.
          포인트존 공간 또한 &lsquo;암석&rsquo;을 모티브로 디자인 되었으며 거친 듯 자연스러운 돌의 질감은
          눈으로 보는 순간 강렬한 존재감을 주면서도 동시에 마음을 차분하게 안정시키는 힘이 있습니다.
          햇살과 그림자가 포인트존 위를 스칠 때마다, 마치 자연 속에서 시간을 멈춘 듯한 여유를
          느끼실 수 있습니다.
          돌이 주는 감성은 단순히 시각적 아름다움에 머물지 않습니다.
          그 위에 앉거나 기대어 있으면 돌의 견고함이 주는 안정감과 함께 마음 속 긴장이 자연스럽게 풀립니다.
          거기에 풀빌라의 프라이빗 수영장과 조화를 이루면 몸과 마음이 완전히 자연과 연결되는 경험을 제공합니다.
          PIERRE는 단순한 숙소가 아닙니다.
          자연과 돌, 물과 햇살이 만들어내는 조화로운 경험 속에서 휴식과 감성을 온전히 느끼는 공간입니다.
          머무는 순간, 작은 디테일까지 놓치지 않은 공간 설계와 자연의 아름다움 속에서 진정한 여유와 평온함을 발견할 수 있습니다.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   4. Point Section  (gallery: overflow scroll, padding 0 260px, gap 40px, 400x400)
                     (text: flex justify-between, left 300px, right ~840px)
   ───────────────────────────── */
function PointSection({
  id,
  num,
  title,
  text,
  gallery,
}: {
  id?: string;
  num: number;
  title: string;
  text: string;
  gallery: string[];
}) {
  return (
    <section id={id} className="flex flex-col" style={{ gap: 48, marginTop: 160 }}>
      <ScrollGallery items={gallery} itemWidth={400} itemHeight={400} gap={40} sidePadding={260} alt={title} />
      {/* Text row */}
      <div className="max-w-[1280px] mx-auto w-full flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 px-4 md:px-0">
        <div className="flex flex-col shrink-0" style={{ width: 300, gap: 8 }}>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgb(146,146,146)" }}>Point {num}</p>
          <h4 style={{ fontSize: 24, fontWeight: 600 }} className="text-black">{title}</h4>
        </div>
        <div style={{ width: 840 }} className="hidden md:block">
          <p style={{ fontSize: 16, lineHeight: "32px" }} className="text-black">{text}</p>
        </div>
        <div className="md:hidden">
          <p style={{ fontSize: 14, lineHeight: "28px" }} className="text-black">{text}</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   Nearby Places
   ───────────────────────────── */
function NearbyPlaces() {
  const places = [
    { name: "에버랜드 / 캐리비안베이", time: "10분" },
    { name: "한국민속촌", time: "30분" },
    { name: "딥스테이션 다이빙", time: "10분" },
    { name: "곤지암 / 지산스키장", time: "25분" },
    { name: "화담숲", time: "30분" },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-0" style={{ marginTop: 160 }}>
      <h4 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px" }} className="text-black mb-10">
        주변 추천 장소
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {places.map((place) => (
          <div key={place.name} className="border border-neutral-200 p-5 hover:border-neutral-400 transition-colors">
            <p className="text-sm font-medium text-black mb-2">{place.name}</p>
            <p className="text-xs text-neutral-400">차량 {place.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────
   7. Info Tabs  (flexDir:column, gap:8px, tab bar + content)
   ───────────────────────────── */
function InfoTabs() {
  const [tab, setTab] = useState<"location" | "rules" | "refund" | "safety">("location");

  const tabs = [
    { key: "location" as const, label: "위치안내" },
    { key: "rules" as const, label: "이용규칙" },
    { key: "refund" as const, label: "환불정책" },
    { key: "safety" as const, label: "안전시설" },
  ];

  return (
    <section id="info" className="max-w-[1280px] mx-auto px-4 md:px-0 py-28">
      <h4 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px" }} className="text-black mb-8">
        안내사항을 확인하세요
      </h4>

      <div className="flex flex-col" style={{ gap: 8 }}>
        {/* Tab bar */}
        <div className="flex gap-0 border-b border-neutral-200">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-3 text-base transition-colors relative ${
                tab === t.key ? "text-black font-medium" : "text-neutral-400"
              }`}
            >
              {t.label}
              {tab === t.key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="pt-6 min-h-[400px]" style={{ fontSize: 16, lineHeight: "32px" }}>
          {tab === "location" && (
            <div id="location" className="text-neutral-700 space-y-2">
              <p>경기도 용인시 처인구 모현읍 매산리 517-17</p>
              <p className="text-neutral-400 text-sm">도로명: 경기도 용인시 모현읍 곡현로 485번길 31-7</p>
              <p><a href="tel:010-3542-8138" className="hover:underline">010-3542-8138</a></p>
              <p><a href="mailto:mocacia@naver.com" className="hover:underline">mocacia@naver.com</a></p>
              <div className="w-full h-72 md:h-96 rounded overflow-hidden mt-6 border border-neutral-200">
                <iframe
                  src="https://www.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EB%AA%A8%ED%98%84%EC%9D%8D%20%EA%B3%A1%ED%98%84%EB%A1%9C%20485%EB%B2%88%EA%B8%B8%2031-7&output=embed&hl=ko"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PIERRE 위치"
                />
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://map.kakao.com/link/search/경기도 용인시 모현읍 곡현로 485번길 31-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  카카오맵에서 보기
                </a>
                <a
                  href="https://map.naver.com/v5/search/경기도 용인시 모현읍 곡현로 485번길 31-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  네이버지도에서 보기
                </a>
                <a
                  href="https://maps.google.com/?q=경기도 용인시 모현읍 곡현로 485번길 31-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm border border-neutral-300 hover:bg-neutral-50 transition-colors"
                >
                  구글맵에서 보기
                </a>
              </div>
            </div>
          )}
          {tab === "rules" && (
            <div className="text-neutral-700 space-y-8">
              {[
                { title: "입실과 퇴실", items: [
                  "입실시간은 오후 3시, 퇴실시간은 오전 11시입니다. 얼리체크인, 레이트 체크아웃은 불가합니다.",
                  "기준 인원 2인 / 최대인원 6인까지 숙박 가능합니다.",
                  "예약 인원 외 출입 및 투숙은 불가하며 미성년자는 보호자 없이 투숙이 불가합니다.",
                  "쾌적한 객실 관리를 위해 반려동물 동반 입실은 불가합니다.",
                ]},
                { title: "객실", items: [
                  "숙소의 모든 공간은 금연구역입니다. 흡연으로 인한 오염 시 추가 청소 비용이 청구될 수 있습니다.",
                  "객실 내 냄새가 강한 생선, 육류 등의 조리를 금지합니다.",
                  "3박 이상 숙박부터 요청 시 수건 교체와 청소를 제공해 드립니다.",
                  "실내의 인덕션은 화재의 위험이 있으니 사용 후 꼭 전원을 꺼주시기 바랍니다.",
                  "모든 시설 및 비품들의 파손, 분실 시 배상 책임이 발생하오니 사용에 유의해 주시기 바랍니다.",
                  "반려동물은 입실이 불가합니다.",
                ]},
                { title: "야외 활동", items: [
                  "야외 수영장 사용 시 반드시 이용 수칙을 숙지해 주시기 바랍니다.",
                  "21시 이후 큰 소음은 주민들에게 피해를 줄 수 있으니 양해 부탁드립니다.",
                  "영유아를 동반하신 경우, 안전사고에 특히 유의 부탁드립니다.",
                  "고객님의 부주의로 인한 사고에 대해 피에르는 책임지지 않습니다.",
                ]},
                { title: "방역 및 안전", items: [
                  "지역 환경 특성상 벌레 및 해충 등이 유입될 수 있습니다.",
                  "해충 방지를 위해 방충망을 반드시 닫고 이용하시기 바랍니다.",
                  "도난 방지를 위해 문단속에 유의하시기 바랍니다.",
                  "안전을 위해 건물 외부 및 수영장에 CCTV가 설치되어 있습니다.",
                  "사전에 협의 되지 않은 상업 목적의 촬영은 금지합니다.",
                ]},
              ].map((group) => (
                <div key={group.title}>
                  <p className="font-semibold text-black mb-3">{group.title}</p>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed"><span className="text-neutral-300 mt-0.5">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {tab === "refund" && (
            <div className="text-neutral-700">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 font-medium">기준일</th>
                    <th className="text-right py-3 font-medium">환불 금액</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["체크인 10일 전까지", "100% 환불"],
                    ["체크인 9일 전까지", "90%"],
                    ["체크인 8일 전까지", "80%"],
                    ["체크인 7일 전까지", "70%"],
                    ["체크인 6일 전까지", "60%"],
                    ["체크인 5일 전까지", "50%"],
                    ["체크인 4일 전까지", "40%"],
                    ["체크인 3일 전부터", "환불 불가"],
                  ].map(([period, amount]) => (
                    <tr key={period} className="border-b border-neutral-100">
                      <td className="py-3">{period}</td>
                      <td className={`py-3 text-right ${amount === "환불 불가" ? "font-semibold text-black" : ""}`}>{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-neutral-400">*환불 수수료는 예약 완료 후 24시간 이내 취소와 관련없이 무조건 환불규정을 따릅니다.</p>
            </div>
          )}
          {tab === "safety" && (
            <div className="text-neutral-700 space-y-4">
              <div>
                <p className="font-semibold text-black mb-2">소화기</p>
                <p className="text-sm">객실 내 소화기가 비치되어 있습니다.</p>
              </div>
              <div>
                <p className="font-semibold text-black mb-2">안내문</p>
                <p className="text-sm">객실 및 수영장에 안전관련 안내문이 비치되어 있습니다.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   Page
   ───────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <RoomTypeSelector />
      <IntroSection />
      <PointSection
        id="about"
        num={1}
        title="바람과 햇살이 머무는 곳"
        gallery={["/photos/p1/1.jpg", "/photos/p1/2.jpg", "/photos/p1/5.jpg", "/photos/p1/6.jpg", "/photos/p1/7.jpg", "/photos/p1/8.jpg"]}
        text="포인트존 공간은 '암석'을 모티브로 디자인 되었으며 거친 듯 자연스러운 돌의 질감은 눈으로 보는 순간 강렬한 존재감을 주면서도 동시에 마음을 차분하게 안정시키는 힘이 있습니다. 햇살과 그림자가 포인트존 위를 스칠 때마다, 마치 자연 속에서 시간을 멈춘 듯한 여유를 느끼실 수 있습니다. 돌이 주는 감성은 단순히 시각적 아름다움에 머물지 않습니다. 그 위에 앉거나 기대어 있으면 돌의 견고함이 주는 안정감과 함께 마음 속 긴장이 자연스럽게 풀립니다. 거기에 풀빌라의 프라이빗 수영장과 조화를 이루면 몸과 마음이 완전히 자연과 연결되는 경험을 제공합니다."
      />
      <PointSection
        num={2}
        title="온기가 머무는 공간"
        gallery={["/photos/p2/2.jpg", "/photos/p2/3.jpg", "/photos/p2/4.jpg", "/photos/p2/5.jpg", "/photos/p2/6.jpg", "/photos/p2/7.jpg", "/photos/p2/8.jpg", "/photos/p2/9.jpg"]}
        text="서울 근교 용인에 자리한 PIERRE는 자연과 휴식이 만나 완성되는 공간입니다. 견고하면서도 세련된 암석의 아름다움을 그대로 재현한 포인트존은 단순한 장식이 아닌 공간의 중심을 경험으로 자리합니다. 1층 풀빌라 객실에서는 프라이빗 수영장과 함께 포인트존을 마음껏 즐길 수 있으며 2~3층 복층 객실에서는 또 다른 감각적 분위기와 함께 자연 속 여유를 만끽할 수 있습니다. 모든 객실은 자연과 조화를 이루는 디자인으로, 머무는 순간마다 편안함과 평온함을 느낄 수 있도록 설계 되었습니다. 여유로운 햇살 아래 선베드에서 휴식을 즐기고, 맑은 공기 속 수영장과 포인트존에서 특별한 경험을 누리세요."
      />
      <PointSection
        num={3}
        title="모노톤의 미학"
        gallery={["/photos/p3/1.jpg", "/photos/p3/2.jpg", "/photos/p3/3.jpg", "/photos/p3/4.jpg", "/photos/p3/5.jpg", "/photos/p3/6.jpg", "/photos/p3/7.jpg", "/photos/p3/8.jpg", "/photos/p3/9.jpg", "/photos/p3/10.jpg"]}
        text="PIERRE의 2,3층 복층 객실은 블랙&화이트 컨셉으로 디자인되어, 아늑한 1층 풀빌라와는 또 다른 묵직하고 세련된 감성을 제공합니다. 모던한 컬러와 심플한 구조 속에서 공간의 선과 질감이 더욱 돋보이며 차분하면서도 고급스러운 분위기를 느끼실 수 있습니다. 복층 구조로 설계되어 개인 공간과 휴식 공간이 자연스럽게 분리되어 있어 연인이나 친구, 가족 모두에게 편안한 스테이를 제공합니다. PIERRE에서만 만날 수 있는, 자연 속 프라이빗 스테이로 여러분을 초대합니다."
      />
      <NearbyPlaces />
      <InfoTabs />
    </>
  );
}
