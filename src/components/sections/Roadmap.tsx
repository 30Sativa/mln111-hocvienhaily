import React from "react";

export default function Roadmap() {
  const steps = [
    {
      number: "01",
      title: "Học Lý Thuyết Sinh Động",
      description: "Tiếp thu kiến thức dễ dàng qua sơ đồ tư duy tóm tắt, giáo trình rút gọn trực quan và hình ảnh minh họa chân thực.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-red"
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
      ),
    },
    {
      number: "02",
      title: "Luyện Trắc Nghiệm Đề Cương",
      description: "Củng cố lý thuyết tức thì bằng ngân hàng câu hỏi đa dạng, các bộ đề thi thử bám sát đề cương học tập thực tế.",
      icon: (
        <svg
          className="h-8 w-8 text-amber-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Thi Đấu & Tích Điểm Game",
      description: "Tham gia các thử thách game tri thức vui nhộn, tranh tài cùng bạn bè trực tuyến và thăng hạng trên bảng xếp hạng học viên.",
      icon: (
        <svg
          className="h-8 w-8 text-emerald-600"
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
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-cream border-t border-amber-100/30 overflow-hidden">
      
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 -mr-16 h-80 w-80 rounded-full bg-primary-red/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 h-80 w-80 rounded-full bg-amber-500/2 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Lộ trình học tập hiệu quả
          </h2>
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-500 font-medium">
            Chỉ với 3 bước thiết kế tối giản, khoa học giúp bạn nhanh chóng làm chủ môn học Triết học Mác - Lênin.
          </p>
          <div className="mt-2 h-1.5 w-16 rounded-full bg-primary-red" />
        </div>

        {/* 3-Steps horizontal sequence on desktop, stack on mobile */}
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Connector lines between cards (Desktop) */}
          <div className="absolute top-1/3 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed border-amber-200/50 hidden lg:block -translate-y-1/2 -z-10" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center p-8 rounded-3xl border border-amber-100/50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 hover:scale-102 group animate-in fade-in slide-in-from-bottom-12 duration-500"
            >
              
              {/* Step number bubble */}
              <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-red text-white text-base font-extrabold shadow-md border-4 border-white transition-transform duration-300 group-hover:scale-110">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/5 border border-amber-200/20 shadow-inner group-hover:bg-amber-500/10 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 tracking-tight mb-3.5 group-hover:text-primary-red transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed text-gray-500 font-medium">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
