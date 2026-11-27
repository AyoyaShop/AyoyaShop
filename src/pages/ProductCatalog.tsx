import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES } from '../data';
import { useCart } from '../context/CartContext';
import { applySeo } from '../lib/seo';
import { CATALOG_META } from '../lib/pageMeta';
import { calcOriginalPrice } from '../lib/pricing';
import CardPhoto from '../components/CardPhoto';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function ProductCatalog() {
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  // The chosen category lives in the address, so Back from a product returns to the same list.
  const requested = searchParams.get('cat');
  const activeCategory = requested && CATEGORIES.some(c => c.id === requested) ? requested : 'all';
  const setActiveCategory = (id: string) => setSearchParams(id === 'all' ? {} : { cat: id }, { replace: true });
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    applySeo(CATALOG_META);
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
          <p className="max-w-2xl mx-auto text-ayoya-brown/75 tracking-wider text-xs md:text-sm uppercase">
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
                  <CardPhoto productId={product.id} image={product.image} alt={product.title} />
                </Link>

                <div className="flex-1 flex flex-col p-4">
                  <Link to={`/san-pham/${product.id}`}>
                    <h2 className="text-sm font-serif text-ayoya-brown mb-1 leading-snug hover:text-ayoya-brick transition-colors">
                      {product.title}
                    </h2>
                  </Link>
                  <p className="text-xs text-ayoya-brown/75 leading-relaxed mb-3 line-clamp-2">{product.description}</p>

                  {variants.length > 1 && (
                    <select
                      aria-label={`Chọn loại ${product.title}`}
                      value={selectedLabel}
                      onChange={e => setSelectedVariants(prev => ({ ...prev, [product.id]: e.target.value }))}
                      className="mb-3 w-full text-xs px-2 py-1.5 rounded-lg border border-ayoya-brown/15 bg-white text-ayoya-brown"
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
          <p className="text-center text-ayoya-brown/75 py-16">Chưa có sản phẩm nào trong nhóm này.</p>
        )}
      </div>
    </div>
  );
}
