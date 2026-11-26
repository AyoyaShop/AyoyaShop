import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCT_RATINGS, REVIEW_SUMMARY, SHOPEE_LINK, TIKTOK_LINK, getProductById } from '../data';

const TOP_REVIEWED = Object.entries(PRODUCT_RATINGS)
  .sort(([, a], [, b]) => b.reviewCount - a.reviewCount)
  .slice(0, 4)
  .flatMap(([id, rating]) => {
    const product = getProductById(id);
    return product ? [{ product, rating }] : [];
  });

const formatNumber = (n: number) => n.toLocaleString('vi-VN');

const totalReviews = REVIEW_SUMMARY.tiktokReviews + REVIEW_SUMMARY.shopeeReviews;

const SUMMARY_TILES = [
  { value: REVIEW_SUMMARY.tiktokSold, label: 'sản phẩm đã bán trên TikTok Shop', asOf: REVIEW_SUMMARY.checkedAt },
  { value: `${REVIEW_SUMMARY.shopRating}/5`, label: 'điểm đánh giá shop trên TikTok Shop và Shopee', asOf: REVIEW_SUMMARY.checkedAt },
  { value: formatNumber(totalReviews), label: 'lượt đánh giá trên TikTok Shop và Shopee', asOf: REVIEW_SUMMARY.checkedAt }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-ayoya-brown mb-6 underline underline-offset-8 decoration-ayoya-amber/30">
            Khách Hàng <span className="italic">Đánh Giá</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ayoya-brown/70 text-sm">
            Số liệu từ gian hàng Ayoya trên TikTok Shop và Shopee. Riêng Shopee, {formatNumber(REVIEW_SUMMARY.shopeeFiveStar)} trong{' '}
            {formatNumber(REVIEW_SUMMARY.shopeeReviews)} lượt đánh giá là 5 sao.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
          {SUMMARY_TILES.map(tile => (
            <div key={tile.label} className="p-6 bg-ayoya-cream/40 rounded-3xl border border-ayoya-brown/5">
              <p className="text-4xl font-serif font-bold text-ayoya-brown">{tile.value}</p>
              <p className="mt-2 text-sm text-ayoya-brown/70">{tile.label}</p>
              <p className="mt-1 text-xs text-ayoya-brown/50">tính đến {tile.asOf}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TOP_REVIEWED.map(({ product, rating }, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/san-pham/${product.id}`}
                className="block h-full p-3 rounded-3xl border border-ayoya-brown/10 hover:border-ayoya-amber transition-colors"
              >
                <img loading="lazy" src={product.image} alt={product.title} className="w-full aspect-square object-cover rounded-2xl mb-3" />
                <p className="text-sm font-semibold text-ayoya-brown mb-2">{product.title}</p>
                <p className="flex items-center gap-1 text-sm text-ayoya-brown">
                  <Star size={14} className="text-ayoya-amber fill-ayoya-amber" />
                  <span className="font-bold">{rating.stars.toFixed(1)}</span>
                  <span className="text-ayoya-brown/70">· {formatNumber(rating.reviewCount)} lượt</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-10">
          <a
            href={TIKTOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-ayoya-brown text-white text-center text-xs font-bold uppercase tracking-widest hover:bg-ayoya-brick transition-colors"
          >
            Đọc đánh giá trên TikTok Shop
          </a>
          <a
            href={SHOPEE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border border-ayoya-brown text-ayoya-brown text-center text-xs font-bold uppercase tracking-widest hover:bg-ayoya-brown/5 transition-colors"
          >
            Đọc đánh giá trên Shopee
          </a>
        </div>
      </div>
    </section>
  );
}
