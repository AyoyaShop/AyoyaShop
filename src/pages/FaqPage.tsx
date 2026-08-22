import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SHOPEE_LINK, TIKTOK_LINK, CONTACT_INFO } from '../data';
import { applySeo, SITE_URL } from '../lib/seo';

const FAQS = [
  {
    question: 'Phí vận chuyển được tính như thế nào?',
    answer:
      'Đơn hàng được giao qua SPX Express, phí tính theo khu vực và tổng khối lượng sản phẩm (hiển thị ngay khi bạn chọn khu vực giao hàng ở bước thanh toán). Do phí vận chuyển cập nhật theo thời gian thực từ đối tác SPX, tổng giá trị thanh toán thực tế có thể dao động nhẹ (khoảng 1.000đ – 10.000đ) tùy chính sách phụ phí tại thời điểm bàn giao kiện hàng.'
  },
  {
    question: 'AYOYA hỗ trợ những phương thức thanh toán nào?',
    answer: 'Bạn có thể chọn thanh toán khi nhận hàng (COD) hoặc chuyển khoản ngân hàng qua mã QR VietQR ngay trong bước đặt hàng.'
  },
  {
    question: 'Tôi có được đồng kiểm trước khi nhận hàng không?',
    answer: 'Có. AYOYA hỗ trợ đồng kiểm sản phẩm trước khi thanh toán để bạn an tâm về tình trạng đơn hàng.'
  },
  {
    question: 'Chính sách đổi trả, hoàn tiền như thế nào?',
    answer: 'Xem chi tiết chính sách đổi trả và hoàn tiền tại trang chính sách của AYOYA (liên kết ở cuối trang website).'
  },
  {
    question: 'Sản phẩm của AYOYA có nguồn gốc rõ ràng không?',
    answer:
      'Có. Mỗi sản phẩm trên website đều có thông tin xuất xứ, hạn sử dụng và cách bảo quản cụ thể trong phần "Xuất xứ & Bảo quản" ở trang chi tiết sản phẩm. Một số sản phẩm thực phẩm bảo vệ sức khỏe (như Beauty Collagen C+) có giấy tiếp nhận đăng ký bản công bố sản phẩm từ Cục An Toàn Thực Phẩm - Bộ Y Tế.'
  },
  {
    question: 'Tôi có thể mua sản phẩm AYOYA ở đâu ngoài website?',
    answer: `Ngoài website, bạn có thể đặt mua trực tiếp qua gian hàng Shopee hoặc TikTok Shop chính thức của AYOYA.`
  },
  {
    question: 'Làm sao để liên hệ tư vấn trước khi mua?',
    answer: `Bạn có thể nhắn Zalo/gọi điện theo số ${CONTACT_INFO.phone}, hoặc gửi email tới ${CONTACT_INFO.email}. AYOYA luôn sẵn sàng tư vấn để bạn chọn đúng sản phẩm phù hợp nhu cầu.`
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    applySeo({
      title: 'Hỏi đáp | AYOYA Shop',
      description: 'Giải đáp các thắc mắc thường gặp về vận chuyển, thanh toán, đổi trả và nguồn gốc sản phẩm của AYOYA Shop.',
      url: `${SITE_URL}/hoi-dap`,
      image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776475858/chat_luong_tam_duc_final_kfwn1o.png'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif text-ayoya-brown mb-4 underline underline-offset-8 decoration-ayoya-amber/30">
            Câu hỏi <span className="italic">thường gặp</span>
          </h1>
          <p className="text-ayoya-brown/60 tracking-wider text-[10px] md:text-sm uppercase">Mọi thắc mắc trước khi đặt hàng</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="bg-white rounded-2xl border border-ayoya-brown/10 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ayoya-brown">{faq.question}</span>
                  <ChevronDown size={18} className={`flex-shrink-0 text-ayoya-brown/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-ayoya-brown/70 leading-relaxed">
                    {faq.question.includes('mua sản phẩm AYOYA') ? (
                      <>
                        Ngoài website, bạn có thể đặt mua trực tiếp qua{' '}
                        <a href={SHOPEE_LINK} target="_blank" rel="noopener noreferrer" className="text-ayoya-brick underline">
                          gian hàng Shopee
                        </a>{' '}
                        hoặc{' '}
                        <a href={TIKTOK_LINK} target="_blank" rel="noopener noreferrer" className="text-ayoya-brick underline">
                          TikTok Shop
                        </a>{' '}
                        chính thức của AYOYA.
                      </>
                    ) : (
                      faq.answer
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
