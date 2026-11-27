import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const fieldClass = 'min-h-12 w-full rounded-xl border border-ayoya-sand bg-ayoya-white px-4 text-ayoya-brown';

// The home page's shortcut to order lookup: it hands what was typed to the lookup page.
export default function TrackOrderBlock() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate('/tra-cuu-don', { state: { code, phone } });
  };

  return (
    <section className="bg-ayoya-green px-5 py-12 text-ayoya-cream md:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-7 lg:grid-cols-2 lg:gap-11">
        <div>
          <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-tight">Đã đặt hàng? Xem đơn của bạn</h2>
          <p className="mt-2 opacity-90">Nhập mã đơn và số điện thoại đặt hàng để xem trạng thái và mã vận đơn.</p>
        </div>
        <form onSubmit={submit} className="grid gap-3 rounded-2xl bg-ayoya-cream p-5">
          <input value={code} onChange={e => setCode(e.target.value)} aria-label="Mã đơn" placeholder="Mã đơn (AY…)" className={fieldClass} />
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            aria-label="Số điện thoại đặt hàng"
            placeholder="Số điện thoại đặt hàng"
            type="tel"
            inputMode="tel"
            className={fieldClass}
          />
          <button type="submit" className="btn">Tra cứu</button>
        </form>
      </div>
    </section>
  );
}
