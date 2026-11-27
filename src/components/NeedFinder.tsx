import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_RATINGS, getProductById } from '../data';
import { useCart } from '../context/CartContext';
import { calcOriginalPrice } from '../lib/pricing';
import { combosOf } from '../lib/combo';
import { thumb } from '../lib/thumb';
import SectionHeading from './SectionHeading';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

// Health supplements are left out on purpose: they are chosen from their own category.
const NEEDS = [
  { label: 'Chăm sóc cơ thể', ids: ['dau-vo', 'la-xong-moc-an', 'dau-goi-moc-an', 'ngam-chan-moc-an'] },
  { label: 'Xông, dọn nhà cửa', ids: ['thao-moc-xong-nha', 'tram-huong-xong-nha', 'than-vien-xong-nha', 'nuoc-lau-ban-tho'] },
  { label: 'Thắp hương, thờ cúng', ids: ['nhang-tram-cao-cap', 'nu-tram-huong', 'nhang-que', 'nu-que'] },
  { label: 'Làm quà, phong thủy', ids: ['chai-ngu-coc-phong-thuy', 'rua-vang-phong-thuy', 'nu-tram-huong', 'dau-vo'] }
];

export default function NeedFinder() {
  const { addItem } = useCart();
  const [need, setNeed] = useState(0);

  return (
    <section id="nhu-cau" className="py-16 md:py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Một chạm là thấy đúng món" title="Bạn Đang" emphasis="Cần Gì?" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {NEEDS.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setNeed(index)}
              aria-pressed={need === index}
              className={`min-h-14 rounded-2xl border px-3 text-sm font-semibold transition-colors ${
                need === index ? 'border-ayoya-green bg-ayoya-green text-white' : 'border-ayoya-brown/15 bg-ayoya-cream/30 text-ayoya-brown'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {NEEDS[need].ids.map(id => {
            const product = getProductById(id);
            if (!product) return null;
            const rating = PRODUCT_RATINGS[id];
            const combo = combosOf(id)[0];
            return (
              <article key={id} className="flex flex-col rounded-2xl border border-ayoya-brown/10 bg-white overflow-hidden">
                <Link to={`/san-pham/${id}`} className="block aspect-square bg-ayoya-brown/5">
                  <img loading="lazy" fetchPriority="low" src={thumb(product.image)} alt={product.title} className="w-full h-full object-cover" />
                </Link>
                <div className="flex flex-1 flex-col p-3 md:p-4">
                  <Link to={`/san-pham/${id}`}>
                    <h3 className="text-sm font-serif text-ayoya-brown leading-snug">{product.title}</h3>
                  </Link>
                  {rating && (
                    <p className="mt-1 text-xs text-ayoya-gold font-semibold">
                      ★ {rating.stars.toFixed(1)} · {rating.reviewCount.toLocaleString('vi-VN')} đánh giá
                    </p>
                  )}
                  <div className="mt-auto pt-2">
                    {!product.noDiscount && (
                      <span className="block text-xs text-ayoya-brown/75 line-through">{formatPrice(calcOriginalPrice(product.price))}</span>
                    )}
                    <span className="font-bold text-ayoya-brown">{formatPrice(product.price)}</span>{' '}
                    <span className="text-xs text-ayoya-brown/75">/ {product.priceUnit}</span>
                    {combo && (
                      <Link to={`/san-pham/${id}`} className="mt-1 block text-xs text-ayoya-green font-semibold">
                        {combo.label}: lợi {formatPrice(combo.saving)}
                      </Link>
                    )}
                    <button
                      onClick={() =>
                        addItem({
                          key: `${id}::${product.priceUnit}`,
                          productId: id,
                          title: product.title,
                          image: product.image,
                          variantLabel: product.priceOptions.length ? product.priceUnit : '',
                          unitPrice: product.price,
                          weightGrams: product.weightGrams
                        })
                      }
                      className="mt-2 w-full min-h-11 flex items-center justify-center gap-1.5 rounded-full bg-ayoya-brown text-white text-xs font-bold"
                      aria-label={`Thêm ${product.title} vào giỏ hàng`}
                    >
                      Thêm vào giỏ <ShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/san-pham" className="inline-flex min-h-12 items-center gap-2 px-8 rounded-full border border-ayoya-brown text-ayoya-brown text-xs font-bold uppercase tracking-widest">
            Xem tất cả {ALL_PRODUCTS.length} sản phẩm <ArrowRight size={14} />
          </Link>
          <a
            href="/phong-thuy-chuyen-sau-ve-thanh-tay-khong-gian.pdf"
            download="Phong-Thuy-Chuyen-Sau-Ayoya.pdf"
            className="mt-3 flex min-h-11 items-center justify-center text-sm text-ayoya-brown underline underline-offset-4"
          >
            Tải tài liệu phong thủy chuyên sâu (PDF)
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-ayoya-brown/70">
          Nội dung mang tính tham khảo theo kinh nghiệm dân gian — không thay thế tư vấn y tế chuyên môn.
        </p>
      </div>
    </section>
  );
}
