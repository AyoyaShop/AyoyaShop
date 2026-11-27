import TrustBadges from './TrustBadges';
import IllustrationTag from './IllustrationTag';

export default function Hero() {
  return (
    <section className="pt-20">
      <div className="relative md:h-[calc(100svh-80px)] md:min-h-[560px] md:max-h-[760px]">
        <div className="relative md:absolute md:inset-0">
          <picture>
            <source media="(min-width: 768px)" srcSet="/photos/san-tap-900.webp 900w, /photos/san-tap-1672.webp 1672w" sizes="100vw" />
            <img
              src="/photos/truyen-day-800.webp"
              srcSet="/photos/truyen-day-800.webp 800w, /photos/truyen-day-1448.webp 1448w"
              sizes="100vw"
              fetchPriority="high"
              alt="Minh họa lò võ Bình Định: người thầy chỉ dạy học trò"
              className="w-full aspect-[4/3] md:aspect-auto md:h-full object-cover"
            />
          </picture>
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <IllustrationTag className="md:left-3 md:right-auto md:bottom-3" />
        </div>

        <div className="relative md:h-full md:flex md:items-center">
          <div className="w-full max-w-6xl mx-auto px-5 py-8 md:py-0 text-center md:text-left">
            <div className="md:max-w-lg">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-ayoya-gold md:text-ayoya-amber mb-4">
                Thảo mộc Đất Võ Bình Định
              </p>
              <h1 className="text-[clamp(2.25rem,11vw,3rem)] md:text-6xl font-serif leading-[1.12] text-ayoya-brown md:text-white mb-5">
                Nơi Khởi Sinh <br />
                <span className="italic">Năng Lượng Sạch</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-ayoya-brown/85 md:text-white/90 mb-8">
                Chúng tôi không chỉ bán sản phẩm, chúng tôi trao gửi niềm tin và sự bình an qua những báu vật thảo mộc cổ truyền.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#products"
                  className="inline-flex min-h-12 items-center justify-center px-8 rounded-full bg-ayoya-brown md:bg-ayoya-cream text-ayoya-cream md:text-ayoya-brown font-semibold uppercase tracking-widest text-sm hover:bg-ayoya-green hover:text-white transition-colors"
                >
                  Khám Phá Di Sản
                </a>
                <a
                  href="https://zalo.me/0933458485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center px-8 rounded-full border border-ayoya-brown md:border-white text-ayoya-brown md:text-white font-semibold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
                >
                  Chat Zalo Tư Vấn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <TrustBadges />
      </div>
    </section>
  );
}
