"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import GameMenu from "./GameMenu";
import GameQuestion from "./GameQuestion";
import FloorTransition from "./FloorTransition";
import GameOver from "./GameOver";
import GameVictory from "./GameVictory";
import {
  getRandomQuestions,
  getFloors,
  calculateScore,
  setHighScore,
  floorEmojis,
} from "@/utils/game-utils";
import type { QuizQuestion } from "@/types/lesson";

type GameState = "menu" | "floor-transition" | "playing" | "gameover" | "victory";

const QUESTIONS_PER_FLOOR = 5;
const TIME_LIMIT = 20;
const MAX_LIVES = 3;

interface GameStats {
  score: number;
  correctAnswers: number;
  totalAnswered: number;
  maxCombo: number;
  floorsCleared: number;
}

export default function GameContainer() {
  const router = useRouter();
  const floors = useMemo(() => getFloors(), []);

  // Game state
  const [gameState, setGameState] = useState<GameState>("menu");
  const [currentFloor, setCurrentFloor] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  // Player state
  const [lives, setLives] = useState(MAX_LIVES);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false);

  // Stats tracking
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);

  const startGame = useCallback(() => {
    setLives(MAX_LIVES);
    setScore(0);
    setCombo(0);
    setCurrentFloor(0);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswered(0);
    setMaxCombo(0);
    setFiftyFiftyUsed(false);
    setGameState("floor-transition");
  }, []);

  const startFloor = useCallback(() => {
    const floorId = floors[currentFloor]?.id;
    if (!floorId) return;
    const floorQuestions = getRandomQuestions(floorId, QUESTIONS_PER_FLOOR);
    setQuestions(floorQuestions);
    setCurrentQuestionIndex(0);
    setFiftyFiftyUsed(false);
    setGameState("playing");
  }, [currentFloor, floors]);

  const handleAnswer = useCallback(
    (selectedIndex: number, timeLeft: number) => {
      const currentQuestion = questions[currentQuestionIndex];
      if (!currentQuestion) return;

      const isCorrect = selectedIndex === currentQuestion.correctAnswer;
      setTotalAnswered((prev) => prev + 1);

      if (isCorrect) {
        // Correct answer
        const newCombo = combo + 1;
        const points = calculateScore(timeLeft, newCombo);
        setScore((prev) => prev + points);
        setCombo(newCombo);
        setCorrectAnswers((prev) => prev + 1);
        if (newCombo > maxCombo) setMaxCombo(newCombo);
      } else {
        // Wrong answer
        setCombo(0);
        const newLives = lives - 1;
        setLives(newLives);

        if (newLives <= 0) {
          // Game over
          const finalStats: GameStats = {
            score,
            correctAnswers,
            totalAnswered: totalAnswered + 1,
            maxCombo: Math.max(maxCombo, combo),
            floorsCleared: currentFloor,
          };
          setHighScore(score);
          setTimeout(() => setGameState("gameover"), 1000);
          return;
        }
      }

      // Move to next question or next floor
      setTimeout(() => {
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          // Floor completed
          const nextFloor = currentFloor + 1;
          if (nextFloor >= floors.length) {
            // All floors completed - Victory!
            const finalScore = isCorrect
              ? score + calculateScore(timeLeft, combo + 1)
              : score;
            setHighScore(finalScore);
            setGameState("victory");
          } else {
            setCurrentFloor(nextFloor);
            setGameState("floor-transition");
          }
        }
      }, 300);
    },
    [
      questions,
      currentQuestionIndex,
      combo,
      lives,
      score,
      correctAnswers,
      totalAnswered,
      maxCombo,
      currentFloor,
      floors.length,
    ]
  );

  const handleTimeUp = useCallback(() => {
    // Time up = same as wrong answer
    setCombo(0);
    setTotalAnswered((prev) => prev + 1);
    const newLives = lives - 1;
    setLives(newLives);

    if (newLives <= 0) {
      setHighScore(score);
      setTimeout(() => setGameState("gameover"), 800);
      return;
    }

    // Move to next question
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        const nextFloor = currentFloor + 1;
        if (nextFloor >= floors.length) {
          setHighScore(score);
          setGameState("victory");
        } else {
          setCurrentFloor(nextFloor);
          setGameState("floor-transition");
        }
      }
    }, 800);
  }, [lives, score, currentQuestionIndex, questions.length, currentFloor, floors.length]);

  const handleFiftyFifty = useCallback(() => {
    setFiftyFiftyUsed(true);
  }, []);

  const handleRestart = useCallback(() => {
    startGame();
  }, [startGame]);

  const handleHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const currentStats: GameStats = {
    score,
    correctAnswers,
    totalAnswered,
    maxCombo: Math.max(maxCombo, combo),
    floorsCleared: currentFloor,
  };

  return (
    <div className="min-h-screen bg-cream">
      {gameState === "menu" && <GameMenu onStart={startGame} />}

      {gameState === "floor-transition" && (
        <FloorTransition
          floorNumber={currentFloor + 1}
          floorTitle={floors[currentFloor]?.title || ""}
          onComplete={startFloor}
        />
      )}

      {gameState === "playing" && questions[currentQuestionIndex] && (
        <GameQuestion
          key={`${currentFloor}-${currentQuestionIndex}`}
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={QUESTIONS_PER_FLOOR}
          timeLimit={TIME_LIMIT}
          lives={lives}
          score={score}
          combo={combo}
          floorNumber={currentFloor + 1}
          floorTitle={floors[currentFloor]?.title || ""}
          floorEmoji={floorEmojis[currentFloor] || "🏛️"}
          fiftyFiftyUsed={fiftyFiftyUsed}
          onAnswer={handleAnswer}
          onFiftyFifty={handleFiftyFifty}
          onTimeUp={handleTimeUp}
        />
      )}

      {gameState === "gameover" && (
        <GameOver
          stats={currentStats}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      )}

      {gameState === "victory" && (
        <GameVictory
          stats={currentStats}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      )}
    </div>
  );
}
