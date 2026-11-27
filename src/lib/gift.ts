// An order with one of these herb packs gets one feng-shui turtle card, however many packs it holds.
export const GIFT_PRODUCT_IDS = ['thao-moc-xong-nha', 'la-xong-moc-an'];

export const GIFT_LINE = 'Tặng 1 thẻ rùa phong thủy';

export function hasGift(productIds: string[]): boolean {
  return productIds.some(id => GIFT_PRODUCT_IDS.includes(id));
}
