import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { applySeo } from '../lib/seo';
import { ARTICLES_META } from '../lib/pageMeta';
import { articleDate, smallImage } from '../lib/article';

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
            <Link key={article.slug} to={`/bai-viet/${article.slug}`} className="card block overflow-hidden">
              <img
                src={smallImage(article.hero.src)}
                alt={article.hero.alt}
                width={720}
                height={Math.round((720 * article.hero.height) / article.hero.width)}
                loading="lazy"
                className="aspect-video h-auto w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg leading-snug font-bold">{article.title}</h2>
                <p className="mt-2 text-sm text-ayoya-brown/75">{article.description}</p>
                <p className="mt-2 text-xs text-ayoya-brown/70">{articleDate(article.published)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
