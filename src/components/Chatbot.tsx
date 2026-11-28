import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Chatbot() {
  // Product pages have their own phone bar with a Zalo button in it.
  const { pathname } = useLocation();
  const onProductPage = pathname.startsWith('/san-pham/');
  // The home page opens with its own Zalo button; the floating one would sit on top of it.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // The lookup page shows prices where the button would sit.
  const hiddenOnPhone = onProductPage || pathname.startsWith('/bai-viet') || pathname === '/tra-cuu-don' || (pathname === '/' && !scrolled);
  return (
    <div className={`fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[100] ${hiddenOnPhone ? 'hidden md:block' : ''}`}>
      <motion.a
        href="https://zalo.me/0933458485" // <-- Đường link Zalo của bạn
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-ayoya-green text-white shadow-lg flex items-center justify-center relative group cursor-pointer block"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white rounded-xl text-ayoya-brown text-xs font-bold uppercase tracking-widest modern-zen-shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat Zalo với Ayoya
        </span>
      </motion.a>
    </div>
  );
}