import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Heart } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-[32px] modern-zen-shadow border border-ayoya-brown/5 overflow-hidden flex flex-col"
          >
            <div className="bg-ayoya-brown p-6 text-ayoya-cream flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ayoya-cream flex items-center justify-center text-ayoya-brown">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Ayoya Assistant</h4>
                  <span className="text-[10px] opacity-60 uppercase tracking-widest leading-none">Tư vấn tận tâm 24/7</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            <div className="h-64 p-6 overflow-y-auto space-y-4 bg-paper bg-ayoya-cream/10">
              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none text-xs text-ayoya-brown leading-relaxed border border-ayoya-brown/5 lowercase italic font-medium">
                  Chào bạn! Ayoya Shop luôn sẵn sàng lắng nghe mọi băn khoăn về thảo mộc và không gian sống. Bạn đang cần được hỗ trợ điều gì ạ?
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-ayoya-brown/5 flex gap-2">
              <input 
                type="text" 
                placeholder="Nhập câu hỏi..." 
                className="flex-1 bg-ayoya-cream/20 rounded-full px-4 text-xs focus:outline-none placeholder:text-ayoya-brown/30"
              />
              <button className="w-10 h-10 rounded-full bg-ayoya-brown text-white flex items-center justify-center hover:bg-ayoya-green transition-colors">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-ayoya-brick text-white shadow-lg flex items-center justify-center relative group"
      >
        <MessageCircle size={28} />
        {!isOpen && (
           <span className="absolute right-full mr-4 px-4 py-2 bg-white rounded-xl text-ayoya-brown text-[10px] font-bold uppercase tracking-widest modern-zen-shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Vấn an cùng Ayoya
           </span>
        )}
      </motion.button>
    </div>
  );
}
