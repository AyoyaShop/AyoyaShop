import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingCart, Loader2, CheckCircle2, Copy, MessageCircle } from 'lucide-react';
import { useCart, type CartItem } from '../context/CartContext';
import { BANK_INFO, CONTACT_INFO, ORDER_SHEET_URL, SHIPPING_ZONES, calcShippingFee, getProductById } from '../data';
import { calcOriginalPrice } from '../lib/pricing';
import { toGaItem, trackShopEvent } from '../lib/analytics';
import { currentOrderCode, forgetOrderCode, isValidPhone, normalizePhone } from '../lib/order';
import { thumb } from '../lib/thumb';
import { combosOf } from '../lib/combo';
import { GIFT_LINE, hasGift } from '../lib/gift';
import { PROMO_CODES, PROMO_MIN_ORDER, forgetPromo, promoDiscount as discountFor, savedPromo } from '../lib/promo';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

function transferNote(orderCode: string): string {
  return `AYOYA ${orderCode}`;
}

function buildVietQrUrl(amount: number, orderCode: string): string {
  const info = encodeURIComponent(transferNote(orderCode));
  const name = encodeURIComponent(BANK_INFO.accountHolder);
  return `https://img.vietqr.io/image/${BANK_INFO.bankBin}-${BANK_INFO.accountNumber}-compact2.png?amount=${amount}&addInfo=${info}&accountName=${name}`;
}

type Step = 'cart' | 'checkout' | 'success';

// What the customer ordered, kept for the confirmation screen after the cart is emptied.
interface PlacedOrder {
  code: string;
  total: number;
  bank: boolean;
  phone: string;
  lines: string[];
}

const emptyForm = { name: '', phone: '', address: '', note: '' };

const fieldClass = (invalid: boolean) =>
  `w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:border-ayoya-amber ${
    invalid ? 'border-ayoya-brick' : 'border-ayoya-brown/15'
  }`;

const labelClass = 'block text-xs font-bold uppercase tracking-widest text-ayoya-brown/75 mb-2';

function CartLine({ item }: { item: CartItem; key?: string }) {
  const { addItem, removeItem, updateQuantity } = useCart();
  const product = getProductById(item.productId);
  const noDiscount = product?.noDiscount;
  const single = product && item.key === `${product.id}::${product.priceUnit}`;
  const combo = single ? combosOf(item.productId)[0] : undefined;

  // Singles that fill whole combos move into them; any remainder stays as singles.
  const takeCombo = () => {
    if (!combo) return;
    const packs = Math.max(1, Math.floor(item.quantity / combo.units));
    updateQuantity(item.key, item.quantity >= combo.units ? item.quantity % combo.units : 0);
    addItem(
      {
        key: `${item.productId}::${combo.label}`,
        productId: item.productId,
        title: item.title,
        image: item.image,
        variantLabel: combo.label,
        unitPrice: combo.price,
        weightGrams: combo.weightGrams
      },
      packs
    );
  };

  return (
    <div className="p-3 bg-white rounded-2xl border border-ayoya-brown/5">
    <div className="flex gap-3">
      <img src={thumb(item.image)} alt={item.title} referrerPolicy="no-referrer" className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-ayoya-brown leading-snug line-clamp-2">{item.title}</p>
        {item.variantLabel && <p className="text-xs text-ayoya-brown/75">{item.variantLabel}</p>}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.key, item.quantity - 1)}
              className="w-8 h-8 rounded-full border border-ayoya-brown/20 flex items-center justify-center text-ayoya-brown hover:bg-ayoya-brown/5 active:scale-95"
              aria-label="Giảm số lượng"
            >
              <Minus size={12} />
            </button>
            <span className="text-sm w-5 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.key, item.quantity + 1)}
              className="w-8 h-8 rounded-full border border-ayoya-brown/20 flex items-center justify-center text-ayoya-brown hover:bg-ayoya-brown/5 active:scale-95"
              aria-label="Tăng số lượng"
            >
              <Plus size={12} />
            </button>
          </div>
          <div className="flex flex-col items-end">
            {!noDiscount && (
              <span className="text-xs text-ayoya-brown/75 line-through leading-tight">
                {formatPrice(calcOriginalPrice(item.unitPrice) * item.quantity)}
              </span>
            )}
            <span className="text-sm font-bold text-ayoya-brown leading-tight">{formatPrice(item.unitPrice * item.quantity)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeItem(item.key)}
        className="text-ayoya-brown/75 hover:text-ayoya-brick transition-colors self-start -m-2 p-2"
        aria-label="Xóa sản phẩm"
      >
        <Trash2 size={16} />
      </button>
    </div>
      {combo && (
        <button
          onClick={takeCombo}
          className="mt-2 w-full min-h-11 rounded-xl border border-dashed border-ayoya-green/50 bg-ayoya-green/5 px-3 py-2 text-xs text-ayoya-green font-medium text-left"
        >
          Lấy <strong>{combo.label}</strong> giá {formatPrice(combo.price)}: rẻ hơn mua lẻ {formatPrice(combo.saving)}
        </button>
      )}
    </div>
  );
}

