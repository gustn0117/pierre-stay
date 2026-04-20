"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ScrollGallery from "@/components/ScrollGallery";
import {
  IconHairdryer, IconCoffee, IconDispenser, IconFridge, IconTV,
  IconAC, IconToaster, IconMicrowave, IconInduction, IconUtensils,
  IconPlate, IconWineOpener, IconWineGlass, IconBathrobe, IconAmenity,
  IconSpeaker,
} from "@/components/Icons";

const amenitiesA = [
  { icon: <IconHairdryer className="w-6 h-6" />, label: "드라이어" },
  { icon: <IconCoffee className="w-6 h-6" />, label: "커피머신" },
  { icon: <IconDispenser className="w-6 h-6" />, label: "정수기(얼음/온수)" },
  { icon: <IconFridge className="w-6 h-6" />, label: "냉장고" },
  { icon: <IconTV className="w-6 h-6" />, label: "LG 스탠바이미" },
  { icon: <IconAC className="w-6 h-6" />, label: "에어컨" },
  { icon: <IconToaster className="w-6 h-6" />, label: "토스트기" },
  { icon: <IconMicrowave className="w-6 h-6" />, label: "전자레인지" },
  { icon: <IconInduction className="w-6 h-6" />, label: "인덕션" },
  { icon: <IconUtensils className="w-6 h-6" />, label: "조리도구" },
  { icon: <IconPlate className="w-6 h-6" />, label: "식기" },
  { icon: <IconWineOpener className="w-6 h-6" />, label: "와인 오프너" },
  { icon: <IconWineGlass className="w-6 h-6" />, label: "와인잔" },
  { icon: <IconBathrobe className="w-6 h-6" />, label: "샤워 가운" },
  { icon: <IconAmenity className="w-6 h-6" />, label: "욕실 어메니티" },
  { icon: <IconSpeaker className="w-6 h-6" />, label: "스피커" },
];

const amenitiesB = [
  { icon: <IconHairdryer className="w-6 h-6" />, label: "드라이어" },
  { icon: <IconCoffee className="w-6 h-6" />, label: "커피머신" },
  { icon: <IconDispenser className="w-6 h-6" />, label: "정수기(얼음/온수)" },
  { icon: <IconFridge className="w-6 h-6" />, label: "냉장고" },
  { icon: <IconAC className="w-6 h-6" />, label: "에어컨" },
  { icon: <IconMicrowave className="w-6 h-6" />, label: "전자레인지" },
  { icon: <IconInduction className="w-6 h-6" />, label: "인덕션" },
  { icon: <IconUtensils className="w-6 h-6" />, label: "조리도구" },
  { icon: <IconPlate className="w-6 h-6" />, label: "식기" },
  { icon: <IconAmenity className="w-6 h-6" />, label: "욕실 어메니티" },
  { icon: <IconSpeaker className="w-6 h-6" />, label: "스피커" },
];

function AmenityGrid({ items }: { items: { icon: React.ReactNode; label: string }[] }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-y-8 gap-x-4">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center text-center group">
          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 mb-2.5 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
            {item.icon}
          </div>
          <span className="text-[11px] text-neutral-500 leading-tight">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function RoomA() {
  return (
    <div>
      {/* Gallery */}
      <ScrollGallery
        items={["A타입 1", "A타입 2", "A타입 3", "A타입 4", "A타입 5"]}
        itemWidth={440}
        itemHeight={668}
        gap={8}
        sidePadding={0}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-0 mt-8">
        <h2 style={{ fontSize: 28, fontWeight: 600 }} className="text-black mb-2">A타입 — 풀빌라 원룸</h2>
        <p className="text-sm text-neutral-500 mb-8">1층 전용 프라이빗 수영장과 포인트존을 갖춘 원룸형 객실</p>

        {/* Price */}
        <div className="mb-10 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-lg text-neutral-400 line-through">450,000원</span>
            <span className="text-xs px-2 py-0.5 bg-black text-white tracking-wider">오픈행사</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-light text-black">350,000</span>
            <span className="text-sm text-neutral-400 mb-1">원 / 1박</span>
          </div>
          <p className="text-xs text-neutral-400 mt-2">* 성수기 요금 별도</p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 text-sm mb-6">
          {[
            ["기준 인원", "2명 (최대 6명)"],
            ["추가 인원", "인당 2만원"],
            ["체크인 / 체크아웃", "15:00 / 11:00"],
            ["침구류 추가", "2만원"],
            ["객실 면적", "82㎡"],
            ["침대 유형", "퀸(2)"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-3 border-b border-neutral-100">
              <span className="text-neutral-400">{label}</span>
              <span className="text-neutral-700">{value}</span>
            </div>
          ))}
        </div>

        {/* 추가 요금 */}
        <div className="bg-neutral-50 border border-neutral-100 p-5 mb-12">
          <p className="text-sm font-semibold text-black mb-3">추가 요금</p>
          <div className="space-y-1.5 text-sm text-neutral-700">
            <div className="flex justify-between">
              <span className="text-neutral-500">온수풀 이용</span>
              <span>+ 100,000원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">금, 토 (주말요금)</span>
              <span>+ 100,000원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">일요일</span>
              <span>+ 50,000원</span>
            </div>
          </div>
        </div>

        {/* 객실 공간 */}
        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-4">객실 공간</h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {["침대(2)", "화장실(1)", "거실(1)", "주방(1)", "야외수영장"].map((item) => (
            <span key={item} className="px-4 py-2 bg-neutral-100 text-sm text-neutral-700 rounded">{item}</span>
          ))}
        </div>

        {/* 편의시설 */}
        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-4">편의시설</h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {["수영장(사계절 온수풀)", "선베드(2)", "야외테라스"].map((item) => (
            <span key={item} className="px-4 py-2 bg-black text-sm text-white rounded">{item}</span>
          ))}
        </div>

        {/* 객실 용품 */}
        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-6">객실 용품</h3>
        <AmenityGrid items={amenitiesA} />

        <p className="mt-10 text-center text-sm text-neutral-400 py-4 border-t border-neutral-100">
          저희 피에르는 1층 풀빌라 객실과 2층 복층형 객실로 나뉘어져 있으며, 야외 수영장 이용은 1층 객실 전용입니다.
        </p>

        {/* 예약 CTA */}
        <div className="mt-8 mb-16">
          <a href="tel:010-3542-8138" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm w-full md:w-auto">
            예약문의 010-3542-8138
          </a>
        </div>
      </div>
    </div>
  );
}

