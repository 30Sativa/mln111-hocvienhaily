import React from "react";

interface ChapterItem {
  name: string;
  link: string;
}

interface Chapter {
  id: string;
  code: string;
  subtitle: string;
  items: ChapterItem[];
}

export default function Lessons() {
  const chapters: Chapter[] = [
    {
      id: "1",
      code: "Học phần 1",
      subtitle: "Khái Lược Về Triết Học",
      items: [
        { name: "Nội dung bài học", link: "/lessons/1?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/1?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/1?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/1?tab=flashcard" },
      ],
    },
    {
      id: "2",
      code: "Học phần 2",
      subtitle: "Vấn Đề Cơ Bản Của Triết Học",
      items: [
        { name: "Nội dung bài học", link: "/lessons/2?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/2?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/2?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/2?tab=flashcard" },
      ],
    },
    {
      id: "3",
      code: "Học phần 3",
      subtitle: "Sự Ra Đời & Phát Triển Triết Học Mác – Lênin",
      items: [
        { name: "Nội dung bài học", link: "/lessons/3?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/3?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/3?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/3?tab=flashcard" },
      ],
    },
    {
      id: "4",
      code: "Học phần 4",
      subtitle: "Đối Tượng & Chức Năng Triết Học Mác – Lênin",
      items: [
        { name: "Nội dung bài học", link: "/lessons/4?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/4?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/4?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/4?tab=flashcard" },
      ],
    },
    {
      id: "5",
      code: "Học phần 5",
      subtitle: "Vật Chất & Phương Thức Tồn Tại",
      items: [
        { name: "Nội dung bài học", link: "/lessons/5?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/5?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/5?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/5?tab=flashcard" },
      ],
    },
    {
      id: "6",
      code: "Học phần 6",
      subtitle: "Vật Chất Và Các Phương Thức Tồn Tại Của Vật Chất",
      items: [
        { name: "Nội dung bài học", link: "/lessons/6?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/6?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/6?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/6?tab=flashcard" },
      ],
    },
    {
      id: "7",
      code: "Học phần 7",
      subtitle: "Nguồn Gốc, Bản Chất Và Kết Cấu Của Ý Thức",
      items: [
        { name: "Nội dung bài học", link: "/lessons/7?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/7?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/7?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/7?tab=flashcard" },
      ],
    },
    {
      id: "8",
      code: "Học phần 8",
      subtitle: "Mối Quan Hệ Giữa Vật Chất Và Ý Thức",
      items: [
        { name: "Nội dung bài học", link: "/lessons/8?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/8?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/8?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/8?tab=flashcard" },
      ],
    },
    {
      id: "16",
      code: "Học phần 16",
      subtitle: "Nội Dung Của Phép Biện Chứng Duy Vật",
      items: [
        { name: "Nội dung bài học", link: "/lessons/16?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/16?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/16?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/16?tab=flashcard" },
      ],
    },
    {
      id: "17",
      code: "Học phần 17",
      subtitle: "Các Cặp Phạm Trù Cơ Bản Của Phép Biện Chứng Duy Vật",
      items: [
        { name: "Nội dung bài học", link: "/lessons/17?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/17?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/17?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/17?tab=flashcard" },
      ],
    },
    {
      id: "18",
      code: "Học phần 18",
      subtitle: "Tất Nhiên & Ngẫu Nhiên, Nội Dung & Hình Thức",
      items: [
        { name: "Nội dung bài học", link: "/lessons/18?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/18?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/18?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/18?tab=flashcard" },
      ],
    },
    {
      id: "19",
      code: "Học phần 19",
      subtitle: "Bản Chất & Hiện Tượng, Khả Năng & Hiện Thực",
      items: [
        { name: "Nội dung bài học", link: "/lessons/19?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/19?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/19?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/19?tab=flashcard" },
      ],
    },
    {
      id: "20",
      code: "Học phần 20",
      subtitle: "Quy Luật Lượng - Chất",
      items: [
        { name: "Nội dung bài học", link: "/lessons/20?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/20?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/20?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/20?tab=flashcard" },
      ],
    },
    {
      id: "21",
      code: "Học phần 21",
      subtitle: "Quy Luật Mâu Thuẫn & Phủ Định Của Phủ Định",
      items: [
        { name: "Nội dung bài học", link: "/lessons/21?tab=content" },
        { name: "Tóm tắt đề cương", link: "/lessons/21?tab=summary" },
        { name: "Quiz trắc nghiệm", link: "/lessons/21?tab=quiz" },
        { name: "Flashcard ghi nhớ", link: "/lessons/21?tab=flashcard" },
      ],
    },
  ];

  return (
    <section id="cac-bai-hoc" className="relative w-full py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Các học phần
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

      </div>
    </section>
  );
}
