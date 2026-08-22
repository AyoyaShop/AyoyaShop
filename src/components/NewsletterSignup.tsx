import { useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Loader2, CheckCircle2 } from 'lucide-react';
import { SUBSCRIBE_SHEET_URL } from '../data';

export default function NewsletterSignup() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const phoneError = !phone.trim()
    ? 'Vui lòng nhập số điện thoại.'
    : !/^\d{10}$/.test(phone.trim())
      ? 'Số điện thoại phải đủ 10 số.'
      : '';

  const handleSubmit = async () => {
    if (phoneError) {
      setTouched(true);
      return;
    }
    setError('');
    setSubmitting(true);
    try {
      await fetch(SUBSCRIBE_SHEET_URL, {
        method: 'POST',
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() })
      });
      setSubmitted(true);
    } catch {
      setError('Không thể gửi đăng ký lúc này. Vui lòng thử lại hoặc liên hệ Zalo 0933.458.485.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 bg-ayoya-brown">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] bg-ayoya-cream/5 border border-ayoya-cream/10 p-8 md:p-12 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-ayoya-amber/10 flex items-center justify-center text-ayoya-amber mx-auto mb-6">
            <Gift size={26} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-ayoya-cream mb-3">
            Nhận ưu đãi & mẹo chăm sóc sức khỏe từ AYOYA
          </h2>
          <p className="text-ayoya-cream/60 text-sm max-w-xl mx-auto mb-8">
            Để lại số điện thoại, AYOYA sẽ nhắn Zalo gửi ưu đãi và mẹo chăm sóc sức khỏe thảo mộc dành riêng cho bạn.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 text-ayoya-cream">
              <CheckCircle2 size={32} className="text-ayoya-amber" />
              <p className="font-medium">Cảm ơn bạn đã đăng ký! AYOYA sẽ sớm liên hệ qua Zalo.</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 flex flex-col gap-2">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Họ tên (không bắt buộc)"
                  className="w-full px-4 py-3 rounded-xl bg-ayoya-cream/10 border border-ayoya-cream/20 text-ayoya-cream placeholder:text-ayoya-cream/40 focus:outline-none focus:border-ayoya-amber"
                />
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Số điện thoại *"
                  className={`w-full px-4 py-3 rounded-xl bg-ayoya-cream/10 border text-ayoya-cream placeholder:text-ayoya-cream/40 focus:outline-none focus:border-ayoya-amber ${
                    touched && phoneError ? 'border-ayoya-brick' : 'border-ayoya-cream/20'
                  }`}
                />
                {touched && phoneError && <p className="text-xs text-ayoya-brick font-medium text-left">{phoneError}</p>}
                {error && <p className="text-xs text-ayoya-brick font-medium text-left">{error}</p>}
              </div>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="px-8 py-3 h-fit bg-ayoya-amber text-ayoya-brown rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {submitting && <Loader2 size={14} className="animate-spin" />}
                Đăng ký
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
