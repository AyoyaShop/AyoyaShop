import type { Book } from '../data/books';

// The printed cover where the scan has one; otherwise the title set as a plain cover.
export default function BookCover({ book, eager }: { book: Book; eager?: boolean }) {
  return (
    <div className="flex aspect-[2/3] w-full items-center justify-center overflow-hidden rounded-lg bg-ayoya-sand">
      {book.cover ? (
        <img
          src={book.cover.src}
          alt={`Bìa sách ${book.title}`}
          width={book.cover.width}
          height={book.cover.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-contain"
        />
      ) : (
        <div aria-hidden="true" className="m-3 flex h-[calc(100%-24px)] w-full flex-col items-center justify-center gap-3 border-2 border-ayoya-amber bg-ayoya-white px-3 text-center">
          <span className="font-serif text-lg leading-snug font-bold">{book.title}</span>
          <span className="text-xs">{book.author}</span>
        </div>
      )}
    </div>
  );
}
