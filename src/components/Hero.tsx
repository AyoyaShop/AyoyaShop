import { Link } from 'react-router-dom';
import { Check, Leaf, Wind, Compass } from 'lucide-react';
import { BRAND_DESCRIPTION, PILLARS } from '../data/pillars';

const ICONS = { 'thao-moc': Leaf, 'tram-huong': Wind, 'phong-thuy': Compass };
const PROMISES = ['Đồng kiểm khi nhận hàng', 'Trả tiền khi nhận hoặc chuyển khoản QR', 'Đổi trả trong 7 ngày nếu hàng lỗi'];

// Opening screen: the slogan over a frameless photo, then the three product lines and the shop's promises.
export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-photo">
          <img
            src="/products/mid/dau-xoa-bop-san-vo.webp"
            srcSet="/products/mid/dau-xoa-bop-san-vo.webp 800w, /products/dau-xoa-bop-san-vo.webp 1200w"
            sizes="(min-width: 1024px) 58vw, 100vw"
            fetchPriority="high"
            alt="Chai dầu xoa bóp võ thuật Bình Định trước sân tập võ"
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="max-w-[500px] pt-3 pb-6 lg:py-10">
            <p className="eyebrow">Võ đường Hồng Khanh · Bình Định · từ 1983</p>
            <h1 className="text-[clamp(2.1rem,4.2vw,3.5rem)] font-bold leading-[1.2]">
              Tinh hoa y đạo –<em className="block font-medium text-ayoya-green">Hồn thiêng đất Võ</em>
            </h1>
            <p className="mt-4 mb-7">{BRAND_DESCRIPTION}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/san-pham" className="btn">
                Khám phá sản phẩm
              </Link>
              <Link to="/bo-qua-tet" className="btn btn-ghost">
                Bộ quà Tết
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Ba dòng sản phẩm" className="border-b border-ayoya-sand bg-ayoya-white py-5">
        <ul className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-3">
          {PILLARS.map(pillar => {
            const Icon = ICONS[pillar.slug];
            return (
              <li key={pillar.slug}>
                <Link to={`/${pillar.slug}`} className="flex flex-col items-center gap-2 p-1 text-center md:flex-row md:justify-center md:gap-4 md:text-left">
                  <Icon size={32} strokeWidth={1.4} className="flex-shrink-0 text-ayoya-green" />
                  <span>
                    <span className="block font-serif text-base md:text-lg font-bold text-ayoya-green">{pillar.title}</span>
                    <span className="block text-[11px] md:text-[13px] leading-snug text-ayoya-brown/75">{pillar.tagline}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className="flex flex-col gap-1.5 bg-ayoya-green px-5 py-3 text-sm text-ayoya-cream md:flex-row md:flex-wrap md:justify-center md:gap-x-9">
        {PROMISES.map(text => (
          <li key={text} className="flex items-center gap-2">
            <Check size={15} className="flex-shrink-0 text-[#e2c48f]" />
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
