import type { Book, BookFile } from '../data/books';

export const downloadLink = (file: BookFile) => `https://drive.google.com/uc?export=download&id=${file.driveId}`;
export const previewLink = (file: BookFile) => `https://drive.google.com/file/d/${file.driveId}/view`;

// Google asks for one more click before downloading anything it is too big to scan.
export const isLargeFile = (file: BookFile) => file.bytes > 100 * 1024 * 1024;

export function fileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return mb < 1 ? `${Math.round(bytes / 1024)} KB` : `${mb.toFixed(1).replace('.', ',')} MB`;
}

export const bookFacts = (file: BookFile) =>
  [file.format, fileSize(file.bytes), file.pages ? `${file.pages} trang` : ''].filter(Boolean).join(' · ');

export const bookPath = (book: Book) => `/thu-vien-sach/${book.slug}`;
