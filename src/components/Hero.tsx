import { motion } from "motion/react";
import { ArrowUpRight, CheckSquare, Sparkles, PencilLine, Landmark, Users } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-brand-teal-tint via-white to-white overflow-hidden bg-grid-dots"
    >
      {/* Background connecting line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-100 150 C 300 150, 400 350, 800 200 S 1200 400, 1600 250"
            fill="none"
            stroke="#1EA4B1"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            d="M 100 500 C 500 450, 700 650, 1100 550 S 1500 700, 1800 600"
            fill="none"
            stroke="#1EA4B1"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal-dark text-xs font-bold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              어린이 기획력 교육 전문 브랜드 • 리틀플래너스
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight leading-[1.25]">
                AI 시대, 아이를 자기주도력을 가진{" "}<br className="hidden sm:inline" />
                <span className="relative inline-block text-brand-teal">
                  기획자
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-brand-yellow/80 pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
                로 키웁니다
              </h1>
              
              <p className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed">
                초등학생 15명이 직접 기획한 전시에 316명이 다녀갔습니다.
              </p>
            </motion.div>

            {/* Split Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <button
                onClick={() => handleScrollTo("#partnership")}
                className="bg-brand-amber hover:bg-brand-amber-dark text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-brand-amber/20 hover:shadow-xl transition-all text-base flex items-center justify-center gap-2 cursor-pointer group"
                id="hero-cta-partnership"
              >
                <Landmark className="w-5 h-5 text-brand-yellow" />
                기관 협업 문의
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo("#parents")}
                className="border-2 border-brand-teal/30 hover:border-brand-teal bg-white/50 hover:bg-brand-teal-tint text-brand-teal-dark font-bold px-7 py-4 rounded-xl transition-all text-base flex items-center justify-center gap-1.5 cursor-pointer"
                id="hero-cta-parents"
              >
                <Users className="w-5 h-5 text-brand-teal" />
                학부모 안내
              </button>
            </motion.div>

            {/* Philosophy Accent Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-3.5 rounded-xl bg-brand-teal-tint/80 border border-brand-teal/10 text-xs sm:text-sm font-medium text-brand-teal-dark flex items-center gap-2"
            >
              <span className="flex-shrink-0 px-2 py-0.5 rounded bg-brand-teal text-white text-[10px] font-bold">
                교육 철학
              </span>
              <span>선(先)기획, 후(後)AI — 먼저 생각하고 구조화한 뒤, AI로 구현합니다.</span>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-gray-100"
              id="hero-stats-row"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                
                <div className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-brand-amber">
                    316명
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-500">
                    316 관람객
                  </div>
                </div>

                <div className="space-y-1 border-l border-gray-100 pl-4 sm:pl-6">
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-brand-amber">
                    15명
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-500">
                    15 어린이기획자
                  </div>
                </div>

                <div className="space-y-1 border-l border-gray-100 pl-4 sm:pl-6">
                  <div className="text-2xl sm:text-4xl font-display font-extrabold text-brand-amber">
                    1.5일
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-500">
                    1.5일 전시
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Right Board Illustration Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[440px] aspect-[4/5] bg-white rounded-2xl border-4 border-gray-100 shadow-xl p-6 relative bg-blueprint overflow-hidden flex flex-col justify-between"
              id="hero-board-illustration"
            >
              {/* Whiteboard Header */}
              <div className="flex items-center justify-between border-b border-brand-teal/20 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <span className="ml-2 font-mono text-[10px] text-gray-400 tracking-wider">PROJECT: PLANNER_BOARD_V1</span>
                </div>
                <PencilLine className="w-4 h-4 text-brand-teal" />
              </div>

              {/* Whiteboard Workspace Content */}
              <div className="relative flex-1 py-4 space-y-6">
                
                {/* Connecting arrow SVG overlay */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Curve 1 */}
                    <path
                      d="M 80 75 Q 160 50, 130 160"
                      fill="none"
                      stroke="#1EA4B1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <polygon points="126,155 130,163 134,154" fill="#1EA4B1" />

                    {/* Curve 2 */}
                    <path
                      d="M 230 170 Q 290 200, 200 280"
                      fill="none"
                      stroke="#1EA4B1"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <polygon points="206,275 198,282 204,285" fill="#1EA4B1" />
                    
                    {/* Curve 3 */}
                    <path
                      d="M 120 290 Q 70 320, 240 340"
                      fill="none"
                      stroke="#D4894A"
                      strokeWidth="2.5"
                    />
                    <polygon points="234,335 243,341 233,344" fill="#D4894A" />
                  </svg>
                </div>

                {/* Sticky Note 1: Pink (Top Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="absolute top-4 left-2 w-36 bg-[#FFE3EC] border border-pink-200 p-3 sticky-note-shadow -rotate-3 rounded-sm z-10 cursor-pointer"
                >
                  <div className="w-3 h-3 bg-pink-300 rounded-full mx-auto -mt-4 mb-2 opacity-50"></div>
                  <div className="text-[10px] uppercase tracking-wide text-pink-700 font-bold mb-1">01. 관찰</div>
                  <p className="text-xs text-pink-900 font-semibold leading-tight">우리 동네 유기 동물들은 다 어디로 갈까?</p>
                </motion.div>

                {/* Sticky Note 2: Yellow (Right Middle) */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="absolute top-20 right-2 w-40 bg-[#FFFCE3] border border-yellow-200 p-3 sticky-note-shadow rotate-2 rounded-sm z-10 cursor-pointer"
                >
                  <div className="w-3 h-3 bg-yellow-300 rounded-full mx-auto -mt-4 mb-2 opacity-50"></div>
                  <div className="text-[10px] uppercase tracking-wide text-yellow-700 font-bold mb-1">02. 손기획 설계</div>
                  <p className="text-xs text-yellow-950 font-semibold leading-tight">입양 성향 MBTI 기반의 안드로이드 앱 화면 설계도 작성!</p>
                </motion.div>

                {/* Sticky Note 3: Green/Teal (Left Bottom) */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  className="absolute bottom-20 left-4 w-36 bg-[#E3FBFD] border border-teal-200 p-3 sticky-note-shadow -rotate-2 rounded-sm z-10 cursor-pointer"
                >
                  <div className="w-3 h-3 bg-teal-300 rounded-full mx-auto -mt-4 mb-2 opacity-50"></div>
                  <div className="text-[10px] uppercase tracking-wide text-teal-700 font-bold mb-1">03. 후(後) AI 구현</div>
                  <p className="text-xs text-teal-950 font-semibold leading-tight">설계도 내용을 바탕으로 AI 비주얼 프로토타입 출력</p>
                </motion.div>

                {/* Idea Card: Accent Amber (Bottom Right) */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="absolute bottom-4 right-2 w-44 bg-brand-amber/10 border border-brand-amber p-3.5 sticky-note-shadow rounded-xl z-20 cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-amber fill-brand-yellow/30" />
                    <span className="text-[10px] font-bold text-brand-amber">FINAL PREVIEW</span>
                  </div>
                  <p className="text-xs text-gray-900 font-bold leading-tight">공공 도서관 아동 기획전 전시 부스 설치</p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="text-[9px] bg-brand-amber text-white font-bold px-1.5 py-0.5 rounded-md">316명 참석</span>
                    <CheckSquare className="w-3.5 h-3.5 text-brand-amber" />
                  </div>
                </motion.div>

              </div>

              {/* Whiteboard Footer Tray */}
              <div className="border-t border-brand-teal/10 pt-3 flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                  선기획, 후AI 모델
                </span>
                <span>LITTLE PLANNERS ACADEMY</span>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
