import { motion } from 'motion/react';
import { BLOGS } from '../data';

export default function Blogs() {
  return (
    <section className="py-24 bg-ayoya-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Phần Tiêu đề của khu vực Bài viết --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="block text-[10px] md:text-xs font-bold text-ayoya-brown uppercase tracking-[0.25em] mb-3">
            KIẾN THỨC & TRẢI NGHIỆM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ayoya-brown">
            Góc Nhìn Khai Sáng
          </h2>
        </motion.div>

        {/* --- Phần Lưới hiển thị các bài viết --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOGS.map((blog, index) => (
            
            // THẺ NÀY ĐÃ ĐƯỢC CHUYỂN THÀNH <motion.a> ĐỂ CLICK ĐƯỢC
            <motion.a
              key={index}
              href={blog.link}           // Lệnh lấy link bài viết từ data.ts
              target="_blank"            // Lệnh mở bài viết sang một tab mới
              rel="noopener noreferrer"  // Bảo mật khi mở tab mới
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block cursor-pointer" // cursor-pointer giúp chuột biến thành hình bàn tay khi trỏ vào
            >
              {/* Khung chứa Ảnh */}
              <div className="rounded-[32px] overflow-hidden mb-6 modern-zen-shadow border border-ayoya-brown/5">
                <img
                  src={blog.image}       // Lệnh lấy link ảnh từ data.ts
                  alt={blog.title}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Khung chứa Tiêu đề */}
              <h3 className="text-xl font-bold text-ayoya-brown mb-3 group-hover:text-yellow-600 transition-colors">
                {blog.title}
              </h3>
              
              {/* Khung chứa Mô tả ngắn */}
              <p className="text-ayoya-brown/70 text-sm leading-relaxed mb-4">
                {blog.excerpt}
              </p>
              
              {/* Chữ ĐỌC THÊM */}
              <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.15em] group-hover:text-ayoya-brown transition-colors">
                Đọc thêm
              </span>
              
            </motion.a>

          ))}
        </div>
      </div>
    </section>
  );
}
