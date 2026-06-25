import { TimelineStep, ProgramCase, StudentWork, ProcessStep, NewsPost } from "./types";

export const timelineSteps: TimelineStep[] = [
  {
    step: 1,
    title: "관찰과 문제발견",
    description: "내 주위 일상의 작은 불편함이나 더 나은 내일을 만드는 질문에서 기획의 첫 씨앗을 발견합니다.",
    badge: "01. Observer"
  },
  {
    step: 2,
    title: "구조화와 스토리보드",
    description: "아날로그 마인드맵과 다채로운 포스트잇을 통해 생각을 분류하고, 서비스나 전시회의 탄탄한 뼈대를 설계합니다.",
    badge: "02. Architect"
  },
  {
    step: 3,
    title: "AI 시각화 & 프로토타입",
    description: "손으로 한 땀 한 땀 기획한 세부 스케치와 프롬프트를 바탕으로, 생성형 AI를 능동적인 도구로 제어하여 눈앞에 시각화합니다.",
    badge: "03. Visualizer"
  },
  {
    step: 4,
    title: "전시 기획 및 소통",
    description: "단순한 교실 내 발표를 넘어, 실제 공공장소에서 모객을 하고 관람객과 능동적으로 소통하며 기획 가치를 세상에 증명합니다.",
    badge: "04. Presenter"
  }
];

export const programCases: ProgramCase[] = [
  {
    id: 1,
    title: "도서관 어린이기획전 [내 손으로 만든 첫 전시]",
    subTitle: "공공도서관 공간 활성화 협업 프로젝트",
    resultEmphasis: "관람객 316명 유치",
    resultDetail: "초등학생 15명이 4주간 기획하여 1.5일 동안 실제 전시회 개최",
    description: "도서관의 비어있는 유휴 공간을 분석해 어린이 눈높이에 맞는 참여형 체험 공간으로 재설계했습니다. 포스트잇으로 전개도를 만들고, 아날로그 기획안을 도출한 후 AI 시각 지원 툴을 거쳐 멋진 전시 벽면을 구축했습니다.",
    institution: "인천광역시 공공도서관",
    period: "4주 코스 (정규 주말반)",
    tags: ["공공도서관", "공간기획", "오프라인전시"]
  },
  {
    id: 2,
    title: "문화재단 연계 SDGs 캠페인 [우리 동네 그린맵 플래너]",
    subTitle: "문화재단 지역 활성화 위탁 지정 사업",
    resultEmphasis: "아이디어 특허·출원 2건",
    resultDetail: "참여 어린이 20명이 실질적인 지역 환경 문제 해결 기획서 완성",
    description: "마을의 생태적 문제와 분리배출 취약 지점을 직접 발굴했습니다. 물리적인 환경 개선 기획서를 구조화한 뒤, 생성형 비주얼 도구를 활용하여 전문적인 안내 포스터로 재구성, 주민센터와 구청에 정책 제안서로 공식 제출하였습니다.",
    institution: "경기문화재단 협력사업",
    period: "5주 코스",
    tags: ["문화재단", "지역생생", "SDGs ESG"]
  },
  {
    id: 3,
    title: "청소년수련관 창의융합 캠프 [미래 직업 기획 박람회]",
    subTitle: "시립 청소년수련관 방학 특화 프로그램",
    resultEmphasis: "학부모 만족도 98.4%",
    resultDetail: "초등 4~6학년 24명 참여, 상상 속 미래 직업 12종 포트폴리오 기획",
    description: "미래 과학 기술과 기후 변화 시나리오 속에서 아이들이 스스로 존립 가능한 1인 기업 및 직업을 기획했습니다. 비즈니스 모델 캔버스 구조를 손으로 메우고, 기획안 사양에 맞게 AI 브랜딩 툴을 활용하여 로고와 명함을 연출했습니다.",
    institution: "시립 청소년수련관",
    period: "3일 단기 몰입 캠프",
    tags: ["청소년수련관", "방학캠프", "창업기획"]
  },
  {
    id: 4,
    title: "지자체 아동참여위원회 교육 [어린이 정책 기획 제안]",
    subTitle: "구청 아동친화도시 조성 및 열린 구정 위탁 사업",
    resultEmphasis: "구청장 직접 보고 및 채택",
    resultDetail: "아동의원 18명이 아이디어를 구청 정식 업무 부서에 검토 의뢰",
    description: "안전한 횡단보도 대기선, 아동용 자전거 대여 기획 등 생활 속 아동 권익 증진 기획서를 작정했습니다. 기획서 작성을 선행하고 가시성을 위해 도표와 참고 레이아웃을 기술 도구로 정돈하여 실제 정책 담당자 간담회를 마쳤습니다.",
    institution: "서울시 OO구청",
    period: "2주 속성 과정",
    tags: ["지자체", "아동의회", "정책기획"]
  },
  {
    id: 5,
    title: "초등학교 창의체험활동 [우리 반 규칙과 학급 브랜딩]",
    subTitle: "초등학교 5학년 전체 학급 대상 교육 과정 위탁 운영",
    resultEmphasis: "자기주도학습력 35% 향상",
    resultDetail: "4개 학급 102명 대상 정규 교과 연계 기획 프로그램 완료",
    description: "수동적으로 교사의 훈육을 따르는 학급이 아니라, 학생들이 소그룹 기획 회의를 통해 '모두가 행복한 교실 환경 및 부서'를 직접 기획했습니다. 소통 방식과 캘린더 정렬 방식을 스스로 고안해 학급 내 전반적인 자치 질서를 잡았습니다.",
    institution: "OO초등학교 5학년 군",
    period: "8차시 정규 수업",
    tags: ["공교육 협력", "정규수업", "자기주도"]
  }
];

