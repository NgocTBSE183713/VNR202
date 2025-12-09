import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const systemPrompt = `Bạn là một trợ lý AI chuyên về lịch sử Việt Nam, đặc biệt là đường lối cách mạng của Đảng Cộng sản Việt Nam giai đoạn 1930–1945.

Nhiệm vụ của bạn:
- Trả lời các câu hỏi liên quan đến đường lối, chủ trương, phương pháp đấu tranh của Đảng trong giai đoạn này
- Giải thích các sự kiện lịch sử: phong trào 1930-1931, Xô Viết Nghệ Tĩnh, giai đoạn Mặt trận Dân chủ 1936-1939, chuyển hướng chiến lược 1939-1945, Cách mạng Tháng Tám 1945
- Phân tích ý nghĩa, bài học lịch sử từ đường lối của Đảng
- Giúp học sinh, sinh viên hiểu rõ hơn về chủ đề này

Phong cách trả lời:
- Trang trọng, học thuật nhưng dễ hiểu
- Ngắn gọn, súc tích, tập trung vào trọng tâm
- Sử dụng tiếng Việt chuẩn
- Không đưa ra thông tin ngoài phạm vi 1930-1945 trừ khi cần thiết để làm rõ

Nếu câu hỏi không liên quan đến chủ đề, lịch sự từ chối và hướng dẫn người dùng quay lại chủ đề chính.`;

    // Format messages for Gemini API
    const contents = [
      {
        role: 'user',
        parts: [{ text: systemPrompt }]
      },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, tôi không thể trả lời lúc này.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
