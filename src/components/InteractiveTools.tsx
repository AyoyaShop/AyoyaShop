import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, RefreshCcw, ChevronLeft } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { QUIZ, getProductById } from '../data';
import { PRODUCT_SEO } from '../data/seoText';
import { thumb } from '../lib/thumb';

// Two questions: what it is for, then which kind. Each second answer names one product.
export default function InteractiveTools() {
  const [need, setNeed] = useState<number | null>(null);
  const [productId, setProductId] = useState('');

  const group = need === null ? null : QUIZ.needs[need];
  const result = productId ? getProductById(productId) : undefined;

  const restart = () => {
    setNeed(null);
    setProductId('');
  };

  const optionClass =
    'w-full p-4 text-left border border-ayoya-cream/15 rounded-2xl hover:bg-ayoya-cream hover:text-ayoya-brown transition-all flex items-center justify-between gap-3';

  return (
    <section id="quiz" className="py-16 md:py-24 bg-paper bg-ayoya-cream/40 scroll-mt-24 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHeading eyebrow="Trả lời 2 câu hỏi" title="Chọn Đúng" emphasis="Sản Phẩm" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ayoya-brown p-6 md:p-10 rounded-2xl text-ayoya-cream"
        >
          {result ? (
            <div className="flex flex-col items-center text-center" aria-live="polite">
              <p className="text-ayoya-amber mb-4 uppercase tracking-[0.3em] font-bold text-xs">Gợi ý cho bạn</p>
              <img src={thumb(result.image)} alt={result.title} className="w-40 h-40 rounded-2xl object-cover mb-4" />
              <h3 className="text-2xl font-serif mb-2">{result.title}</h3>
              <p className="text-ayoya-cream/75 text-sm leading-relaxed max-w-sm mb-3">{PRODUCT_SEO[result.id]?.description}</p>
              <p className="font-serif text-xl mb-6">
                {result.price.toLocaleString('vi-VN')}đ <span className="text-sm text-ayoya-cream/75">/ {result.priceUnit}</span>
              </p>
              <Link
                to={`/san-pham/${result.id}`}
                className="w-full min-h-12 flex items-center justify-center bg-ayoya-amber text-ayoya-brown rounded-full font-bold uppercase tracking-widest text-xs"
              >
                Xem và đặt mua
              </Link>
              <button
                onClick={restart}
                className="mt-3 min-h-11 flex items-center justify-center gap-2 text-ayoya-cream/75 hover:text-ayoya-cream text-xs uppercase font-bold tracking-widest"
              >
                <RefreshCcw size={14} /> Chọn lại
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-ayoya-amber mb-3">Câu {group ? 2 : 1}/2</p>
              <h3 className="text-xl md:text-2xl font-serif mb-6 leading-snug">{group ? group.question : QUIZ.question}</h3>
              <div className="space-y-3">
                {group
                  ? group.options.map(option => (
                      <button key={option.productId} onClick={() => setProductId(option.productId)} className={optionClass}>
                        <span className="font-medium text-sm">{option.text}</span>
                        <ChevronRight size={18} className="flex-shrink-0" />
                      </button>
                    ))
                  : QUIZ.needs.map((item, index) => (
                      <button key={item.text} onClick={() => setNeed(index)} className={optionClass}>
                        <span className="font-medium text-sm">{item.text}</span>
                        <ChevronRight size={18} className="flex-shrink-0" />
                      </button>
                    ))}
              </div>
              {group && (
                <button onClick={restart} className="mt-4 min-h-11 flex items-center gap-1 text-xs text-ayoya-cream/75 hover:text-ayoya-cream">
                  <ChevronLeft size={14} /> Quay lại câu 1
                </button>
              )}
            </div>
          )}
        </motion.div>

        <a
          href="/phong-thuy-chuyen-sau-ve-thanh-tay-khong-gian.pdf"
          download="Phong-Thuy-Chuyen-Sau-Ayoya.pdf"
          className="mt-4 flex min-h-11 items-center justify-center text-sm text-ayoya-brown underline underline-offset-4"
        >
          Tải tài liệu phong thủy chuyên sâu (PDF)
        </a>
      </div>
    </section>
  );
}
