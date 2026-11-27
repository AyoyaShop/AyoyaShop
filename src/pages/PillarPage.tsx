import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS, type Pillar } from '../data/pillars';
import { PRODUCT_FAQ } from '../data/productFaq';
import ProductCard from '../components/ProductCard';
import { applySeo } from '../lib/seo';
import { pillarMeta } from '../lib/pageMeta';

// A page of its own for each product line: introduction, its products, how to choose, common questions.
export default function PillarPage({ pillar }: { pillar: Pillar; key?: string }) {
  useEffect(() => {
    applySeo(pillarMeta(pillar));
    window.scrollTo(0, 0);
  }, [pillar]);

  const questions = pillar.ids.flatMap(id => PRODUCT_FAQ[id] ?? []);

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> / {pillar.title}
        </p>
        <div className="mb-10 grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow">Một trong ba dòng sản phẩm</p>
            <h1 className="mb-3 text-[clamp(2rem,4vw,2.9rem)] font-bold">{pillar.title}</h1>
            <p>{pillar.intro}</p>
          </div>
          <img
            src={pillar.image}
            alt={pillar.title}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            style={{ objectPosition: pillar.imagePosition }}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {pillar.ids.map(id => (
            <ProductCard key={id} id={id} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pillar.about.map(block => (
            <div key={block.heading} className="rounded-2xl border border-ayoya-sand bg-ayoya-white p-5">
              <h2 className="mb-2 text-xl font-bold">{block.heading}</h2>
              <p className="text-sm leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>

        {questions.length > 0 && (
          <div className="mx-auto mt-10 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold">Khách hay hỏi</h2>
            <div className="space-y-2">
              {questions.map(item => (
                <details key={item.question} className="rounded-2xl border border-ayoya-sand bg-ayoya-white px-4">
                  <summary className="flex min-h-14 cursor-pointer items-center py-3 text-sm font-semibold">{item.question}</summary>
                  <p className="pb-4 text-sm leading-relaxed text-ayoya-brown/80">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {pillar.note && <p className="mt-8 text-center text-xs text-ayoya-brown/70">{pillar.note}</p>}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {PILLARS.filter(other => other.slug !== pillar.slug).map(other => (
            <Link key={other.slug} to={`/${other.slug}`} className="btn btn-ghost">
              Xem {other.title.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
