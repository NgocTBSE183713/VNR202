import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function DanChu19361939() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Đường lối dân chủ 1936–1939"
          description="Đảng điều chỉnh đường lối và sách lược trong giai đoạn Mặt trận Dân chủ, mở rộng phong trào đấu tranh hợp pháp và nửa hợp pháp."
        />

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
      </div>
    </div>
  );
}
