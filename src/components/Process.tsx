import { motion } from "motion/react";
import { processSteps } from "../data";
import { ArrowRight, Sparkles, AlertCircle, FileSpreadsheet } from "lucide-react";

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-white relative overflow-hidden bg-blueprint"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            HOW WE TEACH
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            체계적인 <span className="text-brand-teal">5단계 교육 프로세스</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            생각의 발견부터 최종 결과물 피칭까지, 리틀플래너스의 정교한 기획 교육 공정입니다.
          </p>
        </div>

        {/* Process Flow */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4 relative" id="process-flow-container">
          
          {processSteps.map((step, idx) => {
            const isLast = idx === processSteps.length - 1;

            return (
              <div key={step.step} className="flex-1 flex flex-col lg:flex-row items-center relative">
                
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className={`w-full rounded-2xl p-6 relative transition-all ${
                    step.isHighlight
                      ? "bg-white border-4 border-brand-amber shadow-xl ring-8 ring-brand-amber/5 z-20 scale-102 lg:scale-105"
                      : "bg-brand-teal-tint/50 border border-brand-teal/10 hover:border-brand-teal/30 shadow-sm z-10"
                  }`}
                >
                  {/* Core Badge on Highlighted Step 3 */}
                  {step.isHighlight && (
                    <div className="absolute -top-4 left-6 bg-brand-amber text-white text-[10px] sm:text-xs font-black px-3.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                      핵심 설계 단계 (Core)
                    </div>
                  )}

                  {/* Step Number Bubble */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-display font-black text-xl ${
                      step.isHighlight ? "text-brand-amber" : "text-brand-teal"
                    }`}>
                      0{step.step}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      STAGE 0{step.step}
                    </span>
                  </div>

                  {/* Step Title & Sub-descr */}
                  <div className="space-y-3">
                    <h3 className={`font-display font-bold text-base sm:text-lg ${
                      step.isHighlight ? "text-brand-amber-dark font-extrabold text-xl" : "text-gray-900"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet specifics details */}
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs font-bold text-gray-600">
                        <span className={`w-1 h-1 rounded-full ${
                          step.isHighlight ? "bg-brand-amber" : "bg-brand-teal"
                        }`}></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>

                {/* Arrow Connector (Desktop right / Mobile bottom) */}
                {!isLast && (
                  <div className="my-4 lg:my-0 lg:mx-2 text-gray-400 flex items-center justify-center flex-shrink-0 z-10">
                    <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0 text-brand-teal/40" />
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Process Accent Note */}
        <div className="mt-16 p-4 sm:p-5 rounded-2xl bg-brand-amber/[0.03] border border-dashed border-brand-amber/30 max-w-3xl mx-auto flex gap-3.5 items-start">
          <AlertCircle className="w-5 h-5 text-brand-amber flex-shrink-0 mt-0.5" />
          <div className="text-left space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900">왜 3단계 [선기획 설계도 작성]이 핵심인가요?</h4>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
              대다수의 스마트 교육은 기획 없이 코드를 짜거나 바로 컴퓨터 화면을 채워나갑니다. 하지만 리틀플래너스는 화면 설계도, 구조 흐름도 등 아날로그 기획안 작성을 철저히 선행합니다. 이를 통해 아이들은 <strong>수동적으로 프로그램에 이끌려 다니지 않고 스스로의 논리에 기안하여 주도권을 행사</strong>하게 됩니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
