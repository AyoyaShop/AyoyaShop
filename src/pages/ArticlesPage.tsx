import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { ARTICLES } from '../data/articles';
import { applySeo } from '../lib/seo';
import { ARTICLES_META } from '../lib/pageMeta';

export default function ArticlesPage() {
  useEffect(() => {
    applySeo(ARTICLES_META);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> / Bài viết
        </p>
        <h1 className="mb-8 text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">Bài viết</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map(article => (
            <ArticleCard key={article.slug} article={article} heading="h2" />
          ))}
        </div>
      </div>
    </div>
  );
}
