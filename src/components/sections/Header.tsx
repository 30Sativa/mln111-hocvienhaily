"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [clickedTab, setClickedTab] = useState<string | null>(null);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  // Listen for global AI chat open/close events to synchronize active state highlighting
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsAIChatOpen(customEvent.detail?.open ?? true);
    };
    window.addEventListener("open-ai-chat", handleOpen);
    return () => window.removeEventListener("open-ai-chat", handleOpen);
  }, []);

  // Dynamically resolve active tab name based on URL path or active anchor click
  const activeTab = isAIChatOpen
    ? "Hỏi đáp"
    : clickedTab || (pathname.startsWith("/lessons") ? "Bài học" : pathname.startsWith("/game") ? " Mini Game" : "Trang chủ");

  // Reset local click overrides whenever the page pathname changes
  useEffect(() => {
    setClickedTab(null);
  }, [pathname]);

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Bài học", href: "/lessons" },
    { name: "Mini Game", href: "/game" },
    { name: "Hỏi đáp", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md transition-shadow duration-300 hover:shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-removebg-preview.png"
              alt="Học Viện Hải Ly Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-xl font-bold tracking-tight text-primary-red sm:block font-sans">
            HỌC VIỆN HẢI LY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            const isHoiDap = item.name === "Hỏi đáp";

            const handleClick = (e: React.MouseEvent) => {
              if (isHoiDap) {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-ai-chat", { detail: { open: true } }));
              } else {
                setClickedTab(item.name);
              }
            };

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleClick}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary-red text-white shadow-sm"
                    : "text-gray-600 hover:text-primary-red hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar & User Profile (Desktop) */}
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="h-10 w-48 lg:w-60 rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-primary-red focus:bg-white focus:ring-1 focus:ring-primary-red focus:w-56 lg:focus:w-72"
            />
            <svg
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* User profile */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-red/20">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-100 text-gray-600 hover:bg-gray-50 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-inner md:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Tìm kiếm khóa học..."
              className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-primary-red focus:bg-white"
            />
            <svg
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              const isHoiDap = item.name === "Hỏi đáp";

              const handleClick = (e: React.MouseEvent) => {
                if (isHoiDap) {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent("open-ai-chat", { detail: { open: true } }));
                } else {
                  setClickedTab(item.name);
                  setIsMobileMenuOpen(false);
                }
              };

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleClick}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-red text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary-red"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
