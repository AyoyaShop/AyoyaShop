// An order with one of these herb packs gets one feng-shui turtle card, however many packs it holds.
// An order with the incense kit already has its turtle inside, so none is added.
export const GIFT_PRODUCT_IDS = ['thao-moc-xong-nha', 'la-xong-moc-an'];

export const GIFT_LINE = 'Tặng 1 thẻ rùa phong thủy';

// What already comes inside a package, shown beside its price.
export const PACKAGE_EXTRAS: Record<string, string> = {
  'tram-huong-xong-nha': '1 Linh Phù, 1 Rùa phong thủy, nụ trầm hương, 1 cây than (10 viên) và khay xông'
};

export function hasGift(productIds: string[]): boolean {
  if (productIds.includes('tram-huong-xong-nha')) return false;
  return productIds.some(id => GIFT_PRODUCT_IDS.includes(id));
}
