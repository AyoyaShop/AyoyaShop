import { motion } from 'motion/react';
import TrustBadges from './TrustBadges';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div>
          <span className="inline-block px-4 py-1 mb-6 border border-ayoya-brown/20 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-ayoya-brown/75">
            Trải nghiệm Lối sống Tỉnh thức
          </span>
          <h1 className="text-[clamp(2.25rem,12vw,3rem)] md:text-8xl font-serif font-light leading-[1.1] text-ayoya-brown mb-8 tracking-tight">
            Nơi Khởi Sinh <br />
            <span className="italic">Năng Lượng Sạch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-ayoya-brown/70 font-light mb-12 leading-relaxed">
            Chúng tôi không chỉ bán sản phẩm, chúng tôi trao gửi niềm tin và sự bình an qua những báu vật thảo mộc cổ truyền.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#products"
              className="px-10 py-4 bg-ayoya-brown text-ayoya-cream rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-green transition-all transform hover:scale-105 duration-300"
            >
              Khám Phá Di Sản
            </a>
            <a
              href="https://zalo.me/0933458485"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-ayoya-brown text-ayoya-brown rounded-full font-medium tracking-widest uppercase hover:bg-ayoya-brown/5 transition-all"
            >
              Chat Zalo Tư Vấn
            </a>
          </div>

          <TrustBadges />
        </div>
        {/* --- KHUNG VIDEO HIỂN THỊ --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl mx-auto mt-8 rounded-[32px] overflow-hidden modern-zen-shadow border border-ayoya-brown/10 bg-ayoya-cream/20 relative z-20"
        >
          <video
            className="w-full h-auto aspect-video object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="https://res.cloudinary.com/dfb8mvzhc/video/upload/so_0,q_auto,w_720,c_limit/v1776477706/7737362006875_lxnlau.jpg"
          >
            <source src="https://res.cloudinary.com/dfb8mvzhc/video/upload/q_auto:eco,w_720,c_limit/v1776477706/7737362006875_lxnlau.mp4" />
            Trình duyệt của bạn không hỗ trợ xem video.
          </video>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-4 text-xs tracking-[0.3em] uppercase text-ayoya-brown/75 vertical-text origin-left">
          <span>Hereditary Wisdom</span>
          <div className="w-px h-12 bg-ayoya-brown/20 self-center"></div>
          <span>Bình Định Heritage</span>
        </div>
      </div>
    </section>
  );
}
