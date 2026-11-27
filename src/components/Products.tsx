import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Play, ArrowRight, Star } from 'lucide-react';
import { PRODUCTS, PRODUCT_RATINGS } from '../data';
import { useCart } from '../context/CartContext';
import { calcOriginalPrice } from '../lib/pricing';
import { comboSaving } from '../lib/combo';
import { promoDiscount } from '../lib/promo';
import SectionHeading from './SectionHeading';
import CardPhoto from './CardPhoto';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

const cartItem = (product: (typeof PRODUCTS)[number], label: string, price: number, weightGrams: number, hasVariants: boolean) => ({
  key: `${product.id}::${label}`,
  productId: product.id,
  title: product.title,
  image: product.image,
  variantLabel: hasVariants ? label : '',
  unitPrice: price,
  weightGrams
});

// The three products customers buy most, with their money-saving packs, and all three together.
export default function Products() {
  const { addItem, buyNow, openCart } = useCart();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  const trio = PRODUCTS.map(product => cartItem(product, product.priceUnit, product.price, product.weightGrams, true));
  const trioPrice = PRODUCTS.reduce((sum, product) => sum + product.price, 0);
  const trioWeight = PRODUCTS.reduce((sum, product) => sum + product.weightGrams, 0);

  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-paper bg-ayoya-cream/40 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Lấy combo lợi hơn mua lẻ" title="Khách Mua" emphasis="Nhiều Nhất" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map(product => {
            const variants = [
              { label: product.priceUnit, price: product.price, weightGrams: product.weightGrams },
              ...product.priceOptions
            ];
            const selectedLabel = selectedVariants[product.id] ?? variants[0].label;
            const selected = variants.find(v => v.label === selectedLabel) ?? variants[0];
            const rating = PRODUCT_RATINGS[product.id];
            const item = () => cartItem(product, selected.label, selected.price, selected.weightGrams, variants.length > 1);

            return (
              <article
                key={product.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white border border-ayoya-brown/10 modern-zen-shadow"
              >
                <Link to={`/san-pham/${product.id}`} className="relative block aspect-square overflow-hidden bg-ayoya-brown/5">
                  <CardPhoto productId={product.id} image={product.image} alt={product.title} />
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
                  {rating && (
                    <p className="mt-1 mb-4 flex items-center gap-1 text-sm text-ayoya-gold font-semibold">
                      <Star size={14} className="fill-ayoya-amber text-ayoya-amber" />
                      {rating.stars.toFixed(1)} · {rating.reviewCount.toLocaleString('vi-VN')} đánh giá
                    </p>
                  )}

                  <div className="mt-auto">
                    <div className="space-y-2 mb-4">
                      {variants.map(v => {
                        const saving = comboSaving(product.id, v.label);
                        const active = selected.label === v.label;
                        return (
                          <button
                            key={v.label}
                            onClick={() => setSelectedVariants(prev => ({ ...prev, [product.id]: v.label }))}
                            aria-pressed={active}
                            className={`w-full min-h-11 flex items-center justify-between gap-2 rounded-xl border px-3 text-sm text-left transition-colors ${
                              active ? 'border-ayoya-brown bg-ayoya-brown text-white' : 'border-ayoya-brown/20 bg-white text-ayoya-brown'
                            }`}
                          >
                            <span>
                              {v.label}
                              {saving > 0 && (
                                <span className={`ml-2 text-xs font-bold ${active ? 'text-ayoya-amber' : 'text-ayoya-green'}`}>
                                  lợi {formatPrice(saving)}
                                </span>
                              )}
                            </span>
                            <span className="font-bold whitespace-nowrap">{formatPrice(v.price)}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-serif font-bold text-ayoya-brown">{formatPrice(selected.price)}</span>
                      <span className="text-sm text-ayoya-brown/75 line-through">{formatPrice(calcOriginalPrice(selected.price))}</span>
                    </div>
                    <button
                      onClick={() => buyNow(item())}
                      className="flex min-h-12 w-full items-center justify-center rounded-full bg-ayoya-brown text-sm font-bold uppercase tracking-widest text-white hover:bg-ayoya-brick transition-colors"
                    >
                      Mua ngay
                    </button>
                    <button
                      onClick={() => addItem(item())}
                      className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-ayoya-brown text-sm font-bold text-ayoya-brown"
                    >
                      Thêm vào giỏ <ShoppingCart size={15} />
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

        <div className="mt-8 rounded-2xl border border-ayoya-brown/15 bg-white p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h3 className="text-xl font-serif text-ayoya-brown mb-2">Cả ba món trong một đơn: {formatPrice(trioPrice)}</h3>
            <ul className="text-sm text-ayoya-brown/80 space-y-1">
              <li>Giá bằng mua lẻ: {PRODUCTS.map(p => `${p.priceUnit.toLowerCase()} ${formatPrice(p.price)}`).join(' + ')}.</li>
              {trioWeight <= 1000 && <li>Nặng khoảng {trioWeight}g, dưới 1kg: chỉ trả một mức phí ship thấp nhất của khu vực.</li>}
              <li>
                Có mã trên menu hoặc thư cảm ơn thì đơn này được giảm thêm <strong>{formatPrice(promoDiscount(trioPrice))}</strong>.
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              trio.forEach(item => addItem(item));
              openCart();
            }}
            className="mt-4 md:mt-0 flex-shrink-0 w-full md:w-auto min-h-12 px-8 rounded-full bg-ayoya-green text-white text-sm font-bold uppercase tracking-widest"
          >
            Thêm cả ba vào giỏ
          </button>
        </div>
      </div>
    </section>
  );
}
