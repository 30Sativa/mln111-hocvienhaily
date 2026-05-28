"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import type { QuizQuestion } from "@/types/lesson";
import { getFiftyFiftyIndices, shuffleArray } from "@/utils/game-utils";

interface GameQuestionProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  timeLimit: number;
  lives: number;
  score: number;
  combo: number;
  floorNumber: number;
  floorTitle: string;
  floorEmoji: string;
  fiftyFiftyUsed: boolean;
  onAnswer: (selectedIndex: number, timeLeft: number) => void;
  onFiftyFifty: () => void;
  onTimeUp: () => void;
}

export default function GameQuestion({
  question,
  questionNumber,
  totalQuestions,
  timeLimit,
  lives,
  score,
  combo,
  floorNumber,
  floorTitle,
  floorEmoji,
  fiftyFiftyUsed,
  onAnswer,
  onFiftyFifty,
  onTimeUp,
}: GameQuestionProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  const [scorePopup, setScorePopup] = useState<number | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<{ text: string; originalIndex: number }[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const questionKeyRef = useRef(question.id);

  // Shuffle options when question changes
  useEffect(() => {
    const options = question.options.map((text, index) => ({
      text,
      originalIndex: index,
    }));
    const shuffled = shuffleArray(options);
    setShuffledOptions(shuffled);
  }, [question]);

  // Reset state when question changes
  useEffect(() => {
    if (questionKeyRef.current !== question.id) {
      questionKeyRef.current = question.id;
    }
    setTimeLeft(timeLimit);
    setSelectedAnswer(null);
    setIsRevealed(false);
    setHiddenOptions([]);
    setScorePopup(null);
  }, [question.id, timeLimit]);

  // Timer countdown
  useEffect(() => {
    if (isRevealed) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id, isRevealed, onTimeUp]);

  const handleSelect = useCallback(
    (displayIndex: number) => {
      if (isRevealed || selectedAnswer !== null) return;
      
      const originalIndex = shuffledOptions[displayIndex].originalIndex;
      setSelectedAnswer(displayIndex);
      setIsRevealed(true);

      if (timerRef.current) clearInterval(timerRef.current);

      const isCorrect = originalIndex === question.correctAnswer;
      if (isCorrect) {
        const pts = (100 + Math.floor(timeLeft * 5)) * Math.min(combo + 1, 4);
        setScorePopup(pts);
      }

      // Short delay to show result then proceed
      setTimeout(() => {
        onAnswer(originalIndex, timeLeft);
      }, 1200);
    },
    [isRevealed, selectedAnswer, question.correctAnswer, timeLeft, combo, onAnswer, shuffledOptions]
  );

  const handleFiftyFifty = useCallback(() => {
    if (fiftyFiftyUsed || isRevealed) return;
    
    // Get the correct answer's display index
    const correctDisplayIndex = shuffledOptions.findIndex(
      (opt) => opt.originalIndex === question.correctAnswer
    );
    
    // Get wrong display indices
    const wrongDisplayIndices: number[] = [];
    shuffledOptions.forEach((opt, i) => {
      if (i !== correctDisplayIndex) {
        wrongDisplayIndices.push(i);
      }
    });
    
    // Shuffle wrong indices and take 2
    const shuffledWrong = shuffleArray(wrongDisplayIndices);
    setHiddenOptions(shuffledWrong.slice(0, 2));
    onFiftyFifty();
  }, [fiftyFiftyUsed, isRevealed, question.correctAnswer, onFiftyFifty, shuffledOptions]);

  // Timer visual
  const timerPercent = (timeLeft / timeLimit) * 100;
  const timerClass =
    timeLeft > 10 ? "timer-safe" : timeLeft > 5 ? "timer-warning" : "timer-danger";

  const getOptionStyle = (displayIndex: number) => {
    if (!isRevealed) {
      return "bg-white border-gray-200 hover:border-primary-red/40 hover:bg-red-50/30 cursor-pointer";
    }
    
    const originalIndex = shuffledOptions[displayIndex].originalIndex;
    if (originalIndex === question.correctAnswer) {
      return "bg-emerald-50 border-emerald-400 text-emerald-800 game-correct";
    }
    if (displayIndex === selectedAnswer && originalIndex !== question.correctAnswer) {
      return "bg-red-50 border-red-400 text-red-800 game-wrong";
    }
    return "bg-gray-50 border-gray-200 opacity-50";
  };

  const getOptionIcon = (displayIndex: number) => {
    if (!isRevealed) return null;
    const originalIndex = shuffledOptions[displayIndex].originalIndex;
    if (originalIndex === question.correctAnswer) {
      return <span className="text-emerald-500 text-lg">✓</span>;
    }
    if (displayIndex === selectedAnswer && originalIndex !== question.correctAnswer) {
      return <span className="text-red-500 text-lg">✗</span>;
    }
    return null;
  };

  return (
    <div className="game-slide-up flex flex-col min-h-screen p-4 sm:p-6">
      {/* Top bar: Floor info + Stats */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <span className="text-xl">{floorEmoji}</span>
          <div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">
              Tầng {floorNumber}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 max-w-[150px] sm:max-w-none truncate">
              {floorTitle}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Lives */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={`text-base sm:text-lg transition-all duration-300 ${
                  i < lives ? "" : "opacity-20 grayscale"
                } ${i === lives - 1 && lives === 1 ? "game-heart-beat" : ""}`}
              >
                ❤️
              </span>
            ))}
          </div>
          {/* Score */}
          <div className="relative">
            <div className="bg-white border border-gray-100 rounded-lg px-3 py-1.5 shadow-sm">
              <p className="text-[10px] text-gray-400 font-medium">ĐIỂM</p>
              <p className="text-sm sm:text-base font-extrabold text-gray-800 tabular-nums">
                {score.toLocaleString()}
              </p>
            </div>
            {/* Score popup */}
            {scorePopup !== null && (
              <div className="game-score-float absolute -top-2 left-1/2 -translate-x-1/2 text-emerald-500 font-extrabold text-sm whitespace-nowrap">
                +{scorePopup}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Timer bar */}
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6 sm:mb-8">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${timerClass}`}
          style={{ width: `${timerPercent}%` }}
        />
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto w-full">
        {/* Question counter + combo */}
        <div className="flex items-center justify-between w-full mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider">
            Câu {questionNumber}/{totalQuestions}
          </span>
          <div className="flex items-center gap-2">
            {combo > 0 && (
              <div className="game-combo-pop flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-extrabold text-amber-600">
                  x{Math.min(combo + 1, 4)}
                </span>
              </div>
            )}
            <span className="text-lg sm:text-xl font-extrabold text-gray-300 tabular-nums">
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="w-full bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 mb-6 sm:mb-8 shadow-sm">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 leading-relaxed text-center">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="game-stagger w-full space-y-3">
          {shuffledOptions.map((option, displayIndex) => {
            if (hiddenOptions.includes(displayIndex)) {
              return (
                <div
                  key={displayIndex}
                  className="h-14 sm:h-16 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50/50 flex items-center justify-center"
                >
                  <span className="text-xs text-gray-300 font-medium">
                    Đã loại
                  </span>
                </div>
              );
            }

            const labels = ["A", "B", "C", "D"];
            return (
              <button
                key={displayIndex}
                onClick={() => handleSelect(displayIndex)}
                disabled={isRevealed}
                className={`
                  w-full flex items-center gap-3 px-4 sm:px-5 py-3.5 sm:py-4
                  rounded-xl border-2 text-left
                  transition-all duration-200
                  ${getOptionStyle(displayIndex)}
                  disabled:cursor-default
                `}
              >
                <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gray-100 flex items-center justify-center text-xs sm:text-sm font-bold text-gray-500">
                  {labels[displayIndex]}
                </span>
                <span className="flex-1 text-sm sm:text-base font-medium">
                  {option.text}
                </span>
                {getOptionIcon(displayIndex)}
              </button>
            );
          })}
        </div>

        {/* 50/50 Lifeline */}
        {!fiftyFiftyUsed && !isRevealed && (
          <button
            onClick={handleFiftyFifty}
            className="mt-6 sm:mt-8 flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-primary-red/20 text-primary-red rounded-full text-sm font-bold hover:bg-red-50 hover:border-primary-red/40 transition-all duration-200 game-button-press"
          >
            <span>🎯</span>
            <span>50/50</span>
          </button>
        )}
      </div>

      {/* Progress dots at bottom */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8 pb-2">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i < questionNumber - 1
                ? "bg-emerald-400 scale-100"
                : i === questionNumber - 1
                ? "bg-primary-red scale-125"
                : "bg-gray-200 scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
