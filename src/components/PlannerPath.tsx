import { motion } from "motion/react";
import { timelineSteps } from "../data";
import { Compass, BookOpen, Cpu, Presentation } from "lucide-react";

export default function PlannerPath() {
  // Map step numbers to matching icons
  const getIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Compass className="w-6 h-6" />;
      case 2:
        return <BookOpen className="w-6 h-6" />;
      case 3:
        return <Cpu className="w-6 h-6" />;
      case 4:
        return <Presentation className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="planner-path"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            CAREER ROADMAP
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            어린이기획자의 성장 과정: <span className="text-brand-teal">기획자의 길</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            아이들이 단순 문제 풀이에서 벗어나 어엿한 사회적 기획자로 서기까지의 4단계 로드맵입니다.
          </p>
        </div>

        {/* Timeline Line (Desktop-only) */}
        <div className="hidden lg:block absolute top-[62%] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-brand-teal/30 z-0"></div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {timelineSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-brand-teal-tint/50 hover:bg-white rounded-2xl p-6 border border-brand-teal/10 hover:border-brand-teal/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative cursor-pointer"
            >
              {/* Highlight connector circle */}
              <div className="hidden lg:flex absolute bottom-[-42px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-brand-teal items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-amber group-hover:bg-brand-teal transition-colors"></div>
              </div>

              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-md">
                  {item.badge}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center shadow-sm group-hover:bg-brand-amber transition-colors">
                  {getIcon(item.step)}
                </div>
              </div>

              {/* Step Body */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-brand-teal transition-colors flex items-center gap-2">
                  <span className="text-brand-amber font-display font-black">0{item.step}</span>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Blueprint accents */}
              <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 32 32">
                  <line x1="32" y1="0" x2="16" y2="0" stroke="#1EA4B1" strokeWidth="1" />
                  <line x1="32" y1="0" x2="32" y2="16" stroke="#1EA4B1" strokeWidth="1" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight footer message */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 bg-brand-teal-tint rounded-2xl border border-brand-teal/10 text-xs sm:text-sm font-semibold text-brand-teal-dark">
          💡 각 성장의 단계는 독립적으로 흩어지지 않고, 아날로그 기획서를 기반으로 유기적으로 피드백을 주고받으며 완성도를 더해갑니다.
        </div>

      </div>
    </section>
  );
}
