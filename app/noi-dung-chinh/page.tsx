"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { X, ZoomIn } from "lucide-react";

type TimelineEvent = {
  id: string;
  yearDisplay: string;
  title: string;
  summary: string;
  image: string;
  source: string;
  details: React.ReactNode;
};

const timelineEvents: TimelineEvent[] = [
  {
    id: "pt-1930-1931",
    yearDisplay: "1930-1931",
    title: "Phong trào cách mạng 1930 - 1931",
    summary: "Cao trào cách mạng đầu tiên do Đảng lãnh đạo, đỉnh cao là Xô Viết Nghệ Tĩnh.",
    image: "https://placehold.co/600x400?text=Xo+Viet+Nghe+Tinh",
    source: "Giáo trình Lịch sử Đảng CSVN",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Bối cảnh lịch sử</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Khủng hoảng kinh tế (1929 - 1933):</strong> Kinh tế suy thoái, Pháp tăng cường bóc lột làm đời sống nhân dân cực khổ.</li>
            <li><strong>Khủng bố trắng:</strong> Sau khởi nghĩa Yên Bái (2/1930), Pháp khủng bố dã man, mâu thuẫn dân tộc gay gắt.</li>
            <li><strong>Đảng ra đời (1930):</strong> Kịp thời lãnh đạo đấu tranh thống nhất trên cả nước.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Diễn biến chính</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Tháng 2-4/1930:</strong> Bãi công, biểu tình nổ ra ở nhiều nơi (Phú Riềng, Nam Định, Bến Thủy, Thái Bình...).</li>
            <li><strong>Tháng 5/1930 (Cao trào):</strong> Nhân ngày 1/5, phong trào lan rộng. Lần đầu tiên công - nông phối hợp đấu tranh.</li>
            <li><strong>Tháng 9/1930 (Đỉnh cao Xô Viết Nghệ Tĩnh):</strong>
              <ul className="list-circle pl-5 mt-1 space-y-1">
                <li>Biểu tình ngày 12/9/1930 tại Hưng Nguyên bị ném bom làm 171 người chết.</li>
                <li>Chính quyền địch tan rã. Các tổ chức Đảng, Nông hội quản lý đời sống, thực hiện quyền làm chủ (chia ruộng, xóa tệ nạn...). Đây là hình thức sơ khai của chính quyền Xô viết.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">3. Ý nghĩa lịch sử</h4>
          <p className="text-gray-700 mt-1">Khẳng định quyền lãnh đạo của Đảng, xây dựng khối liên minh công - nông, là cuộc tổng diễn tập đầu tiên cho Cách mạng Tháng Tám.</p>
        </div>
      </div>
    )
  },
  {
    id: "luan-cuong-1930",
    yearDisplay: "10/1930",
    title: "Luận cương chính trị",
    summary: "Hội nghị Trung ương lần thứ nhất thông qua Luận cương chính trị do đồng chí Trần Phú soạn thảo.",
    image: "https://placehold.co/600x400?text=Luan+Cuong+Chinh+Tri",
    source: "Văn kiện Đảng",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Hoàn cảnh & Nội dung</h4>
          <p className="text-gray-700 mt-1">Hội nghị họp tại Hương Cảng (10/1930), đổi tên Đảng thành Đảng Cộng sản Đông Dương, bầu Trần Phú làm Tổng Bí thư.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Mâu thuẫn giai cấp:</strong> Thợ thuyền, dân cày vs Địa chủ, phong kiến, đế quốc.</li>
            <li><strong>Nhiệm vụ:</strong> Đánh đổ phong kiến và đế quốc. Nhấn mạnh "thổ địa là cái cốt của cách mạng tư sản dân quyền".</li>
            <li><strong>Lực lượng:</strong> Công nhân và nông dân là động lực chính.</li>
            <li><strong>Phương pháp:</strong> Võ trang bạo động.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Hạn chế</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li>Không nêu rõ mâu thuẫn chủ yếu là mâu thuẫn dân tộc.</li>
            <li>Không đặt nhiệm vụ giải phóng dân tộc lên hàng đầu (nặng về đấu tranh giai cấp).</li>
            <li>Đánh giá không đúng vai trò của tiểu tư sản, tư sản dân tộc (không tập hợp được đại đoàn kết).</li>
          </ul>
          <p className="text-sm italic text-gray-500 mt-2">Nguyên nhân: Nhận thức chưa đầy đủ thực tiễn và ảnh hưởng giáo điều, tả khuynh.</p>
        </div>
      </div>
    )
  },
  {
    id: "khoi-phuc-1932-1935",
    yearDisplay: "1932-1935",
    title: "Khôi phục phong trào & Đại hội I",
    summary: "Đấu tranh kiên cường trong nhà tù và quá trình khôi phục hệ thống tổ chức Đảng.",
    image: "https://placehold.co/600x400?text=Dai+Hoi+I",
    source: "Lịch sử Đảng",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Đấu tranh khôi phục (1931-1934)</h4>
          <p className="text-gray-700 mt-1">Pháp khủng bố trắng, Tổng Bí thư Trần Phú hy sinh. Các đảng viên biến nhà tù thành trường học cách mạng, ra báo bí mật ("Đuốc đưa đường").</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
            <li>1932: Ban hành Chương trình hành động.</li>
            <li>1934: Thành lập Ban Chỉ huy ở ngoài.</li>
            <li>1935: Hệ thống tổ chức cơ bản phục hồi.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Đại hội Đảng lần thứ I (3/1935)</h4>
          <p className="text-gray-700 mt-1">Họp tại Ma Cao. Bầu Lê Hồng Phong làm Tổng Bí thư.</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Nhiệm vụ:</strong> Củng cố Đảng, đẩy mạnh vận động quần chúng, tuyên truyền chống đế quốc.</li>
            <li><strong>Ý nghĩa:</strong> Đánh dấu sự phục hồi tổ chức Đảng.</li>
            <li><strong>Hạn chế:</strong> Vẫn chưa đề ra chủ trương chiến lược phù hợp (chưa đặt giải phóng dân tộc lên hàng đầu).</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "dan-chu-1936-1939",
    yearDisplay: "1936-1939",
    title: "Phong trào Dân chủ 1936-1939",
    summary: "Cuộc vận động dân chủ rộng lớn, đòi tự do, cơm áo, hòa bình.",
    image: "https://placehold.co/600x400?text=Phong+Trao+Dan+Chu",
    source: "Văn kiện Đảng",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Bối cảnh & Chủ trương</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Thế giới:</strong> Chủ nghĩa phát xít xuất hiện. Quốc tế Cộng sản chủ trương lập Mặt trận nhân dân. Mặt trận nhân dân Pháp thắng cử.</li>
            <li><strong>Chủ trương mới:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>Kẻ thù: Phản động thuộc địa và tay sai.</li>
                <li>Nhiệm vụ: Chống phát xít, chiến tranh; đòi tự do, dân chủ, cơm áo, hòa bình.</li>
                <li>Mặt trận: Mặt trận Dân chủ Đông Dương.</li>
                <li>Hình thức: Kết hợp công khai, bí mật, hợp pháp, bất hợp pháp.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Phong trào tiêu biểu & Ý nghĩa</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li>Phong trào Đông Dương Đại hội, phong trào "đón rước", đấu tranh nghị trường, báo chí công khai ("Vấn đề dân cày").</li>
            <li><strong>Ý nghĩa:</strong> Cuộc tập dượt thứ hai cho Cách mạng Tháng Tám. Giáo dục chính trị cho hàng triệu quần chúng, uy tín Đảng mở rộng.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "gp-dan-toc-1939-1945",
    yearDisplay: "1939-1945",
    title: "Phong trào Giải phóng dân tộc",
    summary: "Chuyển hướng chỉ đạo chiến lược, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
    image: "https://placehold.co/600x400?text=Pac+Bo+1941",
    source: "Lịch sử Đảng",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Bối cảnh "Một cổ hai tròng"</h4>
          <p className="text-gray-700 mt-1">Chiến tranh thế giới II bùng nổ. Nhật vào Đông Dương (9/1940). Pháp - Nhật câu kết bóc lột, gây nạn đói 1945.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Chuyển hướng chiến lược</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Hội nghị TW 6 (11/1939):</strong> Đặt giải phóng dân tộc lên hàng đầu. Tạm gác khẩu hiệu ruộng đất.</li>
            <li><strong>Hội nghị TW 8 (5/1941):</strong> Nguyễn Ái Quốc chủ trì.
              <ul className="list-circle pl-5 mt-1">
                <li>Khẳng định "cách mạng dân tộc giải phóng".</li>
                <li>Thành lập <strong>Mặt trận Việt Minh</strong>.</li>
                <li>Chuẩn bị khởi nghĩa vũ trang: từ khởi nghĩa từng phần đến tổng khởi nghĩa.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">3. Chuẩn bị lực lượng</h4>
          <p className="text-gray-700 mt-1">Khởi nghĩa Bắc Sơn, Nam Kỳ, Binh biến Đô Lương là "tiếng súng báo hiệu". Xây dựng căn cứ địa Việt Bắc, thành lập Đội Việt Nam Tuyên truyền Giải phóng quân.</p>
        </div>
      </div>
    )
  },
  {
    id: "cao-trao-tong-khoi-nghia",
    yearDisplay: "3/1945 - 8/1945",
    title: "Cao trào kháng Nhật & Tổng khởi nghĩa",
    summary: "Thời cơ ngàn năm có một, Đảng phát động Tổng khởi nghĩa giành chính quyền.",
    image: "https://placehold.co/600x400?text=Cach+Mang+Thang+Tam",
    source: "Lịch sử Việt Nam",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Cao trào kháng Nhật cứu nước</h4>
          <p className="text-gray-700 mt-1">Nhật đảo chính Pháp (9/3/1945). Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta".</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
            <li>Kẻ thù duy nhất: Phát xít Nhật.</li>
            <li>Khẩu hiệu: "Phá kho thóc, giải quyết nạn đói".</li>
            <li>Ý nghĩa: Tập dượt vĩ đại, tạo đà cho Tổng khởi nghĩa.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Tổng khởi nghĩa Tháng Tám</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Thời cơ:</strong> Nhật đầu hàng (15/8) đến trước khi quân Đồng minh vào.</li>
            <li><strong>Quyết định:</strong> Hội nghị Tân Trào (14-15/8) phát lệnh Tổng khởi nghĩa.</li>
            <li><strong>Diễn biến:</strong>
              <ul className="list-circle pl-5 mt-1">
                <li>19/8: Hà Nội giành chính quyền.</li>
                <li>23/8: Huế (Vua Bảo Đại thoái vị).</li>
                <li>25/8: Sài Gòn thắng lợi.</li>
                <li>2/9: Tuyên ngôn Độc lập.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "tong-ket-y-nghia",
    yearDisplay: "Tổng kết",
    title: "Tính chất, Ý nghĩa & Bài học",
    summary: "Bước ngoặt vĩ đại của dân tộc, mở ra kỷ nguyên độc lập, tự do.",
    image: "/Image_xoamdoxoamdoxoam.png",
    source: "Cương lĩnh 2011",
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">1. Tính chất</h4>
          <p className="text-gray-700 mt-1">Cách mạng giải phóng dân tộc điển hình. Tính dân chủ chưa đầy đủ (chưa làm xong cách mạng ruộng đất) để tập trung cho độc lập dân tộc.</p>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">2. Ý nghĩa lịch sử</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li><strong>Dân tộc:</strong> Đập tan xiềng xích nô lệ, lập nước VNDCCH, nhân dân làm chủ đất nước, Đảng trở thành đảng cầm quyền.</li>
            <li><strong>Quốc tế:</strong> Cổ vũ phong trào giải phóng dân tộc, chọc thủng hệ thống thuộc địa của đế quốc.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#A61F2B] text-lg">3. Bài học kinh nghiệm</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-2">
            <li>Chỉ đạo chiến lược: Đặt giải phóng dân tộc lên hàng đầu.</li>
            <li>Xây dựng lực lượng: Khối đại đoàn kết toàn dân (Mặt trận Việt Minh).</li>
            <li>Phương pháp: Bạo lực cách mạng, kết hợp chính trị - vũ trang, chớp thời cơ.</li>
            <li>Xây dựng Đảng: Vững mạnh về chính trị, tư tưởng, tổ chức.</li>
          </ul>
        </div>
      </div>
    )
  }
];

