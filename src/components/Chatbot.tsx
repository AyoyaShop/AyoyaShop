import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Chatbot() {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.a
        href="https://m.me/ayoya"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-ayoya-brick text-white shadow-lg flex items-center justify-center relative group cursor-pointer block"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white rounded-xl text-ayoya-brown text-[10px] font-bold uppercase tracking-widest modern-zen-shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Nói chuyện cùng Ayoya
        </span>
      </motion.a>
    </div>
  );
}