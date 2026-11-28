// An order with one of these herb packs gets one feng-shui turtle card, however many packs it holds.
// An order with the incense kit already has its turtle inside, so none is added.
export const GIFT_PRODUCT_IDS = ['thao-moc-xong-nha', 'la-xong-moc-an'];

export const GIFT_LINE = 'Tặng 1 thẻ rùa phong thủy';

// What already comes inside a package, shown beside its price. The herb pack's items come with every
// pack bought; the turtle card, usage sheet and menu are one per order (see ORDER_INSERTS).
export const PACKAGE_EXTRAS: Record<string, string> = {
  'thao-moc-xong-nha': 'mỗi gói 1 khay nhôm, 2 viên than, nụ trầm hương và 1 Phong Long Phù',
  'tram-huong-xong-nha': '1 Linh Phù, 1 Rùa phong thủy, nụ trầm hương, 1 cây than (10 viên) và khay xông'
};

// Printed inserts that go once into an order, however many packs it holds.
export const ORDER_INSERTS: Record<string, string> = {
  'thao-moc-xong-nha': 'Mỗi đơn kèm 1 tờ hướng dẫn sử dụng và 1 menu, dù mua mấy gói.'
};

export function hasGift(productIds: string[]): boolean {
  if (productIds.includes('tram-huong-xong-nha')) return false;
  return productIds.some(id => GIFT_PRODUCT_IDS.includes(id));
}
