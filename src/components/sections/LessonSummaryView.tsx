"use client";

import React from "react";
import type { LessonSummary } from "@/types/lesson";

export default function LessonSummaryView({ summary }: { summary: LessonSummary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
      {summary.sections.map((section, idx) => (
        <div
          key={idx}
          className="flex flex-col rounded-2xl border border-amber-100/50 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <h3 className="text-base sm:text-lg font-extrabold text-gray-800 mb-4 pb-3 border-b border-gray-100 flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 text-xs font-bold border border-amber-200/40">
              {String.fromCharCode(97 + idx)}
            </span>
            {section.title}
          </h3>

          <ul className="space-y-3 mb-4 flex-1">
            {section.points.map((point, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3">
                <span className="mt-0.5 text-primary-red text-sm font-bold shrink-0">✓</span>
                <span className="text-sm leading-relaxed text-gray-600 font-medium">{point.text}</span>
              </li>
            ))}
          </ul>

          {section.memorize && (
            <div className="mt-auto rounded-xl bg-amber-50 border border-amber-200/50 p-4">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-2">
                <span>📌</span>
                <span>Ghi nhớ</span>
              </div>
              <p className="text-sm italic font-semibold text-amber-800 leading-relaxed">
                &ldquo;{section.memorize}&rdquo;
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
