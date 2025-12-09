'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function OnTapQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  // Placeholder questions - bạn sẽ thêm câu hỏi thực sau
  const questions = [
    {
      question: '[Câu hỏi 1: Đường lối cách mạng của Đảng trong giai đoạn 1930-1945 là gì?]',
      options: [
        '[Đáp án A]',
        '[Đáp án B]',
        '[Đáp án C]',
        '[Đáp án D]',
      ],
      correctAnswer: 0, // Index của đáp án đúng
    },
    {
      question: '[Câu hỏi 2: Xô Viết Nghệ Tĩnh diễn ra vào thời gian nào?]',
      options: [
        '[Đáp án A]',
        '[Đáp án B]',
        '[Đáp án C]',
        '[Đáp án D]',
      ],
      correctAnswer: 1,
    },
    {
      question: '[Câu hỏi 3: Khẩu hiệu nào thuộc giai đoạn Mặt trận Dân chủ 1936-1939?]',
      options: [
        '[Đáp án A]',
        '[Đáp án B]',
        '[Đáp án C]',
        '[Đáp án D]',
      ],
      correctAnswer: 2,
    },
    // Thêm câu hỏi khác...
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="bg-[#FAFAF7] min-h-screen py-12">
        <div className="max-w-[860px] mx-auto px-6">
          <PageHeader
            title="Kết quả ôn tập"
            description="Xem lại kết quả và đáp án của bạn"
          />

          <div className="bg-white border border-[#E5E5E5] rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-[#A61F2B] mb-2">{percentage}%</div>
              <p className="text-xl text-[#1C1C1C]">
                Bạn trả lời đúng {score}/{questions.length} câu
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {questions.map((q, index) => (
                <div
                  key={index}
                  className={`p-4 rounded border ${
                    selectedAnswers[index] === q.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                  }`}
                >
                  <p className="font-semibold mb-2">Câu {index + 1}: {q.question}</p>
                  <p className="text-sm text-[#585858]">
                    Bạn chọn: {q.options[selectedAnswers[index]] || 'Chưa trả lời'}
                  </p>
                  {selectedAnswers[index] !== q.correctAnswer && (
                    <p className="text-sm text-green-600 mt-1">
                      Đáp án đúng: {q.options[q.correctAnswer]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-[#A61F2B] text-white rounded-lg hover:bg-[#8B1923] transition-colors"
            >
              Làm lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Ôn tập trắc nghiệm"
          description="Kiểm tra kiến thức về đường lối cách mạng 1930–1945"
        />

        <div className="bg-white border border-[#E5E5E5] rounded-lg p-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-[#585858]">
                Câu hỏi {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-sm text-[#585858]">
                {Object.keys(selectedAnswers).length} đã trả lời
              </span>
            </div>
            <div className="w-full bg-[#E5E5E5] rounded-full h-2">
              <div
                className="bg-[#A61F2B] h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-6 leading-relaxed">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-[#A61F2B] bg-[#EFE8E8]'
                      : 'border-[#E5E5E5] hover:border-[#A61F2B] hover:bg-[#FAFAF7]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-[#A61F2B] bg-[#A61F2B]'
                          : 'border-[#E5E5E5]'
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === index && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-[#1C1C1C]">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-5 py-2 border border-[#E5E5E5] rounded-lg text-[#1C1C1C] hover:border-[#A61F2B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Câu trước
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="px-5 py-2 bg-[#A61F2B] text-white rounded-lg hover:bg-[#8B1923] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo →'}
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 text-center text-sm text-[#585858]">
          <p>💡 Đây là câu hỏi mẫu. Bạn sẽ thêm câu hỏi thực tế sau.</p>
        </div>
      </div>
    </div>
  );
}
