import { motion } from 'motion/react';
import { ShoppingCart, Menu, Search, Phone } from 'lucide-react';
import { TIKTOK_LINK } from '../data';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-ayoya-cream/80 backdrop-blur-md border-b border-ayoya-brown/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="lg:hidden text-ayoya-brown">
            <Menu size={24} />
          </button>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#products" className="hover:text-ayoya-amber transition-colors">Sản phẩm</a>
            <a href="#about" className="hover:text-ayoya-amber transition-colors">Về chúng tôi</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="flex flex-col items-center">
            <h1 className="text-3xl font-serif font-bold tracking-tighter text-ayoya-brown">AYOYA</h1>
            <span className="text-[8px] tracking-[0.3em] uppercase opacity-60 -mt-1">Traditional Wellness</span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-ayoya-brown/70">
            <Phone size={16} />
            <span className="text-xs font-semibold">0933.458.485</span>
          </div>
          <button className="text-ayoya-brown hover:text-ayoya-amber transition-colors">
            <Search size={20} />
          </button>
          <a 
            href={TIKTOK_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-ayoya-brown text-ayoya-cream rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-ayoya-green transition-all"
          >
            <ShoppingCart size={16} />
            <span className="hidden md:inline">Mua hàng</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

