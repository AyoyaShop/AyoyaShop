import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const features = [
    { name: 'Thành phần', ayoya: '100% thảo mộc tự nhiên, công thức truyền thống', mass: 'Hương liệu hóa học, chất tạo màu' },
    { name: 'Sản xuất', ayoya: 'Thủ công tỉ mỉ, kiểm soát từng mẻ hàng', mass: 'Sản xuất công nghiệp số lượng lớn' },
    { name: 'Công dụng', ayoya: 'Chăm sóc thân - tâm và thanh lọc năng lượng', mass: 'Chỉ có tác dụng làm sạch hoặc mùi hương ảo' },
    { name: 'Cam kết', ayoya: 'Hỗ trợ tư vấn tận tình sau mua hàng', mass: 'Bán xong là hết trách nhiệm' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-4 underline underline-offset-8 decoration-ayoya-amber/30">
            Khác Biệt Làm Nên <span className="italic">Đẳng Cấp</span>
          </h2>
          <p className="text-ayoya-brown/60 text-sm tracking-widest uppercase">Vì sao khách hàng thượng lưu chọn AYOYA?</p>
        </div>

        <div className="overflow-x-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="min-w-[600px] bg-ayoya-cream/20 rounded-[40px] p-8 md:p-12 border border-ayoya-brown/10"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-ayoya-brown/10">
                  <th className="py-6 text-left font-serif text-xl italic text-ayoya-brown/40">Tiêu chí</th>
                  <th className="py-6 text-left font-serif text-2xl text-ayoya-brown">Sản phẩm Ayoya Shop</th>
                  <th className="py-6 text-left font-serif text-xl opacity-40">Sản phẩm đại trà</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.name} className={i === features.length - 1 ? '' : 'border-b border-ayoya-brown/5'}>
                    <td className="py-8 font-medium text-ayoya-brown">{f.name}</td>
                    <td className="py-8 text-ayoya-brown/80 pr-8">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-ayoya-green/10 flex items-center justify-center text-ayoya-green">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        {f.ayoya}
                      </div>
                    </td>
                    <td className="py-8 text-ayoya-brown/40 pr-8 italic">
                       <div className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-ayoya-brick/10 flex items-center justify-center text-ayoya-brick">
                          <X size={12} strokeWidth={3} />
                        </div>
                        {f.mass}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
