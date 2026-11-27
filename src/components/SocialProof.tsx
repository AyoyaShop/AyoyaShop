import { REVIEW_SUMMARY } from '../data';
import SectionHeading from './SectionHeading';

const formatNumber = (n: number) => n.toLocaleString('vi-VN');

const TILES = [
  { value: REVIEW_SUMMARY.tiktokSold, label: 'sản phẩm đã bán, riêng trên TikTok Shop' },
  { value: `${REVIEW_SUMMARY.shopRating}/5`, label: 'điểm đánh giá gian hàng trên TikTok Shop và Shopee' },
  {
    value: formatNumber(REVIEW_SUMMARY.tiktokReviews + REVIEW_SUMMARY.shopeeReviews),
    label: `lượt đánh giá: ${formatNumber(REVIEW_SUMMARY.tiktokReviews)} TikTok Shop + ${formatNumber(REVIEW_SUMMARY.shopeeReviews)} Shopee`
  }
];

export default function SocialProof() {
  return (
    <section className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Số liệu từ gian hàng trên sàn" title="Khách hàng đánh giá" />
        <div className="grid gap-4 text-center sm:grid-cols-3">
          {TILES.map(tile => (
            <div key={tile.label} className="rounded-2xl border border-ayoya-sand bg-ayoya-white px-4 py-6">
              <p className="font-serif text-4xl font-bold text-ayoya-green">{tile.value}</p>
              <p className="mt-2 text-sm text-ayoya-brown/75">{tile.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ayoya-brown/70">
          Ghi nhận ngày {REVIEW_SUMMARY.checkedAt}. Đây là đánh giá trên sàn, không phải đánh giá gửi tại website này.
        </p>
      </div>
    </section>
  );
}
