import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, ArrowRight, X } from 'lucide-react';
import { MORE_PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function ProductGrid() {
  const { addItem } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="more-products" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-4 underline underline-offset-8 decoration-ayoya-amber/30">
            Thêm <span className="italic">Thảo Mộc & Phong Thủy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ayoya-brown/60 tracking-wider text-[10px] md:text-sm uppercase">
            Trọn bộ sưu tập chăm sóc thân tâm và không gian sống
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {MORE_PRODUCTS.map(product => {
            const variants = [{ label: product.priceUnit, price: product.price }, ...product.priceOptions];
            const selectedLabel = selectedVariants[product.id] ?? variants[0].label;
            const selectedVariant = variants.find(v => v.label === selectedLabel) ?? variants[0];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-ayoya-cream/20 rounded-3xl border border-ayoya-brown/5 overflow-hidden hover:modern-zen-shadow transition-shadow"
              >
                <button
                  onClick={() => setLightbox({ src: product.image, title: product.title })}
                  className="aspect-square overflow-hidden bg-ayoya-brown/5 cursor-zoom-in"
                  aria-label={`Phóng to ảnh ${product.title}`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </button>

                <div className="flex-1 flex flex-col p-4">
                  <h3 className="text-sm font-serif text-ayoya-brown mb-1 leading-snug">{product.title}</h3>
                  <p className="text-[11px] text-ayoya-brown/60 leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {variants.length > 1 && (
                    <select
                      value={selectedLabel}
                      onChange={e => setSelectedVariants(prev => ({ ...prev, [product.id]: e.target.value }))}
                      className="mb-3 w-full text-[11px] px-2 py-1.5 rounded-lg border border-ayoya-brown/15 bg-white text-ayoya-brown"
                    >
                      {variants.map(v => (
                        <option key={v.label} value={v.label}>
                          {v.label} · {formatPrice(v.price)}
                        </option>
                      ))}
                    </select>
                  )}

                  <div className="mt-auto flex items-end justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-ayoya-brown leading-tight">{formatPrice(selectedVariant.price)}</span>
                      <span className="text-[10px] text-ayoya-brown/50 leading-tight">/ {selectedVariant.label}</span>
                    </div>
                    <button
                      onClick={() =>
                        addItem({
                          key: `${product.id}::${selectedVariant.label}`,
                          productId: product.id,
                          title: product.title,
                          image: product.image,
                          variantLabel: variants.length > 1 ? selectedVariant.label : '',
                          unitPrice: selectedVariant.price
                        })
                      }
                      className="w-9 h-9 flex-shrink-0 rounded-full bg-ayoya-brown text-white flex items-center justify-center hover:bg-ayoya-brick transition-colors"
                      aria-label={`Thêm ${product.title} vào giỏ hàng`}
                    >
                      <ShoppingCart size={15} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.a
          href="https://vn.shp.ee/dKiXxDRN"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="relative mt-12 block w-full aspect-[21/9] md:aspect-[3/1] rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
        >
          <img
            src="https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776451812/c%C3%A1c_sp_kh%C3%A1c_ky8zby.png"
            alt="Các sản phẩm khác của Ayoya"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ayoya-brown/40 group-hover:bg-ayoya-brown/50 transition-colors flex flex-col items-center justify-center text-white text-center p-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">Các sản phẩm khác</h3>
            <p className="text-[10px] md:text-xs opacity-90 mb-6 font-medium uppercase tracking-[0.2em]">Khám phá trọn bộ sưu tập Thảo mộc & Phong thủy</p>
            <div className="flex items-center gap-2 px-8 py-3 bg-ayoya-cream text-ayoya-brown rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-white transition-all shadow-lg">
              Xem đầy đủ tại Shopee <ArrowRight size={14} />
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://vt.tiktok.com/ZS4qEo8dm/?page=TikTokShop"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="relative mt-12 block w-full aspect-[21/9] md:aspect-[3/1] rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
        >
          <img
            src="https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776453450/c%C3%A1c_sp_kh%C3%A1c_2_zrnefx.png"
            alt="Các sản phẩm khác của Ayoya"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ayoya-brown/40 group-hover:bg-ayoya-brown/50 transition-colors flex flex-col items-center justify-center text-white text-center p-6">
            <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">Thế Giới Thảo Mộc</h3>
            <p className="text-[10px] md:text-xs opacity-90 mb-6 font-medium uppercase tracking-[0.2em]">Xem video thực tế & chốt đơn liền tay</p>
            <div className="flex items-center gap-2 px-8 py-3 bg-ayoya-cream text-ayoya-brown rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:bg-white transition-all shadow-lg">
              Vào ngay TikTok Shop <ArrowRight size={14} />
            </div>
          </div>
        </motion.a>

        <p className="mt-10 text-center text-[10px] text-ayoya-brown/40 italic tracking-wide">
          Nội dung mang tính tham khảo theo kinh nghiệm dân gian — không thay thế tư vấn y tế chuyên môn.
        </p>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              src={lightbox.src}
              alt={lightbox.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
