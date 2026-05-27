import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages, lessonContext } = await request.json();
    
    // Get API Key from header or environment variable
    const apiKey = request.headers.get("x-gemini-key") || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { 
          error: "API_KEY_MISSING",
          message: "Chưa cấu hình API Key. Vui lòng bấm vào icon răng cưa để thiết lập API Key của bạn." 
        },
        { status: 400 }
      );
    }

    // Prepare system instructions based on context
    let systemInstruction = "";
    if (lessonContext) {
      // Stringify content sections for the prompt
      const contentText = lessonContext.sections
        ? lessonContext.sections.map((s: any) => `## ${s.title}\n${s.paragraphs.join("\n")}`).join("\n\n")
        : JSON.stringify(lessonContext);

      systemInstruction = `Bạn là trợ lý học tập AI tên "Hải Ly" (avatar hình chú hải ly dễ thương) của Học Viện Hải Ly - nền tảng học tập triết học Mác-Lênin.
Nhiệm vụ của bạn là hỗ trợ giải thích, trả lời câu hỏi và hướng dẫn học viên ôn tập về bài học hiện tại:
- Học phần: ${lessonContext.id || "N/A"}
- Tiêu đề: ${lessonContext.title || "N/A"}
- Mô tả: ${lessonContext.subtitle || "N/A"}

Dưới đây là tài liệu nội dung chi tiết của học phần này để bạn tham khảo làm cơ sở đối chiếu:
=== BẮT ĐẦU TÀI LIỆU ===
${contentText}
=== KẾT THÚC TÀI LIỆU ===

QUY TẮC BẮT BUỘC:
1. Bạn CHỈ ĐƯỢC PHÉP trả lời các câu hỏi, khái niệm hoặc vấn đề liên quan trực tiếp đến nội dung học phần này hoặc kiến thức triết học Mác-Lênin.
2. Nếu học viên hỏi câu hỏi không liên quan (ví dụ: công thức nấu ăn, viết code lập trình, thời tiết, toán học, giải trí...), bạn phải từ chối một cách lịch sự, vui vẻ và hướng học viên quay lại học phần đang học (ví dụ: "Hải Ly rất tiếc, câu hỏi này nằm ngoài phạm vi học phần này. Chúng mình cùng tập trung ôn tập tiếp bài học nhé!").
3. Trả lời bằng tiếng Việt, ngắn gọn, súc tích, dễ hiểu. Sử dụng định dạng markdown (như bôi đậm, list gạch đầu dòng) để trình bày thông tin rõ ràng. Thỉnh thoảng chèn các icon đáng yêu như 🦦, 📚, 💡 để tăng tính thân thiện.`;
    } else {
      systemInstruction = `Bạn là trợ lý học tập AI tên "Hải Ly" (avatar hình chú hải ly dễ thương) của Học Viện Hải Ly - nền tảng học tập triết học Mác-Lênin.
Nhiệm vụ của bạn là hỗ trợ giải đáp thắc mắc của học viên về bộ môn Triết học Mác-Lênin nói chung.

QUY TẮC BẮT BUỘC:
1. Bạn CHỈ ĐƯỢC PHÉP trả lời các câu hỏi liên quan đến Triết học Mác-Lênin, các khái niệm triết học, lịch sử triết học hoặc nội dung liên quan trực tiếp đến môn học này.
2. Nếu học viên hỏi các câu hỏi ngoài lề (ví dụ: lập trình, nấu ăn, thời tiết, giải trí...), bạn phải từ chối một cách lịch sự, vui vẻ và nhắc nhở học viên tập trung ôn tập Triết học Mác-Lênin.
3. Trả lời bằng tiếng Việt, ngắn gọn, súc tích, dễ hiểu. Sử dụng định dạng markdown để thông tin hiển thị trực quan. Thỉnh thoảng sử dụng các icon đáng yêu như 🦦, 📚, 💡 để tăng tính thân thiện.`;
    }

    // Call Gemini API (using gemini-2.5-flash)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: messages,
        systemInstruction: {
          parts: [
            {
              text: systemInstruction
            }
          ]
        },
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 1024
        }
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("Gemini API Error Status:", response.status, errData);
      
      // Handle invalid API Key
      if (response.status === 400 && errData.error?.message?.includes("API key")) {
        return NextResponse.json(
          { 
            error: "API_KEY_INVALID",
            message: "API Key không hợp lệ. Vui lòng bấm vào bánh răng cài đặt và kiểm tra lại API Key." 
          },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { 
          error: "GEMINI_ERROR",
          message: errData.error?.message || "Đã xảy ra lỗi khi kết nối với máy chủ AI." 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi từ AI.";

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "SERVER_ERROR", message: error.message || "Lỗi máy chủ nội bộ." },
      { status: 500 }
    );
  }
}
