import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, CheckCircle2, Play, X, Volume2, VolumeX } from 'lucide-react';
import { PRODUCTS } from '../data';

interface ProductMediaProps {
  image: string;
  video: string;
  title: string;
  idx: number;
}

function ProductMedia({ image, video, title, idx }: ProductMediaProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none"
    >
      <div className="relative group">
        <div className="absolute -inset-2 sm:-inset-4 bg-ayoya-brown/5 rounded-[40px] transform group-hover:scale-[1.02] transition-transform"></div>
        <div className="relative overflow-hidden organic-border aspect-[5/6] sm:aspect-[16/10] lg:aspect-square bg-ayoya-brown/10">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <img 
                  src={image} 
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform group-hover/btn:scale-110 transition-all duration-500">
                    <Play size={32} fill="white" className="ml-1" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-[10px] text-white font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Xem Video Thực Tế
                  </div>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full relative"
              >
                <video 
                  src={video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-x-0 top-0 p-6 flex justify-between items-start bg-gradient-to-b from-black/40 to-transparent">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                    Đang xem: Quy trình di sản
                  </span>
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-3">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 px-4 bg-paper bg-ayoya-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-ayoya-brown mb-6 underline underline-offset-8 decoration-ayoya-amber/30">
            Sản Phẩm <span className="italic">Di Sản</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ayoya-brown/60 tracking-wider text-[10px] md:text-sm uppercase">
            Tuyển chọn khắt khe - Chế biến tỉ mỉ - Gửi trọn tâm tình
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {PRODUCTS.map((product, idx) => (
            <div 
              key={product.id}
              className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media Part */}
              <ProductMedia 
                image={product.image} 
                video={product.video || ''} 
                title={product.title} 
                idx={idx} 
              />

              {/* Content Part */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 max-w-xl w-full"
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.badges.map(badge => (
                    <span key={badge} className="px-3 py-1 bg-ayoya-green/5 text-ayoya-green text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-2">{product.title}</h3>
                <p className="text-ayoya-amber font-serif italic text-lg mb-6">{product.subtitle}</p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-2xl modern-zen-shadow border-l-4 border-ayoya-amber">
                    <p className="text-ayoya-brown/80 leading-relaxed italic">
                      "&nbsp;{product.benefits}&nbsp;"
                    </p>
                  </div>
                  
                  <p className="text-ayoya-brown/70 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-ayoya-green font-medium">
                      <CheckCircle2 size={18} />
                      Chinh phục hàng ngàn khách hàng tinh tế, Ayoya tự hào là thương hiệu thảo mộc được yêu thích nhất trên TikTok Shop và Shopee.
                    </li>
                  </ul>

                  <div className="pt-8">
                    <a 
                      href={product.link}
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-ayoya-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-ayoya-brick transition-all shadow-lg"
                    >
                      {product.cta}
                      <ExternalLink size={18} />
                    </a>
                    
                    <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
                       <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-ayoya-green bg-ayoya-green/5 px-3 py-1 rounded-full">
                          <CheckCircle2 size={10} />
                          Hoàn tiền 100%
                       </div>
                       <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-ayoya-green bg-ayoya-green/5 px-3 py-1 rounded-full">
                          <CheckCircle2 size={10} />
                          Đồng kiểm
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

