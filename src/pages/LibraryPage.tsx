import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { BOOKS, BOOK_GROUPS, READING_LIST } from '../data/books';
import { CONTACT_INFO } from '../data';
import { applySeo } from '../lib/seo';
import { LIBRARY_META } from '../lib/pageMeta';

const linkClass = 'font-semibold text-ayoya-green underline underline-offset-4';

function ReadingList() {
  return (
    <div className="mt-8 rounded-2xl bg-ayoya-white p-4 sm:p-6">
      <h3 className="text-xl font-bold">Lộ trình đọc kinh điển</h3>
      <p className="mt-2 text-sm text-ayoya-brown/75">
        Sách còn bản quyền shop không đăng, bạn tìm mua tại nhà sách để ủng hộ người dịch, người viết.
      </p>
      <div className="mt-4 grid gap-x-8 gap-y-6 md:grid-cols-2">
        {READING_LIST.map(part => (
          <div key={part.school}>
            <h4 className="mb-2 font-bold">{part.school}</h4>
            <ul className="divide-y divide-ayoya-sand text-sm">
              {part.works.map(work => (
                <li key={work.title} className="flex items-start justify-between gap-3 py-2">
                  <span>
                    <span className="font-semibold">{work.title}</span>
                    <span className="block text-ayoya-brown/70">{work.by}</span>
                  </span>
                  {work.status === 'buy' ? (
                    <span className="flex-none text-right text-ayoya-brown/70">Tìm mua tại nhà sách</span>
                  ) : work.status === 'none' ? (
                    <span className="flex-none text-right text-ayoya-brown/70">Chưa có bản tải</span>
                  ) : (
                    <Link to={`/thu-vien-sach/${work.status}`} className={`flex-none ${linkClass}`}>Tải miễn phí</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  useEffect(() => {
    applySeo(LIBRARY_META);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> /{' '}
          <Link to="/bai-viet" className="underline underline-offset-4">Cẩm Nang</Link> / Thư Viện Sách
        </p>
        <h1 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold">Thư Viện Sách</h1>
        <p className="mt-3 max-w-2xl">
          Quà đọc sách từ AYOYA: sách xưa về sử, văn học, truyện cổ và Phật giáo, tải miễn phí, không cần đăng ký.
        </p>
        <nav aria-label="Nhóm sách" className="mt-5 flex flex-wrap gap-2">
          {BOOK_GROUPS.map(group => (
            <a key={group.id} href={`#${group.id}`} className="rounded-full border border-ayoya-green px-4 py-2 text-sm font-semibold text-ayoya-green">
              {group.title}
            </a>
          ))}
        </nav>

        {BOOK_GROUPS.map(group => (
          <section key={group.id} id={group.id} className="mt-12 scroll-mt-28">
            <h2 className="text-2xl font-bold">{group.title}</h2>
            <p className="mt-1 mb-5 text-sm text-ayoya-brown/75">{group.note}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {BOOKS.filter(book => book.group === group.id).map(book => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
            {group.id === 'kinh-dien' && <ReadingList />}
          </section>
        ))}

        <p className="mt-12 border-t border-ayoya-sand pt-4 text-sm text-ayoya-brown/70">
          Sách có nút tải là sách xưa mà theo hiểu biết của shop đã hết thời hạn bảo hộ quyền tài sản. Bản scan
          được sưu tầm, giữ nguyên ghi chú của người số hóa. Nếu bạn giữ quyền với cuốn nào và muốn gỡ, xin gửi thư
          tới <a href={`mailto:${CONTACT_INFO.email}`} className={linkClass}>{CONTACT_INFO.email}</a>.
        </p>
      </div>
    </div>
  );
}
