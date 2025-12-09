import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function TongKhoiNghia1945() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Tổng khởi nghĩa Tháng Tám 1945"
          description="Nghệ thuật lãnh đạo của Đảng trong việc chớp thời cơ và tổ chức tổng khởi nghĩa giành chính quyền trên toàn quốc."
        />

        <SectionCard title="Bối cảnh và thời cơ lịch sử">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Tình hình thế giới</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Phát xít Đức đã đầu hàng Đồng minh</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Liên Xô tuyên chiến và đánh tan đạo quân Quan Đông của Nhật</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Mỹ ném bom nguyên tử xuống Hirosima và Nagasaki</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]"><strong>15/8/1945:</strong> Nhật hoàng tuyên bố đầu hàng Đồng minh không điều kiện</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Tình hình trong nước</h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Quân đội Nhật ở Đông Dương mất hết tinh thần chiến đấu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Chính quyền tay sai Trần Trọng Kim hoang mang, rệu rã</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858]">Quân Đồng minh (Anh, Trung Hoa dân quốc, Pháp) chuẩn bị tiến vào Đông Dương</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FFF3CD] border border-[#FFE69C] p-4 rounded">
              <p className="text-[#856404] font-semibold mb-2">⚡ Thời cơ "ngàn năm có một"</p>
              <p className="text-[#856404] text-sm">
                Khoảng thời gian từ khi Nhật đầu hàng đến trước khi quân Đồng minh vào Đông Dương - 
                kẻ thù cũ đã gục ngã nhưng kẻ thù mới chưa kịp đến. Đây là cuộc chạy đua nước rút không thể chậm trễ!
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Quyết định phát động tổng khởi nghĩa">
          <div className="space-y-4">
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">13/8/1945</h3>
              <p className="text-[#585858] leading-relaxed">
                Ủy ban Khởi nghĩa toàn quốc được thành lập và ban bố <strong>"Quân lệnh số 1"</strong>, 
                phát lệnh tổng khởi nghĩa trong cả nước.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">14-15/8/1945: Hội nghị toàn quốc tại Tân Trào</h3>
              <p className="text-[#585858] leading-relaxed">
                Quyết định phát động toàn dân nổi dậy giành chính quyền từ tay phát xít Nhật trước khi quân Đồng minh vào.
              </p>
              <div className="mt-3 bg-[#EFE8E8] p-3 rounded">
                <p className="text-sm font-semibold text-[#A61F2B] mb-1">Khẩu hiệu hành động:</p>
                <p className="text-sm text-[#585858]">
                  "Phản đối xâm lược! Hoàn toàn độc lập! Chính quyền nhân dân!"
                </p>
              </div>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">16/8/1945: Đại hội Quốc dân tại Tân Trào</h3>
              <p className="text-[#585858] leading-relaxed">
                Tán thành chủ trương tổng khởi nghĩa và thông qua <strong>10 chính sách lớn</strong> của Việt Minh.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Diễn biến Tổng khởi nghĩa">
          <div className="space-y-4">
            <div className="bg-white border border-[#A61F2B] p-4 rounded">
              <h3 className="font-semibold text-[#A61F2B] mb-2">14-18/8: Khởi nghĩa lan rộng</h3>
              <p className="text-[#585858] text-sm">
                Nhiều địa phương như Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam đã chủ động giành chính quyền sớm.
              </p>
            </div>
            <div className="bg-white border border-[#A61F2B] p-4 rounded">
              <h3 className="font-semibold text-[#A61F2B] mb-2">19/8: Hà Nội giành chính quyền</h3>
              <p className="text-[#585858] text-sm">
                Hàng vạn quần chúng biến cuộc mít tinh của Tổng hội viên chức thành cuộc biểu tình vũ trang, 
                chiếm Phủ Khâm sai, Trại Bảo an binh và các cơ quan đầu não. Thắng lợi tại Hà Nội tạo hiệu ứng dây chuyền lan tỏa.
              </p>
            </div>
            <div className="bg-white border border-[#A61F2B] p-4 rounded">
              <h3 className="font-semibold text-[#A61F2B] mb-2">23/8: Huế - Vua Bảo Đại thoái vị</h3>
              <p className="text-[#585858] text-sm">
                Nhân dân Huế nổi dậy giành chính quyền, buộc vua Bảo Đại phải thoái vị.
              </p>
            </div>
            <div className="bg-white border border-[#A61F2B] p-4 rounded">
              <h3 className="font-semibold text-[#A61F2B] mb-2">25/8: Sài Gòn giành thắng lợi</h3>
              <p className="text-[#585858] text-sm">
                Cuộc khởi nghĩa giành thắng lợi tại Sài Gòn, đập tan sự kháng cự của các thế lực thù địch tại miền Nam.
              </p>
            </div>
            <div className="bg-[#D4EDDA] border border-[#C3E6CB] p-4 rounded">
              <h3 className="font-semibold text-[#155724] mb-2">2/9/1945: Tuyên ngôn Độc lập</h3>
              <p className="text-[#155724] text-sm">
                Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, 
                trịnh trọng tuyên bố sự ra đời của nước <strong>Việt Nam Dân chủ Cộng hòa</strong>.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Vai trò lãnh đạo của Đảng">
          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">1.</span>
                <span className="text-[#585858]"><strong>Chuẩn bị chu đáo:</strong> Đảng đã chuẩn bị về đường lối và lực lượng suốt 15 năm (1930-1945), đặc biệt là việc chuyển hướng chiến lược từ năm 1939</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">2.</span>
                <span className="text-[#585858]"><strong>Xây dựng khối đại đoàn kết:</strong> Thông qua Mặt trận Việt Minh, khơi dậy tinh thần yêu nước và ý chí tự lực tự cường của nhân dân</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">3.</span>
                <span className="text-[#585858]"><strong>Nghệ thuật chớp thời cơ:</strong> Nhạy bén phát hiện thời cơ, kiên quyết phát động khởi nghĩa đúng lúc, không sớm quá khi kẻ thù còn mạnh, cũng không muộn quá khi quân Đồng minh đã vào</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B] font-bold flex-shrink-0">4.</span>
                <span className="text-[#585858]"><strong>Phương pháp cách mạng bạo lực:</strong> Kết hợp chặt chẽ đấu tranh chính trị với đấu tranh vũ trang, giữa nông thôn với thành thị, tạo sức mạnh tổng hợp áp đảo</span>
              </li>
            </ul>
          </div>
        </SectionCard>

        <div className="mt-8 bg-gradient-to-r from-[#A61F2B] to-[#8B1923] text-white rounded-lg p-6">
          <p className="text-center text-lg leading-relaxed">
            <strong className="text-2xl">🎉 Thành công vang dội!</strong><br/>
            Cách mạng Tháng Tám giành thắng lợi hoàn toàn, nước Việt Nam Dân chủ Cộng hòa ra đời - 
            Nhà nước của nhân dân đầu tiên ở Đông Nam Á!
          </p>
        </div>
      </div>
    </div>
  );
}
