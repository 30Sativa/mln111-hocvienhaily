"use client";

import React, { useState, useEffect } from "react";
import AIChatDrawer from "./AIChatDrawer";

export default function GlobalAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialLessonId, setInitialLessonId] = useState("general");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      const openState = customEvent.detail?.open ?? true;
      setIsOpen(openState);
      if (openState && customEvent.detail?.lessonId) {
        setInitialLessonId(customEvent.detail.lessonId);
      }
    };
    window.addEventListener("open-ai-chat", handleOpen);
    return () => window.removeEventListener("open-ai-chat", handleOpen);
  }, []);

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => {
          const nextState = !isOpen;
          setIsOpen(nextState);
          window.dispatchEvent(new CustomEvent("open-ai-chat", { detail: { open: nextState } }));
        }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-red-800 to-primary-red text-white shadow-lg hover:shadow-xl hover:scale-108 active:scale-95 transition-all duration-300 group cursor-pointer border border-white/10"
        title={isOpen ? "Đóng trợ lý" : "Hỏi trợ lý Hải Ly"}
      >
        {/* Glowing pulse ring (only when closed) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary-red/35 animate-ping opacity-75 group-hover:animate-none pointer-events-none" />
        )}
        
        <div className="relative flex items-center justify-center select-none">
          {isOpen ? (
            <svg
              className="h-6 w-6 transform rotate-90 scale-100 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative text-2xl flex items-center justify-center">
              🦦
              {/* Small online badge */}
              <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
          )}
        </div>
        
        {/* Sleek Tooltip Label (only when closed) */}
        {!isOpen && (
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right whitespace-nowrap bg-gray-900/95 backdrop-blur-xs text-white text-xs font-extrabold px-3.5 py-2 rounded-xl shadow-md border border-white/10 pointer-events-none">
            Hỏi Hải Ly AI 🦦
          </span>
        )}
      </button>

      <AIChatDrawer
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          window.dispatchEvent(new CustomEvent("open-ai-chat", { detail: { open: false } }));
        }}
        initialLessonId={initialLessonId}
      />
    </>
  );
}
