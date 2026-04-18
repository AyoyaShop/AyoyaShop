import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, ShoppingBag } from 'lucide-react';
import { SHOPEE_LINK, TIKTOK_LINK } from '../data';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-ayoya-brown text-ayoya-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif font-bold tracking-tighter mb-4">AYOYA</h2>
            <p className="max-w-md text-ayoya-cream/70 leading-relaxed mb-8">
              Chúng tôi kế thừa tinh hoa võ thuật và y học cổ truyền Bình Định, 
              mang đến những giải pháp sức khỏe thuận tự nhiên và thanh tẩy năng lượng 
              cho không gian sống của bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/ayoyashop" className="w-10 h-10 rounded-full border border-ayoya-cream/20 flex items-center justify-center hover:bg-ayoya-cream hover:text-ayoya-brown transition-all">
                <Facebook size={18} />
              </a>
              <a 
  href="https://www.instagram.com/kiandli777" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-10 h-10 rounded-full border border-ayoya-cream/20 flex items-center justify-center hover:bg-ayoya-cream hover:text-ayoya-brown transition-all"
>
  <Instagram size={18} />
</a>
              <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ayoya-cream/20 flex items-center justify-center hover:bg-ayoya-cream hover:text-ayoya-brown transition-all">
                <span className="text-[10px] font-black italic">TT</span>
              </a>
            </div>
            
            <div className="mt-8 flex flex-col gap-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ayoya-amber">Ghé thăm gian hàng</h4>
              <div className="flex gap-4">
                <a href={SHOPEE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-ayoya-amber/30 rounded-lg text-xs hover:bg-ayoya-amber/10 transition-colors">
                  <ShoppingBag size={14} />
                  Shopee
                </a>
                <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-ayoya-amber/30 rounded-lg text-xs hover:bg-ayoya-amber/10 transition-colors">
                  <span className="font-black italic">T</span>
                  TikTok Shop
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-ayoya-amber">Liên hệ</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-ayoya-cream/70 hover:text-ayoya-cream transition-colors">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-sm">6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM</span>
              </div>
              <div className="flex items-center gap-4 text-ayoya-cream/70 hover:text-ayoya-cream transition-colors">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-sm">0933.458.485</span>
              </div>
              <div className="flex items-center gap-4 text-ayoya-cream/70 hover:text-ayoya-cream transition-colors">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-sm">ayoyashop@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-ayoya-amber">Chính sách</h4>
            <ul className="space-y-4 text-sm text-ayoya-cream/70">
              <li><a href="https://www.nguyentuankiet.com.vn/p/chinh-sach-bao-mat.html" className="hover:text-ayoya-cream transition-colors">Chính sách bảo mật</a></li>
              <li><a href="https://www.nguyentuankiet.com.vn/p/chinh-sach-van-chuyen.html" className="hover:text-ayoya-cream transition-colors">Chính sách vận chuyển</a></li>
              <li><a href="https://www.nguyentuankiet.com.vn/p/chinh-sach-doi-tra.html" className="hover:text-ayoya-cream transition-colors">Chính sách đổi trả</a></li>
              <li><a href="https://www.nguyentuankiet.com.vn/p/huong-dan-thanh-toan.html" className="hover:text-ayoya-cream transition-colors">Hướng dẫn thanh toán</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-ayoya-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-ayoya-cream/40">
          <p>© 2026 AYOYA SHOP. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Website by AYOYA Developer</span>
            <span>SEO Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
