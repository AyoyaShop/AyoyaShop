import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Sparkles, HeartHandshake, ArrowRight, MessageCircle, Package, Star, Leaf, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO, CORE_VALUES } from '../data';
import { applySeo, SITE_URL } from '../lib/seo';

const iconMap = { Shield, Sparkles, HeartHandshake };

const TIMELINE = [
  {
    year: '1983',
    text: 'Lò võ cổ truyền Bình Định của gia đình bắt đầu tự bào chế rượu xoa bóp bí truyền, nhang và nụ trầm hương – quế.'
  },
  {
    year: '2020',
    text: 'Mở rộng thêm các dòng thảo mộc xông nhà, xông tắm, ngâm chân, phong thủy và thờ cúng.'
  },
  {
    year: '2022',
    text: 'Đưa sản phẩm gia truyền lên kinh doanh chính thức trên TikTok Shop và Shopee dưới thương hiệu AYOYA.'
  },
  {
    year: 'Hiện tại',
    text: '17 sản phẩm, hàng chục nghìn đơn hàng đã được gửi đến tay khách hàng trên khắp cả nước.'
  }
];


const STATS = [
  { icon: Package, value: '64.300+', label: 'Đơn hàng đã giao trên TikTok Shop' },
  { icon: Star, value: '4.9/5', label: 'Đánh giá trung bình trên Shopee (121 người theo dõi)' },
  { icon: Leaf, value: '17', label: 'Sản phẩm thảo mộc, phong thủy & chăm sóc sức khỏe' },
  { icon: Clock, value: '40+ năm', label: 'Công thức gia truyền từ lò võ Bình Định' }
];

