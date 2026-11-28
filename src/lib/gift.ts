// One feng-shui turtle card per order, however many packs: any house-smoking pack earns it, body-steam
// packs only from four packs. An order with the incense kit already has its turtle inside, so none is added.
export const GIFT_LINE = 'Tặng 1 thẻ rùa phong thủy';
const MOC_AN_ID = 'la-xong-moc-an';
const MOC_AN_PACKS_FOR_TURTLE = 4;

// What the product card and the product page say about gifts.
export const GIFT_BADGE: Record<string, string> = {
  'thao-moc-xong-nha': 'Tặng thẻ rùa phong thủy',
  [MOC_AN_ID]: 'Tặng kèm trà gừng'
};

export const GIFT_NOTE: Record<string, string> = {
  'thao-moc-xong-nha': 'Đơn có món này được tặng 1 thẻ rùa phong thủy, mỗi đơn một thẻ.',
  [MOC_AN_ID]: 'Mỗi gói tặng kèm trà gừng. Mua từ 4 gói xông tắm trở lên được tặng thêm 1 thẻ rùa phong thủy, mỗi đơn một thẻ.'
};

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

export interface GiftLine {
  productId: string;
  variantLabel?: string; // "Combo 3 gói" holds three packs; a label without a number holds one
  quantity?: number;
}

export function hasGift(lines: GiftLine[]): boolean {
  if (lines.some(line => line.productId === 'tram-huong-xong-nha')) return false;
  if (lines.some(line => line.productId === 'thao-moc-xong-nha')) return true;
  const mocAnPacks = lines
    .filter(line => line.productId === MOC_AN_ID)
    .reduce((sum, line) => sum + Number(line.variantLabel?.match(/\d+/)?.[0] ?? 1) * (line.quantity ?? 1), 0);
  return mocAnPacks >= MOC_AN_PACKS_FOR_TURTLE;
}
