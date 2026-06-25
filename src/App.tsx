import Header from "./components/Header";
import Hero from "./components/Hero";
import PlannerPath from "./components/PlannerPath";
import ChildPlannerIntro from "./components/ChildPlannerIntro";
import TrackRecord from "./components/TrackRecord";
import ResultsGallery from "./components/ResultsGallery";
import Process from "./components/Process";
import FounderProfile from "./components/FounderProfile";
import ForParents from "./components/ForParents";
import Partnership from "./components/Partnership";
import BlogNews from "./components/BlogNews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased selection:bg-brand-teal/20 selection:text-brand-teal-dark">
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. 기획자의 길 (Planner's Path) Timeline */}
        <PlannerPath />

        {/* 4. 어린이기획자란 (What is a Child Planner) Intro */}
        <ChildPlannerIntro />

        {/* 5. 운영 사례 (Track Record) - Persuasion Core */}
        <TrackRecord />

        {/* 6. 결과물 갤러리 (Results Gallery) - Student Works */}
        <ResultsGallery />

        {/* 7. 수업 프로세스 (Process) - 5 Steps (Step 3 Highlighted) */}
        <Process />

        {/* 8. 대표 프로필 (Founder Profile) - Credentials & Certs */}
        <FounderProfile />

        {/* 9. 학부모 섹션 (For Parents) - Warm Scene-based Copy */}
        <ForParents />

        {/* 10. 기관 협업 안내 (Institutional Partnership) - Commission Inquiry Form */}
        <Partnership />

        {/* 11. 블로그·뉴스 (Blog/News) - latest 3 posts */}
        <BlogNews />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
