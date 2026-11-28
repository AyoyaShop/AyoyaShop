import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TetSetCards from '../components/TetSetCards';
import { applySeo } from '../lib/seo';
import { TET_META } from '../lib/pageMeta';

export default function TetSetsPage() {
  useEffect(() => {
    applySeo(TET_META);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> / Bộ quà Tết
        </p>
        <h1 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">Bộ quà Tết Đinh Mùi 2027</h1>
        <p className="mt-3 mb-8 max-w-2xl">Ba bộ ghép từ món đang bán lẻ, giá bằng tổng giá mua lẻ. Phí ship tính theo khối lượng cả bộ.</p>
        <TetSetCards headingLevel="h2" />
        <p className="mt-8">
          <Link to="/bai-viet/cach-xong-nha-cuoi-nam" className="inline-flex min-h-11 items-center font-bold text-ayoya-green underline underline-offset-4">
            Xem hướng dẫn xông nhà cuối năm từng bước
          </Link>
        </p>
      </div>
    </div>
  );
}
