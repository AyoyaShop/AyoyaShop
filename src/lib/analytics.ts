import type { CartItem } from '../context/CartContext';

declare global {
  interface Window {
    // Defined by the snippet in index.html, on the live domain only.
    gtag?: (...args: unknown[]) => void;
  }
}

type GaSource = Pick<CartItem, 'productId' | 'title' | 'variantLabel' | 'unitPrice'>;

export function toGaItem(item: GaSource, quantity: number) {
  return {
    item_id: item.productId,
    item_name: item.title,
    item_variant: item.variantLabel || undefined,
    price: item.unitPrice,
    quantity
  };
}

// Never pass customer details (name, phone, address, note) in params.
export function trackShopEvent(
  event: 'view_item' | 'add_to_cart' | 'begin_checkout' | 'purchase',
  params: { value: number; items: ReturnType<typeof toGaItem>[]; transaction_id?: string; shipping?: number; coupon?: string }
) {
  window.gtag?.('event', event, { currency: 'VND', ...params });
}