export default function NoiDungChinh() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12 border border-stone-100">
          <PageHeader
            title="Nội dung chính"
            description="Đường lối cách mạng Việt Nam 1930–1945 qua các giai đoạn lịch sử"
          />
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-300 -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={event.id} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#A61F2B] rounded-full border-4 border-[#FAFAF7] z-10 -translate-x-1/2 md:translate-x-1/2 shadow-sm" />

                  {/* Empty Space for opposite side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 hover:border-[#A61F2B]/30 hover:-translate-y-1">
                        {/* Year Badge */}
                        <div className="bg-[#A61F2B] text-white text-xs font-bold px-3 py-1 inline-block rounded-br-lg mb-2">
                          {event.yearDisplay}
                        </div>
                        
                        <div className="p-5 pt-2">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#A61F2B] transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {event.summary}
                          </p>
                          
                          <div className="relative h-40 w-full rounded-lg overflow-hidden bg-gray-100">
                            <Image 
                              src={event.image} 
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          
                          <div className="mt-4 flex items-center text-[#A61F2B] text-sm font-medium">
                            <span>Xem chi tiết</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Popup Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors text-gray-800"
              >
                <X size={20} />
              </button>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto custom-scrollbar flex-1">
                <div 
                  className="relative h-64 sm:h-80 w-full cursor-zoom-in group"
                  onClick={() => setZoomedImage(selectedEvent.image)}
                >
                  <Image 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Zoom Hint */}
                  <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={20} />
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white w-full">
                    <span className="bg-[#A61F2B] px-3 py-1 rounded-md text-sm font-bold mb-3 inline-block shadow-sm">
                      {selectedEvent.yearDisplay}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-shadow-sm">
                      {selectedEvent.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="font-medium text-lg text-gray-900 border-l-4 border-[#A61F2B] pl-4 italic bg-gray-50 py-3 rounded-r-lg">
                      {selectedEvent.summary}
                    </p>
                    <div className="mt-6 text-base leading-relaxed">
                      {selectedEvent.details}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <span>Nguồn: <span className="font-medium text-gray-900">{selectedEvent.source}</span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Image Zoom Overlay */}
      <AnimatePresence>
        {zoomedImage && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh]"
            >
              <Image
                src={zoomedImage}
                alt="Zoomed view"
                fill
                className="object-contain"
                quality={100}
              />
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 bg-white/10 rounded-full"
                onClick={() => setZoomedImage(null)}
              >
                <X size={32} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>  
  );
}


