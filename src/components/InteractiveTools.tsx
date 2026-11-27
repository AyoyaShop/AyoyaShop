import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, RefreshCcw } from 'lucide-react';
import SectionHeading from './SectionHeading';
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
    <section id="quiz" className="py-16 md:py-24 bg-paper bg-ayoya-cream/40 scroll-mt-24 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHeading eyebrow="Trắc nghiệm 30 giây" title="Chọn Đúng" emphasis="Sản Phẩm" />

        <div>
          {/* Quiz Tương Tác */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-ayoya-brown p-6 md:p-10 rounded-2xl text-ayoya-cream relative overflow-hidden"
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
                    <h3 className="text-xl md:text-2xl font-serif mb-8 leading-snug">
                      {QUIZ_QUESTIONS[currentStep].question}
                    </h3>
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
                    <h3 className="text-3xl font-serif mb-6">{result.title}</h3>
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
                        className="flex items-center justify-center gap-2 text-ayoya-cream/75 hover:text-ayoya-cream transition-colors text-xs uppercase font-bold tracking-widest"
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

        <a
          href="/phong-thuy-chuyen-sau-ve-thanh-tay-khong-gian.pdf"
          download="Phong-Thuy-Chuyen-Sau-Ayoya.pdf"
          className="mt-4 flex min-h-11 items-center justify-center text-sm text-ayoya-brown underline underline-offset-4"
        >
          Tải tài liệu phong thủy chuyên sâu (PDF)
        </a>
      </div>
    </section>
  );
}
