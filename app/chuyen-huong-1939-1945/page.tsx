import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function ChuyenHuong19391945() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Chuyển hướng chiến lược 1939–1945 và chuẩn bị khởi nghĩa"
          description="Đảng chuyển hướng đường lối từ đấu tranh dân chủ sang giải phóng dân tộc, xây dựng lực lượng và chuẩn bị cho tổng khởi nghĩa."
        />

        <SectionCard title="Chuyển hướng chiến lược">
          <div className="space-y-4">
            <p className="text-[#585858] leading-relaxed">
              [Nội dung về quyết định chuyển hướng: nhiệm vụ giải phóng dân tộc lên hàng đầu, xác định kẻ thù chính – bạn điền sau]
            </p>
            <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
              <h4 className="font-semibold mb-2">Nhiệm vụ trung tâm</h4>
              <p className="text-[#585858] text-sm">[Giải phóng dân tộc – bạn chi tiết hóa]</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Xây dựng lực lượng">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#E5E5E5] p-5 rounded">
              <h3 className="font-semibold text-[#A61F2B] mb-3">Lực lượng chính trị</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">[Xây dựng mặt trận – bạn điền]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">[Đoàn kết các tầng lớp – bạn điền]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">[Tuyên truyền vận động – bạn điền]</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#E5E5E5] p-5 rounded">
              <h3 className="font-semibold text-[#A61F2B] mb-3">Lực lượng vũ trang</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">[Thành lập đội vũ trang – bạn điền]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">[Rèn luyện, huấn luyện – bạn điền]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">[Hoạt động du kích – bạn điền]</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Mặt trận Việt Minh và căn cứ địa">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Mặt trận Việt Minh</h3>
              <p className="text-[#585858] leading-relaxed">
                [Thành lập, mục đích, tác dụng của Mặt trận Việt Minh – bạn điền sau]
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Căn cứ địa Việt Bắc</h3>
              <p className="text-[#585858] leading-relaxed">
                [Vai trò, ý nghĩa của căn cứ địa – bạn điền sau]
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Đường lối khởi nghĩa vũ trang">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>[Nguyên tắc: Khởi nghĩa từng phần đến tổng khởi nghĩa – bạn mô tả]</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>[Phương châm: Chờ thời cơ, chớp thời cơ – bạn mô tả]</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>[Kế hoạch cụ thể – bạn bổ sung]</span>
            </li>
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
