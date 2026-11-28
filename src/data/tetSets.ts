import { getProductById } from '../data';

// Gift sets made of products sold singly: a set costs exactly what its items cost.
// `option` names a pack from the product's price list; empty means the single unit.
export interface TetSet {
  id: string;
  name: string;
  note: string;
  items: { id: string; option?: string; text: string }[];
}

export const TET_SETS: TetSet[] = [
  {
    id: 'xong-nha-don-tet',
    name: 'Xông Nhà Đón Tết',
    note: 'Dọn nhà, xông nhà cuối năm',
    items: [
      { id: 'thao-moc-xong-nha', text: '1 gói thảo dược xông nhà (kèm khay, 2 viên than, nụ trầm, phù)' },
      { id: 'than-vien-xong-nha', text: '10 viên than' },
      { id: 'nuoc-lau-ban-tho', text: '1 chai nước lau bàn thờ' }
    ]
  },
  {
    id: 'ban-tho-ngay-xuan',
    name: 'Bàn Thờ Ngày Xuân',
    note: 'Sửa soạn bàn thờ đón năm mới',
    items: [
      { id: 'nhang-tram-cao-cap', text: '1 hộp nhang trầm' },
      { id: 'nu-tram-huong', text: '1 hộp nụ trầm' },
      { id: 'nuoc-lau-ban-tho', text: '1 chai nước lau bàn thờ' }
    ]
  },
  {
    id: 'bieu-cha-me',
    name: 'Biếu Cha Mẹ',
    note: 'Món quà chăm đôi chân, bờ vai',
    items: [
      { id: 'dau-vo', option: '2 Chai 100ml', text: '2 chai dầu xoa bóp 100ml' },
      { id: 'ngam-chan-moc-an', option: '10 túi/bịch', text: '10 túi thảo dược ngâm chân' }
    ]
  }
];

// The cart entries for a set, priced from the product list.
export function setCartItems(set: TetSet) {
  return set.items.flatMap(({ id, option }) => {
    const product = getProductById(id);
    if (!product) return [];
    const variants = [{ label: product.priceUnit, price: product.price, weightGrams: product.weightGrams }, ...product.priceOptions];
    const variant = variants.find(v => v.label === (option ?? product.priceUnit));
    if (!variant) throw new Error(`Tết set ${set.id}: no pack "${option}" for ${id}`);
    return [
      {
        key: `${id}::${variant.label}`,
        productId: id,
        title: product.title,
        image: product.image,
        variantLabel: variants.length > 1 ? variant.label : '',
        unitPrice: variant.price,
        weightGrams: variant.weightGrams
      }
    ];
  });
}
