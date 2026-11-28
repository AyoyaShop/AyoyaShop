import { Link } from 'react-router-dom';
import type { Book } from '../data/books';
import { bookPath } from '../lib/book';
import BookCover from './BookCover';

export default function BookCard({ book }: { key?: string; book: Book }) {
  return (
    <Link to={bookPath(book)} className="card block p-3">
      <BookCover book={book} />
      <h3 className="mt-3 text-base leading-snug font-bold">{book.title}</h3>
      <p className="mt-1 text-sm text-ayoya-brown/75">{book.author}</p>
    </Link>
  );
}
