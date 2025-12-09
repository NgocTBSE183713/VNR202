import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function TongKhoiNghia1945() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Đường lối Tổng khởi nghĩa Tháng Tám 1945"
          description="Nghệ thuật lãnh đạo của Đảng trong việc chớp thời cơ và tổ chức tổng khởi nghĩa giành chính quyền trên toàn quốc."
        />

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
      </div>
    </div>
  );
}
