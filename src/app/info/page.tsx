import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = { title: "안내사항" };

function RuleGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[11px] tracking-[0.25em] uppercase font-medium text-warm-800 mb-6 pb-3 border-b border-warm-200 flex items-center gap-3">
        <span className="w-5 h-px bg-warm-400" />
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 text-[13px] text-warm-600 leading-relaxed group">
            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-warm-100 flex items-center justify-center group-hover:bg-warm-900 group-hover:text-white transition-all duration-300">
              <IconCheck className="w-3 h-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Rules() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">Rules</p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-6">이용 규칙</h2>
          <div className="flex items-center justify-center gap-4 ornament">
            <div className="w-1.5 h-1.5 rotate-45 border border-warm-300" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-sm p-8 md:p-14 lg:p-16 shadow-[0_4px_60px_-15px_rgba(0,0,0,0.08)] space-y-14">
            <RuleGroup
              title="입실과 퇴실"
              items={[
                "입실 오후 3시 / 퇴실 오전 11시 (얼리체크인·레이트체크아웃 불가)",
                "기준 인원 2인, 최대 6인까지 숙박 가능",
                "예약 인원 외 출입·투숙 불가, 미성년자 단독 투숙 불가",
                "반려동물 동반 입실 불가",
              ]}
            />
            <RuleGroup
              title="객실 이용"
              items={[
                "전 공간 금연 — 흡연 시 추가 청소비 청구",
                "냄새가 강한 생선·육류 등 실내 조리 금지",
                "3박 이상 숙박 시 요청하시면 수건 교체·청소 제공",
                "인덕션 사용 후 반드시 전원 차단",
                "시설·비품 파손·분실 시 배상 책임 발생",
              ]}
            />
            <RuleGroup
              title="야외 활동"
              items={[
                "야외 수영장 이용 수칙 숙지 필수",
                "21시 이후 소음 자제 (인근 주민 배려)",
                "영유아 동반 시 안전사고 각별히 유의",
                "부주의로 인한 사고에 대해 피에르는 책임지지 않음",
              ]}
            />
            <RuleGroup
              title="방역 및 안전"
              items={[
                "자연 환경 특성상 벌레·해충 유입 가능 — 방충망 꼭 닫기",
                "도난 방지를 위한 문단속 유의",
                "건물 외부 및 수영장 CCTV 운영",
                "상업 목적 촬영은 사전 협의 필수",
              ]}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Refund() {
  const data = [
    { period: "10일 전", amount: "100%", bar: 100 },
    { period: "9일 전", amount: "90%", bar: 90 },
    { period: "8일 전", amount: "80%", bar: 80 },
    { period: "7일 전", amount: "70%", bar: 70 },
    { period: "6일 전", amount: "60%", bar: 60 },
    { period: "5일 전", amount: "50%", bar: 50 },
    { period: "4일 전", amount: "40%", bar: 40 },
    { period: "3일 전~", amount: "불가", bar: 0 },
  ];

  return (
    <section className="pb-28 md:pb-36 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="text-[10px] tracking-[0.6em] uppercase text-warm-400 mb-5">Refund</p>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-wide mb-6">환불 정책</h2>
          <div className="flex items-center justify-center gap-4 ornament">
            <div className="w-1.5 h-1.5 rotate-45 border border-warm-300" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-sm p-8 md:p-14 lg:p-16 shadow-[0_4px_60px_-15px_rgba(0,0,0,0.08)]">
            <div className="space-y-3">
              {data.map((row) => (
                <div key={row.period} className="flex items-center gap-4 text-sm group">
                  <span className="text-warm-500 min-w-20 shrink-0 text-[12px] tracking-wide">{row.period}</span>
                  <div className="flex-1 h-8 bg-warm-50 rounded-sm overflow-hidden">
                    {row.bar > 0 ? (
                      <div
                        className="h-full bg-warm-900 rounded-sm flex items-center justify-end pr-3 group-hover:bg-warm-800 transition-colors duration-300"
                        style={{ width: `${row.bar}%` }}
                      >
                        <span className="text-[10px] text-white/70 tracking-wide">{row.amount}</span>
                      </div>
                    ) : (
                      <div className="h-full flex items-center pl-3">
                        <span className="text-[10px] text-warm-900 font-medium tracking-wide">환불 불가</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-warm-100">
              <p className="text-[11px] text-warm-400 leading-relaxed">
                * 예약 후 24시간 이내 취소 여부와 관계없이 위 환불규정을 따릅니다.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section className="pb-28 md:pb-36 px-6 md:px-12">
      <ScrollReveal className="max-w-4xl mx-auto">
        <div className="relative bg-warm-900 text-white rounded-sm p-10 md:p-16 text-center overflow-hidden">
          {/* Decorative frame */}
          <div className="absolute inset-4 border border-white/[.06] pointer-events-none rounded-sm" />

          <p className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-4">Safety</p>
          <h3 className="text-xl md:text-2xl font-extralight tracking-wide mb-4">안전 시설</h3>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <div className="w-1 h-1 rotate-45 border border-white/30" />
            <div className="w-8 h-px bg-white/20" />
          </div>
          <p className="text-[13px] text-white/60 leading-relaxed max-w-md mx-auto">
            객실 내 소화기가 비치되어 있으며,
            객실 및 수영장에 안전 관련 안내문이 비치되어 있습니다.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function InfoPage() {
  return (
    <>
      <PageHero label="Information" title="안내사항" subtitle="쾌적한 이용을 위한 안내" />
      <Rules />
      <Refund />
      <Safety />
    </>
  );
}
