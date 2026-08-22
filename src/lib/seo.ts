export const SITE_URL = 'https://ayoya.com.vn';

export const DEFAULT_SEO = {
  title: 'AYOYA Shop - Tinh Hoa Thảo Mộc & Lối Sống Tỉnh Thức',
  description:
    'AYOYA - Thương hiệu cao cấp chuyên về các sản phẩm thảo mộc truyền thống, thanh tẩy không gian và hỗ trợ năng lượng phong thủy. Uy tín - Chất lượng - Tận tâm.',
  image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776475858/chat_luong_tam_duc_final_kfwn1o.png',
  url: `${SITE_URL}/`
};

function setMetaByName(name: string, content: string) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

const JSON_LD_ID = 'seo-json-ld';

function setJsonLd(data: object) {
  let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = JSON_LD_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function applySeo(opts: { title: string; description: string; url: string; image: string; jsonLd?: object }) {
  document.title = opts.title;
  setMetaByName('description', opts.description);
  setMetaByProperty('og:title', opts.title);
  setMetaByProperty('og:description', opts.description);
  setMetaByProperty('og:url', opts.url);
  setMetaByProperty('og:image', opts.image);
  setMetaByName('twitter:title', opts.title);
  setMetaByName('twitter:description', opts.description);
  setMetaByName('twitter:image', opts.image);
  setCanonical(opts.url);
  if (opts.jsonLd) setJsonLd(opts.jsonLd);
}

export function applyDefaultSeo() {
  applySeo({
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    url: DEFAULT_SEO.url,
    image: DEFAULT_SEO.image,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AYOYA Shop',
      url: SITE_URL,
      logo: DEFAULT_SEO.image,
      sameAs: ['https://vn.shp.ee/dKiXxDRN', 'https://vt.tiktok.com/ZS4qEo8dm/?page=TikTokShop']
    }
  });
}
