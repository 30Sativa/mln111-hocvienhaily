import React from "react";

interface ChapterItem {
  name: string;
  link: string;
}

interface Chapter {
  id: string;
  code: string; // e.g., "Học phần 1"
  subtitle: string; // e.g., "Vấn đề cơ bản của triết học"
  items: ChapterItem[];
}

export default function Lessons() {
  const chapters: Chapter[] = [
    {
      id: "1",
      code: "Học phần 1",
      subtitle: "Vấn đề cơ bản của triết học",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "2",
      code: "Học phần 2",
      subtitle: "Lịch sử triết học & tư tưởng",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "3",
      code: "Học phần 3",
      subtitle: "Chủ nghĩa duy vật biện chứng",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "4",
      code: "Học phần 4",
      subtitle: "Phép biện chứng duy vật luận",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "5",
      code: "Học phần 5",
      subtitle: "Lý luận nhận thức khoa học",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "6",
      code: "Học phần 6",
      subtitle: "Chủ nghĩa duy vật lịch sử",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "7",
      code: "Học phần 7",
      subtitle: "Học thuyết hình thái kinh tế",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
    {
      id: "8",
      code: "Học phần 8",
      subtitle: "Ý thức xã hội & con người",
      items: [
        { name: "Nội dung tóm tắt", link: "#summary" },
        { name: "Tóm tắt đề cương", link: "#outline" },
        { name: "Câu hỏi ôn tập", link: "#questions" },
        { name: "Game tri thức", link: "#game" },
      ],
    },
  ];

  return (
    <section id="cac-bai-hoc" className="relative w-full py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Các chương học
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-amber-400" />
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="group flex flex-col rounded-3xl border border-amber-100/50 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-md hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-500"
            >
              
              {/* Card Header */}
              <div className="flex items-center gap-4 text-left pb-4 mb-4 border-b border-gray-100">
                {/* Academic book icon in orange-ring background */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-200/40 text-amber-600 transition-transform duration-500 group-hover:scale-105">
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
                <div className="flex flex-col space-y-0.5">
                  <span className="text-xl font-bold tracking-tight text-gray-800 font-sans">
                    {chapter.code}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-400">
                    {chapter.subtitle}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="flex flex-col">
                {chapter.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="flex items-center justify-between py-3 border-b border-dashed border-gray-100 last:border-0 text-left group/item cursor-pointer text-gray-600 hover:text-primary-red transition-colors duration-200"
                  >
                    <span className="text-sm font-semibold tracking-wide transition-transform duration-200 group-hover/item:translate-x-1 inline-block">
                      {item.name}
                    </span>
                    {/* Small Gray Arrow Chevron matching mockup */}
                    <svg
                      className="h-4.5 w-4.5 text-gray-300 transition-all duration-200 group-hover/item:text-primary-red group-hover/item:translate-x-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Golden Yellow See More Button matching Mockup */}
        <div className="mt-14 flex justify-center">
          <button className="inline-flex h-12 w-full max-w-sm items-center justify-center rounded-full bg-[#f3b150] px-10 text-base font-extrabold text-white shadow-sm transition-all duration-300 hover:bg-[#df9937] hover:scale-102 hover:shadow-md active:scale-100 uppercase tracking-wide">
            XEM THÊM
          </button>
        </div>

      </div>
    </section>
  );
}
