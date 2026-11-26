import { Link } from 'react-router-dom';
import { PackageCheck, RefreshCcw, Wallet, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

// Every item here must stay backed by a policy page.
const ITEMS = [
  {
    icon: PackageCheck,
    title: 'Đồng kiểm khi nhận hàng',
    text: 'Kiểm tra bao bì và số lượng cùng nhân viên giao hàng. Hàng vỡ, rò rỉ hoặc sai mẫu có thể từ chối nhận.',
    link: { to: '/chinh-sach/chinh-sach-van-chuyen', label: 'Chính sách vận chuyển' }
  },
  {
    icon: RefreshCcw,
    title: 'Đổi trả trong 7 ngày',
    text: 'Áp dụng khi sản phẩm lỗi do sản xuất, hư hỏng do vận chuyển hoặc giao sai đơn.',
    link: { to: '/chinh-sach/chinh-sach-doi-tra', label: 'Điều kiện đổi trả' }
  },
  {
    icon: Wallet,
    title: 'COD hoặc chuyển khoản',
    text: 'Thanh toán khi nhận hàng, hoặc chuyển khoản bằng mã QR hiển thị lúc đặt đơn.',
    link: { to: '/chinh-sach/huong-dan-thanh-toan', label: 'Hướng dẫn thanh toán' }
  },
  {
    icon: MessageCircle,
    title: 'Hỏi trước khi mua',
    text: `Nhắn Zalo hoặc gọi ${CONTACT_INFO.phone} để hỏi về thành phần, cách dùng và đơn hàng.`,
    link: { to: '/lien-he', label: 'Liên hệ AYOYA' }
  }
];

export default function PurchaseAssurance() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-ayoya-brown text-center mb-12 underline underline-offset-8 decoration-ayoya-amber/30">
          Mua Hàng <span className="italic">Yên Tâm</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ITEMS.map(({ icon: Icon, title, text, link }) => (
            <div key={title} className="p-6 rounded-3xl bg-ayoya-cream/30 border border-ayoya-brown/10">
              <Icon size={24} strokeWidth={1.5} className="text-ayoya-green mb-3" />
              <h3 className="text-lg font-bold text-ayoya-brown mb-2">{title}</h3>
              <p className="text-sm text-ayoya-brown/80 leading-relaxed mb-3">{text}</p>
              <Link to={link.to} className="text-sm font-semibold text-ayoya-brown underline underline-offset-4">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
