import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Nguyễn Hoàng Nam",
      school: "Đại học Bách Khoa Hà Nội",
      avatar: "N",
      avatarBg: "bg-primary-red/10 text-primary-red",
      quote: "Mình từng sợ môn Triết kinh khủng, nhưng học sơ đồ tư duy trên Học Viện Hải Ly thấy cực kỳ trực quan và dễ hiểu. Mình đã đạt điểm A môn này rất nhẹ nhàng!",
    },
    {
      name: "Trần Mai Chi",
      school: "Đại học Kinh tế Quốc dân",
      avatar: "C",
      avatarBg: "bg-amber-500/10 text-amber-600",
      quote: "Game trắc nghiệm tri thức cực kỳ bánh cuốn! Vừa chơi vừa thi đấu cùng bạn bè, tự nhiên thuộc hết bài lúc nào không hay. Nền tảng học tập siêu thú vị!",
    },
    {
      name: "Phạm Minh Đức",
      school: "Đại học Quốc gia Hà Nội",
      avatar: "Đ",
      avatarBg: "bg-emerald-500/10 text-emerald-600",
      quote: "Giao diện siêu đẹp, chạy mượt mà trên điện thoại. Đi xe buýt hay rảnh lúc nào mở ra học tóm tắt và làm vài câu hỏi ôn tập là nhớ sâu luôn.",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#faf6eb]/50 border-t border-amber-100/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
            Cảm nhận học viên
          </h2>
          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-500 font-medium">
            Hàng ngàn sinh viên trên khắp cả nước đã học tập hiệu quả và bứt phá điểm số cùng Học Viện Hải Ly.
          </p>
          <div className="mt-2 h-1.5 w-16 rounded-full bg-primary-red" />
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-3xl border border-amber-100/40 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:scale-102 group animate-in fade-in slide-in-from-bottom-12 duration-500"
            >
              <div className="space-y-6">
                
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-medium italic text-left">
                  &ldquo;{rev.quote}&rdquo;
                </p>

              </div>

              {/* User details */}
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-gray-50 text-left">
                {/* Initial Avatar */}
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-extrabold shadow-sm ${rev.avatarBg}`}>
                  {rev.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-gray-800">
                    {rev.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-400">
                    {rev.school}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
