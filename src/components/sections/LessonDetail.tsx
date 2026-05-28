"use client";

import React, { useState } from "react";
import type { Lesson } from "@/types/lesson";
import LessonContentView from "@/components/sections/LessonContentView";
import LessonSummaryView from "@/components/sections/LessonSummaryView";
import LessonQuizView from "@/components/sections/LessonQuizView";
import LessonFlashcardView from "@/components/sections/LessonFlashcardView";
import AIChatPanel from "@/components/sections/AIChatPanel";

type TabKey = "content" | "summary" | "quiz" | "flashcard" | "ai-chat";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "content", label: "Nội dung", icon: "" },
  { key: "summary", label: "Tóm tắt", icon: "" },
  { key: "quiz", label: "Quiz", icon: "" },
  { key: "flashcard", label: "Flashcard", icon: "" },
  { key: "ai-chat", label: "Hỏi đáp AI", icon: "" },
];

export default function LessonDetail({
  lesson,
  initialTab,
}: {
  lesson: Lesson;
  initialTab?: string;
}) {
  const validTab = tabs.find((t) => t.key === initialTab)?.key || "content";
  const [activeTab, setActiveTab] = useState<TabKey>(validTab);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Lesson Title */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 border border-primary-red/20 px-4 py-1.5 text-primary-red font-bold text-xs uppercase tracking-wider">
          Học phần {lesson.id}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 font-sans">
          {lesson.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-medium">{lesson.subtitle}</p>
      </div>

      {/* Tab Bar */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-gray-100/80 border border-gray-200/50 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-primary-red text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:bg-white/60"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "content" && <LessonContentView content={lesson.content} />}
        {activeTab === "summary" && <LessonSummaryView summary={lesson.summary} />}
        {activeTab === "quiz" && <LessonQuizView quiz={lesson.quiz} />}
        {activeTab === "flashcard" && <LessonFlashcardView flashcards={lesson.flashcards} />}
        {activeTab === "ai-chat" && <AIChatPanel lessonContext={lesson} />}
      </div>
    </div>
  );
}
