"use client";

import React from "react";
import type { LessonContent } from "@/types/lesson";

export default function LessonContentView({ content }: { content: LessonContent }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {content.sections.map((section, idx) => (
        <div key={idx} className="rounded-2xl border border-amber-100/50 bg-white p-6 sm:p-8 shadow-sm">
          <h3 className="flex items-center gap-3 text-lg sm:text-xl font-extrabold text-gray-800 mb-5 pb-4 border-b border-gray-100">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-red text-white text-xs font-bold">
              {String.fromCharCode(97 + idx)}
            </span>
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-gray-600 font-medium">
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
