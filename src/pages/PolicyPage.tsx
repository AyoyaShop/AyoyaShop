import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getPolicyBySlug } from '../data/policies';
import { applySeo, SITE_URL } from '../lib/seo';

export default function PolicyPage() {
  const { slug } = useParams<{ slug: string }>();
  const policy = slug ? getPolicyBySlug(slug) : undefined;

  useEffect(() => {
    if (!policy) return;
    applySeo({
      title: `${policy.title} | AYOYA Shop`,
      description: policy.seoDescription,
      url: `${SITE_URL}/chinh-sach/${policy.slug}`,
      image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776475858/chat_luong_tam_duc_final_kfwn1o.png'
    });
    window.scrollTo(0, 0);
  }, [policy]);

  if (!slug || !policy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-8 text-center">{policy.title}</h1>

        <p className="text-ayoya-brown/70 leading-relaxed mb-10">{policy.intro}</p>

        <div className="space-y-8">
          {policy.sections.map(section => (
            <div key={section.heading ?? section.paragraphs?.[0]}>
              {section.heading && <h2 className="text-lg font-serif text-ayoya-brown mb-3">{section.heading}</h2>}
              {section.paragraphs?.map(p => (
                <p key={p} className="text-sm text-ayoya-brown/70 leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2">
                  {section.bullets.map(b => (
                    <li key={b} className="flex gap-2 text-sm text-ayoya-brown/70 leading-relaxed">
                      <span className="text-ayoya-amber mt-1">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {policy.closing && (
          <p className="mt-10 pt-6 border-t border-ayoya-brown/10 text-sm text-ayoya-brown/60 italic leading-relaxed">{policy.closing}</p>
        )}
      </div>
    </div>
  );
}
