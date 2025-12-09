'use client';

import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

// Import nội dung từ các trang cũ
const tabs = [
  {
    id: 'duong-loi-tong-quat',
    label: 'Đường lối tổng quát',
    title: 'Đường lối cách mạng 1930–1945 – Khái quát',
    description: 'Tổng quan về đường lối cách mạng của Đảng Cộng sản Việt Nam trong giai đoạn từ khi thành lập đến Cách mạng Tháng Tám 1945.',
  },
  {
    id: 'phong-trao-1930-1931',
    label: '1930–1931',
    title: 'Đường lối và phong trào cách mạng 1930–1931',
    description: 'Đảng lãnh đạo phong trào cách mạng 1930–1931, đỉnh cao là Xô Viết Nghệ Tĩnh – bài học về đường lối và phương pháp đấu tranh.',
  },
  {
    id: 'dan-chu-1936-1939',
    label: '1936–1939',
    title: 'Đường lối dân chủ 1936–1939',
    description: 'Đảng điều chỉnh đường lối và sách lược trong giai đoạn Mặt trận Dân chủ, mở rộng phong trào đấu tranh hợp pháp và nửa hợp pháp.',
  },
  {
    id: 'chuyen-huong-1939-1945',
    label: '1939–1945',
    title: 'Chuyển hướng và chuẩn bị 1939–1945',
    description: 'Đảng điều chỉnh đường lối từ đấu tranh dân chủ sang chuẩn bị khởi nghĩa vũ trang giành chính quyền.',
  },
  {
    id: 'tong-khoi-nghia-1945',
    label: 'Tháng Tám 1945',
    title: 'Đường lối Tổng khởi nghĩa Tháng Tám 1945',
    description: 'Nghệ thuật lãnh đạo của Đảng trong việc chớp thời cơ và tổ chức tổng khởi nghĩa giành chính quyền trên toàn quốc.',
  },
  {
    id: 'tong-ket-y-nghia',
    label: 'Tổng kết',
    title: 'Tổng kết đường lối cách mạng 1930–1945',
    description: 'Ý nghĩa lịch sử và bài học kinh nghiệm từ đường lối cách mạng của Đảng trong giai đoạn 1930–1945.',
  },
];

export default function NoiDungChinh() {
  const [activeTab, setActiveTab] = useState('duong-loi-tong-quat');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Nội dung chính"
          description="Đường lối cách mạng Việt Nam 1930–1945 qua các giai đoạn lịch sử"
        />

        {/* Tab Navigation - Sticky */}
        <div className="sticky top-[140px] md:top-[120px] z-40 bg-[#FAFAF7] py-4 -mx-6 px-6 mb-8">
          <div className="bg-white border border-[#E5E5E5] rounded-lg p-2 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#A61F2B] text-white'
                      : 'bg-[#FAFAF7] text-[#1C1C1C] hover:bg-[#EFE8E8]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 bg-[#A61F2B] text-white p-3 rounded-full shadow-lg hover:bg-[#8B1923] transition-all duration-200"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Content Area */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-3">{currentTab.title}</h2>
          <p className="text-[#585858] leading-relaxed">{currentTab.description}</p>
        </div>

        {/* Dynamic Content based on activeTab */}
        {activeTab === 'duong-loi-tong-quat' && <DuongLoiTongQuat />}
        {activeTab === 'phong-trao-1930-1931' && <PhongTrao19301931 />}
        {activeTab === 'dan-chu-1936-1939' && <DanChu19361939 />}
        {activeTab === 'chuyen-huong-1939-1945' && <ChuyenHuong19391945 />}
        {activeTab === 'tong-khoi-nghia-1945' && <TongKhoiNghia1945 />}
        {activeTab === 'tong-ket-y-nghia' && <TongKetYNghia />}
      </div>
    </div>
  );
}

