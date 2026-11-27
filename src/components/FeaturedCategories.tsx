import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CATEGORIES, ALL_PRODUCTS } from '../data';
import SectionHeading from './SectionHeading';
import { thumb } from '../lib/thumb';

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Chọn đúng nhóm bạn đang tìm" title="Khám phá theo" emphasis="nhu cầu" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat, idx) => {
            const sample = ALL_PRODUCTS.find(p => p.category === cat.id);
            if (!sample) return null;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/san-pham?cat=${cat.id}`}
                  className="group relative block aspect-[4/5] rounded-3xl overflow-hidden modern-zen-shadow"
                >
                  <img loading="lazy"
                    src={thumb(sample.image)}
                    alt={cat.label}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ayoya-brown/90 via-ayoya-brown/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                    <h3 className="text-white font-serif text-base md:text-xl leading-snug">{cat.label}</h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
