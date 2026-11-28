import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import SectionHeading from './SectionHeading';
import { ARTICLES } from '../data/articles';

// The three newest articles; the list in data/articles.ts is kept newest first.
export default function HomeArticles() {
  const latest = ARTICLES.slice(0, 3);
  const single = latest.length === 1;

  return (
    <section id="bai-viet" className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Góc Kiến Thức" title="Hướng dẫn dùng cho đúng" />
        <div className={single ? 'mx-auto max-w-4xl' : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
          {latest.map(article => (
            <ArticleCard key={article.slug} article={article} heading="h3" wide={single} />
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link to="/bai-viet" className="inline-flex min-h-11 items-center font-bold text-ayoya-green underline underline-offset-4">
            Xem tất cả bài viết
          </Link>
        </p>
      </div>
    </section>
  );
}
