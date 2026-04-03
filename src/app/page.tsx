"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

/* ─────────────────────────────
   1. Hero  (h:800, bg image, centered text + logo)
   ───────────────────────────── */
function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden" style={{ height: 800 }}>
      <div className="absolute! inset-0 placeholder-image [&::after]:content-none" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white">
        <p style={{ fontSize: 18, fontWeight: 500 }} className="mb-1">
          Relaxation and tranquility in nature
        </p>
        <p style={{ fontSize: 26, fontWeight: 500 }} className="mb-16">
          자연 속에서 느끼는 여유와 휴식
        </p>
        {/* Logo placeholder */}
        <div className="mx-auto flex items-center justify-center" style={{ width: 335, height: 80 }}>
          <span className="text-5xl font-light tracking-[0.3em] text-white">PIERRE</span>
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
    <section id="rooms" className="max-w-[1280px] mx-auto py-12">
      <div className="flex flex-col md:flex-row" style={{ gap: 0 }}>
        {/* Left label */}
        <h4 className="shrink-0 text-base font-semibold text-black px-4 md:px-0 mb-4 md:mb-0" style={{ width: 83 }}>
          객실타입
        </h4>
        {/* Right cards */}
        <div className="flex-1 flex flex-col gap-10 px-4 md:px-0">
          {/* A타입 */}
          <div className="border border-neutral-200 grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 flex flex-col gap-1">
              <p className="text-base font-semibold text-black mb-1">A타입 — 풀빌라 원룸</p>
              <p className="text-sm text-neutral-500">기준 2인(최대 6인)</p>
              <p className="text-xs text-neutral-400 mt-1">침대(2) 화장실(1) 거실(1) 주방(1) 야외수영장</p>
              <p className="text-xs text-neutral-400">체크인 15:00 - 체크아웃 11:00</p>
            </div>
            <div className="p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-neutral-200">
              <div>
                <p className="text-2xl font-light text-black">350,000<span className="text-sm text-neutral-400 ml-1">원</span><span className="text-xs text-neutral-400">/ 1박</span></p>
              </div>
              <a href="tel:010-3542-8138" className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm rounded-none w-full">예약문의</a>
            </div>
          </div>
          {/* B타입 - sold out */}
          <div className="border border-neutral-200 grid grid-cols-1 md:grid-cols-2 relative">
            <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
              <span className="bg-neutral-800 text-white px-6 py-2 text-sm tracking-wider">일시 운영중단</span>
            </div>
            <div className="p-6 flex flex-col gap-1">
              <p className="text-base font-semibold text-black mb-1">B타입 — 블랙&화이트 복층</p>
              <p className="text-sm text-neutral-500">기준 4인(최대 8인)</p>
              <p className="text-xs text-neutral-400 mt-1">침실(2) 온돌방(1) 화장실(3) 거실(1) 주방(1)</p>
              <p className="text-xs text-neutral-400">체크인 15:00 - 체크아웃 11:00</p>
            </div>
            <div className="p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-neutral-200">
              <p className="text-2xl font-light text-black">500,000<span className="text-sm text-neutral-400 ml-1">원</span><span className="text-xs text-neutral-400">/ 1박</span></p>
            </div>
          </div>
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
    <section className="max-w-[1280px] mx-auto px-4 md:px-0">
      <div className="flex flex-col" style={{ gap: 48 }}>
        <h4 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px" }} className="text-black">
          자연과 돌이 만드는 휴식, PIERRE
        </h4>
        <PlaceholderImage className="w-full" style={{ height: 700 }} />
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
    <section id={id} className="flex flex-col" style={{ gap: 48, marginTop: 80 }}>
      {/* Gallery - overflow scroll with side padding */}
      <div
        className="overflow-x-scroll gallery-scroll"
        style={{ overflowY: "hidden" }}
      >
        <div className="flex" style={{ gap: 40, padding: "0 260px", width: "max-content" }}>
          {gallery.map((label, i) => (
            <div key={i} className="shrink-0" style={{ width: 400, height: 400 }}>
              <PlaceholderImage className="w-full h-full" label={label} />
            </div>
          ))}
        </div>
      </div>
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
   5. Room Details  (title + horizontal scroll gallery h:668 + name/specs below)
   ───────────────────────────── */
