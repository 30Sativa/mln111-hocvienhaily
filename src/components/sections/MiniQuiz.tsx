"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function MiniQuiz() {
  const [highScore, setHighScore] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const score = localStorage.getItem("mln-game-highscore");
        if (score) {
          setHighScore(parseInt(score, 10));
        }
      } catch (e) {
        console.error("Error reading high score from localStorage:", e);
      }
    }
  }, []);

  const towerFloors = [
    {
      num: 5,
      name: "Vật Chất & Phương Thức Tồn Tại",
      icon: "⚛️",
      color: "border-amber-400 bg-amber-50/90 text-amber-900 shadow-amber-100",
      pill: "bg-amber-500 text-white",
      desc: "Chương 5: Đi sâu vào phạm trù vật chất, vận động, không gian và thời gian.",
    },
    {
      num: 4,
      name: "Đối Tượng & Chức Năng Triết Học Mác - Lênin",
      icon: "🔬",
      color: "border-emerald-400 bg-emerald-50/90 text-emerald-900 shadow-emerald-100",
      pill: "bg-emerald-600 text-white",
      desc: "Chương 4: Tìm hiểu đối tượng nghiên cứu và vai trò thế giới quan/phương pháp luận.",
    },
    {
      num: 3,
      name: "Sự Ra Đời & Phát Triển Triết Học Mác - Lênin",
      icon: "🏛️",
      color: "border-blue-400 bg-blue-50/90 text-blue-900 shadow-blue-100",
      pill: "bg-blue-600 text-white",
      desc: "Chương 3: Tiền đề lý luận, điều kiện lịch sử và các giai đoạn phát triển.",
    },
    {
      num: 2,
      name: "Vấn Đề Cơ Bản Của Triết Học",
      icon: "⚖️",
      color: "border-purple-400 bg-purple-50/90 text-purple-900 shadow-purple-100",
      pill: "bg-purple-600 text-white",
      desc: "Chương 2: Mối quan hệ giữa vật chất và ý thức; khả tri và bất khả tri luận.",
    },
    {
      num: 1,
      name: "Khái Lược Về Triết Học",
      icon: "📖",
      color: "border-rose-400 bg-rose-50/90 text-rose-900 shadow-rose-100",
      pill: "bg-rose-600 text-white",
      desc: "Chương 1: Nguồn gốc triết học và hạt nhân lý luận của thế giới quan.",
    },
  ];

  return (
    <section
      id="mini-quiz"
      className="relative w-full py-20 md:py-28 bg-cream border-t border-amber-100/30 overflow-hidden"
    >
      {/* Styles for custom premium micro-animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(8px) rotate(-2deg);
          }
        }
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.03);
          }
        }
        .anim-float {
          animation: float 6s ease-in-out infinite;
        }
        .anim-float-delay {
          animation: float-reverse 7s ease-in-out infinite;
        }
        .anim-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background ambient glow effects */}
      <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-primary-red/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-amber-500/3 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
          <span className="rounded-full bg-primary-red/10 border border-primary-red/20 px-5 py-2 text-primary-red font-extrabold text-xs sm:text-sm uppercase tracking-widest shadow-sm">
            🎮 CHẾ ĐỘ CHƠI MỚI CỰC HẤP DẪN
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 font-sans">
            Hành Trình Triết Học
          </h2>
          <p className="text-gray-500 font-medium max-w-xl text-sm sm:text-base">
            Phương pháp học trắc nghiệm hóa thân qua mô hình leo tháp tri thức đầy thử thách.
          </p>
          <div className="h-1.5 w-24 rounded-full bg-primary-red" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Intro text and features */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 leading-tight">
                Chinh phục 5 tầng tháp lý luận Mác - Lênin
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                Biến những giờ ôn tập lý thuyết khô khan thành cuộc hành trình leo tháp kịch tính. Bạn sẽ bắt đầu từ tầng 1 và phải trả lời chính xác các câu hỏi để tiến lên tầng cao hơn. Mỗi tầng mang một chủ đề kiến thức riêng biệt giúp bạn ôn tập có hệ thống.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-amber-100/40 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mt-0.5">⏱️</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">20s Suy Nghĩ</h4>
                  <p className="text-xs text-gray-500 font-medium">Áp lực thời gian đòi hỏi phản xạ nhanh nhạy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-amber-100/40 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mt-0.5">❤️</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">3 Mạng Sống</h4>
                  <p className="text-xs text-gray-500 font-medium">Sai 3 câu là dừng cuộc chơi. Hãy thận trọng!</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-amber-100/40 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mt-0.5">🔥</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">Combo Nhân Điểm</h4>
                  <p className="text-xs text-gray-500 font-medium">Trả lời đúng liên tiếp để nhân x2, x3, x4 điểm.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-amber-100/40 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mt-0.5">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">Quyền Trợ Giúp 50/50</h4>
                  <p className="text-xs text-gray-500 font-medium">Loại bỏ 2 phương án sai (sử dụng 1 lần mỗi tầng).</p>
                </div>
              </div>
            </div>

            {/* Highscore Status & CTA */}
            <div className="pt-4 space-y-6">
              {highScore !== null && highScore > 0 ? (
                <div className="inline-flex items-center gap-3 bg-amber-50/80 border border-amber-200/60 px-5 py-3 rounded-2xl text-amber-800 font-bold text-sm sm:text-base shadow-sm">
                  <span className="text-xl">🏆</span>
                  <span>
                    Kỷ lục leo tháp hiện tại của bạn:{" "}
                    <strong className="text-primary-red text-xl font-black">
                      {highScore.toLocaleString()}
                    </strong>{" "}
                    điểm
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200/50 px-5 py-3 rounded-2xl text-gray-500 font-bold text-xs sm:text-sm shadow-inner">
                  <span className="text-lg">🥇</span>
                  <span>Chưa có kỷ lục nào được thiết lập. Hãy chơi để ghi danh!</span>
                </div>
              )}

              <div>
                <a
                  href="/game"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary-red hover:bg-primary-red-hover px-10 text-base font-extrabold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-100 uppercase tracking-wider cursor-pointer group hover:shadow-primary-red/20"
                >
                  <span>Chơi Ngay Mini Game 🚀</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tower Climb Visualization */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-8 lg:py-4">
            
            {/* Mascot dialog box & Mascot image */}
            <div className="absolute -left-4 sm:left-4 top-0 z-20 hidden sm:flex flex-col items-center gap-1 anim-float">
              <div className="relative bg-white border border-amber-200 rounded-2xl px-4 py-2.5 shadow-md text-xs font-bold text-amber-800 after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:translate-x-[-50%] after:border-[8px] after:border-transparent after:border-t-white before:content-[''] before:absolute before:bottom-[-9px] before:left-1/2 before:translate-x-[-50%] before:border-[8px] before:border-transparent before:border-t-amber-200">
                Chinh phục đỉnh tháp nào!
              </div>
              <div className="relative h-20 w-20 drop-shadow-md">
                <Image
                  src="/Pokecut_1779385694086 1.png"
                  alt="Mascot Hải Ly"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Tower display */}
            <div className="relative w-full max-w-sm flex flex-col gap-3.5 items-stretch bg-white/35 backdrop-blur-sm p-6 rounded-3xl border border-amber-100/30 shadow-inner">
              
              {/* Crown symbol on top */}
              <div className="flex justify-center -mb-2">
                <div className="h-10 w-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-xl shadow-sm animate-bounce">
                  👑
                </div>
              </div>

              {towerFloors.map((floor, idx) => {
                return (
                  <div
                    key={floor.num}
                    className={`relative border-2 rounded-2xl p-4.5 transition-all duration-300 hover:scale-102 hover:shadow-md cursor-pointer group flex items-center gap-4 ${floor.color}`}
                    title={floor.desc}
                  >
                    {/* Floor number Badge */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold uppercase shadow-sm ${floor.pill}`}
                    >
                      T{floor.num}
                    </span>

                    {/* Floor Content */}
                    <div className="flex-1 min-w-0 text-left">
                      <h4 className="font-extrabold text-sm sm:text-base leading-tight truncate">
                        {floor.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs opacity-75 font-medium truncate mt-0.5">
                        {floor.desc}
                      </p>
                    </div>

                    {/* Floor Icon */}
                    <span className="text-2xl transform transition-transform duration-300 group-hover:scale-125">
                      {floor.icon}
                    </span>
                  </div>
                );
              })}
              
              {/* Base pedestal indicator */}
              <div className="h-3 rounded-full bg-gray-200/80 border border-gray-300/40 w-11/12 mx-auto shadow-inner" />
            </div>
            
            {/* Background elements */}
            <div className="absolute right-4 bottom-0 z-0 h-28 w-28 opacity-10 anim-float-delay">
              <Image
                src="/Pokecut_1779381077162 1.png"
                alt="Decoration Mascot"
                fill
                className="object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
