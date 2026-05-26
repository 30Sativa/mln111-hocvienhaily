import React from "react";
import Image from "next/image";

export default function StudyModes() {
  return (
    <section id="chon-che-do" className="relative w-full py-16 bg-[#faf6eb] border-y border-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="rounded-full bg-primary-red px-5 py-2 text-white font-extrabold text-sm uppercase tracking-wider shadow-sm">
            HỌC THỬ MIỄN PHÍ
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide font-sans">
            Chọn cách học phù hợp với bạn
          </h3>
        </div>

        {/* 3-Column Responsive Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 items-center">
          
          {/* Card 1: Bắt đầu học */}
          <div className="flex flex-col justify-between h-[390px] rounded-3xl border-2 border-[#f7e4c2] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-103 text-left">
            <div className="space-y-6">
              {/* Card Header with Icon */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold tracking-tight text-primary-red">
                  BẮT ĐẦU HỌC
                </h4>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary-red text-sm font-bold">✓</span>
                  <span className="text-sm font-medium">Hệ thống bài học dễ hiểu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary-red text-sm font-bold">✓</span>
                  <span className="text-sm font-medium">Khóa học nền tảng cơ bản</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-primary-red text-sm font-bold">✓</span>
                  <span className="text-sm font-medium">Học tập tiện lợi mọi lúc mọi nơi</span>
                </li>
              </ul>
            </div>

            {/* Red Button Link */}
            <a
              href="/lessons"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary-red text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-primary-red-hover hover:scale-102"
            >
              BẮT ĐẦU HỌC <span className="text-base font-normal">→</span>
            </a>
          </div>

          {/* Middle: Cute Beaver Sign Holder */}
          <div className="relative flex justify-center items-center group py-4">
            <div className="absolute h-[250px] w-[250px] rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
            <div className="relative w-full max-w-[280px] aspect-square sm:max-w-[320px] transition-transform duration-500 hover:scale-105 select-none">
              <Image
                src="/Pokecut_1779385694086 1.png"
                alt="Cute Beaver Student Selecting Learn Mode"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>

          {/* Card 3: Chơi game */}
          <div className="flex flex-col justify-between h-[390px] rounded-3xl border-2 border-[#fae2b1] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-103 text-left">
            <div className="space-y-6">
              {/* Card Header with Icon */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold tracking-tight text-amber-600">
                  CHƠI GAME
                </h4>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-500 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium">Trắc nghiệm thực hành thú vị</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-500 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium">Kho tàng câu hỏi kiến thức</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-500 text-sm font-bold">✓</span>
                  <span className="text-sm font-medium">Thi đấu vui nhộn nhận điểm số</span>
                </li>
              </ul>
            </div>

            {/* Gold Button Link */}
            <a
              href="/lessons"
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-amber-500 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-amber-600 hover:scale-102"
            >
              CHƠI NGAY <span className="text-base font-normal">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
