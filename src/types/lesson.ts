// ─── Lesson Content (Full lesson text) ───
export interface ContentSection {
  title: string;
  paragraphs: string[];
}

export interface LessonContent {
  sections: ContentSection[];
}

// ─── Lesson Summary (Condensed key points) ───
export interface SummaryPoint {
  text: string;
}

export interface SummarySection {
  title: string;
  points: SummaryPoint[];
  memorize?: string; // "Ghi nhớ" quote
}

export interface LessonSummary {
  sections: SummarySection[];
}

// ─── Quiz (Multiple choice questions) ───
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
}

// ─── Flashcard ───
export interface Flashcard {
  id: number;
  question: string;
  answer: string;
}

// ─── Exercise (Essay & situational questions) ───
export interface Exercise {
  id: number;
  type: "essay" | "situation";
  question: string;
}

// ─── Main Lesson Type ───
export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  content: LessonContent;
  summary: LessonSummary;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
  exercises?: Exercise[];
}
