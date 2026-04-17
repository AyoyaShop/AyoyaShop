import { motion } from 'motion/react';
import TrustBadges from './TrustBadges';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale saturate-50"
          poster="https://images.unsplash.com/photo-1544161515-4af6b1d8e1c6?auto=format&fit=crop&q=80&w=1920"
        >
          {/* Fallback image if video not provided, using picsum as placeholder for organic feel */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-burning-incense-at-a-buddhist-temple-4560-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ayoya-cream/20 via-transparent to-ayoya-cream"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 border border-ayoya-brown/20 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-ayoya-brown/60">
            Trải nghiệm Lối sống Tỉnh thức
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-light leading-[1.1] text-ayoya-brown mb-8 tracking-tight">
            Nơi Khởi Sinh <br />
            <span className="italic">Năng Lượng Sạch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-ayoya-brown/70 font-light mb-12 leading-relaxed">
            Chúng tôi không chỉ bán sản phẩm, chúng tôi trao gửi niềm tin và sự bình an qua những báu vật thảo mộc cổ truyền.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="px-10 py-4 bg-ayoya-brown text-ayoya-cream rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-green transition-all transform hover:scale-105 duration-300">
              Khám Phá Di Sản
            </button>
            <button className="px-10 py-4 border border-ayoya-brown text-ayoya-brown rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-brown/5 transition-all">
              Tư Vấn Tận Tâm
            </button>
          </div>

          <TrustBadges />
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-4 text-[10px] tracking-[0.3em] uppercase text-ayoya-brown/40 vertical-text origin-left">
          <span>Hereditary Wisdom</span>
          <div className="w-px h-12 bg-ayoya-brown/20 self-center"></div>
          <span>Bình Định Heritage</span>
        </div>
      </div>
    </section>
  );
}
