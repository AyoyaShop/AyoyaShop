import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '../data';
import { useCart } from '../context/CartContext';
import { applySeo, SITE_URL } from '../lib/seo';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function ProductCatalog() {
  const { addItem } = useCart();
  const [searchParams] = useSearchParams();
  const categoryIds = CATEGORIES.map(c => c.id);
  const initialCategory = searchParams.get('cat');
  const [activeCategory, setActiveCategory] = useState(
    initialCategory && categoryIds.includes(initialCategory) ? initialCategory : 'all'
  );
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    applySeo({
      title: 'Tất cả sản phẩm | AYOYA Shop',
      description: 'Toàn bộ sản phẩm thảo mộc, xông nhà phong thủy, thờ cúng và sức khỏe của AYOYA Shop — lọc nhanh theo nhu cầu của bạn.',
      url: `${SITE_URL}/san-pham`,
      image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776475858/chat_luong_tam_duc_final_kfwn1o.png'
    });
    window.scrollTo(0, 0);
  }, []);

  const visibleProducts = activeCategory === 'all' ? ALL_PRODUCTS : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-serif text-ayoya-brown mb-4 underline underline-offset-8 decoration-ayoya-amber/30">
            Tất cả <span className="italic">sản phẩm</span>
          </h1>
          <p className="max-w-2xl mx-auto text-ayoya-brown/60 tracking-wider text-[10px] md:text-sm uppercase">
            Trọn bộ sưu tập thảo mộc, phong thủy và sức khỏe từ AYOYA
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
              activeCategory === 'all'
                ? 'bg-ayoya-brown text-white border-ayoya-brown'
                : 'bg-white text-ayoya-brown border-ayoya-brown/15 hover:border-ayoya-brown/40'
            }`}
          >
            Tất cả
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                activeCategory === cat.id
                  ? 'bg-ayoya-brown text-white border-ayoya-brown'
                  : 'bg-white text-ayoya-brown border-ayoya-brown/15 hover:border-ayoya-brown/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleProducts.map(product => {
            const variants = [
              { label: product.priceUnit, price: product.price, weightGrams: product.weightGrams },
              ...product.priceOptions
            ];
            const selectedLabel = selectedVariants[product.id] ?? variants[0].label;
            const selectedVariant = variants.find(v => v.label === selectedLabel) ?? variants[0];

            return (
              <div
                key={product.id}
                className="flex flex-col bg-white rounded-3xl border border-ayoya-brown/5 overflow-hidden hover:modern-zen-shadow transition-shadow"
              >
                <Link to={`/san-pham/${product.id}`} className="aspect-square overflow-hidden bg-ayoya-brown/5 block">
                  <img
                    src={product.image}
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
                  <p className="text-[11px] text-ayoya-brown/60 leading-relaxed mb-3 line-clamp-2">{product.description}</p>

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
                          unitPrice: selectedVariant.price,
                          weightGrams: selectedVariant.weightGrams
                        })
                      }
                      className="w-10 h-10 flex-shrink-0 rounded-full bg-ayoya-brown text-white flex items-center justify-center hover:bg-ayoya-brick transition-colors active:scale-95"
                      aria-label={`Thêm ${product.title} vào giỏ hàng`}
                    >
                      <ShoppingCart size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibleProducts.length === 0 && (
          <p className="text-center text-ayoya-brown/50 py-16">Chưa có sản phẩm nào trong nhóm này.</p>
        )}
      </div>
    </div>
  );
}
