import { Link } from 'react-router-dom';
import { SHOPEE_LINK, CONTACT_INFO, TIKTOK_PROFILE } from '../data';
import { BRAND_DESCRIPTION, PILLARS } from '../data/pillars';
import { POLICIES } from '../data/policies';
import TikTokShopLink from './TikTokShopLink';

const linkClass = 'block py-1.5 hover:underline underline-offset-4';

export default function Footer() {
  return (
    <footer className="bg-ayoya-brown px-5 pt-14 pb-8 text-sm text-ayoya-sand">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <p className="mb-3 font-serif text-lg font-bold text-ayoya-cream">AYOYA</p>
          <p className="leading-relaxed">{BRAND_DESCRIPTION}</p>
          <p className="mt-3 leading-relaxed">{CONTACT_INFO.address}</p>
        </div>

        <div>
          <h3 className="mb-2 text-base font-bold text-ayoya-cream">Mua sắm</h3>
          <Link to="/san-pham" className={linkClass}>Tất cả sản phẩm</Link>
          {PILLARS.map(pillar => (
            <Link key={pillar.slug} to={`/${pillar.slug}`} className={linkClass}>{pillar.title}</Link>
          ))}
          <Link to="/bo-qua-tet" className={linkClass}>Bộ quà Tết</Link>
        </div>

        <div>
          <h3 className="mb-2 text-base font-bold text-ayoya-cream">Hỗ trợ</h3>
          <Link to="/hoi-dap" className={linkClass}>Hỏi đáp</Link>
          <Link to="/lien-he" className={linkClass}>Liên hệ</Link>
          {POLICIES.map(policy => (
            <Link key={policy.slug} to={`/chinh-sach/${policy.slug}`} className={linkClass}>{policy.title}</Link>
          ))}
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-2 text-base font-bold text-ayoya-cream">Kết nối</h3>
          <a href={CONTACT_INFO.zaloHref} target="_blank" rel="noopener noreferrer" className={linkClass}>Zalo {CONTACT_INFO.phone}</a>
          <a href={`mailto:${CONTACT_INFO.email}`} className={`${linkClass} break-all`}>{CONTACT_INFO.email}</a>
          <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>Facebook</a>
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>Instagram</a>
          <a href={TIKTOK_PROFILE} target="_blank" rel="noopener noreferrer" className={linkClass}>TikTok</a>
          <a href={SHOPEE_LINK} target="_blank" rel="noopener noreferrer" className={linkClass}>Gian hàng Shopee</a>
          <TikTokShopLink label="Gian hàng TikTok Shop" className={`${linkClass} text-left cursor-pointer`}>Gian hàng TikTok Shop</TikTokShopLink>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-ayoya-cream/15 pt-5 text-xs text-ayoya-sand/70">© 2026 AYOYA SHOP</p>
    </footer>
  );
}
