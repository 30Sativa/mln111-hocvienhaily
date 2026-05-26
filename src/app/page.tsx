import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import StudyModes from "@/components/sections/StudyModes";
import QuickMenu from "@/components/sections/QuickMenu";
import Roadmap from "@/components/sections/Roadmap";
import MiniQuiz from "@/components/sections/MiniQuiz";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Triết Học Mác-Lênin | Học Viện Hải Ly",
  description: "Nền tảng học tập triết học Mác - Lênin trực tuyến giúp hiểu sâu, nhớ lâu, vận dụng tốt. Trực quan, sinh động, hiệu quả cao.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-gray-800 antialiased">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* 2. Hero Soviet Banner */}
        <Hero />

        {/* 3. Introduction Section */}
        <Intro />

        {/* 4. Study Mode Selection */}
        <StudyModes />

        {/* 5. Pink Quick Menu Grid */}
        <QuickMenu />

        {/* 6. Visual Learning Roadmap */}
        <Roadmap />

        {/* 6.5. Interactive Mini Quiz Challenge */}
        <MiniQuiz />

        {/* 7. Student Testimonials */}
        <Testimonials />
      </main>

      {/* 8. Footer Contact & Info */}
      <Footer />
    </div>
  );
}
