import { motion } from "motion/react";
import { newsPosts } from "../data";
import { BookOpen, Calendar, ArrowRight, Rss } from "lucide-react";

export default function BlogNews() {
  return (
    <section
      id="blog"
      className="py-20 lg:py-28 bg-brand-teal-tint/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            LATEST ARTICLES
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            리틀플래너스 <span className="text-brand-teal">블로그·뉴스</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            어린이 기획력 교육의 최신 동향과 현장의 따스한 기획 성장 일기들을 만나보세요.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl border border-brand-teal/10 hover:border-brand-teal/30 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              
              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span className="text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-md text-[10px] font-black">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 group-hover:text-brand-teal transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Snippet Paragraph */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {post.snippet}
                </p>

              </div>

              {/* Card Footer Action */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500 group-hover:bg-brand-teal/5 group-hover:text-brand-teal transition-colors">
                <span className="text-[10px] text-gray-400">
                  {post.readTime} • 추천 필독
                </span>
                
                <span className="flex items-center gap-1 text-brand-teal-dark font-extrabold">
                  더 알아보기
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Subscription Accent block */}
        <div className="mt-12 max-w-xl mx-auto p-4 bg-white rounded-2xl border border-brand-teal/10 shadow-sm flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Rss className="w-4 h-4 text-brand-amber animate-pulse" />
            <span className="text-gray-500 font-bold">카카오 채널에서 교육 개설 소식 실시간 알림 받기</span>
          </div>
          <a
            href="#partnership"
            className="text-brand-teal font-extrabold hover:underline flex-shrink-0"
          >
            소식 구독하기 &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
