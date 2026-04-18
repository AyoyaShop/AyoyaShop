import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, Search, Phone, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-ayoya-cream/90 backdrop-blur-md border-b border-ayoya-brown/10"
      >
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* === CỤM BÊN TRÁI === */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-ayoya-brown hover:text-ayoya-amber transition-colors"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>

            <a 
              href="https://www.tiktok.com/@ayoyashop?_r=1&_t=ZS-95c3k6dwdyH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center gap-1 lg:hidden cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-ayoya-brown text-white flex items-center justify-center shadow-sm">
                <ShoppingCart size={15} />
              </div>
              <span className="text-[8px] text-ayoya-brown font-bold uppercase tracking-wider whitespace-nowrap">Tiktok Shop</span>
            </a>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
              <a href="#products" className="hover:text-ayoya-amber transition-colors">Sản phẩm</a>
              <a href="#about" className="hover:text-ayoya-amber transition-colors">Về chúng tôi</a>
            </div>
          </div>

          {/* === CỤM GIỮA: Logo === */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="/" className="flex flex-col items-center">
              <h1 className="text-3xl font-serif font-bold tracking-tighter text-ayoya-brown">AYOYA</h1>
              <span className="text-[8px] tracking-[0.3em] uppercase opacity-60 -mt-1 text-ayoya-brown">THẢO MỘC & PHONG THỦY</span>
            </a>
          </div>

          {/* === CỤM BÊN PHẢI === */}
          <div className="flex items-center gap-4 lg:gap-6">
            <a 
              href="tel:0933458485" 
              className="flex items-center gap-2 text-ayoya-brown hover:text-ayoya-amber transition-colors cursor-pointer"
            >
              <Phone size={22} strokeWidth={1.5} />
              <span className="hidden md:inline text-xs font-semibold">0933.458.485</span>
            </a>

            <button className="hidden sm:block text-ayoya-brown hover:text-ayoya-amber transition-colors">
              <Search size={20} />
            </button>

            <a 
              href="https://vn.shp.ee/dKiXxDRN" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 md:px-4 md:py-2 md:bg-ayoya-brown md:text-ayoya-cream md:rounded-full font-bold uppercase transition-all md:hover:bg-ayoya-green cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-ayoya-brown text-white flex items-center justify-center shadow-sm md:hidden">
                <ShoppingCart size={15} />
              </div>
              <span className="text-[8px] text-ayoya-brown md:hidden whitespace-nowrap tracking-wider">Shopee</span>
              <ShoppingCart size={16} className="hidden md:block" />
              <span className="hidden md:inline text-[10px] tracking-widest">Mua hàng</span>
            </a>
          </div>

        </div>
      </motion.nav>

      {/* === BẢNG MENU TRƯỢT TRÊN ĐIỆN THOẠI === */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-ayoya-cream flex flex-col items-center justify-center lg:hidden">
          
          {/* Nút tắt Menu (Dấu X) */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-ayoya-brown hover:text-red-700 transition-colors p-2"
          >
            <X size={36} strokeWidth={1.5} />
          </button>

          {/* Logo trong Menu để tăng nhận diện */}
          <div className="mb-12 flex flex-col items-center">
             <h2 className="text-4xl font-serif font-bold text-ayoya-brown">AYOYA</h2>
             <div className="w-12 h-[1px] bg-ayoya-brown/30 mt-4"></div>
          </div>

          {/* Các đường link được đặt trong khung (Card UI) */}
          <div className="flex flex-col items-center gap-5 w-full px-8 max-w-[320px]">
            <a 
              href="#products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 bg-white rounded-2xl border border-ayoya-brown/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] text-ayoya-brown text-center text-lg font-bold tracking-widest uppercase active:scale-95 transition-all"
            >
              Sản phẩm
            </a>
            
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="w-full py-4 bg-white rounded-2xl border border-ayoya-brown/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] text-ayoya-brown text-center text-lg font-bold tracking-widest uppercase active:scale-95 transition-all"
            >
              Về chúng tôi
            </a>
          </div>
          
        </div>
      )}
    </>
  );
}
