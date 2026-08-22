import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { CORE_VALUES, BLOGS } from '../data';
import { applySeo, SITE_URL } from '../lib/seo';

const iconMap = { Shield, Sparkles, HeartHandshake };

export default function AboutPage() {
  useEffect(() => {
    applySeo({
      title: 'Về chúng tôi | AYOYA Shop',
      description: 'Câu chuyện thương hiệu AYOYA — kế thừa tinh hoa võ thuật và y học cổ truyền Bình Định, gửi trọn niềm tin qua từng sản phẩm thảo mộc.',
      url: `${SITE_URL}/ve-chung-toi`,
      image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776444400/%C4%91%C3%B4ng_y_codzsc.jpg'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-ayoya-amber font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Hành trình di sản</span>
          <h1 className="text-4xl md:text-6xl font-serif text-ayoya-brown mb-4 leading-[1.1]">
            Báu Vật Đất Võ <br />
            <span className="italic">Gửi Trọn Niềm Tin</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="organic-border overflow-hidden aspect-[4/3] modern-zen-shadow bg-white p-2"
          >
            <img
              src="https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776444400/%C4%91%C3%B4ng_y_codzsc.jpg?auto=format&fit=crop&q=80&w=800"
              alt="Thảo mộc tuyển chọn từ nguồn dược liệu sạch của AYOYA"
              className="w-full h-full object-cover rounded-[35px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="organic-border overflow-hidden aspect-[4/3] modern-zen-shadow bg-white p-2"
          >
            <img
              src="https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776444643/%C4%91%C3%B3ng_g%C3%B3i_f1mam2.png?auto=format&fit=crop&q=80&w=800"
              alt="Đóng gói tỉ mỉ sản phẩm AYOYA, gửi trọn tâm tình"
              className="w-full h-full object-cover rounded-[35px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="prose prose-ayoya text-ayoya-brown/70 leading-relaxed space-y-6 max-w-3xl mx-auto text-lg mb-16">
          <p className="font-medium text-ayoya-brown italic border-l-2 border-ayoya-amber pl-6 py-2">
            Tại sao lại là Rượu xoa bóp võ thuật cổ truyền Bình Định?
          </p>
          <p>
            Câu chuyện bắt nguồn từ những lò võ truyền thống tại Bình Định. Sau những giờ luyện tập cường độ cao, các võ
            sư dùng bài thuốc xoa bóp bí truyền để phục hồi thể lực, thông kinh lạc và làm dịu các vết bầm.
          </p>
          <p>
            Chúng tôi kế thừa công thức ấy, kết hợp cùng quy trình "Tận tâm": từ việc trực tiếp chọn lựa từng vị thảo
            dược phơi khô dưới nắng giòn, đến khâu đóng gói tỉ mỉ như một món quà từ đất mẹ. Đó là bằng chứng thép cho
            giá trị "Chất lượng" mà AYOYA cam kết.
          </p>
          <p>
            Từ nền tảng đó, AYOYA mở rộng thêm các dòng sản phẩm thảo mộc xông nhà, phong thủy và chăm sóc sức khỏe —
            luôn giữ nguyên tinh thần nguyên bản: nguồn gốc rõ ràng, chế biến thủ công, và đồng hành thật lòng cùng
            khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-ayoya-brown mb-8 text-center">
            Kiến thức <span className="italic">thảo mộc</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOGS.map(blog => (
              <a
                key={blog.title}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-3xl border border-ayoya-brown/5 overflow-hidden hover:modern-zen-shadow transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-ayoya-brown mb-2 leading-snug">{blog.title}</h3>
                  <p className="text-xs text-ayoya-brown/60 line-clamp-2">{blog.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2 px-10 py-4 bg-ayoya-brown text-ayoya-cream rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-green transition-all"
          >
            Khám phá sản phẩm <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