function CopyRow({ label, value, copy }: { label: string; value: string; copy?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-3 py-1.5">
      <span className="text-ayoya-brown/75">{label}</span>
      <span className="flex items-center gap-2 text-right">
        <strong className="text-ayoya-brown break-all">{value}</strong>
        {copy !== undefined && (
          <button
            onClick={() => {
              navigator.clipboard?.writeText(copy).then(() => setCopied(true), () => {});
            }}
            className="-m-2 p-2 text-ayoya-brown/75 hover:text-ayoya-brown"
            aria-label={`Sao chép ${label}`}
          >
            {copied ? <CheckCircle2 size={15} className="text-ayoya-green" /> : <Copy size={15} />}
          </button>
        )}
      </span>
    </div>
  );
}

// Two honest reasons to add something: the printed code's minimum, and the flat shipping fee up to 1 kg.
function CartTips({ total, weight, onBrowse }: { total: number; weight: number; onBrowse: () => void }) {
  const code = savedPromo();
  return (
    <div className="rounded-2xl bg-ayoya-amber/10 p-4 text-sm text-ayoya-brown space-y-2">
      <p>
        {code ? (
          <>Mã <strong>{code}</strong> </>
        ) : (
          <>Có mã trên menu hoặc thư cảm ơn? Mã </>
        )}
        {total > PROMO_MIN_ORDER
          ? <>giảm cho đơn này <strong>{formatPrice(discountFor(total))}</strong>.</>
          : <>dùng được khi đơn trên {formatPrice(PROMO_MIN_ORDER)}: còn thiếu <strong>{formatPrice(PROMO_MIN_ORDER - total + 1000)}</strong>.</>}
      </p>
      {weight < 1000 && <p>Giỏ nặng khoảng {weight}g. Đơn đến 1kg chỉ chịu một mức phí ship, mua kèm không tốn thêm ship.</p>}
      <Link to="/#thao-moc" onClick={onBrowse} className="inline-flex min-h-11 items-center font-bold underline underline-offset-4">
        Thêm món bán chạy
      </Link>
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, totalWeightGrams, clearCart, checkoutIntent, clearCheckoutIntent } = useCart();
  const [step, setStep] = useState<Step>('cart');
  const [form, setForm] = useState(emptyForm);
  const [zoneId, setZoneId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank'>('cod');
  const [submitting, setSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [error, setError] = useState('');
  const [placed, setPlaced] = useState<PlacedOrder | null>(null);
  const [pendingOrderCode, setPendingOrderCode] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState('');

  const startCheckout = () => {
    setPendingOrderCode(currentOrderCode());
    // A code that arrived through the printed QR code is filled in already.
    const saved = savedPromo();
    if (saved && !appliedPromo) {
      setAppliedPromo(saved);
      setPromoInput(saved);
      setPromoError('');
    }
    setStep('checkout');
  };

  const handleClose = () => {
    closeCart();
    if (step === 'success') {
      setStep('cart');
      setForm(emptyForm);
      setZoneId('');
      setPaymentMethod('cod');
      setPlaced(null);
      setSubmitAttempted(false);
      setPromoInput('');
      setAppliedPromo(null);
      setPromoError('');
    }
  };

  useEffect(() => {
    if (checkoutIntent) {
      startCheckout();
      clearCheckoutIntent();
    }
  }, [checkoutIntent, clearCheckoutIntent]);

  // Removing the last item during checkout leaves nothing to order.
  useEffect(() => {
    if (step === 'checkout' && items.length === 0 && !submitting) setStep('cart');
  }, [step, items.length, submitting]);

  useEffect(() => {
    if (step !== 'checkout') return;
    trackShopEvent('begin_checkout', { value: totalPrice, items: items.map(i => toGaItem(i, i.quantity)) });
    // Fires once per entry into checkout, not on every cart change.
  }, [step]);

  // While the drawer is open the page behind it stays still, and Escape closes it.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, step]);

  const selectedZone = SHIPPING_ZONES.find(z => z.id === zoneId);
  const shippingFee = selectedZone ? calcShippingFee(totalWeightGrams, selectedZone.id) : 0;
  const promoQualifies = appliedPromo !== null && totalPrice > PROMO_MIN_ORDER;
  const promoDiscount = promoQualifies ? discountFor(totalPrice) : 0;
  const discountedSubtotal = totalPrice - promoDiscount;
  const grandTotal = discountedSubtotal + shippingFee;
  const originalSubtotal = items.reduce((sum, item) => {
    const noDiscount = getProductById(item.productId)?.noDiscount;
    const unitOriginal = noDiscount ? item.unitPrice : calcOriginalPrice(item.unitPrice);
    return sum + unitOriginal * item.quantity;
  }, 0);
  const hasSubtotalDiscount = originalSubtotal !== totalPrice;

  const fieldErrors = {
    name: !form.name.trim() ? 'Vui lòng nhập họ tên.' : '',
    phone: !form.phone.trim()
      ? 'Vui lòng nhập số điện thoại.'
      : !isValidPhone(form.phone)
        ? 'Số điện thoại chưa đúng (10 số, bắt đầu bằng 0).'
        : '',
    address: !form.address.trim() ? 'Vui lòng nhập địa chỉ nhận hàng.' : '',
    zone: !zoneId ? 'Vui lòng chọn khu vực giao hàng.' : ''
  };
  const hasFieldErrors = Object.values(fieldErrors).some(Boolean);
  const shown = (message: string) => submitAttempted && message !== '';

  if (!isOpen) return null;

  const handleApplyPromo = () => {
    const normalized = promoInput.trim().toUpperCase();
    setAppliedPromo(PROMO_CODES[normalized] ? normalized : null);
    setPromoError(!normalized ? 'Vui lòng nhập mã ưu đãi.' : PROMO_CODES[normalized] ? '' : 'Mã ưu đãi không hợp lệ.');
  };

  const handleSubmit = async () => {
    if (hasFieldErrors || !selectedZone || items.length === 0) {
      setSubmitAttempted(true);
      // Bring the first thing to fix into view; the form is taller than a phone screen.
      requestAnimationFrame(() => document.querySelector('[data-invalid="true"]')?.scrollIntoView({ block: 'center', behavior: 'smooth' }));
      return;
    }
    setError('');
    setSubmitting(true);
    const code = pendingOrderCode;
    const phone = normalizePhone(form.phone);
    const payload = {
      orderCode: code,
      customerName: form.name.trim(),
      phone,
      address: form.address.trim(),
      note: [form.note.trim(), hasGift(items) ? GIFT_LINE : ''].filter(Boolean).join(' | '),
      shippingZone: selectedZone.label,
      paymentMethod: paymentMethod === 'cod' ? 'COD - Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng',
      items: items.map(i => ({
        title: i.title,
        variant: i.variantLabel,
        quantity: i.quantity,
        unitPrice: i.unitPrice,
        lineTotal: i.unitPrice * i.quantity
      })),
      subtotal: discountedSubtotal,
      shippingFee,
      total: grandTotal,
      promoCode: promoQualifies ? appliedPromo : '',
      originalOrderValue: totalPrice,
      discountedValue: discountedSubtotal,
      promoSource: promoQualifies && appliedPromo ? PROMO_CODES[appliedPromo] : ''
    };

    const giveUp = new AbortController();
    const timer = window.setTimeout(() => giveUp.abort(), 45000);
    try {
      const response = await fetch(ORDER_SHEET_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        signal: giveUp.signal
      });
      // Apps Script answers HTTP 200 with an HTML page when it crashes, so only the JSON status counts.
      const result = await response.json();
      // The sheet allows the code once per phone number. Nothing was recorded: drop the code and let the customer decide.
      if (result?.status === 'promo_used') {
        forgetPromo();
        setAppliedPromo(null);
        setPromoInput('');
        setPromoError('Số điện thoại này đã dùng mã giảm giá.');
        setError('Số điện thoại này đã dùng mã giảm giá một lần. Đơn chưa được đặt: mã đã được bỏ, bạn xem lại tổng tiền rồi bấm Đặt hàng lần nữa.');
        return;
      }
      // The sheet stops a flood of orders from one number. Nothing was recorded.
      if (result?.status === 'too_many') {
        setError(`Số điện thoại này đã đặt nhiều đơn trong một giờ nên đơn chưa được ghi. Bạn nhắn Zalo ${CONTACT_INFO.phone} để shop đặt giúp.`);
        return;
      }
      if (result?.status !== 'success') throw new Error('order not recorded');
      trackShopEvent('purchase', {
        transaction_id: code,
        value: discountedSubtotal,
        shipping: shippingFee,
        coupon: promoQualifies && appliedPromo ? appliedPromo : undefined,
        items: items.map(i => toGaItem(i, i.quantity))
      });
      setPlaced({
        code,
        total: grandTotal,
        bank: paymentMethod === 'bank',
        phone,
        lines: [
          ...items.map(i => `${i.quantity} × ${i.title}${i.variantLabel ? ` (${i.variantLabel})` : ''}`),
          ...(hasGift(items) ? [GIFT_LINE] : [])
        ]
      });
      setStep('success');
      clearCart();
      forgetOrderCode();
      if (promoQualifies) forgetPromo();
    } catch {
      setError(`Chưa nhận được xác nhận. Giỏ hàng vẫn được giữ. Bạn bấm Đặt hàng lần nữa (đơn giống hệt không bị ghi trùng) hoặc nhắn Zalo ${CONTACT_INFO.phone} kèm mã ${code}.`);
    } finally {
      window.clearTimeout(timer);
      setSubmitting(false);
    }
  };

  const promoMessage = promoError
    ? { good: false, text: promoError }
    : appliedPromo === null
      ? null
      : promoQualifies
        ? { good: true, text: `Đã áp dụng: giảm ${formatPrice(promoDiscount)}.` }
        : { good: false, text: `Mã dùng được khi đơn trên ${formatPrice(PROMO_MIN_ORDER)}.` };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex justify-end"
        onClick={handleClose}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Giỏ hàng và đặt hàng"
          className="w-full sm:w-[440px] h-full bg-ayoya-cream flex flex-col shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ayoya-brown/10 flex-shrink-0">
            <h3 className="font-serif text-xl text-ayoya-brown">
              {step === 'cart' && 'Giỏ hàng của bạn'}
              {step === 'checkout' && 'Thông tin đặt hàng'}
              {step === 'success' && 'Đặt hàng thành công'}
            </h3>
            <button
              onClick={handleClose}
              className="text-ayoya-brown/75 hover:text-ayoya-brown transition-colors -m-2 p-2"
              aria-label="Đóng"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6">
            {step === 'cart' &&
              (items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-ayoya-brown/75 gap-4">
                  <ShoppingCart size={48} strokeWidth={1} />
                  <p>Giỏ hàng đang trống.</p>
                  <Link
                    to="/san-pham"
                    onClick={handleClose}
                    className="min-h-12 inline-flex items-center px-8 rounded-full bg-ayoya-green text-white text-sm font-bold uppercase tracking-widest hover:bg-ayoya-brown transition-colors"
                  >
                    Xem sản phẩm
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <CartLine key={item.key} item={item} />
                  ))}
                  {hasGift(items) && <p className="text-sm font-semibold text-ayoya-wood">+ {GIFT_LINE}</p>}
                  <CartTips total={totalPrice} weight={totalWeightGrams} onBrowse={handleClose} />
                </div>
              ))}

            {step === 'checkout' && (
              <div className="space-y-5">
                <div>
                  <p className={labelClass}>Đơn của bạn</p>
                  <div className="space-y-3">
                    {items.map(item => (
                      <CartLine key={item.key} item={item} />
                    ))}
                  </div>
                  {hasGift(items) && <p className="mt-2 text-sm font-semibold text-ayoya-wood">+ {GIFT_LINE}</p>}
                </div>

                <div data-invalid={shown(fieldErrors.name)}>
                  <label className={labelClass}>Họ tên *</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className={fieldClass(shown(fieldErrors.name))}
                    placeholder="Nguyễn Văn A"
                    name="name"
                    autoComplete="name"
                    aria-label="Họ tên"
                  />
                  {shown(fieldErrors.name) && <p className="text-xs text-ayoya-brick font-medium mt-1">{fieldErrors.name}</p>}
                </div>
                <div data-invalid={shown(fieldErrors.phone)}>
                  <label className={labelClass}>Số điện thoại *</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    type="tel"
                    className={fieldClass(shown(fieldErrors.phone))}
                    placeholder="09xx xxx xxx"
                    name="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    aria-label="Số điện thoại"
                  />
                  {shown(fieldErrors.phone) && <p className="text-xs text-ayoya-brick font-medium mt-1">{fieldErrors.phone}</p>}
                </div>
                <div data-invalid={shown(fieldErrors.address)}>
                  <label className={labelClass}>Địa chỉ nhận hàng *</label>
                  <textarea
                    value={form.address}
                    onChange={e => setForm({ ...form, address: e.target.value })}
                    rows={2}
                    className={`${fieldClass(shown(fieldErrors.address))} resize-none`}
                    placeholder="Số nhà, đường, phường/xã, tỉnh/thành"
                    name="address"
                    autoComplete="street-address"
                    aria-label="Địa chỉ nhận hàng"
                  />
                  {shown(fieldErrors.address) && <p className="text-xs text-ayoya-brick font-medium mt-1">{fieldErrors.address}</p>}
                </div>
                <div data-invalid={shown(fieldErrors.zone)}>
                  <label className={labelClass}>Khu vực giao hàng *</label>
                  <select
                    aria-label="Khu vực giao hàng"
                    value={zoneId}
                    onChange={e => setZoneId(e.target.value)}
                    className={`${fieldClass(shown(fieldErrors.zone))} text-ayoya-brown`}
                  >
                    <option value="">-- Chọn khu vực --</option>
                    {SHIPPING_ZONES.map(z => (
                      <option key={z.id} value={z.id}>
                        {z.label}
                      </option>
                    ))}
                  </select>
                  {shown(fieldErrors.zone) ? (
                    <p className="text-xs text-ayoya-brick font-medium mt-1">{fieldErrors.zone}</p>
                  ) : (
                    <p className="text-xs text-ayoya-brown/75 mt-1">
                      Phí ship theo SPX Express, khi giao thực tế có thể chênh khoảng 1.000đ – 10.000đ.
                    </p>
                  )}
                </div>

                <div>
                  <p className={labelClass}>Phương thức thanh toán</p>
                  <div className="grid grid-cols-2 gap-3">
                    {(
                      [
                        ['cod', 'COD', 'Trả tiền khi nhận hàng'],
                        ['bank', 'Chuyển khoản', 'Mã QR hiện sau khi đặt']
                      ] as const
                    ).map(([id, title, hint]) => (
                      <button
                        key={id}
                        onClick={() => setPaymentMethod(id)}
                        aria-pressed={paymentMethod === id}
                        className={`py-3 rounded-xl border text-sm font-medium transition-all flex flex-col items-center gap-0.5 ${
                          paymentMethod === id
                            ? 'border-ayoya-green bg-ayoya-green text-white'
                            : 'border-ayoya-brown/15 bg-white text-ayoya-brown'
                        }`}
                      >
                        <span>{title}</span>
                        <span className={`text-xs font-normal ${paymentMethod === id ? 'text-white/70' : 'text-ayoya-brown/75'}`}>{hint}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Ghi chú</label>
                  <textarea
                    value={form.note}
                    onChange={e => setForm({ ...form, note: e.target.value })}
                    rows={2}
                    className={`${fieldClass(false)} resize-none`}
                    placeholder="Yêu cầu thêm (không bắt buộc)"
                    aria-label="Ghi chú"
                  />
                </div>

                <div>
                  <label className={labelClass}>Mã ưu đãi</label>
                  <div className="flex gap-2">
                    <input
                      value={promoInput}
                      onChange={e => {
                        setPromoInput(e.target.value);
                        setAppliedPromo(null);
                        setPromoError('');
                      }}
                      onKeyDown={e => e.key === 'Enter' && handleApplyPromo()}
                      className="min-w-0 flex-1 px-4 py-3 rounded-xl border border-ayoya-brown/15 bg-white focus:outline-none focus:border-ayoya-amber uppercase"
                      placeholder="Không bắt buộc"
                      aria-label="Mã ưu đãi"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-5 py-3 rounded-xl border border-ayoya-brown text-ayoya-brown text-xs font-bold uppercase tracking-widest hover:bg-ayoya-green hover:text-white transition-all whitespace-nowrap"
                    >
                      Áp dụng
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-xs font-medium mt-1 ${promoMessage.good ? 'text-ayoya-green' : 'text-ayoya-brick'}`}>{promoMessage.text}</p>
                  )}
                </div>

                <div className="p-4 bg-white rounded-2xl border border-ayoya-brown/10 space-y-2 text-sm">
                  <div className="flex items-center justify-between text-ayoya-brown/70">
                    <span>Tạm tính</span>
                    <span className="flex items-baseline gap-2">
                      {hasSubtotalDiscount && (
                        <span className="text-xs text-ayoya-brown/75 line-through">{formatPrice(originalSubtotal)}</span>
                      )}
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  {promoQualifies && (
                    <div className="flex items-center justify-between text-ayoya-green">
                      <span>Giảm giá (mã {appliedPromo})</span>
                      <span>-{formatPrice(promoDiscount)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-ayoya-brown/70">
                    <span>Phí vận chuyển</span>
                    <span>{selectedZone ? formatPrice(shippingFee) : 'Chọn khu vực'}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-ayoya-brown/10 font-bold text-ayoya-brown">
                    <span>Tổng cộng{selectedZone ? '' : ' (chưa gồm ship)'}</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                {error && <p className="text-xs text-ayoya-brick font-medium">{error}</p>}
              </div>
            )}

            {step === 'success' && placed && (
              <div className="space-y-5">
                <div className="flex flex-col items-center text-center gap-3">
                  <CheckCircle2 size={52} className="text-ayoya-green" />
                  <h4 className="text-xl font-serif text-ayoya-brown">Cảm ơn bạn đã đặt hàng!</h4>
                  <p className="text-sm text-ayoya-brown/75">
                    AYOYA sẽ liên hệ số <strong className="text-ayoya-brown">{placed.phone}</strong> để xác nhận đơn.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-ayoya-brown/10 text-sm">
                  <CopyRow label="Mã đơn" value={placed.code} copy={placed.code} />
                  <ul className="py-2 border-y border-ayoya-brown/10 text-ayoya-brown space-y-1">
                    {placed.lines.map(line => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <CopyRow label={placed.bank ? 'Cần chuyển khoản' : 'Trả khi nhận hàng'} value={formatPrice(placed.total)} />
                </div>

                {placed.bank && (
                  <div className="p-5 bg-white rounded-2xl border border-ayoya-brown/10 text-sm">
                    <p className="text-center font-bold text-ayoya-brown mb-3">Quét mã để chuyển khoản</p>
                    <img src={buildVietQrUrl(placed.total, placed.code)} alt="Mã QR chuyển khoản VietQR" className="w-52 h-auto mx-auto rounded-lg mb-3" />
                    <CopyRow label="Ngân hàng" value={BANK_INFO.bankName} />
                    <CopyRow label="Số tài khoản" value={BANK_INFO.accountNumber} copy={BANK_INFO.accountNumber} />
                    <CopyRow label="Chủ tài khoản" value={BANK_INFO.accountHolder} />
                    <CopyRow label="Số tiền" value={formatPrice(placed.total)} copy={String(placed.total)} />
                    <CopyRow label="Nội dung" value={transferNote(placed.code)} copy={transferNote(placed.code)} />
                    <p className="mt-2 text-xs text-ayoya-brown/75 text-center">
                      Dùng một điện thoại? Hãy chụp màn hình mã QR rồi chọn ảnh đó trong ứng dụng ngân hàng.
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <a
                    href={CONTACT_INFO.zaloHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-12 flex items-center justify-center gap-2 rounded-full border border-ayoya-brown text-ayoya-brown text-sm font-bold uppercase tracking-widest"
                  >
                    <MessageCircle size={16} /> Nhắn Zalo cho AYOYA
                  </a>
                  <Link
                    to="/tra-cuu-don"
                    state={{ code: placed.code, phone: placed.phone }}
                    onClick={handleClose}
                    className="min-h-12 flex items-center justify-center rounded-full border border-ayoya-brown text-ayoya-brown text-sm font-bold uppercase tracking-widest"
                  >
                    Xem trạng thái đơn
                  </Link>
                  <Link
                    to="/san-pham"
                    onClick={handleClose}
                    className="min-h-12 flex items-center justify-center rounded-full bg-ayoya-green text-white text-sm font-bold uppercase tracking-widest"
                  >
                    Xem thêm sản phẩm
                  </Link>
                </div>
              </div>
            )}
          </div>

          {step === 'cart' && items.length > 0 && (
            <div className="px-6 py-5 border-t border-ayoya-brown/10 bg-white/50 flex-shrink-0 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ayoya-brown/75">Tạm tính (chưa gồm phí ship)</span>
                <span className="flex items-baseline gap-2">
                  {hasSubtotalDiscount && (
                    <span className="text-xs text-ayoya-brown/75 line-through">{formatPrice(originalSubtotal)}</span>
                  )}
                  <span className="text-xl font-bold text-ayoya-brown">{formatPrice(totalPrice)}</span>
                </span>
              </div>
              <button
                onClick={startCheckout}
                className="w-full py-4 bg-ayoya-green text-white rounded-full font-bold uppercase tracking-widest hover:bg-ayoya-brown transition-all"
              >
                Tiến hành đặt hàng
              </button>
            </div>
          )}

          {step === 'checkout' && (
            <div className="px-6 py-4 border-t border-ayoya-brown/10 bg-white/50 flex-shrink-0">
              <p className="mb-3 text-xs text-ayoya-brown/70 leading-relaxed">
                Khi bấm "Đặt hàng", bạn đồng ý để AYOYA dùng thông tin trên để xử lý và giao đơn theo{' '}
                <a href="/chinh-sach/chinh-sach-bao-mat" target="_blank" rel="noopener" className="underline">Chính sách bảo mật</a>.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep('cart')}
                  className="px-5 py-4 border border-ayoya-brown/20 text-ayoya-brown rounded-full font-medium"
                >
                  Quay lại
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 py-4 bg-ayoya-green text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-ayoya-brown transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting && <Loader2 size={16} className="animate-spin" />}
                  Đặt hàng · {formatPrice(grandTotal)}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
