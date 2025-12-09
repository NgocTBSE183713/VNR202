import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

export default function DuongLoiTongQuat() {
  return (
    <div className="bg-[#FAFAF7] min-h-screen py-12">
      <div className="max-w-[860px] mx-auto px-6">
        <PageHeader
          title="Đường lối cách mạng 1930–1945 – Khái quát"
          description="Tổng quan về đường lối cách mạng của Đảng Cộng sản Việt Nam trong giai đoạn từ khi thành lập đến Cách mạng Tháng Tám 1945."
        />

        <SectionCard title="Mục tiêu cách mạng">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Mục tiêu chiến lược</h3>
              <p className="text-[#585858] leading-relaxed">
                Lúc đầu là "cách mạng tư sản dân quyền" có tính chất thổ địa và phản đế, sau đó tiến thẳng lên xã hội chủ nghĩa, bỏ qua giai đoạn tư bản chủ nghĩa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#A61F2B] mb-2">Mục tiêu trước mắt</h3>
              <p className="text-[#585858] leading-relaxed">
                Tùy thuộc vào hoàn cảnh lịch sử, nhiệm vụ trước mắt có sự thay đổi: từ đánh đổ đế quốc và phong kiến (1930-1931), sang chống phát xít và phản động thuộc địa, đòi dân sinh dân chủ (1936-1939), rồi đặt nhiệm vụ giải phóng dân tộc lên hàng đầu (1939-1945).
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Luận cương chính trị (10/1930)">
          <div className="space-y-4">
            <p className="text-[#585858] leading-relaxed">
              Hội nghị Ban Chấp hành Trung ương Đảng lần thứ nhất (10/1930) đã thông qua Luận cương chính trị do đồng chí Trần Phú soạn thảo.
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Mâu thuẫn giai cấp:</strong> Giữa thợ thuyền, dân cày nghèo khổ với địa chủ phong kiến và tư bản đế quốc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Tính chất và nhiệm vụ:</strong> Cách mạng tư sản dân quyền có tính chất thổ địa và phản đế. Nhiệm vụ là đánh đổ phong kiến và đánh đổ đế quốc.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Lực lượng:</strong> Công nhân và nông dân là hai động lực chính.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#A61F2B]">•</span>
                <span className="text-[#585858]"><strong>Lãnh đạo:</strong> Đảng Cộng sản Đông Dương - đội tiên phong của giai cấp vô sản.</span>
              </li>
            </ul>
            <div className="bg-[#FFF3CD] border border-[#FFE69C] p-4 rounded mt-2">
              <h4 className="font-semibold text-[#856404] mb-1">Hạn chế của Luận cương:</h4>
              <ul className="space-y-1 ml-4 text-[#856404] text-sm">
                <li>• Chưa nêu rõ mâu thuẫn chủ yếu của xã hội thuộc địa là mâu thuẫn dân tộc.</li>
                <li>• Nặng về đấu tranh giai cấp và cách mạng ruộng đất.</li>
                <li>• Đánh giá không đúng khả năng cách mạng của tiểu tư sản, tư sản dân tộc và địa chủ vừa và nhỏ.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Nhiệm vụ chủ yếu qua các giai đoạn">
          <div className="space-y-4">
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">1930–1931</h3>
              <p className="text-[#585858] leading-relaxed">
                Đánh đổ đế quốc chủ nghĩa Pháp và phong kiến, làm cho nước Nam được hoàn toàn độc lập. Thực hiện khẩu hiệu "người cày có ruộng". Lực lượng nòng cốt là công - nông.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">1936–1939</h3>
              <p className="text-[#585858] leading-relaxed">
                Tạm gác khẩu hiệu đánh đổ đế quốc và tịch thu ruộng đất. Tập trung chống phát xít, chống chiến tranh, chống phản động thuộc địa và tay sai, đòi tự do, dân chủ, cơm áo và hòa bình.
              </p>
            </div>
            <div className="border-l-4 border-[#A61F2B] pl-4">
              <h3 className="font-semibold mb-2">1939–1945</h3>
              <p className="text-[#585858] leading-relaxed">
                Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. Tạm gác khẩu hiệu cách mạng ruộng đất, thay bằng giảm tô, giảm tức. Thành lập Mặt trận Việt Minh, chuẩn bị khởi nghĩa vũ trang.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Đặc điểm đường lối">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Đường lối xuyên suốt là độc lập dân tộc gắn liền với chủ nghĩa xã hội. Cách mạng tư sản dân quyền là giai đoạn chuẩn bị để tiến lên cách mạng xã hội chủ nghĩa.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Khẳng định công nhân và nông dân là hai động lực chính của cách mạng, trong đó giai cấp công nhân giữ vai trò lãnh đạo thông qua Đảng Cộng sản.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Đoàn kết rộng rãi các giai cấp, tầng lớp yêu nước trong Mặt trận dân tộc thống nhất (Mặt trận phản đế, Mặt trận Dân chủ, Mặt trận Việt Minh) trên cơ sở liên minh công - nông.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A61F2B] font-bold flex-shrink-0">•</span>
              <span>Sử dụng linh hoạt các hình thức tổ chức và phương pháp đấu tranh: bí mật và công khai, hợp pháp và bất hợp pháp, chính trị và vũ trang, khởi nghĩa từng phần tiến tới tổng khởi nghĩa.</span>
            </li>
          </ul>
        </SectionCard>
      </div>
    </div>
  );
}
