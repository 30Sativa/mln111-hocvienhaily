import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import LessonDetail from "@/components/sections/LessonDetail";
import { lessons } from "@/constants/lessons-data";

export async function generateStaticParams() {
  return lessons.map((lesson) => ({ id: lesson.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = lessons.find((l) => l.id === id);
  if (!lesson) return { title: "Không tìm thấy" };
  return {
    title: `${lesson.title} | Học Viện Hải Ly`,
    description: `Học phần ${lesson.id}: ${lesson.subtitle}. Nội dung bài học, tóm tắt, quiz trắc nghiệm và flashcard ghi nhớ.`,
  };
}

export default async function LessonPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const tab = typeof sp.tab === "string" ? sp.tab : undefined;
  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream text-gray-800 antialiased">
      <Header />

      <main className="flex-1 flex flex-col w-full py-8">
        <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center justify-start mb-6 animate-in fade-in slide-in-from-left-4 duration-300">
            <a
              href="/lessons"
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
              Quay lại danh sách
            </a>
          </div>

          {/* Lesson Detail */}
          <LessonDetail lesson={lesson} initialTab={tab} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
