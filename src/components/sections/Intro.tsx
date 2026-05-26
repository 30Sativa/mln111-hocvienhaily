import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          
          {/* Left Text Column */}
          <div className="flex flex-col items-start text-left space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
            
            {/* Academic Badge */}
            <div className="flex items-center gap-2 rounded-full bg-primary-red/10 border border-primary-red/20 px-4 py-1.5 text-primary-red font-bold text-xs uppercase tracking-wider">
              <svg
                className="h-4 w-4"
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
              NỀN TẢNG HỌC TẬP TRỰC TUYẾN
            </div>

            {/* Main Styled Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl font-sans">
                HỌC MÁC – LÊNIN
              </h1>
              <h2 className="text-2xl font-bold tracking-tight text-primary-red sm:text-3xl md:text-4xl">
                HIỂU SÂU, NHỚ LÂU,
                <br className="hidden sm:inline" />
                VẬN DỤNG TỐT
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-lg text-base md:text-lg leading-relaxed text-gray-600">
              Nền tảng học tập trực tuyến giúp bạn nắm vững lý luận triết học Mác - Lênin một cách dễ hiểu, ghi nhớ sâu sắc và vận dụng hiệu quả vào thực tiễn cuộc sống.
            </p>

            {/* Call to Action Button */}
            <a
              href="/lessons"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary-red px-8 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-primary-red-hover hover:shadow-lg hover:scale-105 active:scale-100"
            >
              BẮT ĐẦU HỌC NGAY
            </a>
          </div>

          {/* Right Image Column */}
          <div className="relative flex justify-center items-center group animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Soft backdrop glow to give a premium feels */}
            <div className="absolute h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-primary-red/5 blur-3xl group-hover:bg-primary-red/10 transition-colors duration-500" />
            
            <div className="relative w-full max-w-[420px] aspect-[3/2] sm:max-w-[540px] md:max-w-[570px] drop-shadow-2xl transition-transform duration-500 hover:scale-102">
              <Image
                src="/Pokecut_1779381077162 1.png"
                alt="Marx Engels Lenin Philosophy Trio Illustration"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 570px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
