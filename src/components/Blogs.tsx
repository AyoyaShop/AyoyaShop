import { BLOGS } from '../data';
import SectionHeading from './SectionHeading';

export default function Blogs() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Kiến thức & trải nghiệm" title="Góc Nhìn" emphasis="Khai Sáng" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BLOGS.map(blog => (
            <a
              key={blog.link}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ayoya-brown/10 p-3 hover:border-ayoya-gold transition-colors"
            >
              <img loading="lazy" src={blog.image} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
              <div>
                <h3 className="text-sm font-serif leading-snug text-ayoya-brown line-clamp-3">{blog.title}</h3>
                <span className="mt-1 block text-xs font-bold uppercase tracking-widest text-ayoya-gold">Đọc thêm</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