export const studentWorks: StudentWork[] = [
  {
    id: 1,
    studentName: "김민준",
    studentGrade: "초등 5학년",
    workTitle: "바다 쓰레기 고속 분류 '해양 구호 로봇 (M-Blue)'",
    description: "해양 미세 플라스틱과 대형 쓰레기의 물리적 유입 경로를 브레인스토밍하고 수집 최적 경로를 지도상에 손 기획안으로 구성한 작품입니다.",
    planningFocus: "유압식 그물 개폐 메커니즘 설계, 수거 동선 마인드맵 분석",
    aiRendering: "기획 도면 스펙을 영문 프롬프트로 전환하여 하이테크 해양 수집 기어 실물 모형 느낌으로 3D 렌더링 피칭",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    studentName: "이지아",
    studentGrade: "초등 6학년",
    workTitle: "유기 동물 맞춤 성향 매칭 모바일 플랫폼 '우리(Woori)'",
    description: "단순한 동정심 유발 입양이 아닌 보호소 유기견들과 입양자의 생활 반경, 성격 MBTI를 기반으로 한 하이브리드 앱 설계안입니다.",
    planningFocus: "메인 인트로 UX 구조화, 매칭 조건 3종 선정 및 아날로그 와이어프레임 설계",
    aiRendering: "스케치한 카드형 레이아웃을 바탕으로 UI 이미지 모델링 툴을 활용해 전문 모바일 플랫폼의 산뜻한 디자인 목업 제작",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    studentName: "최도윤",
    studentGrade: "초등 4학년",
    workTitle: "골든타임 확보를 위한 '화재 진압용 증강슈트 (PyroGuard)'",
    description: "구조 요원의 생명 보호와 소방 장비 중량 부담 완화를 위해 관절 보조 모터 및 전면 산소 마스크 안전 잠금 스펙을 기획한 콘셉트 제안입니다.",
    planningFocus: "외골격 프레임 배치 평면 기획 도면 작성, 주요 전력 공급 장치 기획",
    aiRendering: "설계한 도안 수치를 변환하여 전문 메카트로닉스 슈트 프로토타입 스타일의 정교한 하이테크 그래픽 산출물로 완성",
    imageUrl: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "문제 인식 및 공감",
    description: "일상의 결핍이나 문제점을 찾아 화이트보드에 마음껏 기획의 불씨를 적어 나갑니다.",
    details: ["브레인스토밍", "공감 인터뷰", "질문 키워드 도출"]
  },
  {
    step: 2,
    title: "아이디어 구조화",
    description: "생각의 혼란을 물리적인 포스트잇 카드 소팅 기법으로 분류하고 가시화합니다.",
    details: ["마인드 맵핑", "포스트잇 소팅", "핵심 가치 필터링"]
  },
  {
    step: 3,
    title: "선(先)기획 설계도 작성",
    description: "화면이나 실사 비주얼로 넘어가기 전, 아날로그 기획안과 스토리보드를 손글씨로 꼼꼼히 채워갑니다. 이 과정이 아이들이 단순한 사용자가 아닌 주도적인 설계자가 되도록 만듭니다.",
    details: ["손글씨 기획서 작성", "와이어프레임 설계", "메커니즘 정의서"],
    isHighlight: true
  },
  {
    step: 4,
    title: "AI 이미지 피드백 & 렌더링",
    description: "스스로 명확하게 정립한 기획서의 내용을 AI를 사용해 시각적인 실물 수준의 3D나 목업 디자인으로 렌더링합니다.",
    details: ["프롬프트 엔지니어링", "비주얼 피드백 분석", "프로토타입 정교화"]
  },
  {
    step: 5,
    title: "대외 공유 및 피칭",
    description: "완성된 프로토타입 기획서를 들고 공공 기관 담당자, 구청장, 부모님 및 대중들 앞에서 적극적으로 프레젠테이션하고 기획을 증명합니다.",
    details: ["전시 부스 세팅", "피칭 피드백 수렴", "인증서 수여"]
  }
];

export const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "공공도서관 담당자가 어린이기획 교육에 열광하는 실제 이유",
    category: "교육 뉴스",
    date: "2026.06.18",
    snippet: "도서관의 유휴 공간이 기획 캠프의 중심지로! 실제 도서관 주무관들이 밝히는 단순 체험형 수업과 '스스로 만드는 어린이기획단'의 극명한 피드백 차이를 전해드립니다.",
    readTime: "5분 읽기"
  },
  {
    id: 2,
    title: "초등학생 15명이 전시회를 연다고? 무모해 보였던 4주간의 진짜 성장 기록",
    category: "수업 현장스케치",
    date: "2026.06.10",
    snippet: "수업 시작 첫날엔 '뭐 해야 돼요?'라고 묻던 아이들이 마지막 날 316명의 일반 관람객 앞에서 자신들이 수거해 온 바다 기획안을 설파하는 성장의 과정을 고스란히 담았습니다.",
    readTime: "8분 읽기"
  },
  {
    id: 3,
    title: "가정에서 실천하는 '선(先)기획 후(後)AI' 학습 가이드라인",
    category: "학부모 리소스",
    date: "2026.05.28",
    snippet: "인공지능 챗봇을 즉각 켜주기 전에, 종이 한 장과 연필 세 자루로 아이에게 가장 먼저 '질문의 순서'와 '원하는 목표'를 손으로 그리게 만드는 3단계 아날로그 가이드라인을 소개합니다.",
    readTime: "6분 읽기"
  }
];