function RoomDetails() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-0" style={{ marginTop: 80 }}>
      <h4 style={{ fontSize: 24, fontWeight: 600, lineHeight: "30px" }} className="text-black mb-10">
        객실별 안내 사항
      </h4>

      {/* A타입 */}
      <div className="mb-16">
        {/* Horizontal scroll images */}
        <div className="overflow-x-scroll gallery-scroll mb-4" style={{ overflowY: "hidden" }}>
          <div className="flex" style={{ gap: 8, width: "max-content" }}>
            {["A타입 1", "A타입 2", "A타입 3", "A타입 4", "A타입 5"].map((label, i) => (
              <div key={i} className="shrink-0">
                <PlaceholderImage className="w-auto" style={{ width: 440, height: 668 }} label={label} />
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-4">A타입 — 풀빌라 원룸</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-1 text-sm">
          {[
            ["기준 인원", "2명 (최대 6명)"],
            ["체크인 / 체크아웃", "15:00 / 11:00"],
            ["객실 면적", "82㎡"],
            ["객실 공간", "침대(2), 화장실(1), 거실(1), 주방(1)"],
            ["침대 유형", "퀸(2)"],
            ["편의시설", "수영장(사계절 온수풀), 선베드(2), 야외테라스"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-2 border-b border-neutral-100">
              <span className="text-neutral-400">{label}</span>
              <span className="text-neutral-700">{value}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400 mt-3">추가 인원 인당 2만원 · 침구류 추가 2만원</p>
      </div>

      {/* B타입 - sold out */}
      <div className="room-b-card cursor-default">
        <div className="room-b-overlay">
          <div className="bg-neutral-900/80 text-white px-10 py-5 text-center">
            <p className="text-2xl font-light tracking-wider mb-1">SOLD OUT</p>
            <p className="text-xs text-white/60">일시 운영중단</p>
          </div>
        </div>
        <div className="room-b-content transition-all duration-500">
          <div className="overflow-x-scroll gallery-scroll mb-4" style={{ overflowY: "hidden" }}>
            <div className="flex" style={{ gap: 8, width: "max-content" }}>
              {["B타입 1", "B타입 2", "B타입 3", "B타입 4", "B타입 5"].map((label, i) => (
                <div key={i} className="shrink-0">
                  <PlaceholderImage className="w-auto" style={{ width: 440, height: 668 }} label={label} />
                </div>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-4">B타입 — 블랙&화이트 복층</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-1 text-sm">
            {[
              ["기준 인원", "4명 (최대 8명)"],
              ["체크인 / 체크아웃", "15:00 / 11:00"],
              ["객실 면적", "2F, 3F 각 82㎡"],
              ["객실 공간", "침실(2), 온돌방(1), 화장실(3), 거실(1), 주방(1)"],
              ["침대 유형", "라지킹(1), 퀸(2)"],
              ["편의시설", "드레스룸, 빔프로젝터, 불멍(가습), 테라스"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-2 border-b border-neutral-100">
                <span className="text-neutral-400">{label}</span>
                <span className="text-neutral-700">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-3">추가 인원 인당 2만원 · 침구류 추가 2만원</p>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-neutral-400 py-4 border-t border-neutral-100">
        1층 풀빌라 객실과 2·3층 복층 객실로 나뉘며, 풀 이용은 1층 객실 전용입니다
      </p>
    </section>
  );
}

/* ─────────────────────────────
   6. Amenities
   ───────────────────────────── */
function Amenities() {
  const items = [
    "드라이어", "커피머신", "정수기(얼음/온수)", "냉장고", "LG 스탠바이미",
    "에어컨", "토스트기", "전자레인지", "인덕션", "조리도구", "식기",
    "와인 오프너", "와인잔", "샤워 가운", "욕실 어메니티", "스피커",
  ];
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-0 mt-16 mb-16">
      <div className="border-t border-neutral-200 pt-8">
        <h4 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-6">전 객실 포함 사항</h4>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {items.map((item) => (
            <span key={item} className="text-sm text-neutral-600">• {item}</span>
          ))}
        </div>
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
    <section id="info" className="max-w-[1280px] mx-auto px-4 md:px-0 py-16">
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
              <div className="placeholder-image w-full h-72 rounded mt-6" />
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
        title="돌이 전하는 안식의 공간"
        gallery={["포인트존 1", "포인트존 2", "포인트존 3", "포인트존 4"]}
        text="포인트존 공간은 '암석'을 모티브로 디자인 되었으며 거친 듯 자연스러운 돌의 질감은 눈으로 보는 순간 강렬한 존재감을 주면서도 동시에 마음을 차분하게 안정시키는 힘이 있습니다. 햇살과 그림자가 포인트존 위를 스칠 때마다, 마치 자연 속에서 시간을 멈춘 듯한 여유를 느끼실 수 있습니다. 돌이 주는 감성은 단순히 시각적 아름다움에 머물지 않습니다. 그 위에 앉거나 기대어 있으면 돌의 견고함이 주는 안정감과 함께 마음 속 긴장이 자연스럽게 풀립니다. 거기에 풀빌라의 프라이빗 수영장과 조화를 이루면 몸과 마음이 완전히 자연과 연결되는 경험을 제공합니다."
      />
      <PointSection
        num={2}
        title="자연 속에서 즐기는 풀빌라"
        gallery={["풀빌라 1", "풀빌라 2", "풀빌라 3", "풀빌라 4"]}
        text="서울 근교 용인에 자리한 PIERRE는 자연과 휴식이 만나 완성되는 공간입니다. 견고하면서도 세련된 암석의 아름다움을 그대로 재현한 포인트존은 단순한 장식이 아닌 공간의 중심을 경험으로 자리합니다. 1층 풀빌라 객실에서는 프라이빗 수영장과 함께 포인트존을 마음껏 즐길 수 있으며 2~3층 복층 객실에서는 또 다른 감각적 분위기와 함께 자연 속 여유를 만끽할 수 있습니다. 모든 객실은 자연과 조화를 이루는 디자인으로, 머무는 순간마다 편안함과 평온함을 느낄 수 있도록 설계 되었습니다. 여유로운 햇살 아래 선베드에서 휴식을 즐기고, 맑은 공기 속 수영장과 포인트존에서 특별한 경험을 누리세요."
      />
      <PointSection
        num={3}
        title="블랙 & 화이트, 감각적인 복층"
        gallery={["복층 1", "복층 2", "복층 3", "복층 4"]}
        text="PIERRE의 2,3층 복층 객실은 블랙&화이트 컨셉으로 디자인되어, 아늑한 1층 풀빌라와는 또 다른 묵직하고 세련된 감성을 제공합니다. 모던한 컬러와 심플한 구조 속에서 공간의 선과 질감이 더욱 돋보이며 차분하면서도 고급스러운 분위기를 느끼실 수 있습니다. 복층 구조로 설계되어 개인 공간과 휴식 공간이 자연스럽게 분리되어 있어 연인이나 친구, 가족 모두에게 편안한 스테이를 제공합니다. PIERRE에서만 만날 수 있는, 자연 속 프라이빗 스테이로 여러분을 초대합니다."
      />
      <RoomDetails />
      <Amenities />
      <InfoTabs />
    </>
  );
}
