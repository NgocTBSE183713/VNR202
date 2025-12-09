import { NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

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

    const client = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

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
    const contents = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    console.log('Sending request to Gemini with contents:', JSON.stringify(contents, null, 2));

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      }
    });

    console.log('Gemini response received');

    // Handle response.text whether it's a property or function (depending on SDK version)
    // @ts-ignore
    const reply = typeof response.text === 'function' ? response.text() : response.text;

    if (!reply) {
      console.error('No text in response:', response);
      return NextResponse.json(
        { error: 'No response text received from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Chat API error:', error);
    // Log detailed error if available
    if (error.response) {
      console.error('API Error details:', JSON.stringify(error.response, null, 2));
    }
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