function mapEmbedSrc(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export default function AboutPage() {
  useEffect(() => {
    applySeo({
      title: 'Về chúng tôi | AYOYA Shop',
      description:
        'Câu chuyện AYOYA — từ lò võ cổ truyền Bình Định năm 1983 đến thương hiệu thảo mộc, phong thủy được hàng chục nghìn khách hàng tin dùng hôm nay.',
      url: `${SITE_URL}/ve-chung-toi`,
      image: `${SITE_URL}/products/nguyen-tuan-kiet-founder.jpg`
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="text-ayoya-amber font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Hành trình di sản</span>
          <h1 className="text-4xl md:text-6xl font-serif text-ayoya-brown mb-6 leading-[1.1]">
            Từ Lò Võ Bình Định <br />
            <span className="italic">Đến AYOYA Hôm Nay</span>
          </h1>
          <p className="max-w-2xl mx-auto text-ayoya-brown/70 leading-relaxed">
            Hơn 40 năm trước, một lò võ cổ truyền ở Bình Định bắt đầu tự tay bào chế rượu xoa bóp và trầm hương cho môn
            sinh của mình. Hôm nay, chính người con của lò võ ấy — Tuấn Kiệt — tiếp tục công việc đó dưới cái tên AYOYA.
          </p>
        </div>

        {/* Founder story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 organic-border overflow-hidden aspect-[4/5] modern-zen-shadow bg-white p-2"
          >
            <img
              src="/products/nguyen-tuan-kiet-founder.jpg"
              alt="Nguyễn Tuấn Kiệt - người sáng lập AYOYA Shop"
              className="w-full h-full object-cover rounded-[35px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-5"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-ayoya-brown">Người viết những dòng này cho bạn</h2>
            <p className="text-ayoya-brown/70 leading-relaxed">
              Tôi là Tuấn Kiệt. Gia đình tôi gắn bó với một lò dạy võ cổ truyền tại Bình Định từ năm 1983. Ngày đó, sau
              mỗi buổi luyện tập cường độ cao, các võ sư trong lò dùng chính bài thuốc xoa bóp bí truyền của gia đình để
              phục hồi thể lực, thông kinh lạc và làm dịu vết bầm — cùng với đó là nhang, nụ trầm hương và quế do gia
              đình tự tay chế biến để dùng trong nhà và biếu tặng người quen.
            </p>
            <p className="text-ayoya-brown/70 leading-relaxed">
              Năm 2020, gia đình bắt đầu mở rộng thêm các dòng thảo mộc xông nhà, xông tắm, ngâm chân, cùng các vật phẩm
              phong thủy và thờ cúng — vẫn theo đúng tinh thần nguyên bản: nguyên liệu thật, chế biến thủ công.
            </p>
            <p className="text-ayoya-brown/70 leading-relaxed">
              Đến năm 2022, tôi quyết định đưa toàn bộ những gì gia đình gìn giữ suốt gần 40 năm lên kinh doanh chính
              thức trên TikTok Shop và Shopee, dưới thương hiệu AYOYA. Từ đó đến nay, tôi vẫn là người trực tiếp chọn
              từng vị thảo dược, đóng gói từng đơn hàng và trả lời từng tin nhắn của khách — không qua trung gian, không
              qua đội ngũ CSKH thuê ngoài. Với tôi, đó là cách duy nhất để giữ đúng chất lượng và giữ đúng lời hứa với
              khách hàng.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif text-ayoya-brown mb-10 text-center">
            Dòng thời gian <span className="italic">thương hiệu</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 bg-white rounded-2xl border border-ayoya-brown/10"
              >
                <span className="text-2xl font-serif italic text-ayoya-amber">{item.year}</span>
                <p className="mt-3 text-sm text-ayoya-brown/70 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quy trình thật */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif text-ayoya-brown mb-4 text-center">
            Quy trình thật: từ Bình Định <span className="italic">đến tay khách hàng</span>
          </h2>
          <p className="max-w-2xl mx-auto text-center text-sm text-ayoya-brown/60 mb-10">
            Nhiều thương hiệu chỉ nói "nguồn gốc thiên nhiên" chung chung. AYOYA chọn cách minh bạch cụ thể hơn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-ayoya-brown/10 overflow-hidden">
              <div className="aspect-[16/9]">
                <iframe
                  title="Bản đồ cơ sở chế biến & đóng gói Bình Định"
                  src={mapEmbedSrc('285 Bùi Đức Sơn, Phường Hoài Hảo, Thị xã Hoài Nhơn, Bình Định')}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-ayoya-brown">
                  <MapPin size={18} className="text-ayoya-amber" />
                  <h3 className="font-serif text-lg">Cơ sở chế biến & đóng gói — Bình Định</h3>
                </div>
                <p className="text-xs text-ayoya-brown/50 mb-3">285 Bùi Đức Sơn, Phường Hoài Hảo, Thị xã Hoài Nhơn, Bình Định</p>
                <p className="text-sm text-ayoya-brown/70 leading-relaxed">
                  Đây là nơi thảo dược và trầm hương được chọn lọc, phối chế theo đúng công thức gia truyền từ 1983, và
                  đóng gói trước khi vận chuyển đi khắp cả nước.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-ayoya-brown/10 overflow-hidden">
              <div className="aspect-[16/9]">
                <iframe
                  title="Bản đồ showroom giao dịch TP.HCM"
                  src={mapEmbedSrc(CONTACT_INFO.address)}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-ayoya-brown">
                  <MapPin size={18} className="text-ayoya-amber" />
                  <h3 className="font-serif text-lg">Showroom giao dịch — TP.HCM</h3>
                </div>
                <p className="text-xs text-ayoya-brown/50 mb-3">{CONTACT_INFO.address}</p>
                <p className="text-sm text-ayoya-brown/70 leading-relaxed">
                  Đây là nơi khách hàng khu vực TP.HCM có thể ghé xem sản phẩm trực tiếp và được tư vấn tận nơi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 core values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {CORE_VALUES.map((value, idx) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-3xl border border-ayoya-brown/5 bg-white/50 hover:bg-white hover:modern-zen-shadow transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-ayoya-cream flex items-center justify-center text-ayoya-brown mb-6">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium tracking-widest mb-4">{value.title}</h3>
                <p className="text-ayoya-brown/60 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Con số biết nói */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-serif text-ayoya-brown mb-10 text-center">
            Con số <span className="italic">biết nói</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-ayoya-brown/10"
              >
                <stat.icon size={24} className="text-ayoya-amber mb-3" strokeWidth={1.5} />
                <span className="text-2xl font-serif font-bold text-ayoya-brown">{stat.value}</span>
                <span className="mt-2 text-[11px] text-ayoya-brown/60 leading-snug">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2 px-10 py-4 bg-ayoya-brown text-ayoya-cream rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-green transition-all"
          >
            Khám phá sản phẩm <ArrowRight size={16} />
          </Link>
          <a
            href={CONTACT_INFO.zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 border border-ayoya-brown text-ayoya-brown rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-brown/5 transition-all"
          >
            <MessageCircle size={16} /> Nhắn Zalo cho Kiệt
          </a>
        </div>
      </div>
    </div>
  );
}
