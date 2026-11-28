import { ALL_PRODUCTS, CONTACT_INFO, PRODUCT_GALLERIES } from '../data';
import { PRODUCT_SEO } from '../data/seoText';
import { POLICIES, type Policy } from '../data/policies';
import { PILLARS, type Pillar } from '../data/pillars';
import { ARTICLES, type Article } from '../data/articles';
import { BOOKS, type Book } from '../data/books';
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
  'Chuyện nhà võ: võ đường Hồng Khanh từ năm 1983',
  'Câu chuyện AYOYA: từ bài thuốc xoa bóp của gia đình ở võ đường Hồng Khanh, Bình Định năm 1983 đến thảo mộc, trầm hương và phong thủy hôm nay.',
  '/products/nguyen-tuan-kiet-founder.jpg'
);

export const TET_META = page(
  '/bo-qua-tet',
  'Bộ quà Tết 2027: xông nhà, bàn thờ, biếu cha mẹ',
  'Ba bộ quà Tết Đinh Mùi 2027 của AYOYA: Xông Nhà Đón Tết, Bàn Thờ Ngày Xuân, Biếu Cha Mẹ. Giá bằng mua lẻ, đồng kiểm khi nhận hàng.',
  '/products/xong-nha-2.webp'
);

export const TRACK_META = page(
  '/tra-cuu-don',
  'Tra cứu đơn hàng',
  'Xem trạng thái và mã vận đơn của đơn đã đặt trên ayoya.com.vn bằng mã đơn và số điện thoại.'
);

export const ARTICLES_META = page(
  '/bai-viet',
  'Cẩm Nang: xông nhà, bàn thờ và thảo mộc',
  'Hướng dẫn của AYOYA Shop về xông nhà, thờ cúng và cách dùng thảo mộc, trầm hương trong gia đình.'
);

export function articleMeta(article: Article): PageMeta {
  const meta = page(`/bai-viet/${article.slug}`, article.seoTitle, article.description, article.hero.src);
  const images = [article.hero.src, ...article.blocks.flatMap(block => (block.type === 'img' ? [block.src] : []))];
  return {
    ...meta,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.description,
          datePublished: article.published,
          dateModified: article.published,
          image: images.map(absoluteUrl),
          mainEntityOfPage: meta.url,
          author: { '@type': 'Person', name: 'Nguyễn Tuấn Kiệt' },
          publisher: { '@type': 'Organization', name: 'AYOYA Shop', url: SITE_URL }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Cẩm Nang', item: `${SITE_URL}/bai-viet` },
            { '@type': 'ListItem', position: 3, name: article.title, item: meta.url }
          ]
        }
      ]
    }
  };
}

export const LIBRARY_META = page(
  '/thu-vien-sach',
  'Thư Viện Sách: sách xưa tải miễn phí',
  'Sách xưa về lịch sử, văn học, truyện cổ và Phật giáo, tải miễn phí từ AYOYA Shop, không cần đăng ký.'
);

export function bookMeta(book: Book): PageMeta {
  const meta = page(`/thu-vien-sach/${book.slug}`, `${book.title} – tải sách miễn phí`, `${book.author}. ${book.intro}`, book.cover?.src);
  return {
    ...meta,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Book',
          name: book.title,
          author: { '@type': 'Person', name: book.author },
          description: book.intro,
          url: meta.url,
          image: meta.image,
          isAccessibleForFree: true
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: `${SITE_URL}/` },
            { '@type': 'ListItem', position: 2, name: 'Cẩm Nang', item: `${SITE_URL}/bai-viet` },
            { '@type': 'ListItem', position: 3, name: 'Thư Viện Sách', item: `${SITE_URL}/thu-vien-sach` },
            { '@type': 'ListItem', position: 4, name: book.title, item: meta.url }
          ]
        }
      ]
    }
  };
}

export function pillarMeta(pillar: Pillar): PageMeta {
  return page(`/${pillar.slug}`, pillar.title, pillar.seoDescription, pillar.image);
}

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
    ...PILLARS.map(pillarMeta),
    TET_META,
    TRACK_META,
    ABOUT_META,
    ARTICLES_META,
    ...ARTICLES.map(articleMeta),
    LIBRARY_META,
    ...BOOKS.map(bookMeta),
    FAQ_META,
    CONTACT_META,
    ...POLICIES.map(policyMeta),
    ...ALL_PRODUCTS.map(productMeta)
  ];
}
