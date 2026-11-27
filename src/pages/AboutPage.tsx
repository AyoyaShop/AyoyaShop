import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { applySeo } from '../lib/seo';
import { ABOUT_META } from '../lib/pageMeta';

const WORKSHOP = '285 Bùi Đức Sơn, Phường Hoài Hảo, Thị xã Hoài Nhơn, Bình Định';

const PLACES = [
  { title: 'Cơ sở chế biến và đóng gói, Bình Định', address: WORKSHOP },
  { title: 'Điểm giao dịch, TP.HCM', address: CONTACT_INFO.address }
];

const mapEmbedSrc = (address: string) => `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export default function AboutPage() {
  useEffect(() => {
    applySeo(ABOUT_META);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-3xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> / Chuyện nhà võ
        </p>
        <h1 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-tight">Võ đường Hồng Khanh, từ năm 1983</h1>

        <img src="/photos/san-tap-900.webp" alt="Sân tập võ" className="mt-6 aspect-[16/10] w-full rounded-2xl object-cover" />

        <h2 className="mt-8 text-2xl font-bold">1983: bài thuốc trong lò võ</h2>
        <p className="mt-3 leading-relaxed">
          Gia đình tôi gắn bó với võ đường Hồng Khanh tại Bình Định từ năm 1983. Sau mỗi buổi luyện tập cường độ cao, người trong lò
          dùng bài thuốc xoa bóp của gia đình. Cùng thời đó, nhang, nụ trầm và quế do gia đình tự tay chế biến để dùng trong nhà và
          biếu người quen.
        </p>

        <img loading="lazy" src="/photos/xuong-phoi-800.webp" alt="Sân phơi thảo dược" className="mt-6 aspect-[16/10] w-full rounded-2xl object-cover" />

        <h2 className="mt-8 text-2xl font-bold">2020: thêm thảo mộc và đồ thờ</h2>
        <p className="mt-3 leading-relaxed">
          Gia đình làm thêm thảo mộc xông nhà, xông tắm, ngâm chân, cùng vật phẩm phong thủy và thờ cúng.
        </p>

        <h2 className="mt-8 text-2xl font-bold">2022: đưa lên sàn</h2>
        <div className="mt-3 flex flex-col items-start gap-5 sm:flex-row">
          <img
            loading="lazy"
            src="/products/nguyen-tuan-kiet-founder.jpg"
            alt="Nguyễn Tuấn Kiệt, người sáng lập AYOYA Shop"
            className="w-40 flex-shrink-0 rounded-2xl object-cover"
          />
          <p className="leading-relaxed">
            Tôi là Tuấn Kiệt. Tôi đưa những gì gia đình gìn giữ lên TikTok Shop và Shopee dưới tên AYOYA. Tôi vẫn tự chọn từng vị,
            tự đóng gói từng đơn và tự trả lời từng tin nhắn của khách.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold">Chúng tôi ở đâu</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {PLACES.map(place => (
            <div key={place.address} className="overflow-hidden rounded-2xl border border-ayoya-sand bg-ayoya-white">
              <iframe
                title={`Bản đồ ${place.title}`}
                src={mapEmbedSrc(place.address)}
                className="aspect-[16/10] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4">
                <h3 className="flex items-start gap-2 font-bold">
                  <MapPin size={17} className="mt-1 flex-shrink-0 text-ayoya-green" />
                  {place.title}
                </h3>
                <p className="mt-1 text-sm text-ayoya-brown/75">{place.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/san-pham/dau-vo" className="btn">Xem dầu xoa bóp</Link>
          <a href={CONTACT_INFO.zaloHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost gap-2">
            <MessageCircle size={16} /> Nhắn Zalo cho Kiệt
          </a>
        </div>
      </div>
    </div>
  );
}
