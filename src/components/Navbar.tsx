import { motion } from 'motion/react';
import { ShoppingCart, Menu, Search, Phone } from 'lucide-react';
import { SHOPEE_LINK } from '../data';

export default function Navbar() {
  return (
   <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-ayoya-cream/90 backdrop-blur-md border-b border-ayoya-brown/10"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* === CỤM BÊN TRÁI: Menu & Tiktok Shop === */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Nút 3 gạch */}
          <button className="lg:hidden text-ayoya-brown">
            <Menu size={26} strokeWidth={1.5} />
          </button>

          {/* Nút Tiktok Shop (Chỉ hiện trên điện thoại) */}
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

          {/* Menu chữ (Chỉ hiện trên Máy tính) */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            <a href="#products" className="hover:text-ayoya-amber transition-colors">Sản phẩm</a>
            <a href="#about" className="hover:text-ayoya-amber transition-colors">Về chúng tôi</a>
          </div>
        </div>

        {/* === CỤM GIỮA: Logo Ayoya === */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" className="flex flex-col items-center">
            <h1 className="text-3xl font-serif font-bold tracking-tighter text-ayoya-brown">AYOYA</h1>
            <span className="text-[8px] tracking-[0.3em] uppercase opacity-60 -mt-1 text-ayoya-brown">THẢO MỘC & PHONG THỦY</span>
          </a>
        </div>

        {/* === CỤM BÊN PHẢI: Điện thoại, Tìm kiếm & Shopee === */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Nút Gọi Điện (Icon to trên ĐT, số trên máy tính) */}
          <a 
            href="tel:0933458485" 
            className="flex items-center gap-2 text-ayoya-brown hover:text-ayoya-amber transition-colors cursor-pointer"
          >
            <Phone size={22} strokeWidth={1.5} />
            <span className="hidden md:inline text-xs font-semibold">0933.458.485</span>
          </a>

          {/* Nút Kính lúp (Đã ẩn trên điện thoại) */}
          <button className="hidden sm:block text-ayoya-brown hover:text-ayoya-amber transition-colors">
            <Search size={20} />
          </button>

          {/* Nút Shopee (Điện thoại là khối vuông có chữ / Máy tính là nút ngang) */}
          <a 
            href="https://vn.shp.ee/dKiXxDRN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 md:px-4 md:py-2 md:bg-ayoya-brown md:text-ayoya-cream md:rounded-full font-bold uppercase transition-all md:hover:bg-ayoya-green cursor-pointer"
          >
            {/* Khối hình vuông Shopee (Chỉ hiện trên điện thoại) */}
            <div className="w-8 h-8 rounded-lg bg-ayoya-brown text-white flex items-center justify-center shadow-sm md:hidden">
              <ShoppingCart size={15} />
            </div>
            <span className="text-[8px] text-ayoya-brown md:hidden whitespace-nowrap tracking-wider">Shopee</span>
            
            {/* Cụm chữ & icon ngang (Chỉ hiện trên Máy tính) */}
            <ShoppingCart size={16} className="hidden md:block" />
            <span className="hidden md:inline text-[10px] tracking-widest">Mua hàng</span>
          </a>
        </div>

      </div>
    </motion.nav>
