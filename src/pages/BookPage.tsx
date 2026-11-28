import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import BookCover from '../components/BookCover';
import { BOOKS, BOOK_GROUPS } from '../data/books';
import { bookFacts, downloadLink, isLargeFile, previewLink } from '../lib/book';
import { applySeo } from '../lib/seo';
import { bookMeta } from '../lib/pageMeta';
import NotFound from './NotFound';

const linkClass = 'font-semibold text-ayoya-green underline underline-offset-4';

export default function BookPage() {
  const { slug } = useParams();
  const book = BOOKS.find(b => b.slug === slug);

  useEffect(() => {
    if (!book) return;
    applySeo(bookMeta(book));
    window.scrollTo(0, 0);
  }, [book]);

  if (!book) return <NotFound />;

  const group = BOOK_GROUPS.find(g => g.id === book.group)!;
  // The books that follow this one in its group, wrapping round, so every book gets linked to.
  const shelf = BOOKS.filter(b => b.group === book.group);
  const at = shelf.indexOf(book);
  const more = [...shelf.slice(at + 1), ...shelf.slice(0, at)].slice(0, 4);

  return (
    <article className="px-5 pt-32 pb-20 lg:pt-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 text-sm text-ayoya-brown/70">
          <Link to="/" className="underline underline-offset-4">Trang chủ</Link> /{' '}
          <Link to="/bai-viet" className="underline underline-offset-4">Cẩm Nang</Link> /{' '}
          <Link to="/thu-vien-sach" className="underline underline-offset-4">Thư Viện Sách</Link>
        </p>
        <div className="grid gap-6 sm:grid-cols-[220px_1fr] md:grid-cols-[260px_1fr] md:gap-10">
          <div className="mx-auto w-full max-w-[260px]">
            <BookCover book={book} eager />
          </div>
          <div className="leading-relaxed">
            <h1 className="text-[clamp(1.6rem,3.2vw,2.25rem)] leading-tight font-bold">{book.title}</h1>
            <p className="mt-2 font-semibold">{book.author}</p>
            <p className="mt-1 text-sm text-ayoya-brown/70">{[book.printing, book.language].filter(Boolean).join(' · ')}</p>
            <p className="mt-4">{book.intro}</p>

            <h2 className="mt-8 mb-3 text-xl font-bold">Tải sách miễn phí</h2>
            <ul className="space-y-3">
              {book.files.map(file => (
                <li key={file.driveId} className="rounded-xl bg-ayoya-white p-3 sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <div>
                    <p className="font-semibold">{file.label}</p>
                    <p className="text-sm text-ayoya-brown/70">{bookFacts(file)}</p>
                    {isLargeFile(file) && (
                      <p className="text-sm text-ayoya-brown/70">File lớn: Google sẽ báo không quét được virus, bấm “Vẫn tải xuống” để tiếp tục.</p>
                    )}
                  </div>
                  <div className="mt-3 flex flex-none items-center gap-4 sm:mt-0">
                    <a href={downloadLink(file)} rel="nofollow noopener" className="btn" aria-label={`Tải về: ${book.title}, ${file.label}`}>
                      Tải về
                    </a>
                    {file.format === 'PDF' && (
                      <a href={previewLink(file)} target="_blank" rel="nofollow noopener noreferrer" className={linkClass}>
                        Đọc online
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Nhóm sách" className="mt-10 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold">Xem nhóm khác:</span>
          {BOOK_GROUPS.map(other => (
            <Link key={other.id} to={`/thu-vien-sach#${other.id}`} className="rounded-full border border-ayoya-green px-4 py-2 text-sm font-semibold text-ayoya-green">
              {other.title}
            </Link>
          ))}
        </nav>

        <h2 className="mt-10 mb-4 text-xl font-bold">Cùng nhóm {group.title}</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {more.map(other => (
            <BookCard key={other.slug} book={other} />
          ))}
        </div>
      </div>
    </article>
  );
}
