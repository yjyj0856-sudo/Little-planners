import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { programCases } from "../data";
import { Landmark, Award, Calendar, BookOpen, ChevronRight, CheckCircle } from "lucide-react";

export default function TrackRecord() {
  const [filter, setFilter] = useState<string>("ALL");

  const categories = [
    { label: "전체 보기", value: "ALL" },
    { label: "공공도서관", value: "공공도서관" },
    { label: "문화재단", value: "문화재단" },
    { label: "지자체·구청", value: "지자체" },
    { label: "공교육·기타", value: "공교육" }
  ];

  const filteredCases = filter === "ALL"
    ? programCases
    : programCases.filter(c => 
        c.tags.some(tag => tag.includes(filter)) || 
        c.institution.includes(filter) ||
        c.subTitle.includes(filter)
      );

  return (
    <section
      id="cases"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            REAL TRACK RECORD
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            이미 검증된 <span className="text-brand-teal">5대 실질 운영 사례</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            일회성 체험을 넘어 공공기관 및 교육 현장 담당자들로부터 높은 신뢰를 구축한 핵심 프로그램들입니다.
          </p>
        </div>

        {/* Filter Tab System */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="cases-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border cursor-pointer focus:outline-none ${
                filter === cat.value
                  ? "bg-brand-teal border-brand-teal text-white shadow-md shadow-brand-teal/15"
                  : "bg-brand-teal-tint/50 border-brand-teal/10 text-gray-600 hover:bg-brand-teal-tint hover:border-brand-teal/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Card Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="cases-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-brand-teal/10 hover:border-brand-teal/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between"
              >
                
                {/* Card Top Block */}
                <div className="p-6 pb-4 space-y-4">
                  {/* Metadata and Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded">
                      {item.institution}
                    </span>
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.subTitle}</h4>
                    <h3 className="font-display font-bold text-lg text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Text description */}
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Main PERSUASION Metrics Block (Highlighted in Amber Background/Border) */}
                <div className="mx-6 p-4 bg-brand-amber/[0.04] border border-dashed border-brand-amber/30 rounded-xl space-y-2">
                  <div className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-400">주요 실적 성과</div>
                      <div className="text-lg font-display font-black text-brand-amber tracking-tight">
                        {item.resultEmphasis}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-600 pl-7">
                    {item.resultDetail}
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-semibold bg-gray-50/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                    {item.period}
                  </span>
                  <span className="text-brand-teal flex items-center gap-0.5 font-bold">
                    위탁 의뢰 가능 <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Notice banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-5 bg-brand-teal-tint border border-brand-teal/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h5 className="font-bold text-gray-900 text-sm sm:text-base">예산 수립 및 위탁 계약 맞춤 조율</h5>
            <p className="text-gray-500 text-xs sm:text-sm">지방자치단체 수의계약, 공공기관 조달 계약 등의 예산 증빙을 철저히 검증해 드립니다.</p>
          </div>
          <a
            href="#partnership"
            className="flex-shrink-0 bg-brand-amber hover:bg-brand-amber-dark text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow"
          >
            협업 프로세스 상세 문의
          </a>
        </div>

      </div>
    </section>
  );
}
