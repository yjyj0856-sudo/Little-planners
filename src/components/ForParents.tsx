import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, HelpCircle, CheckCircle, FlameKindling, Sparkles } from "lucide-react";

export default function ForParents() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const worries = [
    {
      title: "코딩과 기술을 배우지만,",
      desc: "정작 스스로 '무엇을 만들고 싶은지' 물어보면 입을 다물어 버리는 아이",
      icon: "💻"
    },
    {
      title: "AI와 스마트 폰은 능숙히 다루지만,",
      desc: "세상을 바꾸는 스스로의 '주체적인 질문'을 던지는 힘이 부족한 아이",
      icon: "🤖"
    },
    {
      title: "책은 많이 읽고 성적은 높은 편이지만,",
      desc: "자신만의 생각으로 단 한 장의 구조적 제안서도 채워내지 못하는 아이",
      icon: "📚"
    }
  ];

  return (
    <section
      id="parents"
      className="py-20 lg:py-28 bg-gradient-to-br from-white via-[#FFFDF5] to-white relative overflow-hidden"
    >
      {/* Decorative Warm Shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-yellow/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-brand-amber/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-amber uppercase tracking-widest bg-brand-amber/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 fill-brand-amber" />
            FOR DEAR PARENTS
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            우리 아이, 학원에서 정해진<br />
            <span className="text-brand-amber">매뉴얼만 답습</span>하고 있지 않나요?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            주입식 문제 풀이에서 벗어나, 아이의 논리로 머릿속 생각을 설계하는 힘을 주어야 할 때입니다.
          </p>
        </div>

        {/* Real worries grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {worries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-6 border border-brand-amber/10 hover:border-brand-amber/30 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-4"
            >
              <div className="text-3xl p-3.5 rounded-2xl bg-[#FFFDF5] border border-brand-yellow/20">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-gray-800 text-base md:text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The solution text card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-2xl border border-brand-yellow/30 p-8 sm:p-10 shadow-md text-center space-y-6"
        >
          <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-amber bg-brand-yellow/25 px-3 py-1 rounded-full">
            <FlameKindling className="w-3.5 h-3.5" />
            공감과 해결 제안
          </div>
          
          <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 leading-snug">
            "진짜 공부는 스스로 무언가를 기획해 보는 경험에서 완성됩니다."
          </h3>

          <div className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto space-y-4 text-left sm:text-center">
            <p>
              기획이란 단순히 행사를 만드는 게 아닙니다. 내 머릿속의 어지러운 아이디어를 정렬하고, 타인에게 설득력 있게 가치를 전하며, 세상을 내 힘으로 조금씩 전진시키는 첫 단추입니다.
            </p>
            <p>
              리틀플래너스는 아이들이 지식을 단순히 삼키지 않고, 자신의 눈빛으로 관찰하고 손으로 설계하는 <strong>'지적 독립성'</strong>을 최고의 가치로 추구합니다.
            </p>
          </div>

          {/* Guidebook Download Request */}
          <div className="pt-6 border-t border-gray-100 max-w-lg mx-auto space-y-4">
            <div className="text-xs sm:text-sm font-bold text-gray-400">
              📬 가정에서 길러주는 어린이 질문법 & 가이드북 받아보기
            </div>
            
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal-dark p-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5 text-brand-teal" />
                신청해 주셔서 감사합니다! 가이드북 발송 준비 중입니다.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2" id="parents-guidebook-form">
                <input
                  type="email"
                  required
                  placeholder="가이드북을 받으실 이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-50 border border-gray-200 focus:border-brand-teal focus:bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-brand-amber hover:bg-brand-amber-dark text-white font-bold px-4 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-1 shadow-md hover:shadow-lg transition-all focus:outline-none cursor-pointer"
                  id="parents-guidebook-submit"
                >
                  <Sparkles className="w-4 h-4 text-brand-yellow" />
                  무료 신청
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
