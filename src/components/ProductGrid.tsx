import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { MORE_PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function ProductGrid() {
  const { addItem } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

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
                <div className="aspect-square overflow-hidden bg-ayoya-brown/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

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

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <span className="text-base font-bold text-ayoya-brown">{formatPrice(selectedVariant.price)}</span>
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
      </div>
    </section>
  );
}
