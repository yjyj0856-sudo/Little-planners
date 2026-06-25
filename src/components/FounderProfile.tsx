import { motion } from "motion/react";
import { Award, CheckCircle2, Bookmark, ShieldCheck, HelpCircle } from "lucide-react";

export default function FounderProfile() {
  const credentials = [
    "14년 국제회의 기획자(PCO) — 의료·과학 국제 학술대회·컨퍼런스 설계·운영",
    "Google Gemini 공인 교육자 (Certified Educator)",
    "컨벤션기획사 2급",
    "AI 콘텐츠 전문가 인증",
    "상표 등록 제40-2025-0164692호 (리틀플래너스)",
    "SeSAC · 인천대학교 · KINTEX 등에서 AI×MICE 성인 교육 진행"
  ];

  return (
    <section
      id="founder"
      className="py-20 lg:py-28 bg-brand-teal-tint relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Profile Card Wrapper */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-brand-teal/10 shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Visual Portrait Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-teal to-brand-teal-dark p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background blueprints visual element */}
              <div className="absolute inset-0 opacity-10 bg-blueprint"></div>
              
              <div className="space-y-6 relative z-10">
                <span className="text-xs font-bold text-brand-yellow tracking-wider uppercase bg-white/10 px-3.5 py-1.5 rounded-full inline-block">
                  FOUNDER PROFILE
                </span>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-brand-teal-tint">리틀플래너스 대표 기획자</div>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                    김연주 <span className="text-xl font-medium">(리플쌤)</span>
                  </h3>
                </div>

                <p className="text-brand-teal-tint text-sm leading-relaxed font-medium italic">
                  "아이들이 AI에 휘둘리는 사용자가 아니라, 먼저 생각하고 기획한 뒤 AI를 부리는 주도적 기획자가 되도록 가르칩니다."
                </p>
              </div>

              {/* Founder Signature Motif */}
              <div className="pt-12 relative z-10 flex items-center justify-between">
                <div className="text-xs text-brand-teal-tint/80">
                  플랜킷 스튜디오 · 대표 김연주 배상
                </div>
                
                {/* Simulated Stamp Badge */}
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-brand-yellow/50 flex items-center justify-center rotate-12">
                  <span className="text-[9px] text-brand-yellow font-black uppercase text-center leading-tight tracking-widest">
                    LITTLE<br />PLANNER
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Detailed Credentials List */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-8 flex flex-col justify-center">
              
              <div className="space-y-3">
                <div className="text-xs font-bold text-brand-teal tracking-wider uppercase">자격 · 인증 · 경력</div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 tracking-tight">
                  14년 국제회의 기획자가 시작한 어린이기획력 교육
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  의료·과학 분야 국제 학술대회와 컨퍼런스를 14년간 설계·운영해 온 전문 기획자(PCO)입니다. 그 경험을 바탕으로 아이들의 첫 기획을 돕습니다.
                </p>
              </div>

              {/* Credentials Checklist */}
              <div className="grid grid-cols-1 gap-4">
                {credentials.map((cred, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-brand-teal-tint/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 font-semibold leading-snug">
                      {cred}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Verification Stamp Banner */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-amber flex-shrink-0" />
                <span className="text-xs font-bold text-gray-500">
                  리틀플래너스는 아동 교육 안전과 아동 인권 가이드라인을 준수하며 수업을 진행합니다.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
