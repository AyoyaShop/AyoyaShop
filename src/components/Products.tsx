import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Play, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { calcOriginalPrice } from '../lib/pricing';
import SectionHeading from './SectionHeading';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function Products() {
  const { addItem } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-paper bg-ayoya-cream/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Tuyển chọn khắt khe - Chế biến tỉ mỉ" title="Sản Phẩm" emphasis="Di Sản" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map(product => {
            const variants = [
              { label: product.priceUnit, price: product.price, weightGrams: product.weightGrams },
              ...product.priceOptions
            ];
            const selectedLabel = selectedVariants[product.id] ?? variants[0].label;
            const selected = variants.find(v => v.label === selectedLabel) ?? variants[0];

            return (
              <article
                key={product.id}
                id={product.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white border border-ayoya-brown/10 modern-zen-shadow scroll-mt-28"
              >
                <Link to={`/san-pham/${product.id}`} className="relative block aspect-square overflow-hidden bg-ayoya-brown/5">
                  <img
                    loading="lazy"
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {product.video && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-xs text-white">
                      <Play size={12} fill="currentColor" /> Có video
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <Link to={`/san-pham/${product.id}`}>
                    <h3 className="text-xl font-serif leading-snug text-ayoya-brown hover:text-ayoya-brick transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="mt-1 mb-4 text-sm italic text-ayoya-gold">{product.subtitle}</p>

                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-serif font-bold text-ayoya-brown">{formatPrice(selected.price)}</span>
                      <span className="text-sm text-ayoya-brown/75 line-through">{formatPrice(calcOriginalPrice(selected.price))}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {variants.map(v => (
                        <button
                          key={v.label}
                          onClick={() => setSelectedVariants(prev => ({ ...prev, [product.id]: v.label }))}
                          aria-pressed={selected.label === v.label}
                          className={`min-h-11 rounded-lg border px-3 text-xs font-medium transition-colors ${
                            selected.label === v.label
                              ? 'bg-ayoya-brown text-white border-ayoya-brown'
                              : 'bg-white text-ayoya-brown border-ayoya-brown/20 hover:border-ayoya-brown/50'
                          }`}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        addItem({
                          key: `${product.id}::${selected.label}`,
                          productId: product.id,
                          title: product.title,
                          image: product.image,
                          variantLabel: variants.length > 1 ? selected.label : '',
                          unitPrice: selected.price,
                          weightGrams: selected.weightGrams
                        })
                      }
                      className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ayoya-brown text-sm font-bold uppercase tracking-widest text-white hover:bg-ayoya-brick transition-colors"
                    >
                      Thêm vào giỏ <ShoppingCart size={16} />
                    </button>
                    <Link
                      to={`/san-pham/${product.id}`}
                      className="mt-1 flex min-h-11 items-center justify-center gap-1 text-sm text-ayoya-brown underline underline-offset-4"
                    >
                      Xem chi tiết <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
