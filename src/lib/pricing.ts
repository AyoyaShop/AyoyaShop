export function calcOriginalPrice(price: number): number {
  return Math.round(price / 0.75 / 1000) * 1000;
}
