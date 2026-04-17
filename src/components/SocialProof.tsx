import { motion } from 'motion/react';
import { Play, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-ayoya-brown mb-6 underline underline-offset-8 decoration-ayoya-amber/30">
            Hàn Huyên <span className="italic">Cùng Khách</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ayoya-brown/50 tracking-wider text-xs uppercase font-bold">
            Niềm tin được xây dựng từ những câu chuyện thật
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* UGC TikTok Mockup */}
          <div className="relative">
            <div className="absolute -inset-10 bg-ayoya-amber/5 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600', views: '12.5K' },
                { img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600', views: '8.2K' },
              ].map((vid, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  className={`relative rounded-[32px] overflow-hidden aspect-[9/16] modern-zen-shadow ${idx === 1 ? 'mt-12' : ''}`}
                >
                  <img src={vid.img} alt="UGC content" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                         <Play size={12} fill="white" />
                       </div>
                       <span className="text-[10px] text-white font-bold">{vid.views} views</span>
                    </div>
                    <p className="text-[10px] text-white/80 font-medium uppercase tracking-widest italic">#AyoyaShop #Feedback</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-white modern-zen-shadow flex items-center justify-center text-ayoya-amber animate-bounce">
                <Star size={24} fill="currentColor" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white modern-zen-shadow flex items-center justify-center text-ayoya-green">
                <Star size={18} fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Testimonials Content */}
          <div className="space-y-10">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="relative p-10 bg-ayoya-cream/30 rounded-[40px] border border-ayoya-brown/5"
              >
                <div className="absolute top-8 right-8 text-ayoya-brown/10">
                  <Quote size={60} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.videoThumbnail} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"  referrerPolicy="no-referrer"/>
                  <div>
                    <h4 className="font-bold text-ayoya-brown">{t.name}</h4>
                    <p className="text-xs text-ayoya-brown/50 tracking-wider uppercase font-medium">{t.role}</p>
                  </div>
                </div>
                
                <p className="text-ayoya-brown/80 text-lg font-serif italic leading-relaxed">
                  "{t.content}"
                </p>

                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-ayoya-amber fill-ayoya-amber" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
