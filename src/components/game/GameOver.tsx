"use client";

import React, { useState } from "react";
import { floorEmojis } from "@/utils/game-utils";
import { submitGlobalScore } from "@/utils/leaderboard-api";

interface GameStats {
  score: number;
  correctAnswers: number;
  totalAnswered: number;
  maxCombo: number;
  floorsCleared: number;
}

interface GameOverProps {
  stats: GameStats;
  onRestart: () => void;
  onHome: () => void;
}

export default function GameOver({ stats, onRestart, onHome }: GameOverProps) {
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.correctAnswers / stats.totalAnswered) * 100)
    : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || isSubmitting || isSubmitted) return;
    
    setIsSubmitting(true);
    setErrorMsg(null);
    
    const res = await submitGlobalScore(
      username.trim(),
      stats.score,
      stats.floorsCleared
    );
    
    setIsSubmitting(false);
    if (res.success) {
      setIsSubmitted(true);
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="game-fade-in flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 max-w-md mx-auto">
      {/* Game Over icon */}
      <div className="game-bounce-in mb-5">
        <div className="w-24 h-24 sm:w-28 h-28 rounded-full bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 flex items-center justify-center shadow-lg">
          <span className="text-4xl sm:text-5xl">😢</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-1">
        Game Over
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        Đừng nản, hãy thử lại nhé!
      </p>

      {/* Score card */}
      <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mb-6">
        {/* Score header */}
        <div className="bg-gradient-to-r from-primary-red to-primary-red-hover p-4 text-center">
          <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-0.5">
            Tổng điểm
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
            {stats.score.toLocaleString()}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100">
          <div className="p-3 text-center">
            <p className="text-xl font-extrabold text-gray-800">
              {stats.floorsCleared}
              <span className="text-xs text-gray-400 font-medium">/5</span>
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">Tầng đạt</p>
          </div>
          <div className="p-3 text-center">
            <p className="text-xl font-extrabold text-gray-800">
              {accuracy}
              <span className="text-xs text-gray-400 font-medium">%</span>
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">Chính xác</p>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-100">
          <div className="p-3 text-center">
            <p className="text-xl font-extrabold text-emerald-600">
              {stats.correctAnswers}
              <span className="text-xs text-gray-400 font-medium">
                /{stats.totalAnswered}
              </span>
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">Câu đúng</p>
          </div>
          <div className="p-3 text-center">
            <p className="text-xl font-extrabold text-amber-500">
              x{stats.maxCombo}
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">Combo max</p>
          </div>
        </div>

        {/* Floors progress */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/20">
          <div className="flex justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all ${
                  i < stats.floorsCleared
                    ? "bg-emerald-50 border border-emerald-200"
                    : i === stats.floorsCleared
                    ? "bg-red-50 border-2 border-red-300"
                    : "bg-gray-50 border border-gray-200 opacity-40"
                }`}
              >
                {floorEmojis[i]}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaderboard Submission Block */}
      <div className="w-full bg-white border border-amber-100/50 rounded-2xl p-4.5 shadow-sm mb-6 text-left">
        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <span>🏆</span> Ghi danh bảng vàng toàn cầu
        </h4>
        
        {isSubmitted ? (
          <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold animate-pulse">
            <span>✅</span>
            <span>Gửi điểm số thành công lên bảng vàng!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nhập biệt danh của bạn..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength={15}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary-red focus:border-primary-red disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!username.trim() || isSubmitting}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-100 disabled:text-gray-400 font-bold text-sm text-white rounded-xl transition-all select-none cursor-pointer"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi điểm 🚀"}
              </button>
            </div>
            {errorMsg && (
              <p className="text-[10px] text-red-500 font-bold">{errorMsg}</p>
            )}
            <p className="text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
              * Biệt danh từ 2 - 15 ký tự, không cần đăng nhập.
            </p>
          </form>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <button
          onClick={onRestart}
          className="flex-1 px-6 py-3.5 bg-primary-red text-white font-bold rounded-xl shadow-sm hover:bg-primary-red-hover hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 game-button-press cursor-pointer"
        >
          🔄 Chơi Lại
        </button>
        <button
          onClick={onHome}
          className="flex-1 px-6 py-3.5 bg-white text-gray-600 font-bold rounded-xl border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 game-button-press cursor-pointer"
        >
          🏠 Trang Chủ
        </button>
      </div>
    </div>
  );
}
