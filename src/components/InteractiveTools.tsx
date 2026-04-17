import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, HelpCircle, ChevronRight, RefreshCcw } from 'lucide-react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../data';

export default function InteractiveTools() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (score: string) => {
    const newScores = [...scores, score];
    setScores(newScores);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate majority score
      const counts: any = {};
      newScores.forEach((s) => (counts[s] = (counts[s] || 0) + 1));
      const winners = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
      setResult(QUIZ_RESULTS[winners[0] as keyof typeof QUIZ_RESULTS]);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores([]);
    setResult(null);
  };

  return (
    <section className="py-24 bg-paper bg-ayoya-cream/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-ayoya-brown mb-4">Giá Trị <span className="italic">Trao Tặng</span></h2>
          <p className="text-ayoya-brown/50 tracking-[0.2em] uppercase text-[10px] font-bold">Mỏ neo năng lượng cho gia chủ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lịch Tẩy Uế */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[40px] modern-zen-shadow border border-ayoya-brown/5 h-full"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-ayoya-cream flex items-center justify-center text-ayoya-brown">
                <Calendar size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif">Lịch Tẩy Uế & Xông Nhà</h3>
            </div>
            
            <p className="text-ayoya-brown/70 mb-8 leading-relaxed">
              Dựa trên âm lịch và phong thủy truyền thống, chúng tôi gợi ý những ngày "vàng" 
              để bạn bao sái ban thờ và thanh tẩy không gian sống trong tháng này.
            </p>

            <div className="space-y-4">
              {[
                { day: 'Mùng 1 & Rằm', title: 'Thanh tẩy nhẹ nhàng', text: 'Thích hợp lau dọn ban thờ, thắp nhang trầm sạch.' },
                { day: 'Ngày 24 Âm Lịch', title: 'Tẩy uế gia đạo', text: 'Ngày tốt để xông thảo mộc 38 vị, đẩy lùi uế khí.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-ayoya-cream/20 border border-ayoya-brown/5">
                  <div className="text-ayoya-amber font-serif text-lg leading-tight w-20 flex-shrink-0">
                    {item.day}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-ayoya-brown/60 leading-normal">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 border border-ayoya-brown/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-ayoya-brown hover:text-white transition-all">
              Tải Bộ Lịch Đầy Đủ (PDF)
            </button>
          </motion.div>

          {/* Quiz Tương Tác */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ayoya-brown p-10 rounded-[40px] text-ayoya-cream h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <HelpCircle size={120} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-serif mb-8 italic">Thấu hiểu năng lượng</h3>
              
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div 
                    key="question"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-ayoya-amber mb-4">
                      Câu hỏi {currentStep + 1}/{QUIZ_QUESTIONS.length}
                    </p>
                    <h4 className="text-xl md:text-2xl font-serif mb-8 leading-snug">
                      {QUIZ_QUESTIONS[currentStep].question}
                    </h4>
                    <div className="space-y-4">
                      {QUIZ_QUESTIONS[currentStep].options.map((opt, i) => (
                        <button 
                          key={i}
                          onClick={() => handleAnswer(opt.score)}
                          className="w-full p-6 text-left border border-ayoya-cream/10 rounded-2xl hover:bg-ayoya-cream hover:text-ayoya-brown transition-all flex items-center justify-between group"
                        >
                          <span className="font-medium text-sm">{opt.text}</span>
                          <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center text-center justify-center py-8"
                  >
                    <span className="text-ayoya-amber mb-4 uppercase tracking-[0.3em] font-bold text-xs">Kết quả trắc nghiệm</span>
                    <h4 className="text-3xl font-serif mb-6">{result.title}</h4>
                    <p className="text-ayoya-cream/70 mb-10 leading-relaxed italic max-w-sm">
                      "{result.description}"
                    </p>
                    <div className="flex flex-col gap-4 w-full">
                      <a 
                        href={`#${result.product}`}
                        className="w-full py-4 bg-ayoya-amber text-ayoya-brown rounded-full font-bold uppercase tracking-widest text-xs"
                      >
                        Khám phá sản phẩm phù hợp
                      </a>
                      <button 
                        onClick={resetQuiz}
                        className="flex items-center justify-center gap-2 text-ayoya-cream/40 hover:text-ayoya-cream transition-colors text-[10px] uppercase font-bold tracking-widest"
                      >
                        <RefreshCcw size={14} />
                        Làm lại trắc nghiệm
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
