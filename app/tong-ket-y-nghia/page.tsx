import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function TongKetYNghia() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Tổng kết đường lối cách mạng 1930–1945"
          description="Ý nghĩa lịch sử và bài học kinh nghiệm từ đường lối cách mạng của Đảng trong giai đoạn 1930–1945."
        />

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
      </div>
    </div>
  );
}
