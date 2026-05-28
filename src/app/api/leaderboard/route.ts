import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const LEADERBOARD_FILE = path.join(process.cwd(), "leaderboard.json");

interface LeaderboardEntry {
  id: string;
  username: string;
  score: number;
  floor: number;
  date: string;
}

// Mock seed data to populate the leaderboard initially if empty
const SEED_DATA: LeaderboardEntry[] = [
  { id: "seed1", username: "Hải Ly Triết Học", score: 3850, floor: 5, date: new Date().toISOString() },
  { id: "seed2", username: "Mác Trẻ Tuổi", score: 2950, floor: 5, date: new Date().toISOString() },
  { id: "seed3", username: "Ăngghen Lý Luận", score: 2100, floor: 4, date: new Date().toISOString() },
  { id: "seed4", username: "Biện Chứng Bậc Thầy", score: 1550, floor: 3, date: new Date().toISOString() },
  { id: "seed5", username: "Học Viên Chăm Chỉ", score: 850, floor: 2, date: new Date().toISOString() },
];

/**
 * Helper to safely read leaderboard data
 */
async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  try {
    await fs.access(LEADERBOARD_FILE);
    const data = await fs.readFile(LEADERBOARD_FILE, "utf-8");
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return SEED_DATA;
  } catch {
    // File doesn't exist, create it with seed data
    try {
      await fs.writeFile(LEADERBOARD_FILE, JSON.stringify(SEED_DATA, null, 2), "utf-8");
    } catch (e) {
      console.error("Failed to create leaderboard file:", e);
    }
    return SEED_DATA;
  }
}

/**
 * Helper to safely write leaderboard data
 */
async function saveLeaderboard(data: LeaderboardEntry[]): Promise<boolean> {
  try {
    await fs.writeFile(LEADERBOARD_FILE, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (e) {
    console.error("Failed to save leaderboard data:", e);
    return false;
  }
}

/**
 * GET Handler - Retrieves the top 10 players
 */
export async function GET() {
  try {
    const list = await getLeaderboard();
    // Sort descending by score, and limit to top 10 for the display board
    const top10 = list
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
      
    return NextResponse.json({ success: true, leaderboard: top10 });
  } catch (error: any) {
    console.error("GET Leaderboard error:", error);
    return NextResponse.json(
      { error: "SERVER_ERROR", message: "Không thể lấy bảng xếp hạng." },
      { status: 500 }
    );
  }
}

/**
 * POST Handler - Submits a new player score
 */
export async function POST(request: Request) {
  try {
    const { username, score, floor } = await request.json();

    // 1. Validation
    if (typeof username !== "string" || !username.trim()) {
      return NextResponse.json(
        { error: "INVALID_DATA", message: "Biệt danh không được trống." },
        { status: 400 }
      );
    }

    // Sanitize username (limit to 15 characters, remove HTML tags, keep alphanumeric/spaces/Vietnamese accents)
    let sanitizedUsername = username
      .trim()
      .replace(/<[^>]*>/g, "") // remove HTML tags
      .slice(0, 15);

    if (sanitizedUsername.length < 2) {
      return NextResponse.json(
        { error: "INVALID_DATA", message: "Biệt danh cần từ 2 ký tự trở lên." },
        { status: 400 }
      );
    }

    const numericScore = Number(score);
    if (isNaN(numericScore) || numericScore < 0) {
      return NextResponse.json(
        { error: "INVALID_DATA", message: "Điểm số không hợp lệ." },
        { status: 400 }
      );
    }

    const numericFloor = Number(floor);
    if (isNaN(numericFloor) || numericFloor < 1 || numericFloor > 5) {
      return NextResponse.json(
        { error: "INVALID_DATA", message: "Số tầng không hợp lệ." },
        { status: 400 }
      );
    }

    // 2. Append & Sort
    const list = await getLeaderboard();
    
    const newEntry: LeaderboardEntry = {
      id: Math.random().toString(36).substring(2, 11),
      username: sanitizedUsername,
      score: numericScore,
      floor: numericFloor,
      date: new Date().toISOString(),
    };

    list.push(newEntry);
    
    // Sort descending and keep top 50 to optimize disk space
    const sorted = list
      .sort((a, b) => b.score - a.score)
      .slice(0, 50);

    const saved = await saveLeaderboard(sorted);
    if (!saved) {
      return NextResponse.json(
        { error: "WRITE_ERROR", message: "Không thể lưu điểm số." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Gửi điểm thành công!",
      entry: newEntry,
    });
  } catch (error: any) {
    console.error("POST Leaderboard error:", error);
    return NextResponse.json(
      { error: "SERVER_ERROR", message: "Lỗi máy chủ nội bộ khi lưu điểm." },
      { status: 500 }
    );
  }
}
