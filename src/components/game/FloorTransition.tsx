"use client";

import React, { useEffect, useState } from "react";
import { floorEmojis } from "@/utils/game-utils";

interface FloorTransitionProps {
  floorNumber: number;
  floorTitle: string;
  onComplete: () => void;
}

export default function FloorTransition({
  floorNumber,
  floorTitle,
  onComplete,
}: FloorTransitionProps) {
  const [phase, setPhase] = useState<"enter" | "show" | "exit">("enter");

  useEffect(() => {
    // Phase 1: Enter animation
    const enterTimer = setTimeout(() => setPhase("show"), 300);
    // Phase 2: Show for a moment then exit
    const showTimer = setTimeout(() => setPhase("exit"), 1800);
    // Phase 3: Complete
    const exitTimer = setTimeout(() => onComplete(), 2400);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(showTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-500 ${
        phase === "enter"
          ? "opacity-0 scale-95"
          : phase === "show"
          ? "opacity-100 scale-100"
          : "opacity-0 scale-105"
      }`}
    >
      {/* Floor number */}
      <div className="game-bounce-in mb-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-primary-red/10 to-primary-red/5 border-2 border-primary-red/20 flex items-center justify-center shadow-lg">
          <span className="text-5xl sm:text-6xl">
            {floorEmojis[floorNumber - 1] || "🏛️"}
          </span>
        </div>
      </div>

      {/* Text */}
      <div
        className={`text-center transition-all duration-500 delay-200 ${
          phase === "show"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-primary-red mb-2">
          Tầng {floorNumber} / 5
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">
          {floorTitle}
        </h2>
        <p className="text-sm text-gray-400 mt-3">
          5 câu hỏi đang chờ bạn...
        </p>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-48 sm:w-56">
        <div className="flex justify-between mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-8 sm:w-9 h-1.5 rounded-full transition-all duration-300 ${
                i < floorNumber
                  ? "bg-primary-red"
                  : "bg-gray-200"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
