import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BLOGS } from '../data';

export default function Blogs() {
  return (
    <section className="py-24 bg-paper bg-ayoya-cream/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-ayoya-brown mb-6">
              Thư Viện <span className="italic">Niềm Tin</span>
            </h2>
            <p className="text-ayoya-brown/70 leading-relaxed">
              Kiến thức cổ truyền và những câu chuyện về lối sống tỉnh thức, 
              giúp bạn thấu hiểu hơn về dòng chảy năng lượng trong không gian sống.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-ayoya-brown font-bold uppercase tracking-widest text-sm border-b-2 border-ayoya-amber pb-1 hover:text-ayoya-amber transition-colors">
            Xem tất cả bài viết
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <motion.article 
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden organic-border aspect-[16/10] mb-6">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ayoya-brown/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-serif text-ayoya-brown mb-3 group-hover:text-ayoya-amber transition-colors">
                {blog.title}
              </h3>
              <p className="text-ayoya-brown/60 text-sm leading-relaxed mb-4 line-clamp-2">
                {blog.excerpt}
              </p>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ayoya-amber group-hover:underline">
                Đọc thêm
              </span>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 p-8 border border-ayoya-brown/5 rounded-3xl bg-white/50 text-center">
          <p className="text-[10px] text-ayoya-brown/40 uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto">
            <span className="font-bold text-ayoya-amber">Tuyên bố miễn trừ trách nhiệm y tế:</span> Các thông tin trên thư viện chỉ mang tính chất tham khảo và tìm hiểu di sản, không thay thế cho việc chẩn đoán hoặc điều trị y tế chuyên nghiệp. Vui lòng tham vấn ý kiến bác sĩ trước khi áp dụng các liệu pháp thảo mộc nếu bạn có tình trạng sức khỏe đặc biệt.
          </p>
        </div>
      </div>
    </section>
  );
}
