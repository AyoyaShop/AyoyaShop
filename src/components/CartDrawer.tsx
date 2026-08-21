import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingCart, Loader2, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BANK_INFO, ORDER_SHEET_URL, SHIPPING_ZONES, calcShippingFee } from '../data';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

function generateOrderCode(): string {
  const stamp = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 12);
  return `AY${stamp}`;
}

function buildVietQrUrl(amount: number, orderCode: string): string {
  const info = encodeURIComponent(`AYOYA ${orderCode}`);
  const name = encodeURIComponent(BANK_INFO.accountHolder);
  return `https://img.vietqr.io/image/${BANK_INFO.bankBin}-${BANK_INFO.accountNumber}-compact2.png?amount=${amount}&addInfo=${info}&accountName=${name}`;
}

type Step = 'cart' | 'checkout' | 'success';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalWeightGrams, clearCart } = useCart();
  const [step, setStep] = useState<Step>('cart');
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' });
  const [zoneId, setZoneId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank'>('cod');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [orderCode, setOrderCode] = useState('');
  const [previewOrderCode] = useState(() => generateOrderCode());

  if (!isOpen) return null;

  const selectedZone = SHIPPING_ZONES.find(z => z.id === zoneId);
  const shippingFee = selectedZone ? calcShippingFee(totalWeightGrams, selectedZone.id) : 0;
  const grandTotal = totalPrice + shippingFee;

  const handleClose = () => {
    closeCart();
    if (step === 'success') {
      setStep('cart');
      setForm({ name: '', phone: '', address: '', note: '' });
      setZoneId('');
      setPaymentMethod('cod');
      setOrderCode('');
    }
  };

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Địa chỉ.');
      return;
    }
    if (!selectedZone) {
      setError('Vui lòng chọn khu vực giao hàng để tính phí vận chuyển.');
      return;
    }
    setError('');
    setSubmitting(true);
    const code = generateOrderCode();
    const payload = {
      orderCode: code,
      customerName: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      note: form.note.trim(),
      shippingZone: selectedZone.label,
      paymentMethod: paymentMethod === 'cod' ? 'COD - Thanh toán khi nhận hàng' : 'Chuyển khoản ngân hàng',
      items: items.map(i => ({
        title: i.title,
        variant: i.variantLabel,
        quantity: i.quantity,
        unitPrice: i.unitPrice,
        lineTotal: i.unitPrice * i.quantity
      })),
      subtotal: totalPrice,
      shippingFee,
      total: grandTotal
    };

    try {
      await fetch(ORDER_SHEET_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      setOrderCode(code);
      clearCart();
      setStep('success');
    } catch {
      setError('Không thể gửi đơn hàng lúc này. Vui lòng thử lại hoặc liên hệ Zalo 0933.458.485.');
    } finally {
      setSubmitting(false);
    }
  };

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
          className="w-full sm:w-[440px] h-full bg-ayoya-cream flex flex-col shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ayoya-brown/10 flex-shrink-0">
            <h3 className="font-serif text-xl text-ayoya-brown">
              {step === 'cart' && 'Giỏ hàng của bạn'}
              {step === 'checkout' && 'Thông tin đặt hàng'}
              {step === 'success' && 'Đặt hàng thành công'}
            </h3>
            <button onClick={handleClose} className="text-ayoya-brown/50 hover:text-ayoya-brown transition-colors">
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {step === 'cart' &&
              (items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-ayoya-brown/50 gap-4">
                  <ShoppingCart size={48} strokeWidth={1} />
                  <p>Giỏ hàng đang trống.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.key} className="flex gap-4 p-3 bg-white rounded-2xl border border-ayoya-brown/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-ayoya-brown truncate">{item.title}</p>
                        {item.variantLabel && (
                          <p className="text-[10px] uppercase tracking-widest text-ayoya-brown/40">{item.variantLabel}</p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="w-6 h-6 rounded-full border border-ayoya-brown/20 flex items-center justify-center text-ayoya-brown hover:bg-ayoya-brown/5"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-sm w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="w-6 h-6 rounded-full border border-ayoya-brown/20 flex items-center justify-center text-ayoya-brown hover:bg-ayoya-brown/5"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-ayoya-brown">{formatPrice(item.unitPrice * item.quantity)}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-ayoya-brown/30 hover:text-ayoya-brick transition-colors self-start"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ))}

            {step === 'checkout' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 mb-2">Họ tên *</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ayoya-brown/15 bg-white focus:outline-none focus:border-ayoya-amber"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 mb-2">Số điện thoại *</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-ayoya-brown/15 bg-white focus:outline-none focus:border-ayoya-amber"
                    placeholder="09xxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 mb-2">Địa chỉ nhận hàng *</label>
                  <textarea
                    value={form.address}
                    onChange={e => setForm({ ...form, address: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-ayoya-brown/15 bg-white focus:outline-none focus:border-ayoya-amber resize-none"
                    placeholder="Số nhà, đường, phường/xã, tỉnh/thành"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 mb-2">Khu vực giao hàng *</label>
                  <select
                    value={zoneId}
                    onChange={e => setZoneId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-ayoya-brown/15 bg-white focus:outline-none focus:border-ayoya-amber text-ayoya-brown"
                  >
                    <option value="">-- Chọn khu vực --</option>
                    {SHIPPING_ZONES.map(z => (
                      <option key={z.id} value={z.id}>
                        {z.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-[10px] text-ayoya-brown/40 mt-1">Dùng để tính phí vận chuyển qua SPX Express.</p>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 mb-2">Ghi chú</label>
                  <textarea
                    value={form.note}
                    onChange={e => setForm({ ...form, note: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-ayoya-brown/15 bg-white focus:outline-none focus:border-ayoya-amber resize-none"
                    placeholder="Yêu cầu thêm (không bắt buộc)"
                  />
                </div>

                <div className="p-4 bg-white rounded-2xl border border-ayoya-brown/10 space-y-2 text-sm">
                  <div className="flex items-center justify-between text-ayoya-brown/70">
                    <span>Tạm tính</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex items-center justify-between text-ayoya-brown/70">
                    <span>Phí vận chuyển</span>
                    <span>{selectedZone ? formatPrice(shippingFee) : 'Chọn khu vực bên trên'}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-ayoya-brown/10 font-bold text-ayoya-brown">
                    <span>Tổng cộng</span>
                    <span>{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-ayoya-brown/60 mb-2">Phương thức thanh toán</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPaymentMethod('cod')}
                      className={`py-3 rounded-xl border text-sm font-medium transition-all flex flex-col items-center gap-0.5 ${
                        paymentMethod === 'cod'
                          ? 'border-ayoya-brown bg-ayoya-brown text-white'
                          : 'border-ayoya-brown/15 bg-white text-ayoya-brown'
                      }`}
                    >
                      <span>COD</span>
                      <span className={`text-[10px] font-normal ${paymentMethod === 'cod' ? 'text-white/70' : 'text-ayoya-brown/50'}`}>
                        Thanh toán khi nhận hàng
                      </span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('bank')}
                      className={`py-3 rounded-xl border text-sm font-medium transition-all flex flex-col items-center gap-0.5 ${
                        paymentMethod === 'bank'
                          ? 'border-ayoya-brown bg-ayoya-brown text-white'
                          : 'border-ayoya-brown/15 bg-white text-ayoya-brown'
                      }`}
                    >
                      <span>Chuyển khoản</span>
                      <span className={`text-[10px] font-normal ${paymentMethod === 'bank' ? 'text-white/70' : 'text-ayoya-brown/50'}`}>
                        Quét mã QR
                      </span>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'bank' && (
                  <div className="p-5 bg-white rounded-2xl border border-ayoya-brown/10 text-center space-y-3">
                    <img
                      src={buildVietQrUrl(grandTotal, previewOrderCode)}
                      alt="Mã QR chuyển khoản VietQR"
                      className="w-48 h-auto mx-auto rounded-lg"
                    />
                    <div className="text-xs text-ayoya-brown/70 space-y-1">
                      <p>
                        <strong className="text-ayoya-brown">{BANK_INFO.bankName}</strong>
                      </p>
                      <p>
                        STK: <strong className="text-ayoya-brown">{BANK_INFO.accountNumber}</strong>
                      </p>
                      <p>
                        Chủ TK: <strong className="text-ayoya-brown">{BANK_INFO.accountHolder}</strong>
                      </p>
                      <p>
                        Số tiền: <strong className="text-ayoya-brown">{formatPrice(grandTotal)}</strong>
                      </p>
                    </div>
                    <p className="text-[10px] text-ayoya-brown/40 italic">
                      Quét mã hoặc chuyển khoản thủ công, ghi nội dung theo mã đơn Ayoya gửi lại sau khi đặt.
                    </p>
                  </div>
                )}

                {error && <p className="text-xs text-ayoya-brick font-medium">{error}</p>}
              </div>
            )}

            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <CheckCircle2 size={56} className="text-ayoya-green" />
                <h4 className="text-xl font-serif text-ayoya-brown">Cảm ơn bạn đã đặt hàng!</h4>
                <p className="text-sm text-ayoya-brown/60 max-w-xs">
                  Mã đơn <strong className="text-ayoya-brown">{orderCode}</strong>. Ayoya sẽ liên hệ xác nhận trong thời gian sớm nhất.
                </p>
              </div>
            )}
          </div>

          {step !== 'success' && (
            <div className="px-6 py-5 border-t border-ayoya-brown/10 bg-white/50 flex-shrink-0 space-y-3">
              {step === 'cart' && items.length > 0 && (
                <>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ayoya-brown/60">Tạm tính (chưa gồm phí ship)</span>
                    <span className="text-xl font-bold text-ayoya-brown">{formatPrice(totalPrice)}</span>
                  </div>
                  <button
                    onClick={() => setStep('checkout')}
                    className="w-full py-4 bg-ayoya-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-ayoya-brick transition-all"
                  >
                    Tiến hành đặt hàng
                  </button>
                </>
              )}
              {step === 'checkout' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('cart')}
                    className="px-6 py-4 border border-ayoya-brown/20 text-ayoya-brown rounded-full font-medium"
                  >
                    Quay lại
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex-1 py-4 bg-ayoya-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-ayoya-brick transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitting && <Loader2 size={16} className="animate-spin" />}
                    Gửi đơn hàng
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
