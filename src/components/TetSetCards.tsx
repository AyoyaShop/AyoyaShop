import { getProductById } from '../data';
import { useCart } from '../context/CartContext';
import { TET_SETS, setCartItems } from '../data/tetSets';
import { GIFT_LINE, hasGift } from '../lib/gift';
import { promoDiscount } from '../lib/promo';
import { thumb } from '../lib/thumb';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function TetSetCards({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const { addItem, openCart } = useCart();
  const Heading = headingLevel;

  return (
    <div className={headingLevel === 'h2' ? 'grid gap-6 md:grid-cols-3' : 'card-row'}>
      {TET_SETS.map(set => {
        const items = setCartItems(set);
        const total = items.reduce((sum, item) => sum + item.unitPrice, 0);
        return (
          <article key={set.id} className="card">
            <div className="grid gap-0.5 bg-ayoya-sand" style={{ gridTemplateColumns: `repeat(${set.items.length}, 1fr)` }}>
              {set.items.map(({ id }) => (
                <img
                  key={id}
                  loading="lazy"
                  fetchPriority="low"
                  src={thumb(getProductById(id)?.image ?? '')}
                  alt=""
                  className="h-36 w-full object-cover"
                />
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <Heading className="text-xl font-bold">{set.name}</Heading>
              <p className="text-sm text-ayoya-brown/75">{set.note}</p>
              <ul className="text-sm">
                {set.items.map(item => (
                  <li key={item.id} className="border-b border-dashed border-ayoya-sand py-1.5">
                    {item.text}
                  </li>
                ))}
                {hasGift(set.items.map(item => item.id)) && <li className="py-1.5 font-semibold text-ayoya-wood">{GIFT_LINE}</li>}
              </ul>
              <p className="flex items-baseline gap-2">
                <span className="text-xl font-bold">{formatPrice(total)}</span>
                <span className="text-xs text-ayoya-brown/70">bằng giá mua lẻ</span>
              </p>
              {promoDiscount(total) > 0 && (
                <p className="text-sm font-semibold text-ayoya-green">
                  Có mã trên menu hoặc thư cảm ơn: còn {formatPrice(total - promoDiscount(total))}
                </p>
              )}
              <button
                onClick={() => {
                  items.forEach(item => addItem(item));
                  openCart();
                }}
                className="btn mt-auto"
              >
                Thêm cả bộ vào giỏ
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
