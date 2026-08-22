import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ShoppingCart,
  CheckCircle2,
  Play,
  X,
  Volume2,
  VolumeX,
  AlertTriangle,
  Sparkles,
  ZoomIn,
  HelpCircle,
  Star
} from 'lucide-react';
import { ALL_PRODUCTS, getProductById, PRODUCT_RATINGS } from '../data';
import { useCart } from '../context/CartContext';
import { applySeo, SITE_URL } from '../lib/seo';
import { calcOriginalPrice } from '../lib/pricing';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const { addItem, openCart, requestCheckout } = useCart();
  const [selectedLabel, setSelectedLabel] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const buyBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!product) return;
    applySeo({
      title: `${product.title} | AYOYA Shop`,
      description: product.description,
      url: `${SITE_URL}/san-pham/${product.id}`,
      image: product.image,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.image,
        offers: {
          '@type': 'Offer',
          url: `${SITE_URL}/san-pham/${product.id}`,
          priceCurrency: 'VND',
          price: product.price,
          availability: 'https://schema.org/InStock'
        }
      }
    });
    window.scrollTo(0, 0);
    // Reset per-product UI state so leftover selections/video/lightbox from a
    // previous product don't carry over when navigating via "Sản phẩm khác".
    setSelectedLabel('');
    setIsPlaying(false);
    setIsMuted(true);
    setLightboxOpen(false);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const el = buyBoxRef.current;
      if (!el) return;
      setShowStickyBar(el.getBoundingClientRect().bottom < 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!id || !product) {
    return <Navigate to="/" replace />;
  }

  const variants = [
    { label: product.priceUnit, price: product.price, weightGrams: product.weightGrams },
    ...product.priceOptions
  ];
  const activeLabel = selectedLabel || variants[0].label;
  const selectedVariant = variants.find(v => v.label === activeLabel) ?? variants[0];

  const buildCartItem = () => ({
    key: `${product.id}::${selectedVariant.label}`,
    productId: product.id,
    title: product.title,
    image: product.image,
    variantLabel: variants.length > 1 ? selectedVariant.label : '',
    unitPrice: selectedVariant.price,
    weightGrams: selectedVariant.weightGrams
  });

  const relatedProducts = ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 hover:text-ayoya-brown transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Về trang chủ
        </Link>

        <div className="flex flex-col lg:flex-row gap-10 md:gap-16">
          {/* Media */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-ayoya-brown/5 rounded-[40px]" />
              <div className="relative overflow-hidden organic-border aspect-square bg-ayoya-brown/10">
                <AnimatePresence mode="wait">
                  {!isPlaying ? (
                    <motion.div key="image" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                      {product.video ? (
                        <>
                          <img
                            src={product.image}
                            alt={product.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center group/btn"
                          >
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform group-hover/btn:scale-110 transition-all duration-500">
                              <Play size={32} fill="white" className="ml-1" />
                            </div>
                          </button>
                          <button
                            onClick={() => setLightboxOpen(true)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                            aria-label="Phóng to ảnh"
                          >
                            <ZoomIn size={18} />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setLightboxOpen(true)}
                          className="w-full h-full cursor-zoom-in"
                          aria-label="Phóng to ảnh"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div key="video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative">
                      <video src={product.video} autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover" />
                      <div className="absolute inset-x-0 top-0 p-6 flex justify-end bg-gradient-to-b from-black/40 to-transparent">
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="absolute bottom-6 right-6">
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
          </div>

          {/* Content */}
          <div className="flex-1 max-w-xl w-full">
            {product.badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.badges.map(badge => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-ayoya-green/5 text-ayoya-green text-[10px] font-bold uppercase tracking-widest rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-2">{product.title}</h1>
            {product.subtitle && <p className="text-ayoya-amber font-serif italic text-lg mb-4">{product.subtitle}</p>}

            {PRODUCT_RATINGS[product.id] && (
              <div className="flex items-center gap-1.5 mb-6 text-ayoya-brown/70">
                <Star size={16} className="fill-ayoya-amber text-ayoya-amber" />
                <span className="text-sm">
                  <strong className="text-ayoya-brown">{PRODUCT_RATINGS[product.id].stars.toFixed(1)}</strong> ·{' '}
                  <strong className="text-ayoya-brown">{PRODUCT_RATINGS[product.id].reviewCount.toLocaleString('vi-VN')}</strong> lượt đánh giá trên Shopee & TikTok Shop
                </span>
              </div>
            )}

            <div className="mb-6">
              <span className="block text-sm text-ayoya-brown/40 line-through">{formatPrice(calcOriginalPrice(selectedVariant.price))}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif font-bold text-ayoya-brown">{formatPrice(selectedVariant.price)}</span>
                <span className="text-sm text-ayoya-brown/50">/ {selectedVariant.label}</span>
              </div>
            </div>

            {variants.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {variants.map(v => (
                  <button
                    key={v.label}
                    onClick={() => setSelectedLabel(v.label)}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                      activeLabel === v.label
                        ? 'bg-ayoya-brown text-white border-ayoya-brown'
                        : 'bg-white text-ayoya-brown border-ayoya-brown/15 hover:border-ayoya-brown/40'
                    }`}
                  >
                    {v.label} ·{' '}
                    <span className={activeLabel === v.label ? 'text-white/60 line-through' : 'text-ayoya-brown/40 line-through'}>
                      {formatPrice(calcOriginalPrice(v.price))}
                    </span>{' '}
                    {formatPrice(v.price)}
                  </button>
                ))}
              </div>
            )}

            <div className="space-y-6">
              {product.benefits && (
                <div className="p-6 bg-white rounded-2xl modern-zen-shadow border-l-4 border-ayoya-amber">
                  <p className="text-ayoya-brown/80 leading-relaxed italic">"&nbsp;{product.benefits}&nbsp;"</p>
                </div>
              )}

              <p className="text-ayoya-brown/70 leading-relaxed">{product.description}</p>

              <div ref={buyBoxRef} className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    addItem(buildCartItem());
                    requestCheckout();
                  }}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-ayoya-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-ayoya-brick transition-all shadow-lg"
                >
                  Mua ngay
                </button>
                <button
                  onClick={() => {
                    addItem(buildCartItem());
                    openCart();
                  }}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 border border-ayoya-brown text-ayoya-brown rounded-full font-bold uppercase tracking-widest hover:bg-ayoya-brown/5 transition-all"
                >
                  Thêm vào giỏ hàng
                  <ShoppingCart size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-ayoya-green bg-ayoya-green/5 px-3 py-1 rounded-full">
                  <CheckCircle2 size={10} />
                  Hoàn tiền theo chính sách
                </div>
                <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-ayoya-green bg-ayoya-green/5 px-3 py-1 rounded-full">
                  <CheckCircle2 size={10} />
                  Đồng kiểm
                </div>
              </div>

              <Link
                to="/#quiz"
                className="flex items-center gap-3 p-4 bg-ayoya-amber/5 rounded-2xl border border-ayoya-amber/20 hover:bg-ayoya-amber/10 transition-colors"
              >
                <HelpCircle size={20} className="text-ayoya-amber flex-shrink-0" />
                <span className="text-sm text-ayoya-brown">
                  Chưa chắc sản phẩm này phù hợp? <span className="font-bold underline">Làm bài trắc nghiệm 30 giây</span> để AYOYA gợi ý đúng sản phẩm cho bạn.
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        {(product.ingredients || product.usage || product.warnings || product.origin) && (
          <div className="mt-16 md:mt-24 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.ingredients && (
              <div className="p-6 bg-white rounded-2xl border border-ayoya-brown/10">
                <div className="flex items-center gap-2 mb-3 text-ayoya-brown">
                  <Sparkles size={18} className="text-ayoya-amber" />
                  <h3 className="font-serif text-lg">Thành phần</h3>
                </div>
                <p className="text-sm text-ayoya-brown/70 leading-relaxed">{product.ingredients}</p>
              </div>
            )}
            {product.usage && (
              <div className="p-6 bg-white rounded-2xl border border-ayoya-brown/10">
                <div className="flex items-center gap-2 mb-3 text-ayoya-brown">
                  <CheckCircle2 size={18} className="text-ayoya-green" />
                  <h3 className="font-serif text-lg">Hướng dẫn sử dụng</h3>
                </div>
                <p className="text-sm text-ayoya-brown/70 leading-relaxed">{product.usage}</p>
              </div>
            )}
            {product.warnings && (
              <div className="p-6 bg-white rounded-2xl border border-ayoya-brick/20">
                <div className="flex items-center gap-2 mb-3 text-ayoya-brick">
                  <AlertTriangle size={18} />
                  <h3 className="font-serif text-lg">Lưu ý & Cảnh báo</h3>
                </div>
                <p className="text-sm text-ayoya-brown/70 leading-relaxed">{product.warnings}</p>
              </div>
            )}
            {product.origin && (
              <div className="p-6 bg-white rounded-2xl border border-ayoya-brown/10">
                <div className="flex items-center gap-2 mb-3 text-ayoya-brown">
                  <CheckCircle2 size={18} className="text-ayoya-brown/60" />
                  <h3 className="font-serif text-lg">Xuất xứ & Bảo quản</h3>
                </div>
                <p className="text-sm text-ayoya-brown/70 leading-relaxed">{product.origin}</p>
              </div>
            )}
          </div>
        )}

        <p className="mt-10 text-center text-[10px] text-ayoya-brown/40 italic tracking-wide">
          Nội dung mang tính tham khảo theo kinh nghiệm dân gian — không thay thế tư vấn y tế chuyên môn.
        </p>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl md:text-3xl font-serif text-ayoya-brown mb-8 text-center">
              Sản phẩm <span className="italic">khác</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link
                  key={p.id}
                  to={`/san-pham/${p.id}`}
                  className="group block bg-white rounded-3xl border border-ayoya-brown/5 overflow-hidden hover:modern-zen-shadow transition-shadow"
                >
                  <div className="aspect-square overflow-hidden bg-ayoya-brown/5">
                    <img
                      src={p.image}
                      alt={p.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-serif text-ayoya-brown leading-snug line-clamp-2">{p.title}</h3>
                    <p className="text-xs text-ayoya-brown/40 line-through mt-1">{formatPrice(calcOriginalPrice(p.price))}</p>
                    <p className="text-sm font-bold text-ayoya-brown">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              src={product.image}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white border-t border-ayoya-brown/10 px-4 py-3 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-ayoya-brown/40 line-through leading-tight">{formatPrice(calcOriginalPrice(selectedVariant.price))}</span>
              <span className="text-lg font-serif font-bold text-ayoya-brown leading-tight">{formatPrice(selectedVariant.price)}</span>
              <span className="text-[10px] text-ayoya-brown/50 leading-tight truncate">/ {selectedVariant.label}</span>
            </div>
            <button
              onClick={() => {
                addItem(buildCartItem());
                requestCheckout();
              }}
              className="flex-1 flex items-center justify-center px-6 py-3 bg-ayoya-brown text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-ayoya-brick transition-all"
            >
              Mua ngay
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
