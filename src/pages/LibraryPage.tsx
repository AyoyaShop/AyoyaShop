import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

// Lower case without Vietnamese marks, so "truyen kieu" finds "Truyện Kiều".
const plain = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase();

const AUTHORS = [...new Set(BOOKS.map(book => book.author))].sort((a, b) => a.localeCompare(b, 'vi'));
const FORMATS = [...new Set(BOOKS.flatMap(book => book.files.map(file => file.format)))].sort();

const fieldClass = 'min-h-12 w-full rounded-full border border-ayoya-sand bg-ayoya-white px-4 text-base';

// The group whose heading has most recently passed under the sticky bar.
function useCurrentGroup(): string {
  const [current, setCurrent] = useState<string>(BOOK_GROUPS[0].id);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.4;
      const passed = BOOK_GROUPS.filter(group => (document.getElementById(group.id)?.getBoundingClientRect().top ?? Infinity) < line);
      // The last group can be too short to ever reach the line.
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      setCurrent((atEnd ? BOOK_GROUPS.at(-1) : passed.at(-1))?.id ?? BOOK_GROUPS[0].id);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return current;
}

export default function LibraryPage() {
  const current = useCurrentGroup();
  const [query, setQuery] = useState('');
  const [author, setAuthor] = useState('');
  const [format, setFormat] = useState('');
  const filtering = Boolean(query.trim() || author || format);
  const words = plain(query).split(/\s+/).filter(Boolean);
  const found = BOOKS.filter(book => {
    const text = plain(`${book.title} ${book.author}`);
    return (
      words.every(word => text.includes(word)) &&
      (!author || book.author === author) &&
      (!format || book.files.some(file => file.format === format))
    );
  });
  const clear = () => {
    setQuery('');
    setAuthor('');
    setFormat('');
  };
  const bar = useRef<HTMLUListElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    applySeo(LIBRARY_META);
    // A link to one group keeps its place; ScrollToHash takes the reader there.
    if (!hash) window.scrollTo(0, 0);
  }, []);

  // On a narrow screen, slide the bar sideways so the marked button stays in view.
  useEffect(() => {
    const list = bar.current;
    const button = list?.querySelector<HTMLElement>(`[data-group="${current}"]`);
    if (list && button) list.scrollTo({ left: button.offsetLeft - (list.clientWidth - button.offsetWidth) / 2, behavior: 'smooth' });
  }, [current]);

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
        <div role="search" className="mt-5 grid gap-2 sm:grid-cols-[2fr_1.4fr_1fr]">
          <input
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Tìm theo tên sách hoặc tác giả"
            aria-label="Tìm theo tên sách hoặc tác giả"
            className={fieldClass}
          />
          <select value={author} onChange={event => setAuthor(event.target.value)} aria-label="Lọc theo tác giả" className={fieldClass}>
            <option value="">Tất cả tác giả</option>
            {AUTHORS.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
          <select value={format} onChange={event => setFormat(event.target.value)} aria-label="Lọc theo định dạng" className={fieldClass}>
            <option value="">Mọi định dạng</option>
            {FORMATS.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {filtering && (
          <section aria-live="polite" className="pt-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-bold">{found.length ? `Tìm thấy ${found.length} cuốn` : 'Chưa có cuốn nào khớp'}</h2>
              <button type="button" onClick={clear} className={`cursor-pointer ${linkClass}`}>Xóa tìm kiếm</button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {found.map(book => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          </section>
        )}

        {/* Hidden rather than removed while searching, so the pre-rendered page keeps every book. */}
        <div hidden={filtering}>
        {/* Stays under the header while scrolling, so another group is always one tap away. */}
        <nav aria-label="Nhóm sách" className="sticky top-[var(--header-height)] z-30 -mx-5 mt-5 bg-ayoya-cream/95 px-5 py-2 backdrop-blur-md">
          <ul ref={bar} className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
            {BOOK_GROUPS.map(group => (
              <li key={group.id} className="flex-none">
                <a
                  href={`#${group.id}`}
                  data-group={group.id}
                  aria-current={current === group.id ? 'true' : undefined}
                  onClick={event => {
                    event.preventDefault();
                    document.getElementById(group.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`block rounded-full border border-ayoya-green px-4 py-2 text-sm font-semibold whitespace-nowrap ${
                    current === group.id ? 'bg-ayoya-green text-white' : 'text-ayoya-green'
                  }`}
                >
                  {group.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {BOOK_GROUPS.map(group => (
          <section key={group.id} id={group.id} className="scroll-mt-[calc(var(--header-height)+4rem)] pt-8">
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
        </div>

        <p className="mt-12 border-t border-ayoya-sand pt-4 text-sm text-ayoya-brown/70">
          Sách có nút tải là sách xưa mà theo hiểu biết của shop đã hết thời hạn bảo hộ quyền tài sản. Bản scan
          được sưu tầm, giữ nguyên ghi chú của người số hóa. Nếu bạn giữ quyền với cuốn nào và muốn gỡ, xin gửi thư
          tới <a href={`mailto:${CONTACT_INFO.email}`} className={linkClass}>{CONTACT_INFO.email}</a>.
        </p>
      </div>
    </div>
  );
}
