"use client";

import React, { useState, useEffect, useRef } from "react";
import type { Lesson } from "@/types/lesson";
import { lessons } from "@/constants/lessons-data";

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

interface AIChatPanelProps {
  lessonContext?: Lesson;
  onClose?: () => void;
  variant?: "drawer" | "embedded";
  // For drawer context selection
  selectedLessonId?: string;
  onLessonChange?: (id: string) => void;
}

export default function AIChatPanel({
  lessonContext,
  onClose,
  variant = "embedded",
  selectedLessonId = "general",
  onLessonChange,
}: AIChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load API Key from localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem("user-gemini-api-key") || "";
    setApiKey(savedKey);

    const greetMessage = lessonContext
      ? `Chào bạn! Mình là **Hải Ly** 🦦, trợ lý học tập AI của Học Viện Hải Ly. \n\nHôm nay chúng mình cùng trao đổi về học phần **"${lessonContext.title}"** nhé! Bạn cần mình giải đáp thắc mắc nào về lý thuyết hay các câu hỏi trắc nghiệm của bài học này? 📚`
      : `Chào bạn! Mình là **Hải Ly** 🦦, trợ lý AI chuyên về Triết học Mác-Lênin. \n\nBạn đang có câu hỏi hay phần kiến thức nào cần mình giải thích và ôn tập cùng không? 💬`;

    setMessages([{ role: "model", text: greetMessage }]);
  }, [lessonContext]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user-gemini-api-key", apiKey.trim());
    setShowSettings(false);
  };

  const getSuggestions = () => {
    if (lessonContext) {
      switch (lessonContext.id) {
        case "1":
          return [
            "Nguồn gốc nhận thức triết học?",
            "Tại sao triết học mang tính đảng?",
            "Hạt nhân lý luận thế giới quan là gì?"
          ];
        case "2":
          return [
            "Mối quan hệ vật chất và ý thức?",
            "Duy tâm chủ quan khác duy tâm khách quan thế nào?",
            "Thuyết 'Vật tự nó' của Kant là gì?"
          ];
        case "3":
          return [
            "Tiền đề lý luận của triết học Mác?",
            "Sự ra đời của chủ nghĩa cộng sản khoa học?",
            "Vai trò phát triển triết học của Lênin?"
          ];
        case "4":
          return [
            "Đối tượng của triết học Mác-Lênin?",
            "Chức năng thế giới quan và phương pháp luận?",
            "Tại sao triết học Mác thống nhất lý luận và thực tiễn?"
          ];
        case "5":
          return [
            "Quan niệm vật chất thời cổ đại?",
            "Phát minh điện tử ảnh hưởng thế giới quan thế nào?",
            "Định nghĩa vật chất nổi tiếng của Lênin?"
          ];
        default:
          return ["Tóm tắt bài này?", "Các câu trắc nghiệm trọng tâm?"];
      }
    }
    return [
      "Vấn đề cơ bản của triết học là gì?",
      "3 hình thức duy vật lịch sử?",
      "Làm sao ôn tập Triết học hiệu quả?"
    ];
  };

  const formatMessageText = (text: string) => {
    if (!text) return "";
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/^\s*[\*\-]\s+(.*)$/gm, "<li class='ml-5 list-disc my-1 text-gray-700 leading-relaxed'>$1</li>");
    
    html = html.replace(/\n/g, "<br />");
    return html;
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const history = [...messages, userMessage].map((msg) => ({
        role: msg.role === "model" ? "model" : "user",
        parts: [{ text: msg.text }],
      }));

      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (apiKey.trim()) {
        headers["x-gemini-key"] = apiKey.trim();
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        headers,
        body: JSON.stringify({
          messages: history,
          lessonContext: lessonContext ? {
            id: lessonContext.id,
            title: lessonContext.title,
            subtitle: lessonContext.subtitle,
            sections: lessonContext.content.sections,
          } : undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Lỗi phản hồi từ AI.");

      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `⚠️ **Lỗi**: ${err.message || "Mất kết nối máy chủ AI."}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const isDrawer = variant === "drawer";

  return (
    <div
      className={`flex flex-col h-full w-full bg-cream-card overflow-hidden transition-all duration-300 ${
        isDrawer
          ? "border-none shadow-none"
          : "border border-amber-200/50 rounded-3xl shadow-md h-[600px]"
      }`}
    >
      {/* Header Panel */}
      <div className="bg-gradient-to-r from-red-800 to-primary-red text-white px-5 py-4 shrink-0 shadow-sm relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-xl border border-white/5 shadow-inner">
              🦦
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-primary-red animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base tracking-wide flex items-center gap-1.5 leading-none">
                Trợ lý Hải Ly AI
              </h4>
              <span className="text-[10px] sm:text-xs text-red-200 font-medium">
                {lessonContext ? `Đang ôn tập: Học phần ${lessonContext.id}` : "Hỏi đáp học tập trực tuyến"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Settings API button */}
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-xl hover:bg-white/10 active:scale-95 transition-all text-red-100 hover:text-white"
              title="Cấu hình API Key"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {isDrawer && onClose && (
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/10 active:scale-95 transition-all text-red-100 hover:text-white"
                title="Đóng chat"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Context Selector rendered directly inside Header if variant = drawer */}
        {isDrawer && onLessonChange && (
          <div className="mt-3.5 pt-3 border-t border-white/10">
            <label className="block text-[9px] font-bold uppercase tracking-wider text-red-200 mb-1.5">
              Chủ đề thảo luận
            </label>
            <div className="relative">
              <select
                value={selectedLessonId}
                onChange={(e) => onLessonChange(e.target.value)}
                className="w-full h-9 pl-3.5 pr-8 text-xs font-bold rounded-xl border border-white/15 bg-black/15 text-white outline-none focus:border-white focus:bg-black/25 transition-all cursor-pointer appearance-none shadow-inner"
              >
                <option value="general" className="bg-red-950 text-white font-bold">💬 Hỏi đáp Triết học chung</option>
                {lessons.map((l) => (
                  <option key={l.id} value={l.id} className="bg-red-950 text-white">
                    📖 Học phần {l.id}: {l.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-red-200">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Settings Form (Slide down overlay) */}
      {showSettings && (
        <div className="bg-amber-50 border-b border-amber-200/50 p-4 shrink-0 shadow-inner animate-in slide-in-from-top duration-200">
          <form onSubmit={handleSaveKey} className="space-y-3">
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-gray-700">
                API Key Gemini cá nhân (Không lưu ở máy chủ):
              </span>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Nhập AIzaSy... (Để trống nếu server đã cài sẵn key)"
                className="w-full h-10 px-3.5 text-xs sm:text-sm rounded-xl border border-amber-200 bg-white outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red shadow-xs font-medium"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-xs font-bold text-gray-600 rounded-xl hover:bg-gray-200/60 transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold text-white bg-primary-red hover:bg-primary-red-hover rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg active:scale-98"
              >
                Lưu API Key
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Messages List Area */}
      <div className="flex-1 overflow-y-auto px-4.5 py-5 space-y-4.5 bg-cream/35 scrollbar-thin scrollbar-thumb-amber-200">
        {messages.map((msg, index) => {
          const isModel = msg.role === "model";
          return (
            <div
              key={index}
              className={`flex items-end gap-3 max-w-[88%] animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                isModel ? "self-start text-left" : "ml-auto flex-row-reverse text-right"
              }`}
            >
              {/* AI Avatar */}
              {isModel && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200/40 text-sm shadow-sm select-none">
                  🦦
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-2xs font-medium ${
                  isModel
                    ? "bg-white border border-[#f5ebdb] text-gray-800 rounded-bl-none"
                    : "bg-gradient-to-tr from-red-800 to-primary-red text-white rounded-br-none shadow-sm"
                }`}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: formatMessageText(msg.text) }}
                  className="prose prose-sm max-w-none prose-p:my-1 text-gray-800"
                  style={isModel ? {} : { color: "#ffffff" }}
                />
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-end gap-3 max-w-[85%] self-start text-left">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200/40 text-sm shadow-sm select-none animate-pulse">
              🦦
            </div>
            <div className="bg-white border border-[#f5ebdb] rounded-2xl rounded-bl-none px-4.5 py-3 shadow-2xs">
              <div className="flex items-center gap-1.5 py-1">
                <span className="h-2 w-2 bg-primary-red/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="h-2 w-2 bg-primary-red/70 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="h-2 w-2 bg-primary-red rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      {messages.length === 1 && !isLoading && (
        <div className="px-5 py-3.5 border-t border-amber-200/20 bg-white/80 shrink-0">
          <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            💡 Câu hỏi gợi ý
          </span>
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
            {getSuggestions().map((sug, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(sug)}
                className="text-xs text-left px-3.5 py-2.5 rounded-xl border border-amber-200 bg-amber-50/10 text-gray-700 hover:border-primary-red hover:text-primary-red hover:bg-red-50/20 transition-all duration-200 shadow-2xs font-bold leading-normal cursor-pointer active:scale-99"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="p-4 bg-white border-t border-gray-100 shrink-0 flex gap-2.5 items-center"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Hỏi trợ lý Hải Ly về bài học..."
          disabled={isLoading}
          className="flex-1 h-11 px-4.5 text-sm rounded-2xl border border-gray-200 bg-gray-50 outline-none transition-all placeholder:text-gray-400 focus:border-primary-red focus:bg-white focus:ring-1 focus:ring-primary-red disabled:opacity-50 font-medium"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-red-800 to-primary-red text-white shadow-md hover:shadow-lg hover:scale-103 active:scale-95 transition-all disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 cursor-pointer"
        >
          <svg className="h-5 w-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  );
}
