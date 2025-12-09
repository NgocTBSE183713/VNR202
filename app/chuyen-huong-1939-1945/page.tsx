import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function ChuyenHuong19391945() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Phong trào giải phóng dân tộc 1939–1945"
          description="Đảng chuyển hướng đường lối từ đấu tranh dân chủ sang giải phóng dân tộc, xây dựng lực lượng và chuẩn bị cho tổng khởi nghĩa."
        />

        <SectionCard title="Bối cảnh lịch sử">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Chiến tranh thế giới thứ hai</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Tháng 9/1939: Chiến tranh bùng nổ. Pháp thi hành thiết quân luật, đàn áp phong trào dân chủ ở Đông Dương</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Tháng 6/1940: Pháp đầu hàng Đức, chính quyền Vichy câu kết với Nhật</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Tháng 9/1940: Nhật tiến vào Đông Dương, tạo tình trạng "một cổ hai tròng" Pháp - Nhật</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Tháng 12/1941: Chiến tranh Thái Bình Dương bùng nổ, Nhật chiếm nhiều thuộc địa của Anh - Mỹ</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Chủ trương chiến lược mới">
          <div className="space-y-4">
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">Hội nghị 11/1939 (Bà Điểm, Gia Định)</h3>
              <p className="text-[#585858] leading-relaxed">
                Con đường giải phóng là đánh đổ đế quốc Pháp và ách ngoại xâm. Tạm gác khẩu hiệu cách mạng ruộng đất, 
                thay bằng chống địa tô cao, cho vay lãi nặng. Thành lập Mặt trận dân tộc thống nhất phản đế Đông Dương.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">Hội nghị Pác Bó (5/1941) - Nguyễn Ái Quốc về nước</h3>
              <p className="text-[#585858] leading-relaxed mb-2">
                Khẳng định cách mạng Đông Dương là <strong>"cách mạng dân tộc giải phóng"</strong>. Các nội dung chính:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Giải quyết mâu thuẫn dân tộc với Pháp - Nhật</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Tạm gác cách mạng ruộng đất, thay bằng giảm tô, giảm tức</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Thành lập Mặt trận Việt Minh và các đoàn thể cứu quốc</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Chuẩn bị khởi nghĩa vũ trang từng phần dẫn đến tổng khởi nghĩa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Thành lập nhà nước Việt Nam Dân chủ Cộng hòa theo tinh thần tân dân chủ</span>
                </li>
              </ul>
              <p className="text-[#585858] leading-relaxed mt-2">
                Đồng chí <strong>Trường Chinh</strong> được bầu làm Tổng Bí thư.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Các cuộc khởi nghĩa vũ trang đầu tiên">
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-[#A61F2B] p-4">
              <h3 className="font-semibold mb-2">Khởi nghĩa Bắc Sơn (9/1940)</h3>
              <p className="text-[#585858] text-sm">
                Nhân quân Pháp rút chạy khỏi Lạng Sơn, nhân dân nổi dậy chiếm châu lỵ, thành lập <strong>Đội du kích Bắc Sơn</strong> 
                – bước đầu đấu tranh vũ trang vì độc lập.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#A61F2B] p-4">
              <h3 className="font-semibold mb-2">Khởi nghĩa Nam Kỳ (11/1940)</h3>
              <p className="text-[#585858] text-sm">
                Do Xứ ủy Nam Kỳ chuẩn bị, nổ ra đêm 23/11, chiếm nhiều đồn bốt, lập chính quyền cách mạng ở một số nơi, 
                nhưng bị Pháp đàn áp khốc liệt.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#A61F2B] p-4">
              <h3 className="font-semibold mb-2">Binh biến Đô Lương (1/1941)</h3>
              <p className="text-[#585858] text-sm">
                Do Đội Cung lãnh đạo, nhưng bị dập tắt nhanh chóng.
              </p>
            </div>
            <p className="text-[#585858] italic text-sm">
              → Các cuộc khởi nghĩa này là <strong>"tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc"</strong>
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Xây dựng lực lượng">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Mặt trận Việt Minh (10/1941)</h3>
              <p className="text-[#585858] leading-relaxed">
                Thành lập Mặt trận Việt Minh, tổ chức đoàn thể cứu quốc, huấn luyện cán bộ, xuất bản báo chí cách mạng 
                (Giải phóng, Cứu quốc, Việt Nam độc lập).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Lực lượng vũ trang và căn cứ địa</h3>
              <p className="text-[#585858] leading-relaxed">
                Duy trì Cứu quốc quân ở Bắc Sơn, xây dựng <strong>khu căn cứ Việt Bắc</strong> (Cao Bằng, Bắc Kạn, Lạng Sơn).
              </p>
            </div>
            <div className="bg-[#FFF3CD] border border-[#FFE69C] p-4 rounded">
              <p className="text-[#856404] text-sm">
                ℹ️ Tháng 8/1942: Nguyễn Ái Quốc bị bắt ở Trung Quốc (thả tháng 9/1943)
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Cao trào kháng Nhật cứu nước (3/1945)">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Đảo chính Nhật - Pháp (9/3/1945)</h3>
              <p className="text-[#585858] leading-relaxed">
                Đêm 9/3/1945, Nhật nổ súng đảo chính lật đổ Pháp để độc chiếm Đông Dương. Thực dân Pháp chống cự yếu ớt rồi đầu hàng.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Chỉ thị "Nhật - Pháp bắn nhau" (12/3/1945)</h3>
              <p className="text-[#585858] leading-relaxed">
                Ban Thường vụ Trung ương Đảng ra Chỉ thị, xác định kẻ thù trước mắt là <strong>phát xít Nhật</strong>. 
                Phát động cao trào kháng Nhật, cứu nước với khẩu hiệu <strong>"Đánh đuổi phát xít Nhật"</strong> và 
                <strong>"phá kho thóc, giải quyết nạn đói"</strong>.
              </p>
            </div>
            <div className="bg-[#D4EDDA] border border-[#C3E6CB] p-4 rounded">
              <p className="text-[#155724] text-sm">
                ✓ Cao trào này là cuộc tập dượt vĩ đại, làm lực lượng cách mạng lớn mạnh vượt bậc, 
                tạo đà trực tiếp cho Tổng khởi nghĩa.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
