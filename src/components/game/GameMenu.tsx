"use client";

import React, { useEffect, useState } from "react";
import { getHighScore, floorEmojis } from "@/utils/game-utils";
import { getGlobalLeaderboard, type LeaderboardItem } from "@/utils/leaderboard-api";

interface GameMenuProps {
  onStart: () => void;
}

export default function GameMenu({ onStart }: GameMenuProps) {
  const [highScore, setHighScoreState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setHighScoreState(getHighScore());
    
    // Fetch global leaderboard
    async function loadLeaderboard() {
      setIsLoading(true);
      const data = await getGlobalLeaderboard();
      setLeaderboard(data);
      setIsLoading(false);
    }
    loadLeaderboard();
  }, []);

  const floors = [
    "Khái Lược Về Triết Học",
    "Vấn Đề Cơ Bản Của Triết Học",
    "Sự Ra Đời & Phát Triển Triết Học Mác – Lênin",
    "Đối Tượng & Chức Năng Triết Học Mác – Lênin",
    "Vật Chất & Phương Thức Tồn Tại",
  ];

  return (
    <div className="game-fade-in-scale flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 max-w-5xl mx-auto w-full">
      {/* Title Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="text-5xl sm:text-6xl mb-4 game-trophy-float inline-block">
          🏛️
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight mb-3 font-sans">
          Hành Trình Triết Học
        </h1>
        <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed font-medium">
          Chinh phục 5 tầng kiến thức lý thuyết Triết học Mác - Lênin đầy thử thách và ghi danh trên bảng vàng toàn cầu!
        </p>
      </div>

      {/* Main Grid Layout: left is game controls/rules, right is global leaderboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
        
        {/* Left Column: Local High Score, Rules, Start Button, Floor Preview */}
        <div className="flex flex-col items-stretch space-y-6 bg-white border border-amber-100/40 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-left border-b border-gray-100 pb-4">
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
              <span>🎮</span> Bắt đầu thử thách
            </h3>
          </div>

          {/* High Score / Stats summary */}
          <div className="flex justify-between items-center gap-4 py-2">
            <div className="text-left">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Kỷ lục cá nhân</p>
              <p className="text-xl sm:text-2xl font-black text-primary-red mt-0.5 tabular-nums">
                {highScore > 0 ? highScore.toLocaleString() : "0"} <span className="text-xs text-gray-400 font-bold">điểm</span>
              </p>
            </div>
            
            {highScore > 0 && (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-xl border border-amber-200 shadow-sm animate-bounce-subtle">
                🏆
              </span>
            )}
          </div>

          {/* Floor preview dropdown/list */}
          <div className="bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden text-left">
            <div className="px-4 py-2 border-b border-gray-100/50 bg-gray-50/80">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Lộ trình 5 tầng tháp
              </span>
            </div>
            <div className="divide-y divide-gray-100 max-h-[190px] overflow-y-auto">
              {floors.map((name, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 transition-colors hover:bg-gray-100/30"
                >
                  <span className="text-base shrink-0">{floorEmojis[i]}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      Tầng {i + 1}
                    </p>
                    <p className="text-xs font-semibold text-gray-700 truncate">
                      {name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { icon: "❤️", title: "Mạng sống", text: "3 lượt chơi sai" },
              { icon: "⏱️", title: "Thời gian", text: "20s mỗi câu hỏi" },
              { icon: "🔥", title: "Combo nhân", text: "Đúng liền x4 điểm" },
              { icon: "🎯", title: "Trợ giúp", text: "50/50 loại đáp án" },
            ].map((rule, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2.5 bg-gray-50 border border-gray-100 rounded-xl text-left"
              >
                <span className="text-lg shrink-0">{rule.icon}</span>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-700 text-xs truncate">{rule.title}</h4>
                  <p className="text-[10px] text-gray-400 font-medium truncate">{rule.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Play CTA Button */}
          <div className="pt-2">
            <button
              onClick={onStart}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`
                w-full game-button-press relative py-4 sm:py-4.5
                bg-primary-red text-white text-base sm:text-lg font-extrabold
                rounded-2xl shadow-md cursor-pointer
                transition-all duration-300 ease-out
                hover:bg-primary-red-hover hover:shadow-lg hover:-translate-y-0.5
                active:translate-y-0 active:shadow-md
                ${isHovered ? "game-glow-pulse" : ""}
              `}
            >
              <span className="relative z-10">Bắt Đầu Hành Trình 🚀</span>
            </button>
          </div>
        </div>

        {/* Right Column: Global Leaderboard */}
        <div className="flex flex-col items-stretch bg-white border border-amber-100/40 rounded-3xl p-6 sm:p-8 shadow-sm h-full justify-between min-h-[460px]">
          <div className="text-left border-b border-gray-100 pb-4 mb-4">
            <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
              <span>🏆</span> Bảng vàng toàn cầu
            </h3>
          </div>

          {/* Leaderboard content */}
          <div className="flex-1 overflow-y-auto pr-1 select-none space-y-2 mb-4 max-h-[300px]">
            {isLoading ? (
              // Loading state
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <div className="h-8 w-8 rounded-full border-4 border-gray-100 border-t-amber-500 animate-spin" />
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Đang tải bảng vàng...</p>
              </div>
            ) : leaderboard.length === 0 ? (
              // Empty state
              <div className="text-center py-20 space-y-2">
                <span className="text-3xl">🥇</span>
                <p className="text-sm font-bold text-gray-400">Chưa có ai ghi điểm. Hãy là người đầu tiên!</p>
              </div>
            ) : (
              // Leaderboard list
              leaderboard.map((item, index) => {
                let rankBadge: React.ReactNode = index + 1;
                let rankBg = "bg-gray-100 text-gray-600";
                
                if (index === 0) {
                  rankBadge = "🥇";
                  rankBg = "bg-amber-50 border border-amber-200 text-amber-600";
                } else if (index === 1) {
                  rankBadge = "🥈";
                  rankBg = "bg-slate-50 border border-slate-200 text-slate-500";
                } else if (index === 2) {
                  rankBadge = "🥉";
                  rankBg = "bg-orange-50 border border-orange-200 text-orange-600";
                }

                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border border-transparent transition-all hover:bg-gray-50 ${
                      index < 3 ? "bg-amber-50/5 border-amber-100/10 font-bold" : ""
                    }`}
                  >
                    {/* Rank Badge */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black uppercase ${rankBg}`}
                    >
                      {rankBadge}
                    </span>

                    {/* Nickname */}
                    <span className="flex-1 text-sm font-bold text-gray-800 truncate text-left">
                      {item.username}
                    </span>

                    {/* Floor badge */}
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
                      T{item.floor}
                    </span>

                    {/* Score */}
                    <span className="shrink-0 text-sm font-black text-gray-800 tabular-nums">
                      {item.score.toLocaleString()}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          {/* Back link inside left column block or below it */}
          <div className="text-center pt-2 border-t border-gray-100 mt-auto">
            <a
              href="/"
              className="text-xs text-gray-400 hover:text-primary-red transition-colors font-bold uppercase tracking-wider"
            >
              ← Về Trang Chủ
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