function RoomB() {
  return (
    <div>
      <ScrollGallery
        items={["B타입 1", "B타입 2", "B타입 3", "B타입 4", "B타입 5"]}
        itemWidth={440}
        itemHeight={668}
        gap={8}
        sidePadding={0}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-0 mt-8">
        <div className="flex items-center gap-4 mb-2">
          <h2 style={{ fontSize: 28, fontWeight: 600 }} className="text-black">B타입 — 블랙&화이트 복층</h2>
          <span className="px-3 py-1 bg-neutral-600 text-white text-xs tracking-wider">SOLD OUT</span>
        </div>
        <p className="text-sm text-neutral-500 mb-8">모던한 블랙&화이트 컨셉의 2~3층 복층 객실</p>

        <div className="mb-10 pb-8 border-b border-neutral-200">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-light text-black">500,000</span>
            <span className="text-sm text-neutral-400 mb-1">원 / 1박</span>
          </div>
          <p className="text-xs text-neutral-400 mt-2">* 성수기 요금 별도</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 text-sm mb-12">
          {[
            ["기준 인원", "4명 (최대 8명)"],
            ["추가 인원", "인당 2만원"],
            ["체크인 / 체크아웃", "15:00 / 11:00"],
            ["침구류 추가", "2만원"],
            ["객실 면적", "2F, 3F 각 82㎡"],
            ["침대 유형", "라지킹(1), 퀸(2)"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-3 border-b border-neutral-100">
              <span className="text-neutral-400">{label}</span>
              <span className="text-neutral-700">{value}</span>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-4">객실 공간</h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {["침실(2)", "온돌방(1)", "화장실(3)", "거실(1)", "주방(1)", "욕조(1)", "드레스룸(1)"].map((item) => (
            <span key={item} className="px-4 py-2 bg-neutral-100 text-sm text-neutral-700 rounded">{item}</span>
          ))}
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-4">편의시설</h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {["드레스룸", "빔프로젝터", "불멍(가습)", "테라스", "세탁기/건조기", "식기세척기"].map((item) => (
            <span key={item} className="px-4 py-2 bg-black text-sm text-white rounded">{item}</span>
          ))}
        </div>

        <h3 style={{ fontSize: 18, fontWeight: 600 }} className="text-black mb-6">객실 용품</h3>
        <AmenityGrid items={amenitiesB} />

        <div className="mt-10 mb-16">
          <p className="text-center text-sm text-neutral-400">현재 일시 운영중단 상태입니다</p>
        </div>
      </div>
    </div>
  );
}

function RoomsContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "b" ? "b" : "a";
  const [room, setRoom] = useState<"a" | "b">(initialType);

  return (
    <div className="pt-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0 mb-10">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-black transition-colors mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          돌아가기
        </a>

        <div className="flex gap-0 border-b border-neutral-200">
          <button
            onClick={() => setRoom("a")}
            className={`px-5 py-3 text-base transition-colors relative ${
              room === "a" ? "text-black font-medium" : "text-neutral-400"
            }`}
          >
            A타입
            {room === "a" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
          </button>
          <button
            onClick={() => setRoom("b")}
            className={`px-5 py-3 text-base transition-colors relative ${
              room === "b" ? "text-black font-medium" : "text-neutral-400"
            }`}
          >
            B타입
            <span className="ml-2 text-xs text-neutral-400">SOLD OUT</span>
            {room === "b" && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
          </button>
        </div>
      </div>

      {room === "a" ? <RoomA /> : <RoomB />}
    </div>
  );
}

export default function RoomsPage() {
  return (
    <Suspense>
      <RoomsContent />
    </Suspense>
  );
}
