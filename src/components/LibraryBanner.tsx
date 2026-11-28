import { Link } from 'react-router-dom';
import { BOOKS } from '../data/books';

// Real covers from the shelf, fanned out, so the entrance shows what is inside.
const FAN = [
  { slug: 'truyen-co-nuoc-nam', tilt: '-rotate-8 translate-y-2' },
  { slug: 'than-tien', tilt: '-rotate-3' },
  { slug: 'vuong-duong-minh', tilt: 'z-10 -translate-y-1' },
  { slug: 'phat-giao-triet-hoc', tilt: 'rotate-3' },
  { slug: 'viet-nam-phat-giao-su-luoc', tilt: 'rotate-8 translate-y-2' }
];

export default function LibraryBanner() {
  const covers = FAN.map(item => ({ ...item, book: BOOKS.find(b => b.slug === item.slug) })).filter(item => item.book?.cover);

  return (
    <Link to="/thu-vien-sach" className="card mb-8 grid items-center gap-6 overflow-hidden bg-ayoya-sand p-5 md:grid-cols-[1fr_auto] md:gap-10 md:p-8">
      <div className="order-2 text-center md:order-1 md:text-left">
        <p className="font-serif text-2xl font-bold md:text-3xl">Thư Viện Sách</p>
        <p className="mt-2 text-sm text-ayoya-brown/80 md:text-base">
          Sách chọn lọc về lịch sử, văn học, truyện cổ, Phật giáo và tinh hoa văn hóa phương Đông.
        </p>
        <span className="btn mt-4">Vào thư viện</span>
      </div>
      <div className="order-1 flex justify-center py-2 md:order-2" aria-hidden="true">
        {covers.map(({ slug, tilt, book }) => (
          <img
            key={slug}
            src={book!.cover!.src}
            alt=""
            width={book!.cover!.width}
            height={book!.cover!.height}
            loading="lazy"
            decoding="async"
            className={`-mx-2 h-32 w-auto rounded-md shadow-lg sm:h-40 ${tilt}`}
          />
        ))}
      </div>
    </Link>
  );
}
