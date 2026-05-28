import type { QuizQuestion } from "@/types/lesson";
import { lessons } from "@/constants/lessons-data";

/**
 * Fisher-Yates shuffle algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get random questions from a specific lesson
 */
export function getRandomQuestions(
  lessonId: string,
  count: number
): QuizQuestion[] {
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) return [];
  const shuffled = shuffleArray(lesson.quiz);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get all floors (lessons) data for the game
 */
export function getFloors() {
  return lessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    subtitle: lesson.subtitle,
  }));
}

/**
 * Calculate score based on time remaining and combo multiplier
 * Base: 100 points per correct answer
 * Time bonus: up to 100 extra points (5 per second remaining)
 * Combo multiplier: x1, x2, x3, x4 (max)
 */
export function calculateScore(timeLeft: number, combo: number): number {
  const baseScore = 100;
  const timeBonus = Math.floor(timeLeft * 5);
  const multiplier = Math.min(combo, 4);
  return (baseScore + timeBonus) * multiplier;
}

/**
 * Get high score from localStorage
 */
export function getHighScore(): number {
  if (typeof window === "undefined") return 0;
  try {
    const score = localStorage.getItem("mln-game-highscore");
    return score ? parseInt(score, 10) : 0;
  } catch {
    return 0;
  }
}

/**
 * Set high score in localStorage
 */
export function setHighScore(score: number): void {
  if (typeof window === "undefined") return;
  try {
    const current = getHighScore();
    if (score > current) {
      localStorage.setItem("mln-game-highscore", score.toString());
    }
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

/**
 * Get two random wrong answer indices for 50/50 lifeline
 */
export function getFiftyFiftyIndices(
  correctAnswer: number,
  totalOptions: number
): number[] {
  const wrongIndices: number[] = [];
  for (let i = 0; i < totalOptions; i++) {
    if (i !== correctAnswer) {
      wrongIndices.push(i);
    }
  }
  const shuffled = shuffleArray(wrongIndices);
  return shuffled.slice(0, 2);
}

/** Floor emoji icons for each lesson */
export const floorEmojis = ["📖", "⚖️", "🌟", "🔬", "⚛️"];

/** Floor theme colors */
export const floorColors = [
  { bg: "#fef2f2", accent: "#dc2626", border: "#fecaca" },
  { bg: "#fdf4ff", accent: "#9333ea", border: "#e9d5ff" },
  { bg: "#eff6ff", accent: "#2563eb", border: "#bfdbfe" },
  { bg: "#f0fdf4", accent: "#16a34a", border: "#bbf7d0" },
  { bg: "#fffbeb", accent: "#d97706", border: "#fde68a" },
];
