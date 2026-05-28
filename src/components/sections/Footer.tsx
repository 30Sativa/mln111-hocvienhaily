import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="lien-he" className="w-full bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Left Column: Logo & Platform Summary */}
          <div className="flex flex-col items-start text-left space-y-6 lg:col-span-2">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Học Viện Hải Ly Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary-red">
                HỌC VIỆN HẢI LY
              </span>
            </a>

            <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-500 font-medium">
              Nền tảng học tập trực tuyến giúp bạn nắm vững lý luận triết học Mác - Lênin một cách dễ dàng, ghi nhớ ghi sâu và mang lại sự tiến bộ học tập vượt trội mỗi ngày.
            </p>

            {/* App Store / Google Play Download badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* App Store badge */}
              <a
                href="#download"
                className="flex items-center gap-2 rounded-xl bg-gray-900 border border-gray-800 px-4 py-2 text-white hover:bg-gray-800 transition-colors shadow-sm select-none"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.2.67-2.92 1.49-.62.71-1.16 1.85-1.01 2.96 1.1.09 2.22-.57 2.94-1.39z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Download on the</span>
                  <span className="text-sm font-bold tracking-tight">App Store</span>
                </div>
              </a>

              {/* Google Play badge */}
              <a
                href="#download"
                className="flex items-center gap-2 rounded-xl bg-gray-900 border border-gray-800 px-4 py-2 text-white hover:bg-gray-800 transition-colors shadow-sm select-none"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M5 3.25c-.28 0-.5.22-.5.5v16.5c0 .28.22.5.5.5h.38l8.91-8.91L5.38 3.25H5zm10.16 7.66l-2.6-2.6L3.63 17.25h8.93l2.6-2.6v-3.74zm1.09.84l4.24-2.45a1 1 0 000-1.73l-4.24-2.45-2.6 2.6 2.6 2.6zM3.63 6.75l8.93 8.93 2.6-2.6-11.53-6.33z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">GET IT ON</span>
                  <span className="text-sm font-bold tracking-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contacts & Socials */}
          <div className="flex flex-col items-start text-left space-y-6">
            <h4 className="text-lg font-bold tracking-tight text-gray-800 uppercase font-sans">
              Liên hệ
            </h4>

            {/* Contact list */}
            <ul className="space-y-3.5 text-sm md:text-base font-medium text-gray-500">
              <li className="flex items-center gap-3">
                <span className="text-primary-red font-bold">📞</span>
                <span>Hotline: (+84) 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-red font-bold">✉️</span>
                <span className="break-all">Email: contact.haily@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-red font-bold mt-1">📍</span>
                <span>Address: Vinhomes, Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4.5 pt-2">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook Page"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 transition-all hover:bg-primary-red/10 hover:text-primary-red hover:border-primary-red/20"
              >
                <span className="font-bold text-sm">F</span>
              </a>

              {/* Twitter */}
              <a
                href="#twitter"
                aria-label="Twitter Page"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 transition-all hover:bg-primary-red/10 hover:text-primary-red hover:border-primary-red/20"
              >
                <span className="font-bold text-sm">T</span>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram Page"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 transition-all hover:bg-primary-red/10 hover:text-primary-red hover:border-primary-red/20"
              >
                <span className="font-bold text-sm">I</span>
              </a>

              {/* Linkedin */}
              <a
                href="#linkedin"
                aria-label="LinkedIn Page"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-600 transition-all hover:bg-primary-red/10 hover:text-primary-red hover:border-primary-red/20"
              >
                <span className="font-bold text-sm">L</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs sm:text-sm font-medium text-gray-400">
            © {new Date().getFullYear()} Học Viện Hải Ly. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
