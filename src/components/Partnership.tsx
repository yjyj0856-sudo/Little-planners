import React, { useState } from "react";
import { motion } from "motion/react";
import { Landmark, CheckCircle, Mail, Phone, Clock, FileSpreadsheet, Send } from "lucide-react";

export default function Partnership() {
  const [formData, setFormData] = useState({
    institutionType: "도서관",
    institutionName: "",
    contactPerson: "",
    position: "",
    phone: "",
    email: "",
    programType: "정규과정",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.institutionName && formData.contactPerson && formData.phone) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="partnership"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-3.5 py-1.5 rounded-full">
            FOR PUBLIC SECTOR
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
            기관 협업 및 위탁 프로그램 안내
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            리틀플래너스는 단순 강사 알선이 아닌, 예산 기획부터 교구재 조달, 성과 보고까지 완벽히 책임지는 <strong>위탁 프로그램 전문 모델</strong>입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Why We are Different (Commission model description) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-2xl w-fit">
                <Landmark className="w-6 h-6" />
              </div>
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 tracking-tight leading-snug">
                단순 강사 매칭이 아닌,<br />
                <span className="text-brand-teal">풀 패키지 일괄 위탁 설계</span>
              </h3>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                공공기관 사업 주무관님들의 예산 집행 한계와 공문서 작성의 어려움을 완벽히 이해합니다. 계약 시 행정 증빙 지원, 오프라인 전시회 하드웨어 설치, 최종 성과 피드백 보고서까지 원스톱으로 지원합니다.
              </p>
            </div>

            {/* Crucial Commission Points */}
            <div className="space-y-4 py-4 border-t border-b border-gray-100">
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">독자 개발 교안 및 활동지 무상 제공</h4>
                  <p className="text-xs text-gray-500 font-semibold">특허 출원된 선기획-후AI 맞춤 워크북 전원 배부</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">실제 공공장소 연계 전시 부스 하드웨어 세팅</h4>
                  <p className="text-xs text-gray-500 font-semibold">수업 후 관람객 참여형 오프라인 전시 벽면 시공 대행</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">지자체 행정 서류 및 지출 증빙 100% 대응</h4>
                  <p className="text-xs text-gray-500 font-semibold">계약서, 산출내역서, 조달 서류 준비 프로세스 보증</p>
                </div>
              </div>

            </div>

            {/* Instant Contact details */}
            <div className="space-y-3 bg-brand-teal-tint/60 p-5 rounded-2xl border border-brand-teal/10 text-sm">
              <div className="font-bold text-gray-900">리틀플래너스 교육 위탁 지원본부</div>
              <div className="space-y-2 text-gray-600 font-medium text-xs sm:text-sm">
                <a href="tel:02-555-9876" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Phone className="w-4 h-4 text-brand-teal" />
                  전화 문의: <strong className="text-gray-900">02-555-9876</strong> (평일 09:30 - 18:00)
                </a>
                <a href="mailto:hello@littleplanners.co.kr" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
                  <Mail className="w-4 h-4 text-brand-teal" />
                  이메일 주소: <strong className="text-gray-900">hello@littleplanners.co.kr</strong>
                </a>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4 text-brand-amber" />
                  간편 폼 접수 시 24시간 이내 맞춤형 단가표 회신
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-brand-teal-tint/30 rounded-3xl border border-brand-teal/10 p-6 sm:p-10 shadow-sm" id="inquiry-form-card">
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center text-white text-3xl shadow-lg shadow-brand-teal/20">
                  ✓
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-gray-900">
                    협업 제안 문의가 성공적으로 접수되었습니다
                  </h3>
                  <p className="text-gray-500 text-sm font-semibold max-w-md mx-auto">
                    남겨주신 연락처(<strong className="text-brand-teal-dark">{formData.phone}</strong>)와 이메일로 24시간 이내에 리틀플래너스 전담 플래너가 맞춤 제안서와 단가 카탈로그를 전송해 드리겠습니다.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-100 max-w-sm text-left text-xs space-y-2.5">
                  <div className="font-bold text-gray-700">접수된 명세 요약:</div>
                  <div className="text-gray-500 space-y-1 font-medium">
                    <div>• <strong>기관명:</strong> {formData.institutionName} ({formData.institutionType})</div>
                    <div>• <strong>담당자:</strong> {formData.contactPerson} {formData.position}</div>
                    <div>• <strong>신청 코스:</strong> {formData.programType}</div>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-brand-teal font-bold hover:underline"
                >
                  새로운 문의 접수하기
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="partnership-inquiry-form">
                
                <h4 className="font-display font-bold text-lg text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-5 h-5 text-brand-teal" />
                  실시간 예산 및 위탁 단가 제안 요청
                </h4>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Inst Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">기관 구분</label>
                    <select
                      value={formData.institutionType}
                      onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                    >
                      <option value="도서관">공공도서관</option>
                      <option value="문화재단">문화재단 / 재단법인</option>
                      <option value="청소년수련관">청소년 수련관 / 수련원</option>
                      <option value="지자체구청">지자체 / 구청 정책과</option>
                      <option value="초등학교">초등학교 / 중학교</option>
                      <option value="기타">기타 영리/비영리 단체</option>
                    </select>
                  </div>

                  {/* Inst Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">기관·단체명 *</label>
                    <input
                      type="text"
                      required
                      placeholder="예: 경기남부 공공어린이도서관"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">담당자 성함 *</label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                  {/* Position */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">직급 / 직책</label>
                    <input
                      type="text"
                      placeholder="예: 주무관 / 대리 / 학부모 회장"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">회신받으실 연락처 *</label>
                    <input
                      type="tel"
                      required
                      placeholder="예: 010-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600">이메일 주소 *</label>
                    <input
                      type="email"
                      required
                      placeholder="예: planner@library.go.kr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                </div>

                {/* Program Type Select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">희망 교육 모델</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: "정규과정", val: "주말 정규 과정 (4~5주)" },
                      { key: "단기캠프", val: "방학 단기 캠프 (2~3일)" },
                      { key: "학교특화", val: "공교육 창체 과정" },
                      { key: "기타협의", val: "기타 정책 제안 협의" }
                    ].map((prog) => (
                      <button
                        key={prog.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, programType: prog.val })}
                        className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                          formData.programType === prog.val
                            ? "bg-brand-teal text-white border-brand-teal shadow-sm"
                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {prog.key === "정규과정" ? "주말 정규 (4-5주)" : 
                         prog.key === "단기캠프" ? "단기 캠프 (2-3일)" : 
                         prog.key === "학교특화" ? "공교육 창의" : "기타 맞춤"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600">문의 내용 / 특이사항 / 희망 일정</label>
                  <textarea
                    rows={4}
                    placeholder="희망하는 교육 대상 학년, 예상 예산 규정, 혹은 구체적인 기획 테마(예: 독서 연계, SDGs 환경 연계 등)를 작성해 주시면 더욱 정교한 단가서 작성이 가능합니다."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium focus:outline-none focus:border-brand-teal"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-amber hover:bg-brand-amber-dark text-white font-bold py-3.5 rounded-xl shadow-md shadow-brand-amber/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                  id="inquiry-form-submit"
                >
                  <Send className="w-4 h-4 text-brand-yellow" />
                  위탁 제안 및 상세 자료 요청서 보내기
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
