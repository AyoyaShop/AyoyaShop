import { getProductById } from '../data';

// How many single units each combo option holds. Options that are not a multiple of the
// single unit (a bigger grain bottle) are left out, so no saving is claimed for them.
const COMBO_UNITS: Record<string, Record<string, number>> = {
  'dau-vo': { '2 Chai 100ml': 2, 'Chai 500ml': 5 },
  'thao-moc-xong-nha': { 'Combo 3 gói': 3, '5 Gói siêu tiết kiệm': 5 },
  'la-xong-moc-an': { 'Combo 3 gói': 3, '4 Gói siêu tiết kiệm': 4 },
  'ngam-chan-moc-an': { '10 túi/bịch': 10, '15 túi/bịch': 15, 'Combo 2 bịch (30 túi)': 30 }
};

export interface Combo {
  label: string;
  price: number;
  weightGrams: number;
  units: number;
  saving: number; // against buying the same number of single units
}

// Combos of a product, smallest first, only those that really cost less than singles.
export function combosOf(productId: string): Combo[] {
  const product = getProductById(productId);
  if (!product) return [];
  return product.priceOptions
    .flatMap(option => {
      const units = COMBO_UNITS[productId]?.[option.label];
      if (!units) return [];
      const saving = product.price * units - option.price;
      return saving > 0 ? [{ ...option, units, saving }] : [];
    })
    .sort((a, b) => a.units - b.units);
}

export function comboSaving(productId: string, label: string): number {
  return combosOf(productId).find(combo => combo.label === label)?.saving ?? 0;
}
