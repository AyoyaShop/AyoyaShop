import { Shield, Sparkles, HeartHandshake } from 'lucide-react';
import { CORE_VALUES } from '../data';
import SectionHeading from './SectionHeading';

const iconMap = {
  Shield: Shield,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
};

export default function CoreValues() {
  return (
    <section className="py-16 md:py-24 px-4 bg-paper bg-ayoya-cream/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Chất lượng đi cùng tâm đức" title="Giá Trị" emphasis="AYOYA" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map(value => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <div key={value.title} className="flex gap-4 md:flex-col md:items-center md:text-center">
                <Icon size={28} strokeWidth={1.5} className="shrink-0 text-ayoya-gold" />
                <div>
                  <h3 className="text-lg font-medium tracking-widest mb-2">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-ayoya-brown/80">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
