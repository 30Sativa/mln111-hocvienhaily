import React from "react";
import Header from "@/components/sections/Header";
import Lessons from "@/components/sections/Lessons";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Các Chương Học Triết Học | Học Viện Hải Ly",
  description: "Trọn bộ hệ thống học phần triết học Mác - Lênin. Học lý thuyết tóm tắt, tóm tắt đề cương học tập, luyện câu hỏi trắc nghiệm và tham gia game ôn thi trực quan.",
};

export default function LessonsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-gray-800 antialiased">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col w-full py-8">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs / Back button */}
          <div className="flex items-center justify-start mb-6 animate-in fade-in slide-in-from-left-4 duration-300">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-white px-4 py-2 text-xs sm:text-sm font-bold text-primary-red shadow-sm transition-all duration-300 hover:bg-primary-red hover:text-white hover:border-transparent hover:-translate-x-0.5 active:scale-100"
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Quay lại trang chủ
            </a>
          </div>

        </div>

        {/* Dynamic 8-Cards chapters component */}
        <Lessons />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
