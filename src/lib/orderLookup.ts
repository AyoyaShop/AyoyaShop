import { ORDER_SHEET_URL } from '../data';

export interface TrackedOrder {
  code: string;
  date: string;
  state: string;
  tracking: string;
  items: string;
  gift: boolean;
  subtotal: number;
  shipping: number;
  total: number;
}

export type LookupResult = { kind: 'found'; order: TrackedOrder } | { kind: 'not_found' } | { kind: 'too_many' } | { kind: 'failed' };

// Asks the order sheet's script. The code and phone travel in the request body, never in the address.
export async function lookupOrder(orderCode: string, phone: string): Promise<LookupResult> {
  try {
    const response = await fetch(ORDER_SHEET_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'lookup', orderCode: orderCode.trim().toUpperCase(), phone: phone.trim() })
    });
    const result = await response.json();
    if (result?.status === 'success' && result.order) return { kind: 'found', order: result.order };
    if (result?.status === 'not_found' || result?.status === 'too_many') return { kind: result.status };
    return { kind: 'failed' };
  } catch {
    return { kind: 'failed' };
  }
}
