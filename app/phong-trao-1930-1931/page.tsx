import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function PhongTrao19301931() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Đường lối và phong trào cách mạng 1930–1931"
          description="Đảng lãnh đạo phong trào cách mạng 1930–1931, đỉnh cao là Xô Viết Nghệ Tĩnh – bài học về đường lối và phương pháp đấu tranh."
        />

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
      </div>
    </div>
  );
}
