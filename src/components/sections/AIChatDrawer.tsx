"use client";

import React, { useState, useEffect } from "react";
import AIChatPanel from "./AIChatPanel";
import { lessons } from "@/constants/lessons-data";
import type { Lesson } from "@/types/lesson";

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialLessonId?: string;
}

export default function AIChatDrawer({
  isOpen,
  onClose,
  initialLessonId = "general",
}: AIChatDrawerProps) {
  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId);
  const [lessonContext, setLessonContext] = useState<Lesson | undefined>(undefined);

  // Synchronize initial lesson context when drawer opens
  useEffect(() => {
    if (isOpen) {
      setSelectedLessonId(initialLessonId);
    }
  }, [isOpen, initialLessonId]);

  // Update lesson context when selector changes
  useEffect(() => {
    if (selectedLessonId === "general") {
      setLessonContext(undefined);
    } else {
      const lesson = lessons.find((l) => l.id === selectedLessonId);
      setLessonContext(lesson);
    }
  }, [selectedLessonId]);

  // Handle escape key to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    /* Floating Chat Popup Window */
    <div className="fixed bottom-24 right-6 z-50 flex flex-col w-[360px] sm:w-[420px] h-[580px] max-h-[calc(100vh-120px)] bg-cream rounded-3xl shadow-2xl border border-amber-200/25 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-200 origin-bottom-right">
      <AIChatPanel
        variant="drawer" // Keep integrated dropdown in header
        selectedLessonId={selectedLessonId}
        onLessonChange={(id) => setSelectedLessonId(id)}
        lessonContext={lessonContext}
        onClose={onClose}
      />
    </div>
  );
}
