import { useEffect, useState } from 'react';
import { Gift, X } from 'lucide-react';
import { PROMO_MIN_ORDER, rememberPromoFromAddress } from '../lib/promo';

// Shown to someone who arrives from the QR code on the menu or the thank-you card.
export default function PromoNotice() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    setCode(rememberPromoFromAddress(window.location.search));
  }, []);

  if (!code) return null;

  return (
    <div role="status" className="fixed top-[116px] lg:top-[84px] inset-x-3 md:left-auto md:right-6 md:w-96 z-40 flex items-start gap-3 rounded-2xl bg-ayoya-green text-white p-4 shadow-xl">
      <Gift size={20} className="flex-shrink-0 mt-0.5 text-ayoya-amber" />
      <p className="text-sm leading-snug">
        Đã ghi nhận mã <strong>{code}</strong>: đơn trên {PROMO_MIN_ORDER.toLocaleString('vi-VN')}đ giảm 20% (tối đa 50.000đ), tự áp khi đặt hàng.
      </p>
      <button onClick={() => setCode(null)} className="-m-2 p-2 flex-shrink-0" aria-label="Đóng thông báo">
        <X size={18} />
      </button>
    </div>
  );
}
