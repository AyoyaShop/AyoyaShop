import { ALL_PRODUCTS, PRODUCT_RATINGS } from '../data';

// Things used together come first: smoke-cleansing herbs need charcoal, and so on.
const GOES_WITH: Record<string, string[]> = {
  'dau-vo': ['ngam-chan-moc-an', 'la-xong-moc-an'],
  'thao-moc-xong-nha': ['than-vien-xong-nha', 'tram-huong-xong-nha'],
  'tram-huong-xong-nha': ['than-vien-xong-nha', 'thao-moc-xong-nha'],
  'than-vien-xong-nha': ['thao-moc-xong-nha', 'tram-huong-xong-nha'],
  'nuoc-lau-ban-tho': ['nhang-tram-cao-cap', 'nu-tram-huong'],
  'nu-que': ['nu-tram-huong', 'nhang-que'],
  'nu-tram-huong': ['nu-que', 'nhang-tram-cao-cap'],
  'nhang-que': ['nhang-bo-que', 'nuoc-lau-ban-tho'],
  'nhang-bo-que': ['nhang-que', 'nuoc-lau-ban-tho'],
  'nhang-tram-cao-cap': ['nu-tram-huong', 'nuoc-lau-ban-tho'],
  'la-xong-moc-an': ['ngam-chan-moc-an', 'dau-goi-moc-an'],
  'ngam-chan-moc-an': ['dau-vo', 'la-xong-moc-an'],
  'dau-goi-moc-an': ['la-xong-moc-an', 'ngam-chan-moc-an'],
  'rua-vang-phong-thuy': ['chai-ngu-coc-phong-thuy', 'thao-moc-xong-nha'],
  'chai-ngu-coc-phong-thuy': ['rua-vang-phong-thuy', 'thao-moc-xong-nha']
};

// Paired items, then the same category, most reviewed first.
export function relatedProducts(id: string, limit = 4) {
  const current = ALL_PRODUCTS.find(p => p.id === id);
  if (!current) return [];
  const reviews = (productId: string) => PRODUCT_RATINGS[productId]?.reviewCount ?? 0;
  const paired = (GOES_WITH[id] ?? []).map(other => ALL_PRODUCTS.find(p => p.id === other));
  const sameCategory = ALL_PRODUCTS.filter(p => p.category === current.category).sort((a, b) => reviews(b.id) - reviews(a.id));
  const rest = [...ALL_PRODUCTS].sort((a, b) => reviews(b.id) - reviews(a.id));
  const picked = [...paired, ...sameCategory, ...rest].filter(p => p && p.id !== id);
  return [...new Set(picked)].slice(0, limit) as (typeof ALL_PRODUCTS)[number][];
}
