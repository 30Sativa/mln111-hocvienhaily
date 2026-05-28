export interface LeaderboardItem {
  id: string;
  username: string;
  score: number;
  floor: number;
  date: string;
}

/**
 * Fetch top scores from the server
 */
export async function getGlobalLeaderboard(): Promise<LeaderboardItem[]> {
  try {
    const response = await fetch("/api/leaderboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensure we always get fresh rankings
    });

    if (!response.ok) {
      throw new Error("Failed to fetch leaderboard");
    }

    const data = await response.json();
    return data.leaderboard || [];
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}

/**
 * Submit score to the server leaderboard
 */
export async function submitGlobalScore(
  username: string,
  score: number,
  floor: number
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/leaderboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, score, floor }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Không thể gửi điểm số lên bảng xếp hạng.",
      };
    }

    return {
      success: true,
      message: data.message || "Gửi điểm số thành công!",
    };
  } catch (error) {
    console.error("Error submitting score:", error);
    return {
      success: false,
      message: "Lỗi kết nối mạng, vui lòng thử lại sau.",
    };
  }
}
