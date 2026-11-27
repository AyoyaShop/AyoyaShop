// Accepts the ways people type a Vietnamese mobile number: "0933 458 485", "+84 933.458.485".
export function normalizePhone(input: string): string {
  const digits = input.replace(/[\s.\-()]/g, '');
  return digits.replace(/^(\+84|84(?=\d{9}$))/, '0');
}

export function isValidPhone(input: string): boolean {
  return /^0\d{9}$/.test(normalizePhone(input));
}

// "AY" + Vietnam date and time + 3 random digits. The time alone repeats when two people order
// within the same minute, and the code is what a bank transfer is matched by.
export function generateOrderCode(now = new Date()): string {
  const vietnam = new Date(now.getTime() + 7 * 60 * 60 * 1000).toISOString();
  const stamp = vietnam.slice(2, 16).replace(/[-:T]/g, '');
  const random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return `AY${stamp}${random}`;
}

const PENDING_KEY = 'ayoya-order-code';

// The code is kept until an order goes through (at most an hour), so that pressing "Đặt hàng" again
// after a lost connection is recognised by the sheet instead of becoming a second order.
export function currentOrderCode(now = Date.now()): string {
  try {
    const saved = JSON.parse(localStorage.getItem(PENDING_KEY) ?? 'null');
    if (saved?.code && now - saved.at < 60 * 60 * 1000) return saved.code;
  } catch {
    // Unreadable storage: make a new code below.
  }
  const code = generateOrderCode();
  try {
    localStorage.setItem(PENDING_KEY, JSON.stringify({ code, at: now }));
  } catch {
    // Without storage the code lives only as long as this page.
  }
  return code;
}

export function forgetOrderCode(): void {
  try {
    localStorage.removeItem(PENDING_KEY);
  } catch {
    // Nothing to forget.
  }
}
