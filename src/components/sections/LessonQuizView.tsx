"use client";

import React, { useState } from "react";
import type { QuizQuestion } from "@/types/lesson";

export default function LessonQuizView({ quiz }: { quiz: QuizQuestion[] }) {
  const [quizState, setQuizState] = useState<"start" | "active" | "result">("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setQuizState("active");
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
  };

  const handleSelect = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(optIdx);
    setIsAnswered(true);
    if (optIdx === quiz[currentIdx].correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quiz.length - 1) {
      setCurrentIdx((i) => i + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizState("result");
    }
  };

  return (
    <div className="w-full rounded-3xl border border-amber-100/50 bg-white p-6 sm:p-10 shadow-md relative overflow-hidden animate-in fade-in duration-500">
      {quizState === "active" && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100">
          <div
            className="h-full bg-primary-red transition-all duration-500"
            style={{ width: `${((currentIdx + 1) / quiz.length) * 100}%` }}
          />
        </div>
      )}

      {/* START */}
      {quizState === "start" && (
        <div className="flex flex-col items-center text-center space-y-6 py-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl shadow-inner">
            🎯
          </div>
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800">
              Sẵn sàng kiểm tra kiến thức?
            </h3>
            <p className="max-w-md mx-auto text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
              Bộ quiz gồm <span className="font-bold text-primary-red">{quiz.length} câu hỏi</span> trắc nghiệm.
              Hãy chọn đáp án đúng nhất cho mỗi câu!
            </p>
          </div>
          <button
            onClick={handleStart}
            className="inline-flex h-13 items-center justify-center rounded-full bg-primary-red px-10 text-base font-extrabold text-white shadow-md transition-all duration-300 hover:bg-primary-red-hover hover:scale-105 active:scale-100 uppercase tracking-wide cursor-pointer"
          >
            BẮT ĐẦU QUIZ 🚀
          </button>
        </div>
      )}

      {/* ACTIVE */}
      {quizState === "active" && (
        <div className="flex flex-col text-left space-y-6 sm:space-y-8 animate-in fade-in duration-300">
          <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-100">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-red">
              Câu hỏi {currentIdx + 1} / {quiz.length}
            </span>
            <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
              Điểm: {score}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold leading-relaxed text-gray-800">
            {quiz[currentIdx].question}
          </h3>

          <div className="grid grid-cols-1 gap-3.5">
            {quiz[currentIdx].options.map((opt, idx) => {
              let styles = "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:border-gray-300";
              if (isAnswered) {
                const isCorrect = idx === quiz[currentIdx].correctAnswer;
                const isSelected = idx === selectedAnswer;
                if (isCorrect) {
                  styles = "border-emerald-300 bg-emerald-50/70 text-emerald-800 font-bold";
                } else if (isSelected) {
                  styles = "border-rose-300 bg-rose-50/70 text-rose-800 font-bold";
                } else {
                  styles = "border-gray-100 bg-white text-gray-400 opacity-60";
                }
              }
              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelect(idx)}
                  className={`w-full flex items-start gap-4 rounded-2xl border-2 px-5 py-4 text-sm sm:text-base font-semibold transition-all duration-300 text-left cursor-pointer active:scale-99 ${styles}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isAnswered && idx === quiz[currentIdx].correctAnswer
                        ? "bg-emerald-500 text-white"
                        : isAnswered && idx === selectedAnswer
                        ? "bg-rose-500 text-white"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#f3b150] px-8 text-sm font-extrabold text-white shadow-sm transition-all duration-300 hover:bg-[#df9937] hover:scale-102 cursor-pointer uppercase tracking-wider"
              >
                {currentIdx < quiz.length - 1 ? "Câu tiếp theo" : "Xem kết quả"} ➔
              </button>
            </div>
          )}
        </div>
      )}

      {/* RESULT */}
      {quizState === "result" && (
        <div className="flex flex-col items-center text-center space-y-6 py-8 animate-in fade-in duration-300">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl shadow-inner animate-bounce">
            {score === quiz.length ? "👑" : score >= quiz.length / 2 ? "🎉" : "💪"}
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Kết Quả Đạt Được!</h3>
            <div className="text-4xl sm:text-5xl font-black text-primary-red my-4">
              {score} / {quiz.length}
            </div>
            <p className="max-w-md mx-auto text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
              {score === quiz.length
                ? "Xuất sắc! Bạn đã trả lời đúng toàn bộ câu hỏi. Kiến thức của bạn rất vững!"
                : score >= quiz.length / 2
                ? "Khá tốt! Bạn đã nắm vững phần nào kiến thức, hãy ôn tập thêm nhé."
                : "Đừng nản lòng! Hãy đọc lại nội dung bài học và thử lại nhé."}
            </p>
          </div>
          <button
            onClick={handleStart}
            className="flex h-12 items-center justify-center rounded-full border-2 border-amber-200 px-8 text-sm font-bold text-amber-700 bg-white hover:bg-amber-50 hover:border-amber-300 transition-colors duration-200 cursor-pointer"
          >
            🔄 LÀM LẠI
          </button>
        </div>
      )}
    </div>
  );
}
