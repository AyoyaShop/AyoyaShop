import { Link } from 'react-router-dom';
import type { Article } from '../data/articles';
import { articleDate, smallImage } from '../lib/article';

// `wide` puts the photo beside the text from tablet width up, for a lone article.
export default function ArticleCard({ article, heading: Heading, wide }: { key?: string; article: Article; heading: 'h2' | 'h3'; wide?: boolean }) {
  return (
    <Link to={`/bai-viet/${article.slug}`} className={`card block overflow-hidden ${wide ? 'md:grid md:grid-cols-2' : ''}`}>
      <img
        src={smallImage(article.hero.src)}
        alt={article.hero.alt}
        width={720}
        height={Math.round((720 * article.hero.height) / article.hero.width)}
        loading="lazy"
        className={`aspect-video h-auto w-full object-cover ${wide ? 'md:h-full' : ''}`}
      />
      <div className={wide ? 'p-4 md:self-center md:p-6' : 'p-4'}>
        <Heading className="text-lg leading-snug font-bold">{article.title}</Heading>
        <p className="mt-2 text-sm text-ayoya-brown/75">{article.description}</p>
        <p className="mt-2 text-xs text-ayoya-brown/70">{articleDate(article.published)}</p>
      </div>
    </Link>
  );
}
