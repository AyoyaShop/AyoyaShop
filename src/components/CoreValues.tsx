import { motion } from 'motion/react';
import { Shield, Sparkles, HeartHandshake } from 'lucide-react';
import { CORE_VALUES } from '../data';

const iconMap = {
  Shield: Shield,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
};

export default function CoreValues() {
  return (
    <section className="py-24 bg-white/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- BANNER "CHẤT LƯỢNG ĐI CÙNG TÂM ĐỨC" --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ayoya-cream/20 text-ayoya-brown rounded-[32px] py-6 px-10 text-center mb-16 border border-ayoya-brown/10 shadow-sm"
        >
          <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] leading-tight">
            CHẤT LƯỢNG ĐI CÙNG TÂM ĐỨC
          </p>
        </motion.div>

        {/* --- KHỐI 3 ICON GỐC --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CORE_VALUES.map((value, idx) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-3xl border border-ayoya-brown/5 hover:bg-white hover:modern-zen-shadow transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-ayoya-cream flex items-center justify-center text-ayoya-brown mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium tracking-widest mb-4">{value.title}</h3>
                <p className="text-ayoya-brown/60 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
