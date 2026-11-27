import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data';
import SectionHeading from './SectionHeading';

// The four questions that stop an order. Every answer must stay backed by a policy page.
const QUESTIONS = [
  {
    q: 'Tôi có được kiểm hàng trước khi trả tiền không?',
    a: 'Có. Bạn đồng kiểm bao bì và số lượng cùng nhân viên giao hàng; hàng vỡ, rò rỉ hoặc sai mẫu có thể từ chối nhận.'
  },
  { q: 'Thanh toán thế nào?', a: 'Trả tiền khi nhận hàng, hoặc chuyển khoản bằng mã QR hiện ngay sau khi đặt đơn.' },
  {
    q: 'Bao lâu thì nhận được?',
    a: 'TP.HCM và Bình Dương 1 – 2 ngày làm việc; miền Nam khác 2 – 4 ngày; miền Trung, Tây Nguyên, miền Bắc 3 – 7 ngày.'
  },
  { q: 'Đổi trả ra sao?', a: 'Trong 7 ngày, khi sản phẩm lỗi do sản xuất, hư hỏng do vận chuyển hoặc giao sai đơn.' }
];

export default function HomeFaq() {
  return (
    <section className="py-16 md:py-24 px-4 bg-paper bg-ayoya-cream/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Trước Khi" emphasis="Đặt Hàng" />
        <div className="space-y-2">
          {QUESTIONS.map(item => (
            <details key={item.q} className="rounded-2xl bg-white border border-ayoya-brown/10 px-4">
              <summary className="min-h-14 flex items-center font-semibold text-ayoya-brown cursor-pointer py-3">{item.q}</summary>
              <p className="pb-4 text-sm text-ayoya-brown/80 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-ayoya-brown/80">
          <Link to="/chinh-sach/chinh-sach-doi-tra" className="underline underline-offset-4">Điều kiện đổi trả</Link>
          {' · '}
          <Link to="/hoi-dap" className="underline underline-offset-4">Xem thêm hỏi đáp</Link>
          {' · '}
          <a href={CONTACT_INFO.zaloHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Hỏi qua Zalo
          </a>
        </p>
      </div>
    </section>
  );
}
