import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { ALL_PRODUCTS, MORE_PRODUCTS, PRODUCT_RATINGS } from '../data';
import { useCart } from '../context/CartContext';
import { calcOriginalPrice } from '../lib/pricing';
import SectionHeading from './SectionHeading';
import { thumb } from '../lib/thumb';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

// The homepage shows only the most reviewed ones; the catalog page has the rest.
const BEST_SELLERS = [...MORE_PRODUCTS]
  .sort((a, b) => (PRODUCT_RATINGS[b.id]?.reviewCount ?? 0) - (PRODUCT_RATINGS[a.id]?.reviewCount ?? 0))
  .slice(0, 4);

export default function ProductGrid() {
  const { addItem } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  return (
    <section id="more-products" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Nhiều lượt đánh giá trên hai sàn" title="Được Mua" emphasis="Nhiều" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {BEST_SELLERS.map(product => {
            const variants = [
              { label: product.priceUnit, price: product.price, weightGrams: product.weightGrams },
              ...product.priceOptions
            ];
            const selectedLabel = selectedVariants[product.id] ?? variants[0].label;
            const selectedVariant = variants.find(v => v.label === selectedLabel) ?? variants[0];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-ayoya-cream/20 rounded-2xl border border-ayoya-brown/10 overflow-hidden hover:modern-zen-shadow transition-shadow"
              >
                <Link to={`/san-pham/${product.id}`} className="aspect-square overflow-hidden bg-ayoya-brown/5 block">
                  <img loading="lazy"
                    src={thumb(product.image)}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <div className="flex-1 flex flex-col p-4">
                  <Link to={`/san-pham/${product.id}`}>
                    <h3 className="text-sm font-serif text-ayoya-brown mb-1 leading-snug hover:text-ayoya-brick transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-ayoya-brown/75 leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {variants.length > 1 && (
                    <select
                      aria-label={`Chọn loại ${product.title}`}
                      value={selectedLabel}
                      onChange={e => setSelectedVariants(prev => ({ ...prev, [product.id]: e.target.value }))}
                      className="mb-3 w-full min-h-11 text-xs px-2 rounded-lg border border-ayoya-brown/15 bg-white text-ayoya-brown"
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
                      {!product.noDiscount && (
                        <span className="text-xs text-ayoya-brown/75 line-through leading-tight">
                          {formatPrice(calcOriginalPrice(selectedVariant.price))}
                        </span>
                      )}
                      <span className="text-base font-bold text-ayoya-brown leading-tight">{formatPrice(selectedVariant.price)}</span>
                      <span className="text-xs text-ayoya-brown/75 leading-tight">/ {selectedVariant.label}</span>
                    </div>
                    <button
                      onClick={() =>
                        addItem({
                          key: `${product.id}::${selectedVariant.label}`,
                          productId: product.id,
                          title: product.title,
                          image: product.image,
                          variantLabel: variants.length > 1 ? selectedVariant.label : '',
                          unitPrice: selectedVariant.price,
                          weightGrams: selectedVariant.weightGrams
                        })
                      }
                      className="w-11 h-11 flex-shrink-0 rounded-full bg-ayoya-brown text-white flex items-center justify-center hover:bg-ayoya-brick transition-colors active:scale-95"
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

        <div className="mt-8 text-center">
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ayoya-brown text-white text-xs font-bold uppercase tracking-widest hover:bg-ayoya-brick transition-colors"
          >
            Xem tất cả {ALL_PRODUCTS.length} sản phẩm <ArrowRight size={14} />
          </Link>
        </div>


        <p className="mt-10 text-center text-xs text-ayoya-brown/70">
          Nội dung mang tính tham khảo theo kinh nghiệm dân gian — không thay thế tư vấn y tế chuyên môn.
        </p>
      </div>
    </section>
  );
}
