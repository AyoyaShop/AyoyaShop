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
