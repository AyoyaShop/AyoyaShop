// Card-sized variant of a product image: Cloudinary by transform, local files from /products/thumbs.
export function thumb(src: string): string {
  if (src.includes('res.cloudinary.com')) return src.replace(/,w_\d+\//, ',w_480/');
  return src.replace(/^\/products\/(.+)\.(?:webp|jpe?g|png)$/, '/products/thumbs/$1.webp');
}

// Large photo for a product page: phones take an 800px copy (from /products/mid), wide screens the full file.
export function photoSrcSet(src: string): string | undefined {
  const mid = src.replace(/^\/products\/(.+)\.(?:webp|jpe?g|png)$/, '/products/mid/$1.webp');
  return mid === src ? undefined : `${mid} 800w, ${src} 1200w`;
}
