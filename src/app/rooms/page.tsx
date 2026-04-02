import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import {
  IconPool, IconBed, IconBath, IconKitchen, IconLiving,
  IconSunbed, IconTerrace, IconClock, IconUsers, IconArea,
  IconFire, IconProjector, IconDress,
} from "@/components/Icons";

export const metadata: Metadata = { title: "객실 안내" };

function RoomSpec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-warm-100 group/spec">
      <span className="text-warm-300 group-hover/spec:text-warm-600 transition-colors shrink-0">{icon}</span>
      <span className="text-[12px] text-warm-400 tracking-wide min-w-20">{label}</span>
      <span className="text-[13px] text-warm-700 ml-auto">{value}</span>
    </div>
  );
}

function FacilityTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-warm-900 text-white rounded-sm text-[11px] tracking-wide hover:bg-warm-800 transition-colors duration-300">
      <span className="opacity-60">{icon}</span>
      {label}
    </div>
  );
}

function RoomA() {
  const amenities = [
    "드라이어", "커피머신", "정수기(얼음/온수)", "냉장고",
    "LG 스탠바이미", "에어컨", "토스트기", "전자레인지",
    "인덕션", "조리도구", "식기", "와인 오프너",
    "와인잔", "샤워 가운", "욕실 어메니티", "스피커",
  ];

  return (
    <ScrollReveal>
      <div className="bg-white rounded-sm overflow-hidden shadow-[0_4px_60px_-15px_rgba(0,0,0,0.1)]">
        {/* Image gallery top */}
        <div className="grid grid-cols-3 gap-1">
          <div className="col-span-2 img-zoom">
            <PlaceholderImage className="w-full h-72 md:h-[400px]" label="A타입 메인" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="img-zoom flex-1">
              <PlaceholderImage className="w-full h-full min-h-36" label="A타입 2" />
            </div>
            <div className="img-zoom flex-1">
              <PlaceholderImage className="w-full h-full min-h-36" label="A타입 3" />
            </div>
          </div>
        </div>

        <div className="p-8 md:p-14 lg:p-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase text-warm-400 mb-2">
                Type A — 원룸타입 · 1층
              </p>
              <h2 className="text-3xl md:text-4xl font-extralight tracking-wide">풀빌라 객실</h2>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <p className="text-4xl font-extralight">
                350,000
                <span className="text-sm text-warm-400 ml-1 font-normal">원 / 1박</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-12 ornament">
            <div className="w-1.5 h-1.5 rotate-45 border border-warm-300" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Specs */}
            <div>
              <RoomSpec icon={<IconUsers className="w-4 h-4" />} label="인원" value="기준 2명 (최대 6명)" />
              <RoomSpec icon={<IconArea className="w-4 h-4" />} label="면적" value="82㎡" />
              <RoomSpec icon={<IconClock className="w-4 h-4" />} label="체크인/아웃" value="15:00 / 11:00" />
              <RoomSpec icon={<IconBed className="w-4 h-4" />} label="침대" value="퀸 2개" />
              <RoomSpec icon={<IconBath className="w-4 h-4" />} label="화장실" value="1개" />
              <RoomSpec icon={<IconLiving className="w-4 h-4" />} label="거실" value="1개" />
              <RoomSpec icon={<IconKitchen className="w-4 h-4" />} label="주방" value="1개" />

              <p className="text-[11px] text-warm-400 mt-6">
                추가 인원 인당 2만원 · 침구류 추가 2만원
              </p>
            </div>

            {/* Right - Facilities */}
            <div className="space-y-10">
              <div>
                <h3 className="text-[10px] tracking-[0.4em] uppercase text-warm-400 mb-5">
                  주요 시설
                </h3>
                <div className="flex flex-wrap gap-2">
                  <FacilityTag icon={<IconPool className="w-4 h-4" />} label="사계절 온수풀" />
                  <FacilityTag icon={<IconSunbed className="w-4 h-4" />} label="선베드 (2)" />
                  <FacilityTag icon={<IconTerrace className="w-4 h-4" />} label="야외 테라스" />
                </div>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.4em] uppercase text-warm-400 mb-5">
                  객실 용품
                </h3>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((item) => (
                    <span key={item} className="tag-pill bg-warm-50 border border-warm-200 text-warm-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 py-5 text-center text-[11px] text-warm-400 tracking-wide border-t border-b border-warm-100">
            1층 풀빌라 객실과 2·3층 복층 객실로 나뉘며, 풀 이용은 1층 객실 전용입니다
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function RoomB() {
  const amenities = [
    "드라이어", "커피머신", "정수기(얼음/온수)", "냉장고",
    "세탁기/건조기", "에어컨", "전자레인지", "인덕션",
    "조리도구", "식기", "식기세척기", "욕실 어메니티", "스피커",
  ];

  return (
    <ScrollReveal>
      <div className="room-b-card bg-white rounded-sm overflow-hidden shadow-[0_4px_60px_-15px_rgba(0,0,0,0.1)] cursor-default">
        <div className="room-b-overlay">
          <div className="text-center text-white">
            <div className="bg-warm-900/95 backdrop-blur-lg px-16 py-10 border border-white/10">
              <p className="text-[10px] tracking-[0.6em] uppercase opacity-50 mb-3">Temporarily</p>
              <p className="text-4xl font-extralight tracking-[0.2em] mb-3">SOLD OUT</p>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-px bg-white/20" />
                <div className="w-1 h-1 rotate-45 border border-white/30" />
                <div className="w-8 h-px bg-white/20" />
              </div>
              <p className="text-xs tracking-[0.15em] opacity-50">일시 운영중단</p>
            </div>
          </div>
        </div>

        <div className="room-b-content transition-all duration-500">
          <div className="grid grid-cols-3 gap-1">
            <div className="col-span-2 img-zoom">
              <PlaceholderImage className="w-full h-72 md:h-[400px]" label="B타입 메인" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="img-zoom flex-1">
                <PlaceholderImage className="w-full h-full min-h-36" label="B타입 2" />
              </div>
              <div className="img-zoom flex-1">
                <PlaceholderImage className="w-full h-full min-h-36" label="B타입 3" />
              </div>
            </div>
          </div>

          <div className="p-8 md:p-14 lg:p-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-warm-400 mb-2">
                  Type B — 복층타입 · 2~3층
                </p>
                <h2 className="text-3xl md:text-4xl font-extralight tracking-wide">복층 객실</h2>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <p className="text-4xl font-extralight">
                  500,000
                  <span className="text-sm text-warm-400 ml-1 font-normal">원 / 1박</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-12 ornament">
              <div className="w-1.5 h-1.5 rotate-45 border border-warm-300" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <RoomSpec icon={<IconUsers className="w-4 h-4" />} label="인원" value="기준 4명 (최대 8명)" />
                <RoomSpec icon={<IconArea className="w-4 h-4" />} label="면적" value="2F, 3F 각 82㎡" />
                <RoomSpec icon={<IconClock className="w-4 h-4" />} label="체크인/아웃" value="15:00 / 11:00" />
                <RoomSpec icon={<IconBed className="w-4 h-4" />} label="침대" value="라지킹 1 · 퀸 2" />
                <RoomSpec icon={<IconBath className="w-4 h-4" />} label="화장실" value="3개" />
                <RoomSpec icon={<IconLiving className="w-4 h-4" />} label="거실 / 주방" value="각 1개" />

                <p className="text-[11px] text-warm-400 mt-6">
                  추가 인원 인당 2만원 · 침구류 추가 2만원 · 온돌방 1개
                </p>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-warm-400 mb-5">
                    주요 시설
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <FacilityTag icon={<IconDress className="w-4 h-4" />} label="드레스룸" />
                    <FacilityTag icon={<IconProjector className="w-4 h-4" />} label="빔프로젝터" />
                    <FacilityTag icon={<IconFire className="w-4 h-4" />} label="불멍 (가습)" />
                    <FacilityTag icon={<IconTerrace className="w-4 h-4" />} label="테라스" />
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-warm-400 mb-5">
                    객실 용품
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {amenities.map((item) => (
                      <span key={item} className="tag-pill bg-warm-50 border border-warm-200 text-warm-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function RoomsPage() {
  return (
    <>
      <PageHero label="Rooms" title="객실 안내" subtitle="두 가지 컨셉의 프라이빗 공간" />
      <section className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-24">
          <RoomA />
          <RoomB />
        </div>
      </section>
    </>
  );
}
