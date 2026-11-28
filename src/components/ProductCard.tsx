import { Link } from 'react-router-dom';
import { PRODUCT_RATINGS, getProductById } from '../data';
import { useCart } from '../context/CartContext';
import { calcOriginalPrice } from '../lib/pricing';
import { combosOf } from '../lib/combo';
import { GIFT_BADGE } from '../lib/gift';
import CardPhoto from './CardPhoto';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

// One product as shown on the home page and the product-line pages. `featured` adds "Mua ngay"
// and the first money-saving pack.
export default function ProductCard({ id, featured = false }: { id: string; featured?: boolean; key?: string }) {
  const { addItem, buyNow } = useCart();
  const product = getProductById(id);
  if (!product) return null;

  const rating = PRODUCT_RATINGS[id];
  const combo = featured ? combosOf(id)[0] : undefined;
  const item = () => ({
    key: `${id}::${product.priceUnit}`,
    productId: id,
    title: product.title,
    image: product.image,
    variantLabel: product.priceOptions.length ? product.priceUnit : '',
    unitPrice: product.price,
    weightGrams: product.weightGrams
  });

  return (
    <article className="card">
      <Link to={`/san-pham/${id}`} className="relative block aspect-square overflow-hidden bg-ayoya-sand">
        <CardPhoto productId={id} image={product.image} alt={product.title} />
        {GIFT_BADGE[id] && (
          <span className="absolute left-3 bottom-3 right-3 w-fit rounded-full border border-ayoya-amber bg-ayoya-white px-3 py-0.5 text-xs font-semibold text-ayoya-wood">
            {GIFT_BADGE[id]}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3 md:p-5">
        <h3 className="text-sm md:text-lg font-bold leading-snug">
          <Link to={`/san-pham/${id}`} className="hover:underline underline-offset-4">
            {product.title}
          </Link>
        </h3>
        {rating && (
          <p className="text-xs md:text-sm font-semibold text-ayoya-gold">
            ★ {rating.stars.toFixed(1)}
            <span className="font-normal text-ayoya-brown/75"> · {rating.reviewCount.toLocaleString('vi-VN')} đánh giá trên sàn</span>
          </p>
        )}
        <p className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-lg md:text-xl font-bold">{formatPrice(product.price)}</span>
          {!product.noDiscount && <span className="text-xs text-ayoya-brown/70 line-through">{formatPrice(calcOriginalPrice(product.price))}</span>}
          <span className="text-xs text-ayoya-brown/70">/ {product.priceUnit}</span>
        </p>
        {combo && (
          <p className="text-xs md:text-sm font-semibold text-ayoya-green">
            {combo.label}: {formatPrice(combo.price)}, lợi {formatPrice(combo.saving)}
          </p>
        )}
        <div className="mt-auto grid gap-2 pt-1">
          {featured && (
            <button onClick={() => buyNow(item())} className="btn">
              Mua ngay
            </button>
          )}
          <button onClick={() => addItem(item())} className="btn btn-ghost" aria-label={`Thêm ${product.title} vào giỏ hàng`}>
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </article>
  );
}