// Component cho từng tab (nội dung từ các trang cũ)
function DuongLoiTongQuat() {
  return (
    <>
      <SectionCard title="Mục tiêu cách mạng">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Mục tiêu chiến lược</h3>
            <p className="text-[#585858] leading-relaxed">
              [Nội dung về mục tiêu dài hạn của cách mạng Việt Nam – bạn điền sau]
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Mục tiêu trước mắt</h3>
            <p className="text-[#585858] leading-relaxed">
              [Nội dung về nhiệm vụ cụ thể trong từng giai đoạn – bạn điền sau]
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Nhiệm vụ chủ yếu qua các giai đoạn">
        <div className="space-y-4">
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">1930–1931</h3>
            <p className="text-[#585858] leading-relaxed">
              [Nhiệm vụ và đường lối giai đoạn đầu – bạn điền sau]
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">1936–1939</h3>
            <p className="text-[#585858] leading-relaxed">
              [Nhiệm vụ giai đoạn Mặt trận Dân chủ – bạn điền sau]
            </p>
          </div>
          <div className="border-l-4 border-[#A61F2B] pl-4">
            <h3 className="font-semibold mb-2">1939–1945</h3>
            <p className="text-[#585858] leading-relaxed">
              [Nhiệm vụ chuyển hướng và chuẩn bị khởi nghĩa – bạn điền sau]
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Đặc điểm đường lối">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Đặc điểm 1: Độc lập dân tộc gắn với CNXH – bạn mô tả chi tiết]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Đặc điểm 2: Liên minh công–nông – bạn mô tả chi tiết]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Đặc điểm 3: Mặt trận dân tộc thống nhất – bạn mô tả chi tiết]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Đặc điểm 4: Linh hoạt sáng tạo – bạn mô tả chi tiết]</span>
          </li>
        </ul>
      </SectionCard>
    </>
  );
}

function PhongTrao19301931() {
  return (
    <>
      <SectionCard title="Chủ trương của Đảng">
        <div className="space-y-4">
          <p className="text-[#585858] leading-relaxed">
            [Nội dung về đường lối, nhiệm vụ, yêu cầu của Đảng trong giai đoạn này – bạn điền sau]
          </p>
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <p className="text-sm text-[#585858] italic">
              Ghi chú: Tập trung vào chủ trương cụ thể, không kể quá trình thành lập Đảng
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Hình thức và phương pháp đấu tranh">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Hình thức 1: Bãi công – bạn mô tả]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Hình thức 2: Biểu tình, tuần hành – bạn mô tả]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Hình thức 3: Kết hợp yêu sách kinh tế với chính trị – bạn mô tả]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Phương pháp khác – bạn bổ sung]</span>
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Xô Viết Nghệ Tĩnh – Đỉnh cao của phong trào">
        <div className="space-y-4">
          <p className="text-[#585858] leading-relaxed">
            [Mô tả ngắn gọn về Xô Viết Nghệ Tĩnh: thời gian, địa điểm, đặc điểm – bạn điền sau]
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
              <h4 className="font-semibold mb-2 text-[#A61F2B]">Thành tựu</h4>
              <p className="text-sm text-[#585858]">[Liệt kê thành tựu chính]</p>
            </div>
            <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
              <h4 className="font-semibold mb-2 text-[#A61F2B]">Hạn chế</h4>
              <p className="text-sm text-[#585858]">[Phân tích hạn chế]</p>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Ý nghĩa về mặt đường lối">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 1: Về lãnh đạo quần chúng – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 2: Về phương pháp đấu tranh – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 3: Về đánh giá lực lượng – bạn điền]</span>
          </li>
        </ul>
      </SectionCard>
    </>
  );
}

function DanChu19361939() {
  return (
    <>
      <SectionCard title="Bối cảnh và yêu cầu điều chỉnh đường lối">
        <p className="text-[#585858] leading-relaxed">
          [Tóm tắt ngắn gọn bối cảnh quốc tế và trong nước đòi hỏi Đảng thay đổi đường lối – bạn điền sau]
        </p>
      </SectionCard>

      <SectionCard title="Nhiệm vụ và khẩu hiệu đấu tranh">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Nhiệm vụ chính</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">[Nhiệm vụ 1 – bạn điền]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]">[Nhiệm vụ 2 – bạn điền]</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-2">Khẩu hiệu</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5] text-center">
                <p className="text-sm font-semibold">Cơm áo</p>
              </div>
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5] text-center">
                <p className="text-sm font-semibold">Hòa bình</p>
              </div>
              <div className="bg-[#FAFAF7] p-3 rounded border border-[#E5E5E5] text-center">
                <p className="text-sm font-semibold">Tự do</p>
              </div>
            </div>
            <p className="text-sm text-[#585858] mt-2 italic">
              [Giải thích ý nghĩa các khẩu hiệu – bạn điền]
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Phương pháp đấu tranh">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Đấu tranh hợp pháp: tham gia nghị trường, tổ chức bầu cử – bạn mô tả]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Đấu tranh nửa hợp pháp: tổ chức quần chúng, tuyên truyền – bạn mô tả]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Hoạt động báo chí: xuất bản báo, tạp chí – bạn mô tả]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Phương pháp khác – bạn bổ sung]</span>
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Ý nghĩa với đường lối chung">
        <div className="space-y-3">
          <p className="text-[#585858] leading-relaxed">
            [Phân tích: Mở rộng mặt trận, tích lũy lực lượng, rèn luyện cán bộ... – bạn điền sau]
          </p>
          <div className="bg-[#EFE8E8] p-4 rounded border border-[#E5E5E5]">
            <p className="text-sm text-[#585858]">
              <span className="font-semibold text-[#A61F2B]">Bài học:</span> [Rút ra bài học về tính linh hoạt trong đường lối – bạn điền]
            </p>
          </div>
        </div>
      </SectionCard>
    </>
  );
}

