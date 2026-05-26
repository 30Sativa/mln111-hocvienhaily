import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="trang-chu" className="relative w-full overflow-hidden bg-cream py-2 md:py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner container with shadow, round corner, and slide-down animation */}
        <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-amber-100/50 shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.005] animate-in fade-in slide-in-from-top-6 duration-700">
          <Image
            src="/hero-banner.jpg"
            alt="Triết học Mác Lênin Banner"
            width={1024}
            height={576}
            priority
            className="w-full h-auto block select-none"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          {/* Subtle overlay gradient to add depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
