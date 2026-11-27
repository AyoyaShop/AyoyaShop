// Codes printed on the menu and the thank-you card. 20% off the order subtotal, capped at 50.000đ,
// subtotal must exceed 100.000đ. The value is the channel recorded with the order.
export const PROMO_CODES: Record<string, string> = {
  AYOYAMENU: 'Menu',
  AYOYACAMON: 'Thư cảm ơn'
};
export const PROMO_MIN_ORDER = 100000;
export const PROMO_DISCOUNT_RATE = 0.2;
export const PROMO_MAX_DISCOUNT = 50000;

export function promoDiscount(subtotal: number): number {
  return subtotal > PROMO_MIN_ORDER ? Math.min(Math.round(subtotal * PROMO_DISCOUNT_RATE), PROMO_MAX_DISCOUNT) : 0;
}

const STORAGE_KEY = 'ayoya-promo';

// A printed QR code can carry the code: ayoya.com.vn/?ma=AYOYAMENU. It is kept so the customer
// does not have to type it at checkout.
export function rememberPromoFromAddress(search: string): string | null {
  const code = new URLSearchParams(search).get('ma')?.trim().toUpperCase();
  if (!code || !PROMO_CODES[code]) return null;
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Without storage the code still has to be typed at checkout.
  }
  return code;
}

export function savedPromo(): string | null {
  try {
    const code = localStorage.getItem(STORAGE_KEY);
    return code && PROMO_CODES[code] ? code : null;
  } catch {
    return null;
  }
}

export function forgetPromo(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to forget.
  }
}
