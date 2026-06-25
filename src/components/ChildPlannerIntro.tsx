import { motion } from "motion/react";
import { Sparkles, Brain, Pencil, Cpu, HeartHandshake } from "lucide-react";

export default function ChildPlannerIntro() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-brand-teal-tint relative overflow-hidden bg-blueprint"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            BRAND POSITIONING
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            어린이기획자란 무엇일까요?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            아이들이 배움의 최종 소비자가 아닌, 문제 해결을 주도하는 진짜 설계자로 거듭나는 첫 시작입니다.
          </p>
        </div>

        {/* Philosophy Block with Neon-Free Accent Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl border-2 border-brand-teal p-6 sm:p-8 shadow-lg text-center relative"
          id="philosophy-box"
        >
          {/* Yellow badge accent */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow border border-gray-900/10 text-gray-900 text-xs font-black px-4 py-1.5 rounded-full shadow-sm">
            리틀플래너스의 타협하지 않는 원칙
          </div>
          
          <div className="space-y-4 pt-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-teal-dark tracking-tight leading-snug">
              "선(先)기획, 후(後)AI — 먼저 생각하고 구조화한 뒤, AI로 구현합니다."
            </h3>
            <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              기술을 앞세우지 않습니다. AI, SDGs, 그리고 독서 교육은 목표를 달성하기 위한 단순한 도구에 불과하며, 핵심 역량은 문제를 분석하고 구조화하는 <span className="font-bold text-brand-amber text-base">‘어린이의 기획력’</span> 그 자체에 있습니다.
            </p>
          </div>
        </motion.div>

        {/* Core Category Declaration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: Misunderstanding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/60 rounded-2xl p-6 sm:p-8 border border-gray-200/60"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base">일반적인 AI 체험 교실</h4>
                <p className="text-xs text-gray-400">기술의 단편적 활용에만 그치는 한계</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>정해진 프롬프트를 복사하여 붙여넣는 단순 주입식 코스</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>왜 이 결과물을 도출해야 하는지에 대한 문제 정의력 부족</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>체험관에서 몇 가지 기능만 가볍게 클릭해 보고 끝나는 일회성 캠프</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>생각하는 능력이 퇴화되고 AI가 주는 편의성에 수동적으로 의존</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: The Little Planners Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-teal/30 shadow-md relative"
          >
            {/* Stamp-like tag */}
            <div className="absolute top-4 right-4 bg-brand-amber text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
              선기획 후AI 인증
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">리틀플래너스의 어린이 기획단</h4>
                <p className="text-xs text-brand-teal-dark font-semibold">스스로 문제를 정의하는 평생의 기획력</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-gray-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-teal font-extrabold mt-0.5">✓</span>
                <span>화이트보드와 포스트잇을 통해 아날로그적 브레인스토밍 선행</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-teal font-extrabold mt-0.5">✓</span>
                <span>스스로 작성한 뼈대 기획서 및 명세 도면에 맞춰 AI를 도구로 제어</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-teal font-extrabold mt-0.5">✓</span>
                <span>지자체 정책 제안, 실제 전시회 개최 등 오프라인 결과로 검증</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-teal font-extrabold mt-0.5">✓</span>
                <span>주체적인 시각과 구조적 정렬 능력, 문제해결 스피치 스킬 배양</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Short Summary Bottom Badge */}
        <div className="mt-12 text-center" id="brand-positioning-indicator">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-brand-teal/10 text-xs font-semibold text-gray-600 shadow-sm">
            <HeartHandshake className="w-4 h-4 text-brand-amber" />
            공공도서관, 문화재단, 지자체 아동참여위원회에서 우선 채택하는 융합 인재 양성 모델입니다.
          </span>
        </div>

      </div>
    </section>
  );
}
