// Card-sized variant of a product image: Cloudinary by transform, local files from /products/thumbs.
export function thumb(src: string): string {
  if (src.includes('res.cloudinary.com')) return src.replace(/,w_\d+\//, ',w_480/');
  return src.replace(/^\/products\/(.+)\.(?:webp|jpe?g|png)$/, '/products/thumbs/$1.webp');
}
