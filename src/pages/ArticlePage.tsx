import { Fragment, ReactNode, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ARTICLES, type ArticleBlock } from '../data/articles';
import { applySeo } from '../lib/seo';
import { articleMeta } from '../lib/pageMeta';
import { articleDate, smallImage } from '../lib/article';
import NotFound from './NotFound';

const linkClass = 'font-semibold text-ayoya-green underline underline-offset-4';

function rich(text: string): ReactNode {
  // Splitting on the link pattern gives: text, label, address, text, label, address, ..., text.
  const parts = text.split(/\[([^\]]+)\]\(([^)\s]+)\)/);
  return parts.map((part, i) => {
    if (i % 3 === 0) return <Fragment key={i}>{part}</Fragment>;
    if (i % 3 === 2) return null;
    const href = parts[i + 1];
    return href.startsWith('/') ? (
      <Link key={i} to={href} className={linkClass}>{part}</Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{part}</a>
    );
  });
}

function Photo({ image, eager }: { image: { src: string; alt: string; width: number; height: number }; eager?: boolean }) {
  return (
    <img
      src={image.src}
      srcSet={`${smallImage(image.src)} 720w, ${image.src} 1280w`}
      sizes="(min-width: 768px) 720px, calc(100vw - 40px)"
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      className="my-6 h-auto w-full rounded-2xl"
    />
  );
}

// Consecutive list items become one list.
function renderBlocks(blocks: ArticleBlock[]): ReactNode[] {
  const out: ReactNode[] = [];
  let items: ReactNode[] = [];
  const closeList = () => {
    if (!items.length) return;
    out.push(<ul key={`list-${out.length}`} className="mb-4 list-disc space-y-1.5 pl-5">{items}</ul>);
    items = [];
  };
  blocks.forEach((block, i) => {
    if (block.type === 'li') {
      items.push(<li key={i}>{rich(block.text)}</li>);
      return;
    }
    closeList();
    if (block.type === 'img') out.push(<div key={i}><Photo image={block} /></div>);
    else if (block.type === 'h2') out.push(<h2 key={i} className="mt-10 mb-3 text-2xl font-bold">{block.text}</h2>);
    else if (block.type === 'h3') out.push(<h3 key={i} className="mt-6 mb-2 text-lg font-bold">{block.text}</h3>);
    else if (block.type === 'quote')
      out.push(<blockquote key={i} className="mb-4 border-l-4 border-ayoya-amber bg-ayoya-white py-3 pr-3 pl-4 italic">{block.text}</blockquote>);
    else out.push(<p key={i} className="mb-4">{rich(block.text)}</p>);
  });
  closeList();
  return out;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = ARTICLES.find(a => a.slug === slug);

  useEffect(() => {
    if (!article) return;
    applySeo(articleMeta(article));
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) return <NotFound />;

  return (
    <article className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-3xl leading-relaxed">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> /{' '}
          <Link to="/bai-viet" className="underline underline-offset-4">Cẩm Nang</Link>
        </p>
        <h1 className="text-[clamp(1.75rem,3.6vw,2.5rem)] leading-tight font-bold">{article.title}</h1>
        <p className="mt-2 text-sm text-ayoya-brown/70">Đăng ngày {articleDate(article.published)}</p>
        <Photo image={article.hero} eager />
        {renderBlocks(article.blocks)}
        <div className="mt-10 border-t border-ayoya-sand pt-4 text-sm text-ayoya-brown/70">
          {article.notes.map(note => (
            <p key={note} className="mb-2">{note}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
