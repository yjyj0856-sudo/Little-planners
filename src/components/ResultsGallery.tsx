import { motion } from "motion/react";
import { studentWorks } from "../data";
import { Sparkles, ArrowRight, ClipboardList, Eye } from "lucide-react";

export default function ResultsGallery() {
  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-brand-teal-tint/40 relative overflow-hidden bg-blueprint"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            STUDENT PORTFOLIO
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            아이들의 상상이 현실이 되는 <span className="text-brand-teal">결과물 갤러리</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            아이들이 먼저 아날로그 아이디어로 기획서를 구축한 뒤, 생성형 AI 도구를 능동적으로 조작해 렌더링한 실제 포트폴리오입니다.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studentWorks.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl border border-brand-teal/10 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Container with Custom Placeholder Overlays */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.workTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-brand-teal/20 px-2.5 py-1 rounded-lg text-xs font-bold text-brand-teal-dark flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-amber fill-brand-yellow" />
                  AI 융합 시각화
                </div>

                {/* Student Name Overlay */}
                <div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                  {work.studentName} ({work.studentGrade})
                </div>
              </div>

              {/* Work Details and Copy */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-teal transition-colors">
                    {work.workTitle}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                    {work.description}
                  </p>
                </div>

                {/* Two Step Contrast: "선기획" vs "후AI" */}
                <div className="space-y-3 pt-4 border-t border-gray-100 bg-gray-50/50 -mx-6 px-6 py-4">
                  
                  {/* Step A: 손기획 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-[11px] font-black text-brand-teal uppercase tracking-wide">
                      <ClipboardList className="w-3.5 h-3.5 text-brand-teal-dark" />
                      Step 1. 기획안 설계 (선기획)
                    </div>
                    <p className="text-xs text-gray-600 font-semibold pl-4.5 leading-snug">
                      {work.planningFocus}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex justify-center my-1">
                    <ArrowRight className="w-4 h-4 text-brand-amber rotate-90" />
                  </div>

                  {/* Step B: 후AI */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-[11px] font-black text-brand-amber uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
                      Step 2. AI 가시화 (후AI)
                    </div>
                    <p className="text-xs text-gray-700 font-bold pl-4.5 leading-snug">
                      {work.aiRendering}
                    </p>
                  </div>

                </div>

              </div>

              {/* Card CTA Overlay / Visual Confirmation */}
              <div className="p-4 bg-brand-teal/5 border-t border-brand-teal/10 text-center text-xs font-bold text-brand-teal-dark flex items-center justify-center gap-1 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                <Eye className="w-3.5 h-3.5" />
                전체 기획 상세 포트폴리오 열람
              </div>

            </motion.div>
          ))}
        </div>

        {/* Portfolio notice */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 bg-white border border-brand-teal/10 rounded-2xl text-xs font-semibold text-gray-500">
          * 실제 수업에서는 가상 앱 모형, 3D 기술 도안, 물리적 공간 전시 포스터 등 주제에 맞춘 다채로운 기획 가시화 포맷을 전개합니다.
        </div>

      </div>
    </section>
  );
}
