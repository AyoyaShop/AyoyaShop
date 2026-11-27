import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Không tìm thấy trang | AYOYA Shop';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-36 pb-24 px-4 min-h-[70vh] text-center">
      <h1 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-4">Không tìm thấy trang này</h1>
      <p className="text-ayoya-brown/75 mb-8">Địa chỉ có thể đã đổi hoặc gõ thiếu. Bạn xem sản phẩm hoặc nhắn AYOYA để được chỉ đúng chỗ.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <Link to="/san-pham" className="min-h-12 inline-flex items-center justify-center px-8 rounded-full bg-ayoya-green text-white text-sm font-bold uppercase tracking-widest">
          Xem sản phẩm
        </Link>
        <a href={CONTACT_INFO.zaloHref} target="_blank" rel="noopener noreferrer" className="min-h-12 inline-flex items-center justify-center px-8 rounded-full border border-ayoya-brown text-ayoya-brown text-sm font-bold uppercase tracking-widest">
          Nhắn Zalo
        </a>
      </div>
    </div>
  );
}
