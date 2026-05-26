"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of options (0-3)
  explanation: string;
}

export default function MiniQuiz() {
  const [quizState, setQuizState] = useState<"start" | "active" | "result">("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "Theo triết học Mác - Lênin, nguồn gốc tự nhiên của ý thức gồm những yếu tố nào?",
      options: [
        "Bộ óc người và thế giới khách quan tác động lên bộ óc người.",
        "Lao động và ngôn ngữ tiến hóa.",
        "Sự phát triển của các hình thức phản ánh sinh học tự nhiên.",
        "Sự thích nghi thích ứng của sinh vật với môi trường.",
      ],
      correctAnswer: 0,
      explanation:
        "Nguồn gốc tự nhiên của ý thức gồm hai yếu tố không thể thiếu: Bộ óc con người hoạt động bình thường và sự tác động của thế giới khách quan lên bộ óc đó, tạo ra quan hệ phản ánh năng động hiện thực vào trong bộ óc.",
    },
    {
      id: 2,
      question: "Phép biện chứng duy vật nghiên cứu những mối liên hệ nào?",
      options: [
        "Những mối liên hệ đặc thù của từng lĩnh vực tự nhiên riêng lẻ.",
        "Những mối liên hệ phổ biến nhất của thế giới khách quan.",
        "Những mối liên hệ chủ quan do tư duy con người tự suy luận.",
        "Những mối liên hệ nhân quả cơ giới trong vật lý học cổ điển.",
      ],
      correctAnswer: 1,
      explanation:
        "Phép biện chứng duy vật là khoa học về mối liên hệ phổ biến nhất và những quy luật vận động, phát triển chung nhất của tự nhiên, xã hội loài người và tư duy.",
    },
    {
      id: 3,
      question: "Bản chất của ý thức theo quan điểm duy vật biện chứng là gì?",
      options: [
        "Sự phản ánh thụ động, sao chép nguyên xi thế giới khách quan.",
        "Một dạng vật chất đặc biệt có thể cân đo đong đếm do bộ óc tiết ra.",
        "Sự phản ánh năng động, sáng tạo thế giới khách quan vào bộ óc người.",
        "Sự tồn tại độc lập hoàn toàn không phụ thuộc vào thế giới hiện thực vật chất.",
      ],
      correctAnswer: 2,
      explanation:
        "Ý thức là sự phản ánh mang tính năng động, sáng tạo thế giới hiện thực khách quan vào trong bộ não người. Ý thức là hình ảnh chủ quan của thế giới khách quan.",
    },
  ];

  const handleStartQuiz = () => {
    setQuizState("active");
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
  };

  const handleSelectOption = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(optionIdx);
    setIsAnswered(true);
    if (optionIdx === questions[currentIdx].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizState("result");
    }
  };

  return (
    <section id="mini-quiz" className="relative w-full py-16 md:py-24 bg-cream border-t border-amber-100/30 overflow-hidden">
      {/* Visual background ambient circles */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-primary-red/2 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-500/2 blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
          <span className="rounded-full bg-amber-500/10 border border-amber-300/40 px-5 py-2 text-[#df9937] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
            🎯 Mini Game Trí Tuệ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Thử Thách Trắc Nghiệm Nhanh
          </h2>
          <div className="h-1 w-16 rounded-full bg-primary-red" />
        </div>

        {/* Quiz Board Container */}
        <div className="w-full rounded-3xl border border-amber-100/50 bg-white p-6 sm:p-10 shadow-md transition-all duration-300 hover:shadow-lg relative overflow-hidden">
          
          {/* Active Progress Line */}
          {quizState === "active" && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100">
              <div
                className="h-full bg-primary-red transition-all duration-500"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>
          )}

          {/* 1. START STATE */}
          {quizState === "start" && (
            <div className="flex flex-col items-center text-center space-y-6 py-6 animate-in fade-in duration-300">
              
              {/* Cute Mascot */}
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 transition-transform duration-500 hover:scale-105 select-none drop-shadow-md">
                <Image
                  src="/Pokecut_1779385694086 1.png"
                  alt="Beaver mascot quiz"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800">
                  Bạn tự tin nắm chắc bao nhiêu % lý thuyết?
                </h3>
                <p className="max-w-md mx-auto text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
                  Cùng Hải Ly kiểm tra nhanh kiến thức cơ bản về triết học Mác - Lênin qua 3 câu hỏi trắc nghiệm thực hành thú vị!
                </p>
              </div>

              <button
                onClick={handleStartQuiz}
                className="inline-flex h-13 items-center justify-center rounded-full bg-primary-red px-10 text-base font-extrabold text-white shadow-md transition-all duration-300 hover:bg-primary-red-hover hover:scale-105 hover:shadow-lg active:scale-100 uppercase tracking-wide cursor-pointer"
              >
                THỬ SỨC NGAY 🚀
              </button>
            </div>
          )}

          {/* 2. ACTIVE QUESTION STATE */}
          {quizState === "active" && (
            <div className="flex flex-col text-left space-y-6 sm:space-y-8 animate-in fade-in duration-300">
              
              {/* Question indicator & tracker */}
              <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-100">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-red">
                  Câu hỏi {currentIdx + 1} / {questions.length}
                </span>
                <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  Điểm số: {score}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold leading-relaxed text-gray-800">
                {questions[currentIdx].question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3.5">
                {questions[currentIdx].options.map((option, idx) => {
                  let optionStyles = "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:border-gray-300";
                  
                  if (isAnswered) {
                    const isCorrect = idx === questions[currentIdx].correctAnswer;
                    const isSelected = idx === selectedAnswer;

                    if (isCorrect) {
                      // Correct option is always highlighted green once answered
                      optionStyles = "border-emerald-300 bg-emerald-50/70 text-emerald-800 font-bold";
                    } else if (isSelected) {
                      // Selected incorrect option highlighted red
                      optionStyles = "border-rose-300 bg-rose-50/70 text-rose-800 font-bold";
                    } else {
                      // Unselected non-correct options styled muted
                      optionStyles = "border-gray-100 bg-white text-gray-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full flex items-start gap-4 rounded-2xl border-2 px-5 py-4 text-sm sm:text-base font-semibold transition-all duration-300 text-left cursor-pointer active:scale-99 ${optionStyles}`}
                    >
                      {/* Prefix letter */}
                      <span className={`flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        isAnswered && idx === questions[currentIdx].correctAnswer
                          ? "bg-emerald-500 text-white"
                          : isAnswered && idx === selectedAnswer
                          ? "bg-rose-500 text-white"
                          : "bg-amber-100 text-amber-700"
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation panel with beautiful slide down effect */}
              {isAnswered && (
                <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-5 space-y-2.5 animate-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                    <span>💡 GIẢI THÍCH CHI TIẾT:</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-amber-800 font-medium">
                    {questions[currentIdx].explanation}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {isAnswered && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#f3b150] px-8 text-sm font-extrabold text-white shadow-sm transition-all duration-300 hover:bg-[#df9937] hover:scale-102 cursor-pointer uppercase tracking-wider"
                  >
                    {currentIdx < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"} ➔
                  </button>
                </div>
              )}

            </div>
          )}

          {/* 3. RESULT STATE */}
          {quizState === "result" && (
            <div className="flex flex-col items-center text-center space-y-6 py-6 animate-in fade-in duration-300">
              
              {/* Dynamic Badge based on score */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-4xl shadow-inner animate-bounce">
                {score === questions.length ? "👑" : score >= 1 ? "🎉" : "💪"}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                  Kết Quả Đạt Được!
                </h3>
                <div className="text-4xl sm:text-5xl font-black text-primary-red my-4">
                  {score} / {questions.length}
                </div>
                <p className="max-w-md mx-auto text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
                  {score === questions.length
                    ? "Xuất sắc! Bạn đã trả lời đúng toàn bộ câu hỏi. Kiến thức triết học của bạn vô cùng đáng nể!"
                    : score >= 1
                    ? "Khá tốt! Bạn đã nắm vững phần nào kiến thức cơ bản, hãy ôn tập thêm để đạt điểm tuyệt đối nhé."
                    : "Đừng nản lòng! Triết học là một môn học trừu tượng, hãy cùng Hải Ly bắt đầu học đề cương ngay."}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4 w-full max-w-md">
                <button
                  onClick={handleStartQuiz}
                  className="flex h-12 w-full sm:w-1/2 items-center justify-center rounded-full border-2 border-amber-200 text-sm font-bold text-amber-700 bg-white hover:bg-amber-50 hover:border-amber-300 transition-colors duration-200 cursor-pointer"
                >
                  🔄 LÀM LẠI
                </button>
                <a
                  href="/lessons"
                  className="flex h-12 w-full sm:w-1/2 items-center justify-center rounded-full bg-primary-red text-sm font-bold text-white shadow-sm hover:bg-primary-red-hover hover:scale-102 transition-all duration-200 cursor-pointer"
                >
                  📖 HỌC TIẾP ĐỀ CƯƠNG
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
