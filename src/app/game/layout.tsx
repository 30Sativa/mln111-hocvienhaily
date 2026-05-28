import type { Metadata } from "next";
import "./game.css";

export const metadata: Metadata = {
  title: "Hành Trình Triết Học | Học Viện Hải Ly",
  description:
    "Mini game quiz adventure – Chinh phục 5 tầng kiến thức Triết học Mác-Lênin. Trả lời câu hỏi, thu thập combo, giành điểm cao!",
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
