import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import LibraryBanner from '../components/LibraryBanner';
import { ARTICLES } from '../data/articles';
import { applySeo } from '../lib/seo';
import { ARTICLES_META } from '../lib/pageMeta';

// Articles that walk through using something; the rest are background reading.
const GUIDES = new Set([
  'cach-su-dung-dau-goi-thao-duoc-moc-an',
  'cach-xong-nha-cuoi-nam',
  'mot-goi-xong-nha-dung-may-lan',
  'dot-than-va-nu-tram-khong-bi-tat',
  'lau-don-ban-tho-ngay-tet',
  'dau-xoa-bop-vo-thuat-binh-dinh-cho-nguoi-tap-the-thao'
]);

const SECTIONS = [
  { title: 'Hướng dẫn sử dụng', articles: ARTICLES.filter(a => GUIDES.has(a.slug)) },
  { title: 'Bài viết kiến thức', articles: ARTICLES.filter(a => !GUIDES.has(a.slug)) }
];

export default function ArticlesPage() {
  useEffect(() => {
    applySeo(ARTICLES_META);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> / Cẩm Nang
        </p>
        <h1 className="mb-6 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">Cẩm Nang</h1>
        <LibraryBanner />
        {SECTIONS.map(section => (
          <section key={section.title} className="mt-10">
            <h2 className="mb-5 text-2xl font-bold">{section.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.articles.map(article => (
                <ArticleCard key={article.slug} article={article} heading="h3" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