function ChuyenHuong19391945() {
  return (
    <>
      <SectionCard title="Chuyển hướng chiến lược">
        <p className="text-[#585858] leading-relaxed">
          [Nội dung về quyết định chuyển hướng: từ đấu tranh dân chủ sang chuẩn bị khởi nghĩa vũ trang – bạn điền sau]
        </p>
      </SectionCard>

      <SectionCard title="Xây dựng lực lượng">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <h4 className="font-semibold text-[#A61F2B] mb-3">Lực lượng chính trị</h4>
            <ul className="space-y-2 text-sm text-[#585858]">
              <li>[Xây dựng cơ sở Đảng – bạn điền]</li>
              <li>[Tổ chức quần chúng – bạn điền]</li>
              <li>[Công tác tuyên truyền – bạn điền]</li>
            </ul>
          </div>
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <h4 className="font-semibold text-[#A61F2B] mb-3">Lực lượng vũ trang</h4>
            <ul className="space-y-2 text-sm text-[#585858]">
              <li>[Thành lập đội vũ trang – bạn điền]</li>
              <li>[Căn cứ địa – bạn điền]</li>
              <li>[Huấn luyện cán bộ quân sự – bạn điền]</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Mặt trận Việt Minh">
        <div className="space-y-3">
          <p className="text-[#585858] leading-relaxed">
            [Nội dung về việc thành lập Mặt trận Việt Minh, vai trò và ý nghĩa – bạn điền sau]
          </p>
          <div className="bg-[#EFE8E8] p-4 rounded border border-[#E5E5E5]">
            <p className="text-sm text-[#585858]">
              <span className="font-semibold text-[#A61F2B]">Ý nghĩa:</span> [Tầm quan trọng của Việt Minh – bạn điền]
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Nguyên tắc chuẩn bị khởi nghĩa">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">1.</span>
            <span>[Nguyên tắc 1 – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">2.</span>
            <span>[Nguyên tắc 2 – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">3.</span>
            <span>[Nguyên tắc 3 – bạn điền]</span>
          </li>
        </ul>
      </SectionCard>
    </>
  );
}

function TongKhoiNghia1945() {
  return (
    <>
      <SectionCard title="Nhận định thời cơ và quyết định khởi nghĩa">
        <div className="space-y-4">
          <p className="text-[#585858] leading-relaxed">
            [Phân tích cách Đảng đánh giá thời cơ: Nhật đầu hàng, Pháp chưa về, chính quyền Việt Nam còn bấp bênh – bạn điền sau]
          </p>
          <div className="bg-[#EFE8E8] p-4 rounded border border-[#E5E5E5]">
            <p className="font-semibold text-[#A61F2B] mb-2">Quyết định lịch sử</p>
            <p className="text-sm text-[#585858]">
              [Nội dung về quyết định phát động tổng khởi nghĩa – bạn điền]
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Chủ trương và kế hoạch tổng khởi nghĩa">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-3">Chủ trương chính</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold">1.</span>
                <span className="text-[#585858]">[Chủ trương 1 – bạn điền]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold">2.</span>
                <span className="text-[#585858]">[Chủ trương 2 – bạn điền]</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold">3.</span>
                <span className="text-[#585858]">[Chủ trương 3 – bạn điền]</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#A61F2B] mb-3">Kế hoạch thực hiện</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-[#A61F2B] pl-4">
                <p className="font-semibold mb-1">Giai đoạn 1</p>
                <p className="text-sm text-[#585858]">[Khởi nghĩa ở vùng nông thôn, miền núi – bạn mô tả]</p>
              </div>
              <div className="border-l-4 border-[#A61F2B] pl-4">
                <p className="font-semibold mb-1">Giai đoạn 2</p>
                <p className="text-sm text-[#585858]">[Khởi nghĩa tại các thành phố lớn – bạn mô tả]</p>
              </div>
              <div className="border-l-4 border-[#A61F2B] pl-4">
                <p className="font-semibold mb-1">Giai đoạn 3</p>
                <p className="text-sm text-[#585858]">[Giành chính quyền toàn quốc – bạn mô tả]</p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Nghệ thuật lãnh đạo và chớp thời cơ">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 1: Nắm chắc quy luật, linh hoạt sáng tạo – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 2: Phát huy sức mạnh quần chúng – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 3: Chuẩn bị kỹ lưỡng về mọi mặt – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 4: Đoàn kết dân tộc rộng rãi – bạn điền]</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
            <span>[Bài học 5: Quyết tâm cao, hành động nhanh – bạn điền]</span>
          </li>
        </ul>
      </SectionCard>

      <div className="mt-8 bg-white border-2 border-[#A61F2B] rounded-lg p-6">
        <p className="text-center text-[#1C1C1C] leading-relaxed">
          <span className="font-bold text-[#A61F2B]">Kết quả:</span> Cách mạng Tháng Tám thành công, 
          nước Việt Nam Dân chủ Cộng hòa ra đời – bản anh hùng ca bất hủ của dân tộc.
        </p>
      </div>
    </>
  );
}

function TongKetYNghia() {
  return (
    <>
      <SectionCard title="Ý nghĩa lịch sử của đường lối">
        <div className="space-y-4">
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <h4 className="font-semibold text-[#A61F2B] mb-2">1. Đối với cách mạng Việt Nam</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Phân tích ý nghĩa: Dẫn dắt cách mạng từ thất bại đến thành công – bạn điền sau]
            </p>
          </div>
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <h4 className="font-semibold text-[#A61F2B] mb-2">2. Đối với phong trào cộng sản quốc tế</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Phân tích đóng góp cho lý luận và thực tiễn cách mạng – bạn điền sau]
            </p>
          </div>
          <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
            <h4 className="font-semibold text-[#A61F2B] mb-2">3. Đối với dân tộc Việt Nam</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Phân tích về độc lập, tự do, đoàn kết dân tộc – bạn điền sau]
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Bài học kinh nghiệm">
        <ul className="space-y-4">
          <li className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">Bài học 1: Đường lối đúng đắn là nhân tố quyết định</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Giải thích: Đường lối phải xuất phát từ thực tiễn, phù hợp quy luật – bạn điền]
            </p>
          </li>
          <li className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">Bài học 2: Linh hoạt sáng tạo trong từng giai đoạn</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Giải thích: Biết điều chỉnh theo hoàn cảnh cụ thể – bạn điền]
            </p>
          </li>
          <li className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">Bài học 3: Đoàn kết dân tộc rộng rãi</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Giải thích: Xây dựng mặt trận thống nhất – bạn điền]
            </p>
          </li>
          <li className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">Bài học 4: Kết hợp chặt chẽ chính trị và vũ trang</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Giải thích: Hai mũi nhọn của cách mạng – bạn điền]
            </p>
          </li>
          <li className="border-l-4 border-[#A61F2B] pl-4">
            <h4 className="font-semibold mb-2">Bài học 5: Phát huy sức mạnh quần chúng</h4>
            <p className="text-[#585858] text-sm leading-relaxed">
              [Giải thích: Nhân dân là nguồn sức mạnh vô tận – bạn điền]
            </p>
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Kết nối với hiện tại">
        <div className="space-y-4">
          <p className="text-[#585858] leading-relaxed">
            [Đoạn suy nghĩ về ý nghĩa của đường lối cách mạng 1930–1945 đối với thời kỳ hiện nay: 
            công nghiệp hóa, hiện đại hóa, hội nhập quốc tế... – bạn viết suy nghĩ cá nhân]
          </p>
          <div className="bg-[#EFE8E8] p-5 rounded border border-[#E5E5E5]">
            <p className="text-[#585858] text-sm italic">
              "Đường lối đúng đắn là nhân tố hàng đầu quyết định thắng lợi của cách mạng. 
              Bài học từ giai đoạn 1930–1945 vẫn còn nguyên giá trị cho công cuộc xây dựng 
              và bảo vệ Tổ quốc ngày nay."
            </p>
          </div>
        </div>
      </SectionCard>
    </>
  );
}
