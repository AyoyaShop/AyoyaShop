import { ALL_PRODUCTS, CONTACT_INFO, PRODUCT_GALLERIES } from '../data';
import { PRODUCT_SEO } from '../data/seoText';
import { POLICIES, type Policy } from '../data/policies';
import { DEFAULT_SEO, SITE_URL } from './seo';

// Shared by the pages (runtime head tags) and scripts/prerender.ts (static HTML per route).
export interface PageMeta {
  path: string;
  title: string;
  description: string;
  url: string;
  image: string;
  jsonLd?: object;
}

const absoluteUrl = (src: string) => (src.startsWith('/') ? `${SITE_URL}${src}` : src);

function page(path: string, title: string, description: string, image = DEFAULT_SEO.image): PageMeta {
  return { path, title: `${title} | AYOYA Shop`, description, url: `${SITE_URL}${path}`, image: absoluteUrl(image) };
}

export const CATALOG_META = page(
  '/san-pham',
  'Tất cả sản phẩm',
  'Toàn bộ sản phẩm thảo mộc, xông nhà phong thủy, thờ cúng và sức khỏe của AYOYA Shop — lọc nhanh theo nhu cầu của bạn.'
);

export const ABOUT_META = page(
  '/ve-chung-toi',
  'Về chúng tôi',
  'Câu chuyện AYOYA — từ lò võ cổ truyền Bình Định năm 1983 đến thương hiệu thảo mộc, phong thủy được hàng chục nghìn khách hàng tin dùng hôm nay.',
  '/products/nguyen-tuan-kiet-founder.jpg'
);

export const FAQ_META = page(
  '/hoi-dap',
  'Hỏi đáp',
  'Giải đáp các thắc mắc thường gặp về vận chuyển, thanh toán, đổi trả và nguồn gốc sản phẩm của AYOYA Shop.'
);

export const CONTACT_META = page(
  '/lien-he',
  'Liên hệ',
  `Liên hệ AYOYA Shop qua địa chỉ ${CONTACT_INFO.address}, hotline ${CONTACT_INFO.phone} hoặc Zalo để được tư vấn sản phẩm thảo mộc, phong thủy.`
);

export function policyMeta(policy: Policy): PageMeta {
  return page(`/chinh-sach/${policy.slug}`, policy.title, policy.seoDescription);
}

export function productMeta(product: (typeof ALL_PRODUCTS)[number]): PageMeta {
  const seo = PRODUCT_SEO[product.id];
  const meta = page(`/san-pham/${product.id}`, product.title, seo?.description ?? product.description, product.image);
  const prices = [product.price, ...product.priceOptions.map(option => option.price)];
  const offer = {
    url: meta.url,
    priceCurrency: 'VND',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@type': 'Organization', name: 'AYOYA Shop' }
  };
  // No aggregateRating: the stars shown on the site come from Shopee and TikTok Shop, which search
  // engines do not accept as this site's own review data.
  return {
    ...meta,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: product.title,
          sku: product.id,
          description: product.description,
          image: (PRODUCT_GALLERIES[product.id] ?? [product.image]).map(absoluteUrl),
          ...(seo?.brand && { brand: { '@type': 'Brand', name: seo.brand } }),
          offers:
            prices.length > 1
              ? { '@type': 'AggregateOffer', lowPrice: Math.min(...prices), highPrice: Math.max(...prices), offerCount: prices.length, ...offer }
              : { '@type': 'Offer', price: product.price, ...offer }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Sản phẩm', item: `${SITE_URL}/san-pham` },
            { '@type': 'ListItem', position: 3, name: product.title, item: meta.url }
          ]
        }
      ]
    }
  };
}

export function allPageMeta(): PageMeta[] {
  return [
    CATALOG_META,
    ABOUT_META,
    FAQ_META,
    CONTACT_META,
    ...POLICIES.map(policyMeta),
    ...ALL_PRODUCTS.map(productMeta)
  ];
}
