"use client";

import React, { useEffect, useState, useMemo } from "react";
import { submitGlobalScore } from "@/utils/leaderboard-api";

interface GameStats {
  score: number;
  correctAnswers: number;
  totalAnswered: number;
  maxCombo: number;
  floorsCleared: number;
}

interface GameVictoryProps {
  stats: GameStats;
  onRestart: () => void;
  onHome: () => void;
}

// Generate confetti pieces
function generateConfetti(count: number) {
  const colors = [
    "#dc2626", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6",
    "#ec4899", "#f97316", "#14b8a6", "#6366f1", "#e11d48",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: `${6 + Math.random() * 8}px`,
    duration: `${2 + Math.random() * 3}s`,
    delay: `${Math.random() * 2}s`,
    rotation: `${Math.random() * 360}deg`,
  }));
}

export default function GameVictory({
  stats,
  onRestart,
  onHome,
}: GameVictoryProps) {
  const [showContent, setShowContent] = useState(false);
  const confetti = useMemo(() => generateConfetti(50), []);
  
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const accuracy = stats.totalAnswered > 0
    ? Math.round((stats.correctAnswers / stats.totalAnswered) * 100)
    : 0;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || isSubmitting || isSubmitted) return;
    
    setIsSubmitting(true);
    setErrorMsg(null);
    
    const res = await submitGlobalScore(
      username.trim(),
      stats.score,
      5 // Victory means all 5 floors cleared
    );
    
    setIsSubmitting(false);
    if (res.success) {
      setIsSubmitted(true);
    } else {
      setErrorMsg(res.message);
    }
  };

  // Star rating based on performance
  const starCount = accuracy >= 90 ? 3 : accuracy >= 70 ? 2 : 1;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="game-confetti"
          style={{
            left: piece.left,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            ["--fall-duration" as string]: piece.duration,
            ["--fall-delay" as string]: piece.delay,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 via-white to-emerald-50/30 pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center max-w-sm w-full transition-all duration-700 ${
          showContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Trophy */}
        <div className="game-trophy-float mb-4">
          <div className="w-24 h-24 sm:w-28 h-28 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-300 flex items-center justify-center shadow-xl game-shine">
            <span className="text-4xl sm:text-5xl">🏆</span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-3 animate-pulse">
          {[1, 2, 3].map((star) => (
            <span
              key={star}
              className={`text-2xl sm:text-3xl transition-all duration-500 ${
                star <= starCount ? "" : "opacity-20 grayscale"
              }`}
              style={{ transitionDelay: `${star * 200}ms` }}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-1 text-center">
          Chiến Thắng!
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Bạn đã chinh phục tất cả 5 tầng! 🎉
        </p>

        {/* Score card */}
        <div className="w-full bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden mb-6">
          {/* Score header */}
          <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 p-5 text-center relative overflow-hidden">
            <div className="game-shine absolute inset-0" />
            <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest mb-0.5 relative z-10">
              Tổng điểm
            </p>
            <p className="text-4xl sm:text-5xl font-extrabold text-white tabular-nums relative z-10">
              {stats.score.toLocaleString()}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 p-1 bg-gray-50/10">
            <div className="p-2.5 text-center">
              <p className="text-lg font-extrabold text-emerald-600">
                {accuracy}%
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5 font-bold">Chính xác</p>
            </div>
            <div className="p-2.5 text-center">
              <p className="text-lg font-extrabold text-gray-800">
                {stats.correctAnswers}/{stats.totalAnswered}
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5 font-bold">Câu đúng</p>
            </div>
            <div className="p-2.5 text-center">
              <p className="text-lg font-extrabold text-amber-500">
                x{stats.maxCombo}
              </p>
              <p className="text-[9px] text-gray-400 mt-0.5 font-bold">Combo max</p>
            </div>
          </div>
        </div>

        {/* Leaderboard Submission Block */}
        <div className="w-full bg-white border border-amber-200/50 rounded-2xl p-4.5 shadow-md mb-6 text-left">
          <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <span>👑</span> Ghi danh bảng vàng toàn cầu
          </h4>
          
          {isSubmitted ? (
            <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold animate-pulse">
              <span>✅</span>
              <span>Đã lưu thành công thành tựu phá tháp của bạn!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập biệt danh..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={15}
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!username.trim() || isSubmitting}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-100 disabled:text-gray-400 font-bold text-sm text-white rounded-xl transition-all select-none cursor-pointer"
                >
                  {isSubmitting ? "Đang gửi..." : "Ghi danh 🚀"}
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
            className="flex-1 px-6 py-3.5 bg-primary-red text-white font-bold rounded-xl shadow-md hover:bg-primary-red-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 game-button-press cursor-pointer"
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
    </div>
  );
}
