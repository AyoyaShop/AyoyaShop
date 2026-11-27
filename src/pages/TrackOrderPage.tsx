import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { lookupOrder, type LookupResult } from '../lib/orderLookup';
import { applySeo } from '../lib/seo';
import { TRACK_META } from '../lib/pageMeta';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

// The shop sets these in the sheet's status column.
const STEPS = ['Đã nhận', 'Đã gửi', 'Đã giao'];
const fieldClass = 'min-h-12 w-full rounded-xl border border-ayoya-sand bg-ayoya-white px-4';

export default function TrackOrderPage() {
  // Filled in when the visitor comes from the home page or from the order confirmation.
  const handedOver = useLocation().state as { code?: string; phone?: string } | null;
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [searching, setSearching] = useState(false);
  const [result, setResult] = useState<LookupResult | null>(null);

  const search = async (orderCode: string, phoneNumber: string) => {
    if (!orderCode.trim() || !phoneNumber.trim()) return;
    setSearching(true);
    setResult(null);
    setResult(await lookupOrder(orderCode, phoneNumber));
    setSearching(false);
  };

  useEffect(() => {
    applySeo(TRACK_META);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!handedOver?.code || !handedOver.phone) return;
    setCode(handedOver.code);
    setPhone(handedOver.phone);
    void search(handedOver.code, handedOver.phone);
  }, [handedOver?.code, handedOver?.phone]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    void search(code, phone);
  };

  const order = result?.kind === 'found' ? result.order : null;
  const cancelled = order !== null && !STEPS.includes(order.state);
  const reached = order ? STEPS.indexOf(order.state) : -1;

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-2xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> / Tra cứu đơn
        </p>
        <h1 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">Tra cứu đơn hàng</h1>
        <p className="mt-2">Nhập mã đơn và số điện thoại đã dùng khi đặt trên website.</p>

        <form onSubmit={submit} className="mt-6 grid gap-3">
          <input
            value={code}
            onChange={e => setCode(e.target.value)}
            aria-label="Mã đơn"
            placeholder="Mã đơn (AY…)"
            autoCapitalize="characters"
            required
            className={`${fieldClass} uppercase placeholder:normal-case`}
          />
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            aria-label="Số điện thoại đặt hàng"
            placeholder="Số điện thoại đặt hàng"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className={fieldClass}
          />
          <button type="submit" disabled={searching} className="btn gap-2 disabled:opacity-60">
            {searching && <Loader2 size={16} className="animate-spin" />}
            Tra cứu
          </button>
        </form>

        <div aria-live="polite">
          {result && result.kind !== 'found' && (
            <p className="mt-5 rounded-2xl border border-ayoya-amber bg-ayoya-sand/60 p-4 text-sm">
              {result.kind === 'not_found' && 'Không tìm thấy đơn. Bạn kiểm tra lại mã đơn và số điện thoại.'}
              {result.kind === 'too_many' && 'Bạn đã thử sai nhiều lần. Vui lòng chờ 10 phút rồi thử lại.'}
              {result.kind === 'failed' && 'Chưa tra cứu được lúc này. Vui lòng thử lại sau.'}{' '}
              <a href={CONTACT_INFO.zaloHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                Hỏi qua Zalo {CONTACT_INFO.phone}
              </a>
            </p>
          )}

          {order && (
            <div className="mt-6 rounded-2xl border border-ayoya-sand bg-ayoya-white p-5">
              <p className="font-bold">Đơn {order.code}</p>
              {order.date && <p className="text-sm text-ayoya-brown/70">Đặt ngày {order.date}</p>}

              {cancelled ? (
                <p className="mt-4 rounded-xl bg-ayoya-sand px-4 py-3 text-sm font-semibold">Trạng thái: {order.state}</p>
              ) : (
                <ol className="my-5 grid grid-cols-3 text-center text-sm font-semibold">
                  {STEPS.map((step, index) => (
                    <li
                      key={step}
                      aria-current={index === reached ? 'step' : undefined}
                      className={`border-t-4 pt-2 ${index <= reached ? 'border-ayoya-green text-ayoya-green' : 'border-ayoya-sand text-ayoya-brown/50'}`}
                    >
                      {step}
                    </li>
                  ))}
                </ol>
              )}

              {order.tracking && (
                <p className="mt-3 text-sm">
                  SPX Express, mã vận đơn <strong className="break-all">{order.tracking}</strong>. Bạn nhập mã này tại{' '}
                  <a href="https://spx.vn" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">spx.vn</a> để xem hành trình.
                </p>
              )}

              <ul className="mt-4 space-y-1 border-t border-ayoya-sand pt-4 text-sm">
                {order.items.split('\n').filter(Boolean).map((line, index) => (
                  <li key={index}>{line.replace(' (mặc định)', '')}</li>
                ))}
                {order.gift && <li className="font-semibold text-ayoya-wood">Tặng 1 thẻ rùa phong thủy</li>}
              </ul>
              <dl className="mt-3 grid grid-cols-[1fr_auto] gap-y-1 text-sm">
                <dt>Tiền hàng</dt>
                <dd>{formatPrice(order.subtotal)}</dd>
                <dt>Phí ship</dt>
                <dd>{formatPrice(order.shipping)}</dd>
                <dt className="font-bold">Tổng</dt>
                <dd className="font-bold">{formatPrice(order.total)}</dd>
              </dl>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-ayoya-brown/70">Trang này chỉ hiện trạng thái, mã vận đơn, món hàng và tiền; không hiện tên và địa chỉ.</p>
      </div>
    </div>
  );
}
