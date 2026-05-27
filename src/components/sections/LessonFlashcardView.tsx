"use client";

import React, { useState, useEffect, useCallback } from "react";
import type { Flashcard } from "@/types/lesson";

export default function LessonFlashcardView({ flashcards }: { flashcards: Flashcard[] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goNext = useCallback(() => {
    if (currentIdx < flashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIdx((i) => i + 1), 150);
    }
  }, [currentIdx, flashcards.length]);

  const goPrev = useCallback(() => {
    if (currentIdx > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIdx((i) => i - 1), 150);
    }
  }, [currentIdx]);

  const toggleFlip = useCallback(() => {
    setIsFlipped((f) => !f);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, toggleFlip]);

  return (
    <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-500">
      {/* Counter */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-primary-red uppercase tracking-wider">
          Thẻ {currentIdx + 1} / {flashcards.length}
        </span>
      </div>

      {/* Card Container */}
      <div
        className="w-full max-w-lg cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={toggleFlip}
      >
        <div
          className="relative w-full min-h-[280px] sm:min-h-[320px] transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Question */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-amber-100 bg-white p-8 shadow-md"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-red/10 text-primary-red text-lg font-bold">
              Q
            </span>
            <p className="text-center text-lg sm:text-xl font-bold text-gray-800 leading-relaxed">
              {flashcards[currentIdx].question}
            </p>
            <span className="mt-6 text-xs text-gray-400 font-semibold">Nhấn để lật thẻ</span>
          </div>

          {/* Back - Answer */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-amber-300/50 bg-gradient-to-br from-amber-50 to-amber-100/80 p-8 shadow-md"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white text-lg font-bold">
              A
            </span>
            <p className="text-center text-lg sm:text-xl font-bold text-amber-900 leading-relaxed">
              {flashcards[currentIdx].answer}
            </p>
            <span className="mt-6 text-xs text-amber-600 font-semibold">Nhấn để xem câu hỏi</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          disabled={currentIdx === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); toggleFlip(); }}
          className="flex h-11 items-center justify-center gap-2 rounded-full bg-primary-red px-6 text-sm font-bold text-white shadow-sm hover:bg-primary-red-hover transition-all duration-200 cursor-pointer"
        >
          🔄 Lật thẻ
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          disabled={currentIdx === flashcards.length - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-md">
        {flashcards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setIsFlipped(false); setCurrentIdx(idx); }}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIdx ? "w-6 bg-primary-red" : "w-2.5 bg-gray-200 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-gray-400 font-medium">
        ⌨️ Dùng phím ← → để điều hướng, Space để lật thẻ
      </p>
    </div>
  );
}
