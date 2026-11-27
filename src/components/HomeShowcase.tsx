import { Link } from 'react-router-dom';
import { PRODUCTS, getProductById } from '../data';
import { PILLARS } from '../data/pillars';
import { thumb } from '../lib/thumb';
import ProductCard from './ProductCard';
import TetSetCards from './TetSetCards';
import SectionHeading from './SectionHeading';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

const [herbs, incense, charms] = PILLARS;

// The home page walks through the three product lines, then the Tết sets, then the family story.
export default function HomeShowcase() {
  return (
    <>
      <section id="thao-moc" className="scroll-mt-28 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={herbs.title} title="Ba món khách chọn nhiều nhất" />
          <div className="card-row">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} id={product.id} featured />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to={`/${herbs.slug}`} className="btn btn-ghost">
              Xem {herbs.ids.length} sản phẩm thảo mộc
            </Link>
          </p>
        </div>
      </section>

      <section className="agarwood px-5 py-14 text-ayoya-cream md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={incense.title} title="Một khoảng lặng trong nhà">
            Nhang, nụ trầm cho phòng thờ, phòng khách và những buổi tối cần yên.
          </SectionHeading>
          <div className="card-row">
            {incense.ids.map(id => {
              const product = getProductById(id);
              if (!product) return null;
              return (
                <Link key={id} to={`/san-pham/${id}`} className="block">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    src={thumb(product.image)}
                    alt={product.title}
                    className="aspect-square w-full rounded-2xl border border-ayoya-amber/50 object-cover"
                  />
                  <h3 className="mt-3 text-lg font-bold">{product.title}</h3>
                  <p className="font-semibold text-ayoya-amber">
                    {formatPrice(product.price)} <span className="text-xs font-normal text-ayoya-cream/80">/ {product.priceUnit}</span>
                  </p>
                </Link>
              );
            })}
          </div>
          <p className="mt-8 text-center">
            <Link to={`/${incense.slug}`} className="btn btn-light">
              Khám phá nhang và trầm
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-ayoya-sand px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={charms.title} title="Món nhỏ để bày, để biếu">
            Thẻ rùa vàng để trong ví, chai ngũ cốc để trên kệ.
          </SectionHeading>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 md:gap-6">
            {charms.ids.map(id => (
              <ProductCard key={id} id={id} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link to={`/${charms.slug}`} className="btn btn-ghost">
              Tìm hiểu hai món này
            </Link>
          </p>
        </div>
      </section>

      <section id="bo-qua-tet" className="scroll-mt-28 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Tết Đinh Mùi 2027" title="Bộ quà Tết">
            Ghép sẵn từ món bán lẻ, bấm một lần là đủ bộ.
          </SectionHeading>
          <TetSetCards />
        </div>
      </section>

      <section className="bg-ayoya-sand px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <img
            loading="lazy"
            fetchPriority="low"
            src="/photos/binh-khi-700.webp"
            alt="Giá binh khí trong võ đường"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <div>
            <p className="eyebrow">Chuyện nhà võ</p>
            <h2 className="text-[clamp(1.65rem,2.9vw,2.25rem)] font-bold leading-tight">Võ đường Hồng Khanh, từ năm 1983</h2>
            <p className="mt-4">Sau mỗi buổi tập nặng, người trong lò dùng bài thuốc xoa bóp của gia đình.</p>
            <p className="mt-3">Tôi giữ lại bài thuốc ấy, tự đóng gói từng đơn và tự trả lời từng tin nhắn của khách.</p>
            <dl className="my-6 grid grid-cols-3 gap-3">
              {[
                ['1983', 'Bài thuốc ra đời ở võ đường'],
                ['2020', 'Thêm thảo mộc xông, ngâm, đồ thờ'],
                ['2022', 'Bán trên TikTok Shop và Shopee']
              ].map(([year, text]) => (
                <div key={year} className="border-t-2 border-ayoya-amber pt-2">
                  <dt className="font-serif text-2xl font-bold text-ayoya-green">{year}</dt>
                  <dd className="text-xs">{text}</dd>
                </div>
              ))}
            </dl>
            <Link to="/ve-chung-toi" className="btn btn-ghost">
              Đọc chuyện gia đình
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
