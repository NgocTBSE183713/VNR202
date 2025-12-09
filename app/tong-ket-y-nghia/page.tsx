import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function TongKetYNghia() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Tính chất, ý nghĩa và kinh nghiệm của Cách mạng Tháng Tám 1945"
          description="Ý nghĩa lịch sử và bài học kinh nghiệm từ đường lối cách mạng của Đảng trong giai đoạn 1930–1945."
        />

        <SectionCard title="Tính chất của Cách mạng Tháng Tám">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Cách mạng giải phóng dân tộc điển hình</h3>
              <p className="text-[#585858] leading-relaxed">
                Cách mạng Tháng Tám là một cuộc cách mạng giải phóng dân tộc mang tính chất dân chủ mới, 
                là bộ phận khăng khít của cách mạng dân tộc dân chủ nhân dân Việt Nam.
              </p>
            </div>
            <div className="bg-[#FAFAF7] p-4 rounded border border-[#E5E5E5]">
              <h4 className="font-semibold text-[#A61F2B] mb-2">Tính chất dân tộc</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Giải quyết mâu thuẫn chủ yếu: toàn thể dân tộc với đế quốc xâm lược và tay sai</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Lực lượng: toàn dân tộc đoàn kết trong Mặt trận Việt Minh</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Chính quyền: của chung toàn dân tộc theo hình thức cộng hòa dân chủ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Giải phóng con người Việt Nam khỏi áp bức dân tộc, bóc lột giai cấp và nô dịch tinh thần</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#FFF3CD] border border-[#FFE69C] p-4 rounded">
              <h4 className="font-semibold text-[#856404] mb-2">⚠️ Tính chất dân chủ chưa đầy đủ</h4>
              <p className="text-[#856404] text-sm">
                Mặc dù cách mạng đã đem lại các quyền tự do, dân chủ, xóa bỏ chế độ quân chủ, 
                nhưng chưa làm xong cách mạng ruộng đất. Khẩu hiệu "người cày có ruộng" chưa được thực hiện triệt để. 
                Đây là sự lựa chọn chiến lược đúng đắn nhằm tập trung cho mục tiêu giải phóng dân tộc.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Ý nghĩa lịch sử">
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-[#A61F2B] p-4">
              <h4 className="font-semibold mb-2">Đối với dân tộc Việt Nam</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Đập tan xiềng xích nô lệ của chủ nghĩa đế quốc tồn tại gần một thế kỷ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Chấm dứt chế độ quân chủ chuyên chế kéo dài hàng nghìn năm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Nhà nước Việt Nam Dân chủ Cộng hòa ra đời - nhà nước của nhân dân đầu tiên ở Đông Nam Á</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Nhân dân từ thân phận nô lệ bước lên địa vị người chủ đất nước</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Đảng Cộng sản từ hoạt động bí mật trở thành đảng cầm quyền</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-[#A61F2B] p-4">
              <h4 className="font-semibold mb-2">Đối với phong trào cách mạng thế giới</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Lần đầu tiên một cuộc cách mạng do Đảng Cộng sản lãnh đạo giành thắng lợi hoàn toàn ở nước thuộc địa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Chọc thủng một khâu quan trọng trong hệ thống thuộc địa của chủ nghĩa đế quốc</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Mở đầu thời kỳ suy sụp và tan rã của chủ nghĩa thực dân cũ trên toàn thế giới</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#A61F2B]">•</span>
                  <span className="text-[#585858] text-sm">Nguồn cổ vũ và tấm gương sáng cho các dân tộc bị áp bức ở châu Á, châu Phi, Mỹ Latinh</span>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Bài học kinh nghiệm">
          <div className="space-y-4">
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h4 className="font-semibold mb-2">1. Chỉ đạo chiến lược</h4>
              <p className="text-[#585858] text-sm leading-relaxed">
                Đảng đã giải quyết đúng đắn mối quan hệ giữa hai nhiệm vụ chiến lược: chống đế quốc và chống phong kiến. 
                Kiên quyết đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác nhiệm vụ cách mạng ruộng đất, 
                thực hiện từng bước thích hợp để phục vụ mục tiêu cao nhất là giành độc lập.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h4 className="font-semibold mb-2">2. Xây dựng lực lượng</h4>
              <p className="text-[#585858] text-sm leading-relaxed">
                Trên nền tảng khối liên minh công nông vững chắc, Đảng đã khơi dậy tinh thần dân tộc, 
                tập hợp mọi giai cấp, tầng lớp yêu nước trong Mặt trận Việt Minh rộng rãi. 
                Chính sách đại đoàn kết dân tộc biến Việt Minh thành "lò lửa khởi nghĩa", 
                động viên đến mức cao nhất sức người, sức của của toàn dân.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h4 className="font-semibold mb-2">3. Phương pháp cách mạng</h4>
              <p className="text-[#585858] text-sm leading-relaxed">
                Đảng quán triệt sâu sắc quan điểm bạo lực cách mạng, kết hợp nhuần nhuyễn giữa đấu tranh chính trị với đấu tranh vũ trang, 
                giữa lực lượng chính trị và lực lượng vũ trang. Quá trình cách mạng đi từ khởi nghĩa từng phần, 
                chiến tranh du kích cục bộ, tiến tới chớp đúng thời cơ "ngàn năm có một" để phát động tổng khởi nghĩa đồng loạt, 
                giành thắng lợi nhanh gọn, ít đổ máu.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h4 className="font-semibold mb-2">4. Xây dựng Đảng</h4>
              <p className="text-[#585858] text-sm leading-relaxed">
                Thắng lợi khẳng định vai trò tiên phong của một Đảng Mác - Lênin có đường lối chính trị đúng đắn, 
                tư tưởng thống nhất và tổ chức chặt chẽ. Đảng biết vận dụng sáng tạo chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh 
                vào thực tiễn Việt Nam, xây dựng đội ngũ cán bộ, đảng viên kiên trung, gắn bó mật thiết với nhân dân. 
                Sự lãnh đạo sáng suốt của Trung ương Đảng kết hợp với tính chủ động, sáng tạo của các đảng bộ địa phương 
                là nhân tố quyết định đưa cách mạng đến thành công.
              </p>
            </div>
          </div>
        </SectionCard>

        <div className="mt-8 bg-gradient-to-r from-[#A61F2B] to-[#8B1923] text-white rounded-lg p-6">
          <p className="text-center leading-relaxed">
            <span className="text-xl font-bold block mb-2">📜 Kết luận</span>
            "Đường lối đúng đắn là nhân tố hàng đầu quyết định thắng lợi của cách mạng. 
            Bài học từ giai đoạn 1930–1945 vẫn còn nguyên giá trị cho công cuộc xây dựng 
            và bảo vệ Tổ quốc ngày nay."
          </p>
        </div>
      </div>
    </div>
  );
}
