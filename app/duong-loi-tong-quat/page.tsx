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
      </div>
    </div>
  );
}
