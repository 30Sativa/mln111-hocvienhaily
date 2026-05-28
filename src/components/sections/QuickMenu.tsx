import React from "react";

export default function QuickMenu() {
  const menuItems = [
    {
      id: "lessons",
      title: "Bài học",
      ariaLabel: "Thư viện bài học",
      icon: (
        <svg
          className="h-9 w-9 text-white sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "/lessons",
    },
    {
      id: "faq",
      title: "Hỏi đáp",
      ariaLabel: "Diễn đàn trao đổi thảo luận",
      icon: (
        <svg
          className="h-9 w-9 text-white sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      link: "#lien-he",
    },
    {
      id: "documents",
      title: "Tài liệu",
      ariaLabel: "Tài liệu học tập triết học",
      icon: (
        <svg
          className="h-9 w-9 text-white sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      link: "/lessons",
    },
    {
      id: "gaming",
      title: "Mini Game",
      ariaLabel: "Chơi game trắc nghiệm lý thuyết",
      icon: (
        <svg
          className="h-9 w-9 text-white sm:h-10 sm:w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      link: "/game",
    },
  ];

  return (
    <section className="relative w-full py-12 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Quick Menu Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              aria-label={item.ariaLabel}
              className="flex flex-col aspect-square max-w-[170px] sm:max-w-[200px] mx-auto w-full items-center justify-center gap-3.5 sm:gap-4.5 rounded-3xl bg-[#f88f8f] shadow-sm transition-all duration-300 hover:bg-[#f67b7b] hover:shadow-md hover:scale-105 active:scale-100 p-4"
            >
              <div className="transform transition-transform duration-300 hover:rotate-2">
                {item.icon}
              </div>
              <span className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase select-none font-sans">
                {item.title}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
