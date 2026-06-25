import React from "react";
import { Compass, Sparkles, Send, Award } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-brand-teal-dark text-white pt-16 pb-12 relative overflow-hidden" id="footer">
      
      {/* Background blueprint grids for theme cohesion */}
      <div className="absolute inset-0 opacity-5 bg-blueprint pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Column Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Brand Message */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" onClick={handleScrollToTop} className="inline-flex items-center space-x-2.5 group">
              <div className="w-12 h-12 rounded-full bg-brand-teal flex flex-col items-center justify-center text-brand-yellow font-display font-black shadow-lg shadow-black/20 border border-white/20 group-hover:scale-105 transition-transform select-none">
                <div className="flex flex-col items-center justify-center -rotate-7 transform -translate-y-[1px]">
                  <span className="text-[11px] leading-[0.9] tracking-tight font-black">Little</span>
                  <span className="text-[10px] leading-[0.9] tracking-tight font-black -mt-0.5">Planners</span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-lg text-white leading-tight">리틀플래너스</span>
                <span className="text-[10px] tracking-wider uppercase font-display font-semibold text-brand-yellow">
                  Little Planners
                </span>
              </div>
            </a>
            
            <p className="text-brand-teal-tint/80 text-sm font-semibold leading-relaxed">
              선(先)기획, 후(後)AI — 아이들이 단순히 기술의 소비자에 머무는 대신, 기획자의 주체적 관점으로 세상을 관찰하고 문제를 해결해 나갈 수 있도록 가르칩니다.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-brand-yellow uppercase tracking-wider">주요 서비스 및 안내</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-brand-teal-tint/70">
              <a href="#about" className="hover:text-white transition-colors">&bull; 어린이기획자란</a>
              <a href="#cases" className="hover:text-white transition-colors">&bull; 실질 운영 사례</a>
              <a href="#process" className="hover:text-white transition-colors">&bull; 5단계 교육 프로세스</a>
              <a href="#founder" className="hover:text-white transition-colors">&bull; 대표 디렉터 약력</a>
              <a href="#parents" className="hover:text-white transition-colors">&bull; 학부모 안내지</a>
              <a href="#partnership" className="hover:text-white transition-colors">&bull; 기관 협업 신청</a>
            </div>
          </div>

          {/* Mascot Badge / Certified Stamp (Allowed here) */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-center">
            
            <div className="bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center gap-3 max-w-xs text-left">
              {/* Custom Badge drawing */}
              <div className="w-12 h-12 rounded-full bg-brand-yellow flex-shrink-0 flex items-center justify-center text-brand-teal-dark shadow-inner">
                <Award className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-black uppercase text-brand-yellow tracking-wider">LP ACADEMY CERTIFIED</div>
                <div className="text-xs font-bold text-white">어린이 기획력 교육 보증 마크</div>
                <p className="text-[9px] text-brand-teal-tint/60">선기획 아날로그 교육 가이드라인 정규 이수</p>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Column: Address and legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-brand-teal-tint/60 font-semibold">
          
          <div className="space-y-2 text-left">
            <div>
              <span>(주)리틀플래너스 교육 컨설팅</span> | <span>대표이사 이정민</span> | <span>서울특별시 강남구 테헤란로 152 (역삼동, 한독빌딩)</span>
            </div>
            <div>
              <span>사업자등록번호: 120-88-12345</span> | <span>전화문의: 02-555-9876</span> | <span>이메일: hello@littleplanners.co.kr</span>
            </div>
            <div>
              통신판매업 신고번호: 제 2026-서울강남-0152호 | 수탁협력 교육 시설 책임 배상보험 가입 완료
            </div>
          </div>

          <div className="space-y-1 text-left md:text-right flex-shrink-0">
            <div>&copy; 2026 Little Planners Academy. All rights reserved.</div>
            <div className="text-[10px] text-brand-teal-tint/40">
              본 웹사이트의 기획안, 캐릭터 마크, '선기획 후AI' 교육 모델 특허 등은 상표법의 보호를 받습니다.
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
